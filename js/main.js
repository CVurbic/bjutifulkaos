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

// --- Background splats (phase 9): a blobby body, arms of three kinds (fat lobe, finger, long runner with a heavy
// drop) and flung droplets. Blur + alpha threshold melts the circles into one liquid shape, like real ink.
function splatSvg(seed, fill) {
  const r = rng(seed), f = v => v.toFixed(1), P = (a, d) => [Math.cos(a) * d, Math.sin(a) * d];
  const dot = (x, y, R) => `<circle cx="${f(x)}" cy="${f(y)}" r="${f(R)}"/>`;
  let goo = `<ellipse rx="${f(30 + r() * 6)}" ry="${f(24 + r() * 6)}" transform="rotate(${f(r() * 180)})"/>`, drops = '';
  for (let i = 0; i < 6; i++) goo += dot(...P(r() * 6.28, 12 + r() * 12), 17 + r() * 10);
  const n = 9 + Math.floor(r() * 4);
  for (let i = 0; i < n; i++) {
    const a = (i + (r() - .5) * .8) / n * 6.28, kind = r() < .3 ? 0 : r() < .55 ? 1 : 2;
    const L = [38 + r() * 8, 52 + r() * 14, 72 + r() * 26][kind], wb = [13, 10, 9][kind] + r() * 4;
    const wn = [6, 3.4, 2.5][kind] + r() * 1.4, rb = [9, 7, 7.5][kind] + r() * 4.5;
    const [bx, by] = P(a, 22), [tx, ty] = P(a + (r() - .5) * .34, L);
    const bend = (r() - .5) * L * .5, cx = (bx + tx) / 2 + Math.cos(a + 1.57) * bend, cy = (by + ty) / 2 + Math.sin(a + 1.57) * bend;
    for (let k = 0; k <= 16; k++) { // thick at the body, pinched in the neck, swelling into a teardrop
      const t = k / 16, u = 1 - t;
      goo += dot(u * u * bx + 2 * u * t * cx + t * t * tx, u * u * by + 2 * u * t * cy + t * t * ty, wn + (wb - wn) * u * u * u + (rb - wn) * Math.exp(-(((t - .93) / .13) ** 2)));
    }
    if (kind && r() < .55) drops += dot(...P(a + (r() - .5) * .25, Math.min(104, L + rb + 5 + r() * 14)), 1.5 + r() * 3.2);
  }
  for (let i = 0; i < 3; i++) drops += dot(...P(r() * 6.28, 62 + r() * 40), 1.2 + r() * 2.2);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-112 -112 224 224"><filter id="g" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3.2"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 24 -10"/></filter><g fill="${fill}" opacity=".07"><g filter="url(#g)">${goo}</g>${drops}</g></svg>`;
}
// Size and position live in css ([data-blot]); ink on Kamen, Kamen on ink.
document.querySelectorAll('[data-blot]').forEach(s =>
  s.style.backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(splatSvg(+s.dataset.blot, s.matches('.dark') ? '#f1efec' : '#231f20'))}")`);

// Gallery reveal: top to bottom, once. Built paused, so photos hold the hidden first frame
// until the gallery scrolls in (otherwise they show, vanish, then wipe in).
function galleryReveal(list) {
  return [...list.children].map((c, i) => {
    const a = c.animate(reduced ? [{ opacity: 0 }, { opacity: 1 }] : [{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0 0)' }],
      { duration: reduced ? 250 : 620, delay: Math.min(i * 70, 350), easing: EASE, fill: 'backwards' });
    a.pause();
    return a;
  });
}
if ('IntersectionObserver' in window) {
  const reveals = new Map([...document.querySelectorAll('.gal')].map(g => [g, galleryReveal(g)]));
  // Splash waits for 40% (it is small); the gallery is tall, so it starts at 15%.
  const io = new IntersectionObserver(es => es.forEach(e => {
    const gal = reveals.get(e.target);
    if (e.intersectionRatio < (gal ? .15 : .4)) return;
    io.unobserve(e.target);
    gal ? gal.forEach(a => a.play()) : splat(e.target);
  }), { threshold: [.15, .4] });
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

// --- Dog picker: the chosen thumbnail becomes the "after" photo in the slider.
// ponytail: "before" stays one placeholder; when the owner sends pairs, add data-before to each input and swap it here.
document.querySelectorAll('.dogs').forEach(d => d.addEventListener('change', e => {
  const t = e.target.nextElementSibling, after = document.querySelector('.ba .after');
  after.srcset = t.srcset; after.src = t.src.replace('-480', '-960'); after.alt = t.alt;
}));

// --- Before / after slider
document.querySelectorAll('.ba input').forEach(i => i.addEventListener('input', () => i.parentElement.style.setProperty('--x', i.value + '%')));
