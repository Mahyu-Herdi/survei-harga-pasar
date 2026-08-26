const CACHE_NAME = 'survey-app-v4'; 
const URLS_TO_CACHE = [
    './',
    './index.html',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

// Langsung install dan paksa aktif
self.addEventListener('install', e => {
    self.skipWaiting(); 
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(URLS_TO_CACHE);
        })
    );
});

// Bersihkan cache lama saat ada versi baru
self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    return self.clients.claim(); 
});

// Strategi: Utamakan Internet, kalau putus baru buka Cache
self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request)
            .then(response => {
                if (response && response.status === 200 && response.type === 'basic') {
                    const clonedResponse = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(e.request, clonedResponse);
                    });
                }
                return response;
            })
            .catch(() => {
                // Tarik dari cache kalau offline
                return caches.match(e.request);
            })
    );
});