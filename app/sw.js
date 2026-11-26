/* Groove Vault - service worker de la version mobile.
   Réseau d'abord (toujours la dernière version publiée), cache en secours pour ouvrir l'appli hors connexion.
   Seuls les fichiers de l'appli sont mis en cache : jamais les appels à Discogs ou à Supabase. */
const VERSION = '1.2.0-beta.13';
const CACHE = 'gv-app-' + VERSION;
const SHELL = ['./', 'index.html', 'app.css', 'vault.js', 'app.js', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('gv-app-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
  );
});
