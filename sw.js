self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('static').then((cache) => {
            return cache.addAll([
                '/',
                '/style.css',
                '/main.js'
            ]);
        })
    );
});
