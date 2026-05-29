// ──────────────────────────────────────────────
// Arun Electronics — Service Worker (Offline PWA)
// ──────────────────────────────────────────────

const CACHE_NAME = 'arun-electronics-v2';

// All assets to pre-cache on install
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './products.html',
  './services.html',
  './about.html',
  './gallery.html',
  './contact.html',
  './css/style.css',
  './js/script.js',
  './js/products.js',
  './manifest.json',
  // Product images
  './images/products/tv.png',
  './images/products/refrigerator.png',
  './images/products/cooler.png',
  './images/products/iron.png',
  './images/products/d2h.png',
  './images/products/electrical.png',
  // PWA Icons
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// ── INSTALL: Pre-cache all critical assets ──
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Pre-caching app shell & assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: Clean up old caches ──
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// ── FETCH: Network-first, fall back to cache ──
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Skip non-GET requests (e.g. form submissions)
  if (request.method !== 'GET') return;

  // Skip cross-origin requests (Google Maps iframe, WhatsApp links, etc.)
  if (!request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    fetch(request)
      .then((networkResponse) => {
        // Clone and update cache with fresh response
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseClone);
        });
        return networkResponse;
      })
      .catch(() => {
        // Network failed — serve from cache
        return caches.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          // If the request is for a page, show the offline fallback
          if (request.headers.get('accept') && request.headers.get('accept').includes('text/html')) {
            return caches.match('./index.html');
          }
        });
      })
  );
});
