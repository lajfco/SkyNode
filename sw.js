self.addEventListener('fetch', function(event) {
    // Keeps the app functional by pulling fresh network data
    event.respondWith(fetch(event.request));
});