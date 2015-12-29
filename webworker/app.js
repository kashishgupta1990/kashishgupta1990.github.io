var worker = new Worker('/webworker/webworker.js');
var render = {
    createGallery:function(data){
        var make = {
            liTag:function(images){
                var liData='';
                for(var img=0;img<images.length;img++){
                    liData+='<li><img src="'+images[img].src+'" alt="'+images[img].label+'"></li>'
                }
                return liData;
            }
        };
        var ulGallery = document.getElementById('gallery');
        ulGallery.innerHTML = make.liTag(data.data.images);
    }
};

// Bing Message Events
worker.addEventListener('message', function(e) {
    var action = e.data.action;
    var payload = e.data.payload;

    // API Actions on View
    switch(action){
        case 'GET:api/images':
            render.createGallery(payload);
            break;
        case 'POST:api/property/location':
            break;
        default:
            console.log('Calling Default Events');
    }
}, false);