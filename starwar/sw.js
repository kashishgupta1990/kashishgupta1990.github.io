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

            // First try to get directly from the network

            console.log('If cache doest not match then ',event.request.url);
            return fetch(event.request.url);
        })
        .then(function (r) {
            //Updating the cache

            console.log('If successfully get data from the network then update cache ',event.request.url);
            response = r;


            console.log('Response ',response);

            caches.open('v1').then(function (cache) {
                cache.put(event.request, response);
            });
            return response.clone();
        }));
});
