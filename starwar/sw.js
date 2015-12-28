this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {

            console.log('Creating cache of the static files');

            return cache.addAll([
                '/',
                '/starwar/',
                '/starwar/index.html',
                '/starwar/style.css',
                '/starwar/app.js',
                '/starwar/image-list.js',
                '/starwar/star-wars-logo.jpg',
                '/starwar/gallery/bountyHunters.jpg',
                '/starwar/gallery/myLittleVader.jpg',
                '/starwar/gallery/snowTroopers.jpg'
            ]);
        })
    );
});

this.addEventListener('fetch', function (event) {
    var response;

    // Getting response from the cache
    event.respondWith(caches.match(event.request)
        .catch(function () {
            return fetch(event.request.url);
        })
        .then(function (r) {
            //Updating the cache
            response = r;
            caches.open('v1').then(function (cache) {
                cache.put(event.request, response);
            });
            return response.clone();
        }));
});
