this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {

            console.log('Creating cache of the static files');

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

    // Getting response from the cache
    event.respondWith(caches.match(event.request)
        .catch(function () {

            // First try to get directly from the network

            console.log('If cache doest not match then ',event.request.url);
            return fetch(event.request.url);
        })
        .then(function (r) {
            //Updating the cache

            console.log('If successfully get data from the network then update cache');
            response = r;
            caches.open('v1').then(function (cache) {
                cache.put(event.request, response);
            });
            return response.clone();
        }));
});
