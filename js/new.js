jQuery(function($){

    var feed = new Instafeed({
        clientId: '467ede5a6b9b48ae8e03f4e2582aeeb3',
        limit: 16,
        get: 'tagged',
        tagName: 'teamRousey',
        sortBy: 'most-recent',
        after: function () {
            
        },
        resolution: 'standard_resolution',
        filter: function(image) {
            if (image.type == 'image') {
                image.template = '<img src="' + image.images.standard_resolution.url + '" />';
            } else {
                image.template = '<video width="100%" controls loop><source src="' + image.videos.standard_resolution.url + '" type="video/mp4"/></video>';
            }
            return true;
        },
        template: '<header>{{model.template}}</header><footer><a href="http://instagram.com/{{model.user.username}}">@{{model.user.username}}</a><br>{{caption}}</footer>',

    });

    feed.run();

});