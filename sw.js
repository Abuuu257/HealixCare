self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
            '/HealixCare/',  // Update this path
            '/HealixCare/index.html',  // Update this path
            '/HealixCare/styles/styles.css',  // Update this path
            '/HealixCare/scripts/script.js',  // Update this path
            '/HealixCare/images/Icons/android-chrome-192x192.png',  // Update this path
            '/HealixCare/images/Icons/android-chrome-512x512.png'  // Update this path
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  