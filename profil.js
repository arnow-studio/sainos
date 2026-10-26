// Profil Sainos : fenêtre de préférences (prénom, régime, foyer, code postal), stockée uniquement dans le navigateur.
(function () {
  if (window.SainosProfil) return;
  var EN = /\/en(\/|$)/.test(location.pathname) || document.documentElement.lang === 'en';
  var NB = '\u00a0';
  var T = EN ? {
    btn: 'My profile', of: 'Profile of ', hello: 'Welcome to Sainos', edit: 'My profile',
    intro: 'A few details to tailor the site to you. Everything is optional.',
    nom: 'First name or nickname', nomH: 'Just to say hello.', nomPh: 'e.g. Camille',
    reg: 'I’m', regs: [['omni', 'Omnivore'], ['veg', 'Vegetarian'], ['vegan', 'Vegan']],
    regH: 'Used for your market list and across the site: no fish if vegetarian; no fish, eggs or cheese if vegan.',
    pers: 'Around the table', persH: 'To size the quantities in your market list.', moins: 'One person less', plus: 'One person more',
    cp: 'Postcode', cpH: 'To show the markets near you straight away.', cpPh: 'e.g. 69004',
    priv: 'These details are stored only on your device. No account, nothing is sent to Sainos.',
    save: 'Save', later: 'Later', cancel: 'Cancel', close: 'Close', del: 'Erase my details', saved: 'Saved'
  } : {
    btn: 'Mon profil', of: 'Profil de ', hello: 'Bienvenue sur Sainos', edit: 'Mon profil',
    intro: 'Quelques infos pour adapter le site à vous. Tout est facultatif.',
    nom: 'Prénom ou pseudo', nomH: 'Pour vous dire bonjour.', nomPh: 'ex.' + NB + ': Camille',
    reg: 'Je suis', regs: [['omni', 'Omnivore'], ['veg', 'Végétarien'], ['vegan', 'Vegan']],
    regH: 'Sert à préparer votre liste du marché et à adapter le site' + NB + ': sans poisson en végétarien, sans poisson, œufs ni fromage en vegan.',
    pers: 'À table, nous sommes', persH: 'Pour calculer les quantités de votre liste du marché.', moins: 'Une personne de moins', plus: 'Une personne de plus',
    cp: 'Code postal', cpH: 'Pour afficher directement les marchés près de chez vous.', cpPh: 'ex.' + NB + ': 69004',
    priv: 'Ces informations sont stockées uniquement sur votre appareil. Pas de compte, rien n’est envoyé à Sainos.',
    save: 'Enregistrer', later: 'Plus tard', cancel: 'Annuler', close: 'Fermer', del: 'Effacer mes informations', saved: 'Enregistré'
  };
  var KP = 'sainos-profil', KL = 'sainos-liste-v4';
  function rd(k) { try { return JSON.parse(localStorage.getItem(k) || '{}') || {}; } catch (e) { return {}; } }
  function wr(k, o) { try { localStorage.setItem(k, JSON.stringify(o)); } catch (e) {} }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function kid() { return document.documentElement.classList.contains('m-kid'); }
  function get() { var p = rd(KP), l = rd(KL); return { nom: p.nom || '', cp: p.cp || '', seen: !!p.seen, reg: l.vegan ? 'vegan' : l.veg ? 'veg' : 'omni', pers: l.pers || 2 }; }

  try { if (!document.getElementById('profil-css')) { var cs = document.createElement('style'); cs.id = 'profil-css'; cs.textContent = 'html.m-kid [data-profil-btn]{display:none!important}@media (min-width:1081px){header nav.nav>[data-nav-desk]:has(>a[data-liste-pill]){display:contents!important}header nav.nav>[data-nav-desk]>a[data-liste-pill]{order:10;margin-left:auto!important}header nav.nav>[data-search-btn]{order:11;margin-left:0!important}header nav.nav>[data-profil-btn]{order:12}html.m-kid header nav.nav>[data-search-btn]{margin-left:auto!important}header nav.nav>[data-nav-desk]:has(>a[data-liste-pill])>:not(a[data-liste-pill]){order:13}header nav.nav>[data-nav-burger]{order:14}}@media (min-width:600px) and (max-width:1080px){header nav.nav>[data-nav-desk]:has(>a[data-liste-pill]){margin-left:auto!important}header nav.nav>[data-search-btn],header nav.nav>[data-profil-btn]{order:3;margin-left:0!important}header nav.nav>[data-nav-burger]{order:4!important}}[data-profil-dlg] button:focus-visible,[data-profil-dlg] input:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}'; document.head.appendChild(cs); } } catch (e) {}

  var ov, st, lastFocus;
  var FS = 'font:inherit;font-size:16px;';
  var lbl = 'display:block;font-weight:800;font-size:16px;margin:0 0 4px;';
  var help = 'margin:4px 0 0;font-size:14px;line-height:1.45;color:var(--color-neutral-800);text-wrap:pretty;';
  var inp = FS + 'width:100%;box-sizing:border-box;min-height:48px;padding:10px 18px;border:2px solid var(--color-accent-200);border-radius:999px;background:#fff;color:var(--color-text);';
  var rnd = 'flex:none;width:44px;height:44px;border:0;border-radius:50%;background:var(--color-accent-100);color:var(--color-accent-800);font:inherit;font-size:22px;font-weight:800;cursor:pointer;';

  function paint() {
    var first = !st.seen;
    ov.querySelector('[data-k=title]').textContent = first ? T.hello : (st.nom ? T.of + st.nom : T.edit);
    ov.querySelector('[data-k=later]').textContent = first ? T.later : T.cancel;
    ov.querySelector('[data-k=del]').style.display = first ? 'none' : '';
    ov.querySelectorAll('[data-reg]').forEach(function (b) { var on = b.getAttribute('data-reg') === st.reg; b.setAttribute('aria-pressed', on); b.className = 'btn ' + (on ? 'btn-primary' : 'btn-ghost'); });
    ov.querySelector('[data-k=pers]').textContent = st.pers;
    ov.querySelector('[data-k=moins]').disabled = st.pers <= 1; ov.querySelector('[data-k=plus]').disabled = st.pers >= 12;
  }
  function build() {
    ov = document.createElement('div'); ov.setAttribute('data-profil-dlg', '1');
    ov.style.cssText = 'position:fixed;inset:0;z-index:1001;display:none;align-items:center;justify-content:center;padding:16px;background:rgba(32,30,29,.45);font-family:var(--font-body);color:var(--color-text);';
    ov.innerHTML = '<div role="dialog" aria-modal="true" aria-labelledby="pf-title" style="width:100%;max-width:520px;max-height:100%;overflow:auto;box-sizing:border-box;background:var(--color-bg,#f5ead8);border-radius:28px;box-shadow:0 24px 60px rgba(0,0,0,.25);">'
      + '<div style="display:flex;align-items:flex-start;gap:12px;padding:24px 20px 4px 28px;">'
      + '<div style="flex:1;min-width:0;"><h2 id="pf-title" data-k="title" style="margin:0;font-family:var(--font-heading);font-size:30px;line-height:1.1;"></h2>'
      + '<p style="margin:8px 0 0;font-size:16px;line-height:1.5;text-wrap:pretty;">' + T.intro + '</p></div>'
      + '<button type="button" data-k="x" aria-label="' + T.close + '" style="flex:none;width:44px;height:44px;border:0;border-radius:999px;background:var(--color-accent-100);color:var(--color-text);cursor:pointer;display:grid;place-items:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>'
      + '<form novalidate style="display:flex;flex-direction:column;gap:20px;padding:16px 28px 28px;margin:0;">'
      + '<div><label for="pf-nom" style="' + lbl + '">' + T.nom + '</label><input id="pf-nom" type="text" autocomplete="given-name" maxlength="40" placeholder="' + T.nomPh + '" style="' + inp + '"><p style="' + help + '">' + T.nomH + '</p></div>'
      + '<div role="group" aria-labelledby="pf-reg"><span id="pf-reg" style="' + lbl + '">' + T.reg + '</span><div style="display:flex;flex-wrap:wrap;gap:4px;background:#fff;border-radius:999px;padding:4px;width:fit-content;max-width:100%;box-sizing:border-box;">'
      + T.regs.map(function (r) { return '<button type="button" data-reg="' + r[0] + '" style="min-height:44px;padding:8px 18px;font-size:16px;white-space:nowrap;">' + r[1] + '</button>'; }).join('')
      + '</div><p style="' + help + '">' + T.regH + '</p></div>'
      + '<div role="group" aria-labelledby="pf-pers"><span id="pf-pers" style="' + lbl + '">' + T.pers + '</span><div style="display:flex;align-items:center;gap:8px;background:#fff;border-radius:999px;padding:4px;width:fit-content;">'
      + '<button type="button" data-k="moins" aria-label="' + T.moins + '" style="' + rnd + '">−</button><output data-k="pers" aria-live="polite" style="min-width:36px;text-align:center;font-family:var(--font-heading);font-size:24px;"></output><button type="button" data-k="plus" aria-label="' + T.plus + '" style="' + rnd + '">+</button>'
      + '</div><p style="' + help + '">' + T.persH + '</p></div>'
      + '<div><label for="pf-cp" style="' + lbl + '">' + T.cp + '</label><input id="pf-cp" type="text" inputmode="numeric" autocomplete="postal-code" maxlength="5" placeholder="' + T.cpPh + '" style="' + inp + 'max-width:200px;"><p style="' + help + '">' + T.cpH + '</p></div>'
      + '<p style="display:flex;gap:10px;align-items:flex-start;margin:0;padding:14px 16px;border-radius:18px;background:var(--color-accent-2-100);color:var(--color-accent-2-900);font-size:14px;line-height:1.45;text-wrap:pretty;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex:none;margin-top:1px;"><rect x="4" y="11" width="16" height="10" rx="3"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg><span>' + T.priv + '</span></p>'
      + '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px;"><button type="submit" class="btn btn-primary" style="min-height:48px;padding:12px 26px;font-size:16px;">' + T.save + '</button><button type="button" data-k="later" class="btn btn-ghost" style="min-height:48px;padding:12px 20px;font-size:16px;"></button>'
      + '<button type="button" data-k="del" style="margin-left:auto;min-height:44px;padding:8px 4px;border:0;background:none;font:inherit;font-size:14px;font-weight:700;color:var(--color-accent-800);text-decoration:underline;cursor:pointer;">' + T.del + '</button></div>'
      + '</form></div>';
    document.body.appendChild(ov);
    var f = ov.querySelector('form');
    ov.addEventListener('click', function (e) {
      if (e.target === ov) return close();
      var b = e.target.closest('button'); if (!b) return;
      var r = b.getAttribute('data-reg'), k = b.getAttribute('data-k');
      if (r) { st.reg = r; paint(); }
      else if (k === 'moins') { st.pers = Math.max(1, st.pers - 1); paint(); }
      else if (k === 'plus') { st.pers = Math.min(12, st.pers + 1); paint(); }
      else if (k === 'x' || k === 'later') close();
      else if (k === 'del') { try { localStorage.setItem(KP, JSON.stringify({ seen: 1 })); } catch (e2) {} st = get(); fill(); paint(); apply(); refresh(); }
    });
    ov.querySelector('#pf-cp').addEventListener('input', function (e) { e.target.value = e.target.value.replace(/\D/g, '').slice(0, 5); });
    f.addEventListener('submit', function (e) { e.preventDefault(); st.nom = ov.querySelector('#pf-nom').value.trim(); st.cp = ov.querySelector('#pf-cp').value.trim(); save(); close(); });
    ov.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key !== 'Tab') return;
      var fo = Array.prototype.filter.call(ov.querySelectorAll('button,input'), function (x) { return !x.disabled && x.offsetParent; });
      var a = fo[0], z = fo[fo.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    });
  }
  function fill() { ov.querySelector('#pf-nom').value = st.nom; ov.querySelector('#pf-cp').value = st.cp; }
  function apply() { var h = document.documentElement.classList, s = get(); h.toggle('m-veg', s.reg !== 'omni'); h.toggle('m-vegan', s.reg === 'vegan'); }
  function save() {
    wr(KP, { nom: st.nom, cp: st.cp, seen: 1 });
    var l = rd(KL); if ((l.pers || 2) !== st.pers) l.auto = true; l.pers = st.pers; l.veg = st.reg !== 'omni'; l.vegan = st.reg === 'vegan'; wr(KL, l);
    apply(); refresh();
  }
  function refresh() { mount(true); try { window.dispatchEvent(new CustomEvent('sainos-profil', { detail: get() })); } catch (e) {} }
  function open() {
    if (!ov) build();
    st = get(); fill(); paint();
    lastFocus = document.activeElement; ov.style.display = 'flex'; document.documentElement.style.overflow = 'hidden';
    setTimeout(function () { ov.querySelector('#pf-nom').focus(); }, 0);
  }
  function close() {
    if (!ov || ov.style.display === 'none') return;
    if (!st.seen) { var p = rd(KP); p.seen = 1; wr(KP, p); st.seen = true; }
    ov.style.display = 'none'; document.documentElement.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function face(b) {
    var n = get().nom, ini = n ? n.trim().charAt(0).toUpperCase() : '';
    b.setAttribute('aria-label', n ? T.of + n : T.btn); b.title = n ? T.of + n : T.btn;
    b.innerHTML = ini
      ? '<span aria-hidden="true" style="width:32px;height:32px;border-radius:50%;background:var(--color-accent-2-200);color:var(--color-accent-2-900);display:grid;place-items:center;font-family:var(--font-heading);font-size:17px;line-height:1;">' + esc(ini) + '</span>'
      : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>';
  }
  function mount(force) {
    var nav = document.querySelector('header nav.nav'); if (!nav) return;
    var b = nav.querySelector('[data-profil-btn]');
    var s = nav.querySelector('[data-search-btn]');
    if (b) { if (force) face(b); place(nav, s, b); return; }
    if (!s) return;
    b = document.createElement('button'); b.type = 'button'; b.setAttribute('data-profil-btn', '1');
    b.style.cssText = 'flex:none;width:44px;height:44px;border:0;border-radius:999px;background:transparent;color:var(--color-text);cursor:pointer;display:grid;place-items:center;padding:0;margin-left:0;';
    b.onmouseenter = function () { b.style.background = 'var(--color-accent-100)'; }; b.onmouseleave = function () { b.style.background = 'transparent'; };
    face(b); b.addEventListener('click', open);
    place(nav, s, b);
  }
  function place(nav, s, b) { if (s && b.previousElementSibling !== s) s.parentNode.insertBefore(b, s.nextSibling); }
  function marches() {
    var f = document.getElementById('cp-form'), i = document.getElementById('cp'), cp = get().cp;
    if (!f || !i || !cp || i.value) return;
    i.value = cp; setTimeout(function () { if (f.requestSubmit) f.requestSubmit(); else f.dispatchEvent(new Event('submit', { cancelable: true })); }, 300);
  }
  window.SainosProfil = { open: open, get: get };
  var q = 0; function sched() { if (!q) { q = 1; requestAnimationFrame(function () { q = 0; mount(); }); } }
  function start() {
    mount(); window.addEventListener('resize', sched); new MutationObserver(sched).observe(document.body, { childList: true, subtree: true });
    if (/marches\.html$/.test(location.pathname)) { if (document.readyState === 'complete') marches(); else window.addEventListener('load', marches); }
    if (!get().seen) setTimeout(function () {
      if (get().seen || kid() || document.querySelector('[role=dialog][aria-modal=true]:not([data-profil-dlg] *)') && Array.prototype.some.call(document.querySelectorAll('[role=dialog][aria-modal=true]'), function (d) { return d.offsetParent && !d.closest('[data-profil-dlg]'); })) return;
      open();
    }, 4000);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
