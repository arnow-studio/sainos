// Recherche globale Sainos : bouton loupe dans l'en-tête + fenêtre de recherche (fruits, légumes, herbes, fromages, pages).
(function () {
  if (window.__sainosSearch) return; window.__sainosSearch = 1;
  var me = document.currentScript, BASE = me ? me.src.replace(/recherche\.js.*$/, '') : '/';
  var EN = /\/en(\/|$)/.test(location.pathname) || document.documentElement.lang === 'en';
  var T = EN ? { btn: 'Search', ph: 'Search a fruit, vegetable, cheese…', none: 'No results for', hint: 'Type at least 2 letters', close: 'Close', fruit: 'Fruit', legume: 'Vegetable', herbe: 'Herb', fromage: 'Cheese', page: 'Page', fleur: 'Flower', fleurc: 'Edible flower', arom: 'Herb' }
             : { btn: 'Rechercher', ph: 'Chercher un fruit, un légume, un fromage…', none: 'Aucun résultat pour', hint: 'Tapez au moins 2 lettres', close: 'Fermer', fruit: 'Fruit', legume: 'Légume', herbe: 'Herbe', fromage: 'Fromage', page: 'Page', fleur: 'Fleur', fleurc: 'Fleur comestible', arom: 'Aromatique' };
  var PAGES = EN ? [['The Garden', 'saisons.html'], ['The Flower Garden', 'jardin.html'], ['Choosing well', 'origines.html'], ['The Cheese', 'fromages.html', 1], ['Origins map', 'origines.html'], ['Markets', 'marches.html'], ['Organic', 'bio.html'], ['Glossary', 'lexique.html'], ['Quiz', 'quiz.html'], ['For teachers', 'enseignants.html'], ['How it grows', 'pousse.html'], ['About', 'apropos.html']]
                 : [['Le Potager', 'saisons.html'], ['Le Jardin', 'jardin.html'], ['Bien choisir', 'origines.html'], ['La Fromagerie', 'fromages.html', 1], ['Carte des origines', 'origines.html'], ['Marchés', 'marches.html'], ['Bio', 'bio.html'], ['Lexique', 'lexique.html'], ['Quiz', 'quiz.html'], ['En classe', 'enseignants.html'], ['Ça pousse !', 'pousse.html'], ['À propos', 'apropos.html']];
  var ROOT = BASE + (EN ? 'en/' : '');
  function norm(s) { return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[’'\-]/g, ' '); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function load(src, test) { return new Promise(function (ok) { if (test()) return ok(); var s = document.createElement('script'); s.src = src; s.onload = s.onerror = function () { ok(); }; document.head.appendChild(s); }); }
  var idx = null;
  function build() {
    if (idx) return Promise.resolve(idx);
    return Promise.all([load(ROOT + 'produits-data.js', function () { return window.SAISON && window.SAISON.produits; }), load(BASE + 'fromages-data.js', function () { return window.FROMAGES; }), load(BASE + 'jardin-data.js', function () { return window.JARDIN; })]).then(function () {
      idx = [];
      ((window.SAISON && window.SAISON.produits) || []).forEach(function (p) { idx.push({ n: p.n, k: norm(p.n + ' ' + (p.fam || '')), t: T[p.t] || T.legume, u: ROOT + 'produits/' + p.s + '.html', img: p.img ? BASE + 'images/' + p.s + '.webp' : '', e: p.e }); });
      ((window.FROMAGES && window.FROMAGES.fromages) || []).forEach(function (f) { var r = EN && f.en ? f.en.r : f.r; idx.push({ n: f.n, k: norm(f.n + ' ' + r + ' ' + f.lait + ' ' + f.fam), t: T.fromage, sub: r, u: ROOT + 'fromages/' + f.s + '.html', img: BASE + 'images/fromages/' + f.s + '.webp', cheese: 1 }); });
      ((window.JARDIN && window.JARDIN.plantes) || []).forEach(function (p) { if (p.fiche) return; var n = EN ? p.en : p.n; idx.push({ n: n, k: norm(n + ' ' + (EN ? p.n : p.en)), t: p.c[0] === 'c' ? T.fleurc : p.c[0] === 'a' ? T.arom : T.fleur, u: ROOT + 'jardin/' + p.s + '.html', img: BASE + 'images/jardin/' + p.s + '.webp', e: p.e }); });
      PAGES.forEach(function (p) { idx.push({ n: p[0], k: norm(p[0]), t: T.page, u: ROOT + p[1], page: 1, cheese: p[2] }); });
      return idx;
    });
  }
  var ov, inp, list, sel = 0, hits = [], lastFocus;
  function kid() { return document.documentElement.classList.contains('m-kid'); }
  function search(q) {
    var n = norm(q).trim(); if (n.length < 2) { hits = []; return render(q); }
    var words = n.split(/\s+/);
    hits = idx.filter(function (x) { return !(x.cheese && kid()) && words.every(function (w) { return x.k.indexOf(w) >= 0; }); })
      .map(function (x) { var nn = norm(x.n); return { x: x, s: (nn.indexOf(n) === 0 ? 0 : nn.indexOf(n) > 0 ? 1 : 2) + (x.page ? 0.5 : 0) }; })
      .sort(function (a, b) { return a.s - b.s || a.x.n.localeCompare(b.x.n); }).slice(0, 12).map(function (h) { return h.x; });
    sel = 0; render(q);
  }
  function render(q) {
    if (!hits.length) { list.innerHTML = '<li style="padding:18px 8px;color:var(--color-neutral-800,#555);font-size:16px;">' + (norm(q).trim().length < 2 ? T.hint : T.none + ' « ' + esc(q) + ' »') + '</li>'; return; }
    list.innerHTML = hits.map(function (h, i) {
      var pic = h.img ? '<img src="' + h.img + '" alt="" width="44" height="44" loading="lazy" style="width:44px;height:44px;object-fit:contain;display:block;">' : '<span aria-hidden="true" style="font-size:26px;">' + (h.e || '→') + '</span>';
      return '<li role="option" id="srch-' + i + '" aria-selected="' + (i === sel) + '"><a href="' + h.u + '" data-i="' + i + '" style="display:flex;align-items:center;gap:14px;padding:10px 12px;border-radius:16px;text-decoration:none;color:var(--color-text);background:' + (i === sel ? 'var(--color-accent-100)' : 'transparent') + ';">'
        + '<span style="flex:none;width:52px;height:52px;border-radius:50%;background:#fff;display:grid;place-items:center;">' + pic + '</span>'
        + '<span style="flex:1;min-width:0;display:flex;flex-direction:column;gap:2px;"><span style="font-weight:800;font-size:17px;">' + esc(h.n) + '</span>' + (h.sub ? '<span style="font-size:14px;color:var(--color-neutral-800,#555);">' + esc(h.sub) + '</span>' : '') + '</span>'
        + '<span style="flex:none;font-size:13px;font-weight:700;padding:4px 10px;border-radius:999px;background:var(--color-accent-2-100,#eef);color:var(--color-accent-2-800,#333);">' + h.t + '</span></a></li>';
    }).join('');
  }
  function move(d) { if (!hits.length) return; sel = (sel + d + hits.length) % hits.length; render(inp.value); var el = document.getElementById('srch-' + sel); if (el) { var top = el.offsetTop, b = top + el.offsetHeight; if (top < list.scrollTop) list.scrollTop = top; else if (b > list.scrollTop + list.clientHeight) list.scrollTop = b - list.clientHeight; } inp.setAttribute('aria-activedescendant', 'srch-' + sel); }
  function open() {
    if (!ov) {
      ov = document.createElement('div'); ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-label', T.btn);
      ov.style.cssText = 'position:fixed;inset:0;z-index:9998;display:flex;justify-content:center;align-items:flex-start;padding:clamp(16px,8vh,96px) 16px 16px;background:rgba(32,30,29,.45);';
      ov.innerHTML = '<div style="width:100%;max-width:640px;max-height:100%;display:flex;flex-direction:column;background:var(--color-bg,#fbf8f2);border-radius:24px;box-shadow:0 24px 60px rgba(0,0,0,.25);overflow:hidden;font-family:var(--font-body);">'
        + '<div style="display:flex;align-items:center;gap:10px;padding:14px 14px 14px 20px;border-bottom:2px solid var(--color-accent-200);background:#fff;">'
        + '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-700)" stroke-width="2.75" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>'
        + '<input type="search" autocomplete="off" spellcheck="false" role="combobox" aria-expanded="true" aria-controls="srch-list" aria-label="' + T.btn + '" placeholder="' + T.ph + '" style="flex:1;min-width:0;border:0;outline:0;background:transparent;font:inherit;font-size:19px;padding:10px 0;color:var(--color-text);">'
        + '<button type="button" aria-label="' + T.close + '" style="flex:none;width:44px;height:44px;border:0;border-radius:999px;background:var(--color-accent-100);color:var(--color-text);cursor:pointer;display:grid;place-items:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>'
        + '<ul id="srch-list" role="listbox" style="list-style:none;margin:0;padding:10px;overflow:auto;display:flex;flex-direction:column;gap:2px;"></ul></div>';
      document.body.appendChild(ov);
      inp = ov.querySelector('input'); list = ov.querySelector('ul');
      ov.addEventListener('click', function (e) { if (e.target === ov || e.target.closest('button')) close(); });
      inp.addEventListener('input', function () { build().then(function () { search(inp.value); }); });
      inp.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') { e.preventDefault(); move(1); } else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
        else if (e.key === 'Enter' && hits[sel]) { e.preventDefault(); location.href = hits[sel].u; }
      });
      list.addEventListener('mousemove', function (e) { var a = e.target.closest('a[data-i]'); if (a && +a.dataset.i !== sel) { sel = +a.dataset.i; render(inp.value); } });
    }
    lastFocus = document.activeElement; ov.style.display = 'flex'; document.documentElement.style.overflow = 'hidden';
    inp.value = ''; hits = []; render(''); build(); setTimeout(function () { inp.focus(); }, 0);
  }
  function close() { if (!ov) return; ov.style.display = 'none'; document.documentElement.style.overflow = ''; if (lastFocus && lastFocus.focus) lastFocus.focus(); }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && ov && ov.style.display !== 'none') { close(); return; }
    var tag = (e.target.tagName || '').toLowerCase();
    if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && tag !== 'input' && tag !== 'textarea' && !e.target.isContentEditable)) { e.preventDefault(); open(); }
  });
  function mount() {
    var nav = document.querySelector('header nav.nav'); if (!nav || nav.querySelector('[data-search-btn]')) return;
    var b = document.createElement('button'); b.type = 'button'; b.setAttribute('data-search-btn', '1'); b.setAttribute('aria-label', T.btn); b.title = T.btn + ' (/)';
    b.style.cssText = 'flex:none;width:44px;height:44px;border:0;border-radius:999px;background:transparent;color:var(--color-text);cursor:pointer;display:grid;place-items:center;';
    b.onmouseenter = function () { b.style.background = 'var(--color-accent-100)'; }; b.onmouseleave = function () { b.style.background = 'transparent'; };
    b.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>';
    b.addEventListener('click', open);
    var burger = nav.querySelector('[data-nav-burger]');
    if (burger) { nav.insertBefore(b, burger); b.style.marginLeft = 'auto'; burger.style.marginLeft = '0'; } else { nav.appendChild(b); b.style.marginLeft = 'auto'; }
  }
  var q = 0; function sched() { if (!q) { q = 1; requestAnimationFrame(function () { q = 0; mount(); }); } }
  function start() { mount(); new MutationObserver(sched).observe(document.body, { childList: true, subtree: true }); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
