// Bjutiful Kaos: small enhancements. The page is complete without this file.

// Price table for "Odaberi svog psa". EUR; null = not confirmed yet; [od, do] for a range.
// ponytail: owner fills these on Thursday; categories in the HTML must match the keys.
const PRICES = {
  mali:    { kratka: null, duga: null, kovrcava: null },
  srednji: { kratka: null, duga: null, kovrcava: null },
  veliki:  { kratka: null, duga: null, kovrcava: null },
};

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const EASE = 'cubic-bezier(.16, 1, .3, 1)';

// --- Ink splash (phase 4): seeded so every splash differs but stays the same between visits.
const rng = s => () => (s = (s * 16807) % 2147483647) / 2147483647;
function blob(r, R, n) {
  const pts = Array.from({ length: n }, (_, i) => {
    const a = i / n * Math.PI * 2, k = r() < .28 ? 1.5 + r() * .6 : .8 + r() * .28;
    return [Math.cos(a) * R * k, Math.sin(a) * R * k];
  });
  const mid = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2], f = v => v.toFixed(1);
  let d = `M${mid(pts[n - 1], pts[0]).map(f)}`;
  pts.forEach((p, i) => { const m = mid(p, pts[(i + 1) % n]); d += `Q${f(p[0])},${f(p[1])} ${f(m[0])},${f(m[1])}`; });
  return d + 'Z';
}
function drawSplash(svg, seed) {
  const r = rng(seed), C = ['var(--teal)', 'var(--yellow)', 'var(--orange)', 'var(--red)'];
  let out = `<path class="blob" d="${blob(r, 17, 24)}" fill="var(--ink)"/>`;
  for (let i = 0; i < 6; i++) {
    const a = r() * 6.28, d = 26 + r() * 8, x = (Math.cos(a) * d).toFixed(1), y = (Math.sin(a) * d).toFixed(1);
    out += `<circle class="drop" data-x="${x}" data-y="${y}" cx="${x}" cy="${y}" r="${(1 + r() * 2).toFixed(1)}" fill="var(--ink)"/>`;
  }
  [[-8, -5], [-2, -10], [5, -9], [9, -3]].forEach(([x, y], i) => out += `<ellipse class="pad" cx="${x}" cy="${y}" rx="2.6" ry="3.4" fill="${C[i]}"/>`);
  svg.innerHTML = out + '<path class="pad" d="M-6,6 Q0,-2 6,6 Q8,11 0,10 Q-8,11 -6,6Z" fill="var(--grey)"/>';
}
// Focal moment (phase 6, B): ink lands, droplets fly out, paw pads stamp in. Once per splash.
function splat(svg) {
  if (reduced) return svg.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200 });
  svg.querySelector('.blob').animate([{ transform: 'scale(.15)', opacity: 0 }, { transform: 'scale(1.06)', opacity: 1, offset: .55 }, { transform: 'scale(1)' }], { duration: 560, easing: EASE, fill: 'backwards' });
  svg.querySelectorAll('.drop').forEach((d, i) => d.animate([{ transform: `translate(${-d.dataset.x}px,${-d.dataset.y}px) scale(.3)`, opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 520, delay: 90 + i * 25, easing: EASE, fill: 'backwards' }));
  svg.querySelectorAll('.pad').forEach((p, i) => p.animate([{ transform: 'scale(0)' }, { transform: 'scale(1)' }], { duration: 260, delay: 330 + i * 70, easing: EASE, fill: 'backwards' }));
}
document.querySelectorAll('[data-splash]').forEach((svg, k) => drawSplash(svg, 7 + k * 97));

// Gallery reveal: top to bottom, once.
function revealGallery(list) {
  [...list.children].forEach((c, i) => c.animate(reduced ? [{ opacity: 0 }, { opacity: 1 }] : [{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0 0)' }],
    { duration: reduced ? 250 : 620, delay: Math.min(i * 70, 350), easing: EASE, fill: 'backwards' }));
}
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    e.target.matches('[data-splash]') ? splat(e.target) : revealGallery(e.target);
  }), { threshold: .4 });
  document.querySelectorAll('[data-splash], .gal').forEach(el => io.observe(el));

  // Call button arrives once the hero call actions scroll away.
  const fab = document.querySelector('.fab'), heroCta = document.querySelector('.hero .actions');
  if (fab && heroCta) new IntersectionObserver(([e]) => fab.classList.toggle('out', e.isIntersecting)).observe(heroCta);
}

// --- Language pill: slide the indicator, then follow the link.
document.querySelectorAll('.lang').forEach(nav => {
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', e => {
    if (a.hasAttribute('aria-current') || reduced || e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    nav.querySelectorAll('a').forEach(x => x.toggleAttribute('aria-current', x === a));
    setTimeout(() => { location.href = a.href; }, 240);
  }));
});

// --- Price picker
const calc = document.querySelector('.calc');
if (calc) calc.addEventListener('change', () => {
  const size = calc.querySelector('[name=size]:checked'), coat = calc.querySelector('[name=coat]:checked');
  if (!size || !coat) return;
  const res = calc.querySelector('.result'), p = PRICES[size.value]?.[coat.value];
  res.querySelector('.what').textContent = `${size.dataset.label}, ${coat.dataset.label}`;
  res.querySelector('.amt').textContent = p == null ? '— €' : Array.isArray(p) ? `${p[0]}–${p[1]} €` : `${p} €`;
});

// --- Before / after slider
document.querySelectorAll('.ba input').forEach(i => i.addEventListener('input', () => i.parentElement.style.setProperty('--x', i.value + '%')));
