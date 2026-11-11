// Profil Sainos : fenêtre de préférences (prénom, régime, foyer, code postal), stockée uniquement dans le navigateur.
(function () {
  if (window.SainosProfil) return;
  var JA = /\/ja(\/|$)/.test(location.pathname) || document.documentElement.lang === 'ja';
  var EN = !JA && (/\/en(\/|$)/.test(location.pathname) || document.documentElement.lang === 'en');
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
  }, ja: {
    btn: 'マイプロフィール', of: 'プロフィール：', hello: 'Sainosへようこそ', edit: 'マイプロフィール',
    intro: 'サイトをあなた向けにするための、いくつかの情報です。すべて任意です。',
    nom: '名前またはニックネーム', nomH: 'ごあいさつのためだけに使います。', nomPh: '例：さくら',
    reg: '食事スタイル', regs: [['omni', '制限なし'], ['veg', 'ベジタリアン'], ['vegan', 'ヴィーガン']],
    regH: 'マルシェのお買い物リストやサイト全体で使います。ベジタリアンなら魚なし、ヴィーガンなら魚・卵・チーズなしになります。',
    pers: '食卓を囲む人数', persH: 'お買い物リストの分量を計算するために使います。', moins: '1人減らす', plus: '1人増やす',
    cp: '郵便番号（フランス）', cpH: '近くのマルシェをすぐに表示するために使います。', cpPh: '例：69004',
    priv: 'これらの情報はお使いの端末にだけ保存されます。アカウントは不要で、Sainosには何も送信されません。',
    lang: '言語', langH: 'サイト全体をこの言語で表示します。',
    save: '保存する', later: 'あとで', cancel: 'キャンセル', close: '閉じる', del: '情報を消去する', saved: '保存しました'
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
  var PL = JA ? 'ja' : EN ? 'en' : 'fr', T = TD[PL];
  var KP = 'sainos-profil', KL = 'sainos-liste-v4';
  function rd(k) { try { return JSON.parse(localStorage.getItem(k) || '{}') || {}; } catch (e) { return {}; } }
  function wr(k, o) { try { localStorage.setItem(k, JSON.stringify(o)); } catch (e) {} }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function kid() { return document.documentElement.classList.contains('m-kid'); }
  function get() { var p = rd(KP), l = rd(KL); return { nom: p.nom || '', seen: !!p.seen, reg: l.vegan ? 'vegan' : l.veg ? 'veg' : 'omni', pers: l.pers || 2 }; }

  try { if (/(^|\/)(origines|bio|lexique|pousse|jouer|quiz|jeux|badges|apropos)(\.html)?\/?$/.test(location.pathname)) document.documentElement.classList.add('p-notom'); } catch (e) {}
  try { if (/(^|\/)recettes\.html$/.test(location.pathname) && localStorage.getItem('sainos-mode') === 'enfant') location.replace('index.html'); } catch (e) {}
  try { if (!document.getElementById('profil-css')) { var cs = document.createElement('style'); cs.id = 'profil-css'; cs.textContent = '[data-bien-choisir]>div,[data-sous-jouer]>p{flex-wrap:nowrap!important;max-width:100%;box-sizing:border-box;overflow-x:auto;scrollbar-width:none}[data-bien-choisir]>div>*,[data-sous-jardin]>p>*,[data-sous-jouer]>p>*,[data-sous-apropos]>div>*{display:flex!important;align-items:center!important}[data-bien-choisir]>div>*{flex:none}[data-sous-apropos]>div{flex-wrap:nowrap!important;max-width:100%;box-sizing:border-box}@media (max-width:760px){[data-sous-apropos]>div{gap:2px!important;padding:4px!important;align-self:stretch!important}[data-sous-apropos]>div>*{flex:1 1 auto;justify-content:center;padding:0 10px!important;font-size:15px!important;white-space:nowrap}}@media (max-width:760px){[data-sous-jardin]>p:last-child{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr));overflow:visible!important;align-self:stretch!important;border-radius:24px!important;gap:2px!important;padding:4px!important}[data-sous-jardin]>p:last-child:has(>span[aria-current][data-kid-label]){grid-template-columns:repeat(2,minmax(0,1fr))}[data-sous-jardin]>p:last-child>*{justify-content:center;padding:0 6px!important;font-size:15px!important;min-width:0}}@media (max-width:760px){[data-bien-choisir]>div{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr));overflow:visible!important;align-self:stretch!important;border-radius:24px!important}[data-bien-choisir]>div>*{justify-content:center;padding:0 6px!important;font-size:15px!important;min-width:0}}html:not(.m-kid) [data-nav-badges]{display:none!important}html.m-kid a[data-nav-lex][href$="lexique.html"]{display:revert!important}html.m-kid [data-bien-choisir] a[data-nav-lex][href$="lexique.html"]{display:flex!important;align-items:center!important}html.m-kid a[href$="recettes.html"],html.m-kid [data-nav-jardin]:has(> a[href$="apropos.html"]) > [data-nav-jardin-panel],html.m-kid [data-sous-apropos],html.m-kid [data-nav-rec],html.m-kid [data-nav-biblio],html.m-kid a[href$="bibliotheque.html"],html.m-kid section[aria-labelledby="h-recettes"],html.m-kid aside:has(a[href$="recettes.html"]){display:none!important}footer a[data-lang]{display:none!important}@media (min-width:1081px){header nav.nav>[data-nav-desk]:has(>a[data-liste-pill]){display:contents!important}header nav.nav>[data-nav-desk]>a[data-liste-pill]{order:10;margin-left:auto!important}header nav.nav>[data-search-btn]{order:11;margin-left:0!important}header nav.nav>[data-profil-btn]{order:12}html.m-kid header nav.nav>[data-search-btn]{margin-left:auto!important}header nav.nav>[data-nav-desk]:has(>a[data-liste-pill])>:not(a[data-liste-pill]){order:13}header nav.nav>[data-nav-burger]{order:14}}@media (min-width:600px) and (max-width:1080px){header nav.nav>[data-nav-desk]:has(>a[data-liste-pill]){margin-left:auto!important}header nav.nav>[data-search-btn],header nav.nav>[data-profil-btn]{order:3;margin-left:0!important}header nav.nav>[data-nav-burger]{order:4!important}}@media (min-width:1081px) and (max-width:1320px){header nav.nav{column-gap:14px!important}header nav.nav>[data-nav-desk]:not(:has(>a[data-liste-pill])){gap:18px!important;font-size:15.5px}header nav.nav>[data-nav-desk]>button{padding:6px 10px!important;font-size:13px!important}}@media (max-width:1080px){header nav.nav .nav-brand img{width:auto!important;height:auto!important;max-height:48px!important}}@media (max-width:600px){header nav.nav .nav-brand img{max-height:38px!important}}@media (min-width:600px) and (max-width:1080px){html.m-kid header nav.nav>[data-nav-desk]{display:none!important}html.m-kid header nav.nav>[data-search-btn]{order:3!important;margin-left:auto!important}html.m-kid header nav.nav>[data-profil-btn]{order:3!important;margin-left:0!important}html.m-kid header nav.nav>[data-nav-burger]{order:4!important;margin-left:0!important}}@media (max-width:760px){[data-tom-hero]{width:100%!important;max-width:420px;margin:0 auto!important}main figure[data-tom-hero] img[src*="tom/"]:not([src*="histoire/"]){border-radius:26px 20px 28px 18px / 22px 28px 18px 26px!important}section[aria-labelledby="h-journee"]>div:first-child>img{width:min(64vw,240px)!important;height:auto!important;aspect-ratio:1;margin:0 auto}html.p-notom main img[src*="tom/"],section[aria-labelledby="h-oups"]>img[src*="tom/"]{display:none!important}}[data-profil-dlg] button:focus-visible,[data-profil-dlg] input:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}'; document.head.appendChild(cs); } } catch (e) {}

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
    ov.innerHTML = '<div role="dialog" aria-modal="true" aria-labelledby="pf-title" lang="' + (T === TD.ja ? 'ja' : T === TD.en ? 'en' : 'fr') + '" style="width:100%;max-width:520px;max-height:100%;overflow:auto;box-sizing:border-box;background:var(--color-bg,#f5ead8);border-radius:28px;box-shadow:0 24px 60px rgba(0,0,0,.25);">'
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
      + '<button type="button" data-lang-opt="fr" lang="fr" style="min-height:44px;padding:8px 18px;font-size:16px;white-space:nowrap;">Français</button><button type="button" data-lang-opt="en" lang="en" style="min-height:44px;padding:8px 18px;font-size:16px;white-space:nowrap;">English</button><button type="button" data-lang-opt="ja" lang="ja" style="min-height:44px;padding:8px 18px;font-size:16px;white-space:nowrap;">日本語</button>'
      + '</div><p style="' + help + '">' + T.langH + '</p></div>'
      + '<p style="display:flex;gap:10px;align-items:flex-start;margin:0;padding:14px 16px;border-radius:18px;background:var(--color-accent-2-100);color:var(--color-accent-2-900);font-size:14px;line-height:1.45;text-wrap:pretty;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex:none;margin-top:1px;"><rect x="4" y="11" width="16" height="10" rx="3"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg><span>' + T.priv + '</span></p>'
      + '<a data-k="album" href="' + albumHref() + '" class="btn btn-secondary" style="align-self:flex-start;margin-top:-8px;padding:10px 18px;font-size:16px;">' + KT.album + '</a>'
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
    f.addEventListener('submit', function (e) { e.preventDefault(); st.nom = ov.querySelector('#pf-nom').value.trim(); save(); try { localStorage.setItem('sainos-lang', st.lang); } catch (e3) {} var go = st.lang !== PL && langUrl(st.lang); close(); if (go) location.href = go; });
    ov.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key !== 'Tab') return;
      var fo = Array.prototype.filter.call(ov.querySelectorAll('button,input'), function (x) { return !x.disabled && x.offsetParent; });
      var a = fo[0], z = fo[fo.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    });
  }
  function langUrl(l) { var q = l ? 'a[data-lang="' + l + '"][hreflang]' : 'a[data-lang][hreflang]'; var a = document.querySelector('footer ' + q) || document.querySelector(q); return a ? a.href : ''; }
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
    st = get(); st.lang = PL; fill(); paint();
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
  var TK = { en: { btn: 'My kid profile', of: 'Profile of ', hi: 'Hi ', ex: '!', hello: 'Hi there!', intro: 'Pick a name and your favourite fruit or veg. It stays on this device.', nom: 'Your name or nickname', nomPh: 'e.g. Léo', av: 'Your mascot', age: 'How old are you?', ages: [['🐣', 'Ages 4-6'], ['🌱', 'Ages 7-9'], ['🌳', 'Ages 10-12'], ['🏅', 'Ages 13+']], ageHint: 'Your quizzes will match your age.', badges: function (n, t) { return 'You have ' + n + ' badge' + (n > 1 ? 's' : '') + ' out of ' + t + '. Keep exploring to collect them all!'; }, save: 'Save', cancel: 'Cancel', close: 'Close', del: 'Erase my profile', album: '🏅 See my badge album', lang: 'Your language' },
    fr: { btn: 'Mon profil enfant', of: 'Profil de ', hi: 'Bonjour ', ex: NB + '!', hello: 'Salut' + NB + '!', intro: 'Choisis ton prénom et ton fruit ou légume préféré. Tout reste sur cet appareil.', nom: 'Ton prénom ou pseudo', nomPh: 'ex.' + NB + ': Léo', av: 'Ta mascotte', age: 'Quel âge as-tu' + NB + '?', ages: [['🐣', '4-6 ans'], ['🌱', '7-9 ans'], ['🌳', '10-12 ans'], ['🏅', '13 ans et +']], ageHint: 'Tes quiz seront adaptés à ton âge.', badges: function (n, t) { return 'Tu as ' + n + ' badge' + (n > 1 ? 's' : '') + ' sur ' + t + '. Continue d’explorer pour tous les gagner' + NB + '!'; }, save: 'Enregistrer', cancel: 'Annuler', close: 'Fermer', del: 'Effacer mon profil', album: '🏅 Voir mon album de badges', lang: 'Ta langue' },
    ja: { btn: 'こどもプロフィール', of: 'プロフィール：', hi: 'こんにちは、', ex: '！', hello: 'やあ！', intro: 'なまえと、すきな果物や野菜をえらんでね。このきかいの中だけにのこるよ。', nom: 'きみのなまえ（ニックネームでもOK）', nomPh: '例：ゆうと', av: 'きみのマスコット', age: 'きみはなんさい？', ages: [['🐣', '4〜6さい'], ['🌱', '7〜9さい'], ['🌳', '10〜12さい'], ['🏅', '中学生']], ageHint: 'クイズがきみの年れいにあわせて出るよ。', badges: function (n, t) { return 'バッジを' + t + 'こ中' + n + 'こ持ってるよ。ぜんぶ集めよう！'; }, save: 'ほぞんする', cancel: 'キャンセル', close: 'とじる', del: 'プロフィールをけす', album: '🏅 バッジアルバムを見る', lang: 'ことば' } };
  var KT = TK[PL], ovK, stK;
  function getK() { var k = rd(KK), qa = ''; try { qa = localStorage.getItem('sainos-quiz-age') || ''; } catch (e) {} return { nom: k.nom || '', av: k.av || '', age: qa || k.age || '' }; }
  function albumHref() { var q = document.querySelector('a[href$="quiz.html"]'); return q ? q.getAttribute('href').replace(/quiz\.html$/, 'badges.html') : 'badges.html'; }
  function nbBadges() { try { return (JSON.parse(localStorage.getItem('sainos-badges') || '[]') || []).length; } catch (e) { return 0; } }
  function nbTotal() { return window.SAISON && window.SAISON.produits ? window.SAISON.produits.length : 44; }
  function paintK() {
    ovK.querySelector('[data-k=title]').textContent = stK.nom ? KT.hi + stK.nom + KT.ex : KT.hello;
    ovK.querySelectorAll('[data-av]').forEach(function (b) { var on = b.getAttribute('data-av') === stK.av; b.setAttribute('aria-pressed', on); b.style.background = on ? 'var(--color-accent-200)' : '#fff'; b.style.borderColor = on ? 'var(--color-accent-600)' : 'transparent'; });
    ovK.querySelectorAll('[data-age]').forEach(function (b) { var on = b.getAttribute('data-age') === String(stK.age); b.setAttribute('aria-pressed', on); b.style.background = on ? 'var(--color-accent-200)' : '#fff'; b.style.borderColor = on ? 'var(--color-accent-600)' : 'transparent'; });
    ovK.querySelector('[data-k=badges]').textContent = KT.badges(nbBadges(), nbTotal());
    ovK.querySelectorAll('[data-klang]').forEach(function (b) { var on = b.getAttribute('data-klang') === stK.lang; b.setAttribute('aria-pressed', on); b.style.background = on ? 'var(--color-accent-200)' : '#fff'; b.style.borderColor = on ? 'var(--color-accent-600)' : 'transparent'; });
    ovK.querySelector('[data-k=klangbox]').style.display = langUrl() ? '' : 'none';
  }
  function buildK() {
    ovK = document.createElement('div'); ovK.setAttribute('data-profil-dlg', '1');
    ovK.style.cssText = 'position:fixed;inset:0;z-index:1001;display:none;align-items:center;justify-content:center;padding:16px;background:rgba(32,30,29,.45);font-family:var(--font-body);color:var(--color-text);';
    ovK.innerHTML = '<div role="dialog" aria-modal="true" aria-labelledby="pk-title" lang="' + (KT === TK.ja ? 'ja' : KT === TK.en ? 'en' : 'fr') + '" style="width:100%;max-width:480px;max-height:100%;overflow:auto;box-sizing:border-box;background:var(--color-bg,#f5ead8);border-radius:28px;box-shadow:0 24px 60px rgba(0,0,0,.25);">'
      + '<div style="display:flex;align-items:flex-start;gap:12px;padding:24px 20px 4px 28px;"><div style="flex:1;min-width:0;"><h2 id="pk-title" data-k="title" style="margin:0;font-family:var(--font-heading);font-size:30px;line-height:1.1;"></h2>'
      + '<p style="margin:8px 0 0;font-size:17px;line-height:1.5;text-wrap:pretty;">' + KT.intro + '</p></div>'
      + '<button type="button" data-k="x" aria-label="' + KT.close + '" style="flex:none;width:44px;height:44px;border:0;border-radius:999px;background:var(--color-accent-100);color:var(--color-text);cursor:pointer;display:grid;place-items:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>'
      + '<form novalidate style="display:flex;flex-direction:column;gap:20px;padding:16px 28px 28px;margin:0;">'
      + '<div><label for="pk-nom" style="' + lbl + 'font-size:17px;">' + KT.nom + '</label><input id="pk-nom" type="text" autocomplete="off" maxlength="20" placeholder="' + KT.nomPh + '" style="' + inp + 'font-size:17px;"></div>'
      + '<div role="group" aria-labelledby="pk-av"><span id="pk-av" style="' + lbl + 'font-size:17px;">' + KT.av + '</span><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(56px,1fr));gap:8px;">'
      + AV.map(function (a) { return '<button type="button" data-av="' + a + '" style="height:56px;border:3px solid transparent;border-radius:50%;background:#fff;font-size:30px;line-height:1;cursor:pointer;padding:0;">' + a + '</button>'; }).join('')
      + '</div></div>'
      + '<div role="group" aria-labelledby="pk-age"><span id="pk-age" style="' + lbl + 'font-size:17px;">' + KT.age + '</span><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px;">'
      + KT.ages.map(function (a, i) { return '<button type="button" data-age="' + (i + 1) + '" style="min-height:64px;border:3px solid transparent;border-radius:20px;background:#fff;font:inherit;font-size:15px;font-weight:700;color:var(--color-text);cursor:pointer;padding:6px 4px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;"><span aria-hidden="true" style="font-size:22px;line-height:1;">' + a[0] + '</span>' + a[1] + '</button>'; }).join('')
      + '</div><p style="margin:8px 0 0;font-size:14px;color:var(--color-neutral-700,#5b5650);">' + KT.ageHint + '</p></div>'
      + '<div role="group" aria-labelledby="pk-lang" data-k="klangbox"><span id="pk-lang" style="' + lbl + 'font-size:17px;">' + KT.lang + '</span><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:8px;">'
      + [['fr', '🇫🇷', 'Français'], ['en', '🇬🇧', 'English'], ['ja', '🇯🇵', '日本語']].map(function (l) { return '<button type="button" data-klang="' + l[0] + '" lang="' + l[0] + '" style="min-height:56px;border:3px solid transparent;border-radius:20px;background:#fff;font:inherit;font-size:16px;font-weight:700;color:var(--color-text);cursor:pointer;padding:6px 12px;display:flex;align-items:center;justify-content:center;gap:8px;"><span aria-hidden="true" style="font-size:24px;line-height:1;">' + l[1] + '</span>' + l[2] + '</button>'; }).join('')
      + '</div></div>'
      + '<p data-k="badges" style="margin:0;padding:14px 16px;border-radius:18px;background:var(--color-accent-2-100);color:var(--color-accent-2-900);font-size:16px;font-weight:700;line-height:1.45;text-wrap:pretty;"></p>'
      + '<a data-k="album" href="' + albumHref() + '" class="btn btn-secondary" style="align-self:flex-start;margin-top:-8px;padding:10px 18px;font-size:16px;">' + KT.album + '</a>'
      + '<button type="button" data-k="del" style="align-self:flex-start;min-height:44px;margin:-8px 0 0;padding:8px 0;border:0;background:none;font:inherit;font-size:15px;font-weight:700;color:var(--color-accent-800);text-decoration:underline;cursor:pointer;">' + KT.del + '</button>'
      + '<div style="display:flex;align-items:center;gap:8px;"><button type="submit" class="btn btn-primary" style="flex:1 1 auto;min-height:48px;padding:12px 22px;font-size:17px;">' + KT.save + '</button><button type="button" data-k="later" class="btn btn-ghost" style="flex:none;min-height:48px;padding:12px 18px;font-size:17px;">' + KT.cancel + '</button></div>'
      + '</form></div>';
    document.body.appendChild(ovK);
    ovK.addEventListener('click', function (e) {
      if (e.target === ovK) return closeK();
      var b = e.target.closest('button'); if (!b) return;
      var a = b.getAttribute('data-av'), k = b.getAttribute('data-k');
      var g = b.getAttribute('data-age');
      var kl = b.getAttribute('data-klang');
      if (kl) { if (kl !== stK.lang) { stK.lang = kl; stK.nom = ovK.querySelector('#pk-nom').value; KT = TK[kl]; ovK.remove(); ovK = null; buildK(); ovK.querySelector('#pk-nom').value = stK.nom; paintK(); ovK.style.display = 'flex'; var fb = ovK.querySelector('[data-klang="' + kl + '"]'); if (fb) fb.focus(); } }
      else if (g) { stK.age = g; paintK(); }
      else if (a) { stK.av = stK.av === a ? '' : a; paintK(); }
      else if (k === 'x' || k === 'later') closeK();
      else if (k === 'del') { try { localStorage.removeItem(KK); } catch (e2) {} stK = getK(); stK.lang = PL; ovK.querySelector('#pk-nom').value = ''; paintK(); refresh(); }
    });
    ovK.querySelector('form').addEventListener('submit', function (e) { e.preventDefault(); stK.nom = ovK.querySelector('#pk-nom').value.trim(); var kGo = stK.lang !== PL && langUrl(stK.lang); try { localStorage.setItem('sainos-lang', stK.lang); } catch (e5) {} delete stK.lang; wr(KK, stK); if (stK.age) { try { localStorage.setItem('sainos-quiz-age', String(stK.age)); } catch (e3) {} } try { window.dispatchEvent(new Event('sainos-profil-enfant')); } catch (e4) {} refresh(); closeK(); if (kGo) location.href = kGo; });
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
    stK = getK(); stK.lang = PL; ovK.querySelector('#pk-nom').value = stK.nom; paintK();
    lastFocus = document.activeElement; ovK.style.display = 'flex'; document.documentElement.style.overflow = 'hidden';
    setTimeout(function () { ovK.querySelector('#pk-nom').focus(); }, 0);
  }
  function closeK() { if (!ovK || ovK.style.display === 'none') return; ovK.style.display = 'none'; document.documentElement.style.overflow = ''; if (KT !== TK[PL]) { KT = TK[PL]; ovK.remove(); ovK = null; } if (lastFocus && lastFocus.focus) lastFocus.focus(); }

  function face(b) {
    if (kid()) {
      var k = getK(), ki = k.nom ? k.nom.trim().charAt(0).toUpperCase() : '';
      b.setAttribute('aria-label', k.nom ? KT.of + k.nom : KT.btn); b.title = k.nom ? KT.of + k.nom : KT.btn;
      b.innerHTML = k.av ? '<span aria-hidden="true" style="width:34px;height:34px;border-radius:50%;background:var(--color-accent-200);display:grid;place-items:center;font-size:21px;line-height:1;">' + k.av + '</span>'
        : ki ? '<span aria-hidden="true" style="width:32px;height:32px;border-radius:50%;background:var(--color-accent-200);color:var(--color-accent-900);display:grid;place-items:center;font-family:var(--font-heading);font-size:17px;line-height:1;">' + esc(ki) + '</span>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>';
      var nbB = nbBadges(); if (nbB) b.innerHTML = '<span style="position:relative;display:grid;place-items:center;">' + b.innerHTML + '<span aria-hidden="true" style="position:absolute;right:-9px;bottom:-7px;min-width:20px;height:20px;padding:0 5px;box-sizing:border-box;border-radius:999px;background:#ffc83d;color:#4a3200;font-family:var(--font-body);font-size:11px;font-weight:800;line-height:20px;text-align:center;">' + nbB + '</span></span>';
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
    guide(); apropos(); badgesNav(); jouerNav(); ferme(); tabScroll();
    tomRand(); tomMask(); kidSub();
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
  function guide() {
    var k = kid();
    document.querySelectorAll('[data-bien-choisir] > span:first-child').forEach(function (x) {
      if (!x.hasAttribute('data-guide-a')) x.setAttribute('data-guide-a', x.textContent);
      x.textContent = k ? (JA ? 'どこから来るの？' : EN ? 'Where does it come from?' : 'D’où ça vient\u00a0?') : x.getAttribute('data-guide-a');
    });
    document.querySelectorAll('[data-nav-jardin] > a[href$="origines.html"], details a[href$="origines.html"]').forEach(function (x) {
      if (!x.hasAttribute('data-guide-a')) { if (!/guide|ガイド/i.test(x.textContent)) return; x.setAttribute('data-guide-a', x.textContent); }
      var arr = /▾/.test(x.getAttribute('data-guide-a')) ? ' ▾' : '';
      x.textContent = k ? (JA ? 'どこから来るの？' : EN ? 'Where does it come from?' : 'D’où ça vient\u00a0?') + arr : x.getAttribute('data-guide-a');
    });
    document.querySelectorAll('[data-bien-choisir] a[href$="lexique.html"], [data-bien-choisir] span[aria-current]:not([href])').forEach(function (x) { if (x.style.display === 'none' || x.style.display === '') x.style.display = 'flex'; x.style.alignItems = 'center'; });
    document.querySelectorAll('[data-nav-jardin-panel] a[href$="lexique.html"], details a[href$="lexique.html"]').forEach(function (x) { showEl(x, !k); });
  }
  function ferme() {
    var k = kid(), FR = { 'La ferme': 'Ma ferme', 'Le Potager': 'Mon potager', 'Le Verger': 'Mon verger', 'Le Jardin': 'Mon jardin' }, ENm = { 'The Farm': 'My Farm', 'The Vegetable Garden': 'My Veg Patch', 'The Orchard': 'My Orchard', 'The Garden': 'My Garden' }, JAm = { 'ファーム': 'ぼくのファーム', '菜園': 'ぼくの菜園', '果樹園': 'ぼくの果樹園', 'ガーデン': 'ぼくのガーデン' }, M = JA ? JAm : EN ? ENm : FR;
    document.querySelectorAll('[data-nav-jardin] > a[href$="legumes.html"], [data-nav-jardin-box] > a[href$="legumes.html"], [data-nav-jardin-box] > a[href$="fruits.html"], [data-nav-jardin-box] > a[href$="fleurs.html"], [data-nav-panel] > a[href$="legumes.html"]').forEach(function (x) {
      if (!x.hasAttribute('data-ferme-a')) x.setAttribute('data-ferme-a', x.textContent);
      var o = x.getAttribute('data-ferme-a'), arr = /▾/.test(o) ? ' ▾' : '', b = o.replace(/\s*▾\s*$/, '');
      x.textContent = k && M[b] ? M[b] + arr : o;
    });
    document.querySelectorAll('[data-nav-jardin-box] > [data-nav-tom]').forEach(function (x) { x.remove(); });
    document.querySelectorAll('[data-nav-panel]').forEach(function (pn) {
      var f = pn.querySelector('a[href$="legumes.html"]'); if (!f) return;
      var t = pn.querySelector('[data-nav-tom]');
      if (!t) { t = f.cloneNode(false); t.removeAttribute('data-ferme-a'); t.removeAttribute('aria-current'); t.setAttribute('data-nav-tom', '1'); t.href = f.getAttribute('href').replace(/legumes\.html$/, 'tom.html'); t.textContent = JA ? 'ぼくのおはなし' : EN ? 'My story' : 'Mon histoire'; if (/\/tom\.html$/.test(location.pathname)) t.setAttribute('aria-current', 'page'); f.parentNode.insertBefore(t, f.nextSibling); }
      t.textContent = 'Tom'; if (/\/(tom|histoires)(\.html)?$/.test(location.pathname)) t.setAttribute('aria-current', 'page');
      if (!t.hasAttribute('data-kid-label')) showEl(t, k);
    });
    tomNav();
  }
  function tomNav() {
    document.querySelectorAll('header [data-nav-desk] > [data-nav-jardin] > a[href$="legumes.html"]').forEach(function (f) {
      var sp = f.parentNode, bar = sp.parentNode; if (bar.querySelector(':scope > [data-nav-tomrub]')) return;
      var base = f.getAttribute('href').replace(/legumes\.html$/, ''), cur = /\/(tom|histoires)(\.html)?$/.test(location.pathname);
      var s = document.createElement('span'); s.setAttribute('data-nav-jardin', '1'); s.setAttribute('data-nav-tomrub', '1'); s.setAttribute('data-kid-label', '1');
      s.innerHTML = '<a href="' + base + 'tom.html" aria-haspopup="true"' + (cur ? ' aria-current="page"' : '') + '>Tom ▾</a><span data-nav-jardin-panel="1"><span data-nav-jardin-box="1"><a href="' + base + 'tom.html">' + (JA ? 'ぼくのおはなし' : EN ? 'My story' : 'Mon histoire') + '</a>' + (EN ? '' : '<a href="' + base + 'histoires.html">' + (JA ? 'ぼくのぼうけん' : 'Mes aventures') + '</a>') + '</span></span>';
      bar.insertBefore(s, sp);
    });
  }
  function jouerNav() {
    var k = kid();
    document.querySelectorAll('[data-nav-jardin] > a[aria-haspopup][href$="jeux.html"]').forEach(function (x) { x.href = x.getAttribute('href').replace(/jeux\.html$/, 'jouer.html'); if (/jouer\.html$/.test(location.pathname)) x.setAttribute('aria-current', 'page'); });
    document.querySelectorAll('[data-nav-panel]').forEach(function (pn) {
      var q = pn.querySelector(':scope > a[href$="quiz.html"]'), g = pn.querySelector(':scope > a[href$="jeux.html"]:not([data-nav-jouer])'), bd = pn.querySelector(':scope > [data-nav-badges]');
      if (!q || !g) return;
      var h = pn.querySelector(':scope > [data-nav-jouer]');
      if (!h) { h = g.cloneNode(false); h.removeAttribute('data-nav-quiz'); h.removeAttribute('aria-current'); h.setAttribute('data-nav-jouer', '1'); h.setAttribute('data-kid-label', '1'); h.href = g.getAttribute('href').replace(/jeux\.html$/, 'jouer.html'); h.textContent = JA ? 'あそぶ' : EN ? 'Play' : 'Jouer'; if (/jouer\.html$/.test(location.pathname)) h.setAttribute('aria-current', 'page'); pn.insertBefore(h, q); }
      [q, g, bd].forEach(function (x) { if (x) showEl(x, !k); });
      pn.insertBefore(q, h.nextSibling); pn.insertBefore(g, q.nextSibling); if (bd) pn.insertBefore(bd, g.nextSibling);
    });
  }
  function badgesNav() {
    document.querySelectorAll('[data-nav-jardin-box] > a[href$="quiz.html"], details a[href$="quiz.html"]').forEach(function (q) {
      if (q.parentNode.querySelector('[data-nav-badges]')) return;
      var x = q.cloneNode(false); x.removeAttribute('aria-current'); x.setAttribute('data-nav-badges', '1'); x.href = q.getAttribute('href').replace(/quiz\.html$/, 'badges.html'); x.textContent = JA ? 'マイバッジ' : EN ? 'My badges' : 'Mes badges';
      if (/badges\.html$/.test(location.pathname)) x.setAttribute('aria-current', 'page');
      var nx = q.nextElementSibling; while (nx && /jeux\.html$/.test(nx.getAttribute('href') || '')) { q = nx; nx = q.nextElementSibling; }
      q.parentNode.insertBefore(x, q.nextSibling);
    });
  }
  var TOMP = ['home', 'verger', 'potager', 'jardin'][Math.floor(Math.random() * 4)];
  function tomRand() { document.querySelectorAll('img[data-tom-rand]:not([data-tom-done])').forEach(function (i) { var w = parseInt(i.style.width, 10) || 0, sx = w && w <= 160 ? '-s' : ''; i.src = i.getAttribute('src').replace(/tom\/[a-z]+(-s)?\.webp$/, 'tom/' + TOMP + sx + '.webp'); i.setAttribute('data-tom-done', '1'); }); }
  var TMK = ['47% 53% 51% 49% / 53% 47% 52% 48%', '52% 48% 46% 54% / 48% 54% 46% 52%', '49% 51% 55% 45% / 46% 52% 48% 54%', '54% 46% 49% 51% / 51% 45% 55% 49%', '45% 55% 52% 48% / 49% 53% 47% 51%'], tmI = 0;
  if (!document.getElementById('tom-mask-css')) { var tms = document.createElement('style'); tms.id = 'tom-mask-css'; tms.textContent = 'img[src*="tom/"]:not([src*="histoire/"]){border-radius:48% 52% 46% 54% / 53% 47% 52% 48%!important}'; (document.head || document.documentElement).appendChild(tms); }
  function tomMask() {
    document.querySelectorAll('img[src*="tom/"]:not([src*="histoire/"]):not([data-tm]), [style*="tom/"]:not(img):not([data-tm])').forEach(function (el) {
      el.setAttribute('data-tm', '1');
      if (el.closest && el.closest('[data-tom-hero]')) return;
      var t = el, r = TMK[tmI++ % TMK.length];
      if (el.tagName !== 'IMG') { if (/histoire\//.test(el.getAttribute('style'))) return; var cs = getComputedStyle(el); if (cs.position === 'absolute' && el.parentElement) t = el.parentElement; }
      if (t.tagName === 'IMG') { t.style.setProperty('border-radius', r, 'important'); return; }
      var br = getComputedStyle(t).borderTopLeftRadius; if (/%$/.test(br) || parseFloat(br) >= 30) t.style.setProperty('border-radius', r, 'important');
    });
  }
  function kidSub() {
    if (!document.getElementById('kid-sub-css')) { var ks = document.createElement('style'); ks.id = 'kid-sub-css'; ks.textContent = 'html:not(.m-kid) [data-kid-sub]{display:none!important}html.m-kid header [data-baseline]{display:none!important}[data-kid-sub]{transition:opacity .2s,max-height .2s;max-height:20px;overflow:hidden}html.is-scrolled [data-kid-sub]{opacity:0;max-height:0}html.m-kid header .nav-brand{flex-direction:column!important;align-items:center!important;gap:4px!important}[data-kid-sub]{display:block;font-family:var(--font-body);font-size:14px;font-weight:700;line-height:1;white-space:nowrap;color:var(--color-text);text-align:center}[data-kid-sub] span{color:#01b0ae}:lang(ja) [data-kid-sub]{font-size:18px;max-height:26px;margin-top:6px}:lang(ja) html.is-scrolled [data-kid-sub],html.is-scrolled:lang(ja) [data-kid-sub]{margin-top:0}'; document.head.appendChild(ks); }
    var br = document.querySelector('header .nav-brand'); if (!br || br.querySelector('[data-kid-sub]')) return;
    var t = document.createElement('span'); t.setAttribute('data-kid-sub', '1'); t.innerHTML = JA ? 'トムと<span>4つの季節</span>' : EN ? 'Tom and the <span>4 Seasons</span>' : 'Tom et les <span>4 Saisons</span>';
    br.appendChild(t);
  }
  function showEl(x, on) { if (!x.hasAttribute('data-d0')) x.setAttribute('data-d0', x.style.display === 'none' ? '' : x.style.display); x.style.display = on ? x.getAttribute('data-d0') : 'none'; }
  function tabScroll() { document.querySelectorAll('[data-sous-jardin], [data-bien-choisir], [data-sous-jouer]').forEach(function (nv) { var c = nv.querySelector('[aria-current="page"]'); if (!c || c.offsetParent === null) return; var bar = c.parentNode; if (bar.scrollWidth <= bar.clientWidth + 2 || bar.hasAttribute('data-ts')) return; bar.setAttribute('data-ts', '1'); var cr = c.getBoundingClientRect(), br = bar.getBoundingClientRect(); bar.scrollLeft = Math.max(0, bar.scrollLeft + cr.left - br.left - (bar.clientWidth - cr.width) / 2); }); }
  function apropos() {
    var k = kid();
    document.querySelectorAll('[data-nav-jardin] > a[href$="apropos.html"]').forEach(function (x) {
      if (!x.hasAttribute('data-ap-a')) x.setAttribute('data-ap-a', x.textContent);
      var o = x.getAttribute('data-ap-a');
      x.textContent = k ? o.replace(/\s*▾\s*$/, '') : o;
      if (k) x.removeAttribute('aria-haspopup'); else x.setAttribute('aria-haspopup', 'true');
    });
  }
  function biblio() {
    if (EN || JA) return;
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
