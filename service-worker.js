
// ======================================================
// 📚 LET'S IMPROVE ENGLISH
// OFFLINE SERVICE WORKER
// ======================================================

const CACHE_NAME = "lets-improve-english-v4";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json"
];


// ======================================================
// INSTALL
// ======================================================

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)

            .then(cache => {
                return cache.addAll(FILES_TO_CACHE);
            })

            .then(() => {
                return self.skipWaiting();
            })

    );

});


// ======================================================
// ACTIVATE
// ======================================================

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys()

            .then(cacheNames => {

                return Promise.all(

                    cacheNames
                        .filter(cacheName => cacheName !== CACHE_NAME)
                        .map(cacheName => caches.delete(cacheName))

                );

            })

            .then(() => {
                return self.clients.claim();
            })

    );

});


// ======================================================
// FETCH
// NETWORK FIRST — CACHE FALLBACK
// ======================================================

self.addEventListener("fetch", event => {

    event.respondWith(

        fetch(event.request)

            .then(networkResponse => {

                if (networkResponse && networkResponse.ok) {

                    const responseClone = networkResponse.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseClone);
                        });

                }

                return networkResponse;

            })

            .catch(() => {

                return caches.match(event.request);

            })

    );

});
