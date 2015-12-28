this.addEventListener('install', function (event) {
    console.log('install ',event);
});

this.addEventListener('fetch', function (event) {
    console.log('fetch ',event);
});