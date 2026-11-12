// Local dev server: static files + PUT into img/ (used by faze/_slike-alat.html to save baked photos).
const http = require('http'), fs = require('fs'), path = require('path');
const root = process.cwd();
const types = { '.html': 'text/html; charset=utf-8', '.webp': 'image/webp', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2', '.json': 'application/json' };

http.createServer((q, r) => {
  const u = decodeURIComponent(q.url.split('?')[0]);
  const fp = path.join(root, u.endsWith('/') ? u + 'index.html' : u);
  if (!fp.startsWith(root)) return r.writeHead(403).end();
  if (q.method === 'PUT') {
    if (!fp.startsWith(path.join(root, 'img') + path.sep)) return r.writeHead(403).end('img/ only');
    const chunks = [];
    q.on('data', c => chunks.push(c)).on('end', () => fs.writeFile(fp, Buffer.concat(chunks), e => r.writeHead(e ? 500 : 201).end(e ? String(e) : 'ok')));
    return;
  }
  fs.readFile(fp, (e, d) => e ? r.writeHead(404).end('404') : r.writeHead(200, { 'Content-Type': types[path.extname(fp)] || 'application/octet-stream' }).end(d));
}).listen(5173);
