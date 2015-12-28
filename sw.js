this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/app.js',
                '/image-list.js',
                '/star-wars-logo.jpg',
                '/gallery/bountyHunters.jpg',
                '/gallery/myLittleVader.jpg',
                '/gallery/snowTroopers.jpg'
            ]);
        })
    );
});

this.addEventListener('fetch', function (event) {
    var response;

    console.log(event.request.url);

    // Getting response from the cache
    event.respondWith(caches.match(event.request)
        .catch(function () {

            // First try to get directly from the network
            return fetch(event.request.url);
        })
        .then(function (r) {

            //Updating the cache
            response = r;
            caches.open('v1').then(function (cache) {
                cache.put(event.request, response);
            });
            return response.clone();
        })
        .catch(function () {
            return caches.match('/gallery/myLittleVader.jpg');
        }));
});
