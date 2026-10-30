// Profil Sainos : fenêtre de préférences (prénom, régime, foyer, code postal), stockée uniquement dans le navigateur.
(function () {
  if (window.SainosProfil) return;
  var EN = /\/en(\/|$)/.test(location.pathname) || document.documentElement.lang === 'en';
  var NB = '\u00a0';
  var TD = { en: {
    btn: 'My profile', of: 'Profile of ', hello: 'Welcome to Sainos', edit: 'My profile',
    intro: 'A few details to tailor the site to you. Everything is optional.',
    nom: 'First name or nickname', nomH: 'Just to say hello.', nomPh: 'e.g. Camille',
    reg: 'I’m', regs: [['omni', 'Omnivore'], ['veg', 'Vegetarian'], ['vegan', 'Vegan']],
    regH: 'Used for your market list and across the site: no fish if vegetarian; no fish, eggs or cheese if vegan.',
    pers: 'Around the table', persH: 'To size the quantities in your market list.', moins: 'One person less', plus: 'One person more',
    cp: 'Postcode', cpH: 'To show the markets near you straight away.', cpPh: 'e.g. 69004',
    priv: 'These details are stored only on your device. No account, nothing is sent to Sainos.',
    lang: 'Language', langH: 'Switches the whole site to this language.',
    save: 'Save', later: 'Later', cancel: 'Cancel', close: 'Close', del: 'Erase my details', saved: 'Saved'
  }, fr: {
    btn: 'Mon profil', of: 'Profil de ', hello: 'Bienvenue sur Sainos', edit: 'Mon profil',
    intro: 'Quelques infos pour adapter le site à vous. Tout est facultatif.',
    nom: 'Prénom ou pseudo', nomH: 'Pour vous dire bonjour.', nomPh: 'ex.' + NB + ': Camille',
    reg: 'Je suis', regs: [['omni', 'Omnivore'], ['veg', 'Végétarien'], ['vegan', 'Vegan']],
    regH: 'Sert à préparer votre liste du marché et à adapter le site' + NB + ': sans poisson en végétarien, sans poisson, œufs ni fromage en vegan.',
    pers: 'À table, nous sommes', persH: 'Pour calculer les quantités de votre liste du marché.', moins: 'Une personne de moins', plus: 'Une personne de plus',
    cp: 'Code postal', cpH: 'Pour afficher directement les marchés près de chez vous.', cpPh: 'ex.' + NB + ': 69004',
    priv: 'Ces informations sont stockées uniquement sur votre appareil. Pas de compte, rien n’est envoyé à Sainos.',
    lang: 'Langue', langH: 'Affiche tout le site dans cette langue.',
    save: 'Enregistrer', later: 'Plus tard', cancel: 'Annuler', close: 'Fermer', del: 'Effacer mes informations', saved: 'Enregistré'
  } };
  var PL = EN ? 'en' : 'fr', T = TD[PL];
  var KP = 'sainos-profil', KL = 'sainos-liste-v4';
  function rd(k) { try { return JSON.parse(localStorage.getItem(k) || '{}') || {}; } catch (e) { return {}; } }
  function wr(k, o) { try { localStorage.setItem(k, JSON.stringify(o)); } catch (e) {} }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function kid() { return document.documentElement.classList.contains('m-kid'); }
  function get() { var p = rd(KP), l = rd(KL); return { nom: p.nom || '', seen: !!p.seen, reg: l.vegan ? 'vegan' : l.veg ? 'veg' : 'omni', pers: l.pers || 2 }; }

  try { if (!document.getElementById('profil-css')) { var cs = document.createElement('style'); cs.id = 'profil-css'; cs.textContent = 'footer a[data-lang]{display:none!important}@media (min-width:1081px){header nav.nav>[data-nav-desk]:has(>a[data-liste-pill]){display:contents!important}header nav.nav>[data-nav-desk]>a[data-liste-pill]{order:10;margin-left:auto!important}header nav.nav>[data-search-btn]{order:11;margin-left:0!important}header nav.nav>[data-profil-btn]{order:12}html.m-kid header nav.nav>[data-search-btn]{margin-left:auto!important}header nav.nav>[data-nav-desk]:has(>a[data-liste-pill])>:not(a[data-liste-pill]){order:13}header nav.nav>[data-nav-burger]{order:14}}@media (min-width:600px) and (max-width:1080px){header nav.nav>[data-nav-desk]:has(>a[data-liste-pill]){margin-left:auto!important}header nav.nav>[data-search-btn],header nav.nav>[data-profil-btn]{order:3;margin-left:0!important}header nav.nav>[data-nav-burger]{order:4!important}}@media (min-width:1081px) and (max-width:1320px){header nav.nav{column-gap:14px!important}header nav.nav>[data-nav-desk]:not(:has(>a[data-liste-pill])){gap:18px!important;font-size:15.5px}header nav.nav>[data-nav-desk]>button{padding:6px 10px!important;font-size:13px!important}}[data-profil-dlg] button:focus-visible,[data-profil-dlg] input:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}'; document.head.appendChild(cs); } } catch (e) {}

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
    ov.querySelectorAll('[data-lang-opt]').forEach(function (b) { var on = b.getAttribute('data-lang-opt') === st.lang; b.setAttribute('aria-pressed', on); b.className = 'btn ' + (on ? 'btn-primary' : 'btn-ghost'); });
    ov.querySelector('[data-k=langbox]').style.display = langUrl() ? '' : 'none';
  }
  function build() {
    ov = document.createElement('div'); ov.setAttribute('data-profil-dlg', '1');
    ov.style.cssText = 'position:fixed;inset:0;z-index:1001;display:none;align-items:center;justify-content:center;padding:16px;background:rgba(32,30,29,.45);font-family:var(--font-body);color:var(--color-text);';
    ov.innerHTML = '<div role="dialog" aria-modal="true" aria-labelledby="pf-title" lang="' + (T === TD.en ? 'en' : 'fr') + '" style="width:100%;max-width:520px;max-height:100%;overflow:auto;box-sizing:border-box;background:var(--color-bg,#f5ead8);border-radius:28px;box-shadow:0 24px 60px rgba(0,0,0,.25);">'
      + '<div style="display:flex;align-items:flex-start;gap:12px;padding:24px 20px 4px 28px;">'
      + '<div style="flex:1;min-width:0;"><h2 id="pf-title" data-k="title" style="margin:0;font-family:var(--font-heading);font-size:30px;line-height:1.1;"></h2>'
      + '<p style="margin:8px 0 0;font-size:16px;line-height:1.5;text-wrap:pretty;">' + T.intro + '</p></div>'
      + '<button type="button" data-k="x" aria-label="' + T.close + '" style="flex:none;width:44px;height:44px;border:0;border-radius:999px;background:var(--color-accent-100);color:var(--color-text);cursor:pointer;display:grid;place-items:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>'
      + '<form novalidate style="display:flex;flex-direction:column;gap:20px;padding:16px 28px 28px;margin:0;">'
      + '<div><label for="pf-nom" style="' + lbl + '">' + T.nom + '</label><input id="pf-nom" type="text" autocomplete="given-name" maxlength="40" placeholder="' + T.nomPh + '" style="' + inp + '"><p style="' + help + '">' + T.nomH + '</p></div>'
      + '<div role="group" aria-labelledby="pf-reg"><span id="pf-reg" style="' + lbl + '">' + T.reg + '</span><div style="display:flex;flex-wrap:wrap;gap:4px;background:#fff;border-radius:999px;padding:4px;width:fit-content;max-width:100%;box-sizing:border-box;">'
      + T.regs.map(function (r) { return '<button type="button" data-reg="' + r[0] + '" style="min-height:44px;padding:8px 18px;font-size:16px;white-space:nowrap;">' + r[1] + '</button>'; }).join('')
      + '</div><p style="' + help + '">' + T.regH + '</p></div>'
      + '<div role="group" aria-labelledby="pf-lang" data-k="langbox"><span id="pf-lang" style="' + lbl + '">' + T.lang + '</span><div style="display:flex;flex-wrap:wrap;gap:4px;background:#fff;border-radius:999px;padding:4px;width:fit-content;max-width:100%;box-sizing:border-box;">'
      + '<button type="button" data-lang-opt="fr" lang="fr" style="min-height:44px;padding:8px 18px;font-size:16px;white-space:nowrap;">Français</button><button type="button" data-lang-opt="en" lang="en" style="min-height:44px;padding:8px 18px;font-size:16px;white-space:nowrap;">English</button>'
      + '</div><p style="' + help + '">' + T.langH + '</p></div>'
      + '<p style="display:flex;gap:10px;align-items:flex-start;margin:0;padding:14px 16px;border-radius:18px;background:var(--color-accent-2-100);color:var(--color-accent-2-900);font-size:14px;line-height:1.45;text-wrap:pretty;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex:none;margin-top:1px;"><rect x="4" y="11" width="16" height="10" rx="3"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg><span>' + T.priv + '</span></p>'
      + '<button type="button" data-k="del" style="align-self:flex-start;min-height:44px;margin:-8px 0 0;padding:8px 0;border:0;background:none;font:inherit;font-size:14px;font-weight:700;color:var(--color-accent-800);text-decoration:underline;cursor:pointer;">' + T.del + '</button>'
      + '<div data-k="foot" style="position:sticky;bottom:0;z-index:2;display:flex;flex-wrap:nowrap;align-items:center;gap:8px;margin:-8px -28px -28px;padding:12px 20px 14px;background:var(--color-bg,#f5ead8);border-top:1px solid var(--color-neutral-200,rgba(140,73,26,.14));box-shadow:0 -10px 24px -14px rgba(60,40,20,.35);border-radius:0 0 28px 28px;"><button type="submit" class="btn btn-primary" style="flex:1 1 auto;min-height:48px;padding:12px 22px;font-size:16px;white-space:nowrap;">' + T.save + '</button><button type="button" data-k="later" class="btn btn-ghost" style="flex:none;min-height:48px;padding:12px 18px;font-size:16px;white-space:nowrap;"></button>'
      + '</div>'
      + '</form></div>';
    document.body.appendChild(ov);
    var f = ov.querySelector('form');
    ov.addEventListener('click', function (e) {
      if (e.target === ov) return close();
      var b = e.target.closest('button'); if (!b) return;
      var r = b.getAttribute('data-reg'), k = b.getAttribute('data-k');
      var lg = b.getAttribute('data-lang-opt');
      if (lg) { if (lg !== st.lang) { st.lang = lg; st.nom = ov.querySelector('#pf-nom').value; T = TD[lg]; ov.remove(); ov = null; build(); fill(); paint(); ov.style.display = 'flex'; ov.querySelector('[data-lang-opt="' + lg + '"]').focus(); } }
      else if (r) { st.reg = r; paint(); }
      else if (k === 'moins') { st.pers = Math.max(1, st.pers - 1); paint(); }
      else if (k === 'plus') { st.pers = Math.min(12, st.pers + 1); paint(); }
      else if (k === 'x' || k === 'later') close();
      else if (k === 'del') { try { localStorage.setItem(KP, JSON.stringify({ seen: 1 })); } catch (e2) {} var keep = st.lang; st = get(); st.lang = keep; fill(); paint(); apply(); refresh(); }
    });
    f.addEventListener('submit', function (e) { e.preventDefault(); st.nom = ov.querySelector('#pf-nom').value.trim(); save(); try { localStorage.setItem('sainos-lang', st.lang); } catch (e3) {} var go = st.lang !== PL && langUrl(); close(); if (go) location.href = go; });
    ov.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key !== 'Tab') return;
      var fo = Array.prototype.filter.call(ov.querySelectorAll('button,input'), function (x) { return !x.disabled && x.offsetParent; });
      var a = fo[0], z = fo[fo.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    });
  }
  function langUrl() { var a = document.querySelector('footer a[data-lang]') || document.querySelector('a[data-lang]'); return a ? a.href : ''; }
  function fill() { ov.querySelector('#pf-nom').value = st.nom; }
  function apply() { var h = document.documentElement.classList, s = get(); h.toggle('m-veg', s.reg !== 'omni'); h.toggle('m-vegan', s.reg === 'vegan'); }
  function save() {
    wr(KP, { nom: st.nom, seen: 1 });
    var l = rd(KL); if ((l.pers || 2) !== st.pers) l.auto = true; l.pers = st.pers; l.veg = st.reg !== 'omni'; l.vegan = st.reg === 'vegan'; wr(KL, l);
    apply(); refresh();
  }
  function refresh() { mount(true); try { window.dispatchEvent(new CustomEvent('sainos-profil', { detail: get() })); } catch (e) {} }
  function open() {
    if (!ov) build();
    st = get(); st.lang = EN ? 'en' : 'fr'; fill(); paint();
    lastFocus = document.activeElement; ov.style.display = 'flex'; document.documentElement.style.overflow = 'hidden';
    setTimeout(function () { ov.querySelector('#pf-nom').focus(); }, 0);
  }
  function close() {
    if (!ov || ov.style.display === 'none') return;
    if (!st.seen) { var p = rd(KP); p.seen = 1; wr(KP, p); st.seen = true; }
    ov.style.display = 'none'; document.documentElement.style.overflow = '';
    if (T !== TD[PL]) { T = TD[PL]; ov.remove(); ov = null; }
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  // --- Profil enfant (séparé) ---
  var KK = 'sainos-profil-enfant';
  var AV = ['🍓', '🥕', '🍎', '🍐', '🍇', '🥦', '🍅', '🌽', '🍄', '🎃', '🥝', '🍒'];
  var TK = { en: { btn: 'My kid profile', of: 'Profile of ', hi: 'Hi ', ex: '!', hello: 'Hi there!', intro: 'Pick a name and your favourite fruit or veg. It stays on this device.', nom: 'Your name or nickname', nomPh: 'e.g. Léo', av: 'Your mascot', badges: function (n, t) { return 'You have ' + n + ' badge' + (n > 1 ? 's' : '') + ' out of ' + t + '. Keep exploring to collect them all!'; }, save: 'Save', cancel: 'Cancel', close: 'Close', del: 'Erase my profile' },
    fr: { btn: 'Mon profil enfant', of: 'Profil de ', hi: 'Bonjour ', ex: NB + '!', hello: 'Salut' + NB + '!', intro: 'Choisis ton prénom et ton fruit ou légume préféré. Tout reste sur cet appareil.', nom: 'Ton prénom ou pseudo', nomPh: 'ex.' + NB + ': Léo', av: 'Ta mascotte', badges: function (n, t) { return 'Tu as ' + n + ' badge' + (n > 1 ? 's' : '') + ' sur ' + t + '. Continue d’explorer pour tous les gagner' + NB + '!'; }, save: 'Enregistrer', cancel: 'Annuler', close: 'Fermer', del: 'Effacer mon profil' } };
  var KT = TK[PL], ovK, stK;
  function getK() { var k = rd(KK); return { nom: k.nom || '', av: k.av || '' }; }
  function nbBadges() { try { return (JSON.parse(localStorage.getItem('sainos-badges') || '[]') || []).length; } catch (e) { return 0; } }
  function nbTotal() { return window.SAISON && window.SAISON.produits ? window.SAISON.produits.length : 44; }
  function paintK() {
    ovK.querySelector('[data-k=title]').textContent = stK.nom ? KT.hi + stK.nom + KT.ex : KT.hello;
    ovK.querySelectorAll('[data-av]').forEach(function (b) { var on = b.getAttribute('data-av') === stK.av; b.setAttribute('aria-pressed', on); b.style.background = on ? 'var(--color-accent-200)' : '#fff'; b.style.borderColor = on ? 'var(--color-accent-600)' : 'transparent'; });
    ovK.querySelector('[data-k=badges]').textContent = KT.badges(nbBadges(), nbTotal());
  }
  function buildK() {
    ovK = document.createElement('div'); ovK.setAttribute('data-profil-dlg', '1');
    ovK.style.cssText = 'position:fixed;inset:0;z-index:1001;display:none;align-items:center;justify-content:center;padding:16px;background:rgba(32,30,29,.45);font-family:var(--font-body);color:var(--color-text);';
    ovK.innerHTML = '<div role="dialog" aria-modal="true" aria-labelledby="pk-title" style="width:100%;max-width:480px;max-height:100%;overflow:auto;box-sizing:border-box;background:var(--color-bg,#f5ead8);border-radius:28px;box-shadow:0 24px 60px rgba(0,0,0,.25);">'
      + '<div style="display:flex;align-items:flex-start;gap:12px;padding:24px 20px 4px 28px;"><div style="flex:1;min-width:0;"><h2 id="pk-title" data-k="title" style="margin:0;font-family:var(--font-heading);font-size:30px;line-height:1.1;"></h2>'
      + '<p style="margin:8px 0 0;font-size:17px;line-height:1.5;text-wrap:pretty;">' + KT.intro + '</p></div>'
      + '<button type="button" data-k="x" aria-label="' + KT.close + '" style="flex:none;width:44px;height:44px;border:0;border-radius:999px;background:var(--color-accent-100);color:var(--color-text);cursor:pointer;display:grid;place-items:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>'
      + '<form novalidate style="display:flex;flex-direction:column;gap:20px;padding:16px 28px 28px;margin:0;">'
      + '<div><label for="pk-nom" style="' + lbl + 'font-size:17px;">' + KT.nom + '</label><input id="pk-nom" type="text" autocomplete="off" maxlength="20" placeholder="' + KT.nomPh + '" style="' + inp + 'font-size:17px;"></div>'
      + '<div role="group" aria-labelledby="pk-av"><span id="pk-av" style="' + lbl + 'font-size:17px;">' + KT.av + '</span><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(56px,1fr));gap:8px;">'
      + AV.map(function (a) { return '<button type="button" data-av="' + a + '" style="height:56px;border:3px solid transparent;border-radius:50%;background:#fff;font-size:30px;line-height:1;cursor:pointer;padding:0;">' + a + '</button>'; }).join('')
      + '</div></div>'
      + '<p data-k="badges" style="margin:0;padding:14px 16px;border-radius:18px;background:var(--color-accent-2-100);color:var(--color-accent-2-900);font-size:16px;font-weight:700;line-height:1.45;text-wrap:pretty;"></p>'
      + '<button type="button" data-k="del" style="align-self:flex-start;min-height:44px;margin:-8px 0 0;padding:8px 0;border:0;background:none;font:inherit;font-size:15px;font-weight:700;color:var(--color-accent-800);text-decoration:underline;cursor:pointer;">' + KT.del + '</button>'
      + '<div style="display:flex;align-items:center;gap:8px;"><button type="submit" class="btn btn-primary" style="flex:1 1 auto;min-height:48px;padding:12px 22px;font-size:17px;">' + KT.save + '</button><button type="button" data-k="later" class="btn btn-ghost" style="flex:none;min-height:48px;padding:12px 18px;font-size:17px;">' + KT.cancel + '</button></div>'
      + '</form></div>';
    document.body.appendChild(ovK);
    ovK.addEventListener('click', function (e) {
      if (e.target === ovK) return closeK();
      var b = e.target.closest('button'); if (!b) return;
      var a = b.getAttribute('data-av'), k = b.getAttribute('data-k');
      if (a) { stK.av = stK.av === a ? '' : a; paintK(); }
      else if (k === 'x' || k === 'later') closeK();
      else if (k === 'del') { try { localStorage.removeItem(KK); } catch (e2) {} stK = getK(); ovK.querySelector('#pk-nom').value = ''; paintK(); refresh(); }
    });
    ovK.querySelector('form').addEventListener('submit', function (e) { e.preventDefault(); stK.nom = ovK.querySelector('#pk-nom').value.trim(); wr(KK, stK); refresh(); closeK(); });
    ovK.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.preventDefault(); closeK(); return; }
      if (e.key !== 'Tab') return;
      var fo = Array.prototype.filter.call(ovK.querySelectorAll('button,input'), function (x) { return !x.disabled && x.offsetParent; });
      var f0 = fo[0], z = fo[fo.length - 1];
      if (e.shiftKey && document.activeElement === f0) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); f0.focus(); }
    });
  }
  function openK() {
    if (!ovK) buildK();
    stK = getK(); ovK.querySelector('#pk-nom').value = stK.nom; paintK();
    lastFocus = document.activeElement; ovK.style.display = 'flex'; document.documentElement.style.overflow = 'hidden';
    setTimeout(function () { ovK.querySelector('#pk-nom').focus(); }, 0);
  }
  function closeK() { if (!ovK || ovK.style.display === 'none') return; ovK.style.display = 'none'; document.documentElement.style.overflow = ''; if (lastFocus && lastFocus.focus) lastFocus.focus(); }

  function face(b) {
    if (kid()) {
      var k = getK(), ki = k.nom ? k.nom.trim().charAt(0).toUpperCase() : '';
      b.setAttribute('aria-label', k.nom ? KT.of + k.nom : KT.btn); b.title = k.nom ? KT.of + k.nom : KT.btn;
      b.innerHTML = k.av ? '<span aria-hidden="true" style="width:34px;height:34px;border-radius:50%;background:var(--color-accent-200);display:grid;place-items:center;font-size:21px;line-height:1;">' + k.av + '</span>'
        : ki ? '<span aria-hidden="true" style="width:32px;height:32px;border-radius:50%;background:var(--color-accent-200);color:var(--color-accent-900);display:grid;place-items:center;font-family:var(--font-heading);font-size:17px;line-height:1;">' + esc(ki) + '</span>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>';
      b.setAttribute('data-face', 'k'); return;
    }
    b.setAttribute('data-face', 'a');
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
    if (b) { if (force || b.getAttribute('data-face') !== (kid() ? 'k' : 'a')) face(b); place(nav, s, b); return; }
    biblio();
    if (!s) return;
    b = document.createElement('button'); b.type = 'button'; b.setAttribute('data-profil-btn', '1');
    b.style.cssText = 'flex:none;width:44px;height:44px;border:0;border-radius:999px;background:transparent;color:var(--color-text);cursor:pointer;display:grid;place-items:center;padding:0;margin-left:0;';
    b.onmouseenter = function () { b.style.background = 'var(--color-accent-100)'; }; b.onmouseleave = function () { b.style.background = 'transparent'; };
    face(b); b.addEventListener('click', function () { if (kid()) openK(); else open(); });
    place(nav, s, b);
  }
  function place(nav, s, b) { if (s && b.previousElementSibling !== s) s.parentNode.insertBefore(b, s.nextSibling); }
  function biblio() {
    if (EN) return;
    var base = (document.querySelector('header [data-nav-mar]') || {}).getAttribute ? document.querySelector('header [data-nav-mar]') : null;
    if (!base || base.parentNode.querySelector('[data-nav-biblio]')) return;
    var x = document.createElement('a'); x.href = base.getAttribute('href').replace('marches.html', 'bibliotheque.html'); x.textContent = 'Bibliothèque'; x.setAttribute('data-nav-biblio', '1');
    base.parentNode.appendChild(x);
  }
  function marches() {}
  window.SainosProfil = { open: open, get: get };
  var q = 0; function sched() { if (!q) { q = 1; requestAnimationFrame(function () { q = 0; mount(); }); } }
  function start() {
    mount(); window.addEventListener('resize', sched); new MutationObserver(sched).observe(document.body, { childList: true, subtree: true });
    new MutationObserver(sched).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    if (/marches\.html$/.test(location.pathname)) { if (document.readyState === 'complete') marches(); else window.addEventListener('load', marches); }
    if (!get().seen) setTimeout(function () {
      if (get().seen || kid() || document.querySelector('[role=dialog][aria-modal=true]:not([data-profil-dlg] *)') && Array.prototype.some.call(document.querySelectorAll('[role=dialog][aria-modal=true]'), function (d) { return d.offsetParent && !d.closest('[data-profil-dlg]'); })) return;
      open();
    }, 4000);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
