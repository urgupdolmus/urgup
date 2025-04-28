self.addEventListener('install', function(event) {
  console.log('Service Worker Kuruluyor...');
  event.waitUntil(
    caches.open('urgup-dolmus-harita-cache').then(function(cache) {
      return cache.addAll([
        './harita.html',
        './manifest.json',
        './mini-dolmus.png',
        './icon-192.png',
        './icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
