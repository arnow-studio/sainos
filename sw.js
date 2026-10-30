// Service worker Sainos : hors ligne pour les pages visitées et le cœur du site.
const V = 'sainos-v2';
const CORE = ['./', 'index.html', 'legumes.html', 'fruits.html', 'liste.html', 'recettes.html', 'menu.html', 'jeux.html', 'offline.html',
  'produits-data.js', 'recettes-data.js', 'poissons-data.js', 'fromages-data.js', 'jardin-data.js', 'recherche.js', 'profil.js', 'support.js',
  'images/logo.webp', 'images/logo-mini.webp', 'favicon.png', 'icon-192.png', 'manifest.webmanifest'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => Promise.all(CORE.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== location.origin && !/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) return;
  if (r.mode === 'navigate' || (r.headers.get('accept') || '').includes('text/html')) {
    e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); return res; })
      .catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || caches.match('offline.html'))));
    return;
  }
  e.respondWith(caches.match(r).then(m => {
    const net = fetch(r).then(res => { if (res.ok || res.type === 'opaque') { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); } return res; }).catch(() => m);
    return m || net;
  }));
});
