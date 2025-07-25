// public/custom-sw.js

const CACHE_NAME = 'sellytics-cache-v1';

const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/build\static\css\main.3433d232.css',
  '/build\static\js\main.3433d232.js',
  '/static/js/main.abc123.js',
  '/build/manifest.json',
  '/build/newlogo.png',
'/build/favicon.ico',
  '/register',
  '/login',
  '/adminregister',
  '/admin',
  '/regdashboard',
  '/dashboard',
  '/admin-dashboard',
  '/team-dashboard',
  '/sales-metrics',
  '/product-cost',
  '/main',
  '/salestrack',
  '/owner-dashboard',
  '/profile',
  '/payment',
  '/premiumdashboard',
  '/tools',
  '/test',
  '/tests',
  '/qrcodes',
  '/manifest.json',
  '/favicon.ico',
  '/logo192.png'
];

// Install and cache all specified assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// Serve cached content if available, else fetch from network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

// Activate new service worker and delete old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
