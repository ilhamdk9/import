self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Biarkan fetch berjalan normal tanpa cache kaku agar selalu terhubung ke server & firebase
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});