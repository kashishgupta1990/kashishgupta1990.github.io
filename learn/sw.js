this.addEventListener('install', function (event) {
    console.log('install ',event);

    event.waitUntil();
});

this.addEventListener('fetch', function (event) {
    console.log('fetch ',event);
});