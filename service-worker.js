// ======================================================
// 📚 LET'S IMPROVE ENGLISH
// OFFLINE SERVICE WORKER
// VERSION 5
// ======================================================

const CACHE_NAME = "lets-improve-english-v5";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./patterns.js",
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

    );

    self.skipWaiting();

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
                        .filter(name => name !== CACHE_NAME)
                        .map(name => caches.delete(name))

                );

            })

    );

    self.clients.claim();

});


// ======================================================
// FETCH
// NETWORK FIRST
// CACHE FALLBACK
// ======================================================

self.addEventListener("fetch", event => {

    event.respondWith(

        fetch(event.request)

            .then(response => {

                if (response && response.ok) {

                    const responseClone = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => {

                            cache.put(
                                event.request,
                                responseClone
                            );

                        });

                }

                return response;

            })

            .catch(() => {

                return caches.match(event.request);

            })

    );

});
