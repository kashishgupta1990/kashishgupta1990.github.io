var self = this;
var payload = {
    status: true,
    statusCode: 200,
    data: {
        images: [
            {
                src: 'https://im.proptiger.com/1/674384/6/royaume-elevation-784477.jpeg?width=520&height=400',
                label: 'Skylark Royaume'
            },
            {
                src: 'https://im.proptiger.com/1/675391/6/buena-vista-elevation-857706.jpeg?width=520&height=400',
                label: 'Brigade Buena Vista'
            },
            {
                src: 'https://im.proptiger.com/1/669531/6/bhartiya-nikoo-homes-2-elevation-677787.jpeg?width=520&height=400',
                label: 'Bhartiya Nikoo Homes 2'
            },
            {
                src: 'https://im.proptiger.com/1/675491/6/raintree-boulevard-elevation-857850.jpeg?width=520&height=400',
                label: 'L and T Realty Raintree Boulevard'
            }
        ]
    }
};

var ajaxApiList = {
    getImages: function () {
        setTimeout(function () {
            self.postMessage({
                action: 'GET:api/images',
                payload: payload
            });
        }, 5000);
    }
};

// Receiving Data
/*this.addEventListener('message', function (e) {
    this.postMessage(e.data);
}, false);*/

ajaxApiList.getImages();