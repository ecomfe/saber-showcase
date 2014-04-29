define(function (require) {

    return [
        {path: '/index', action: require('./list/hot'), index: 101, cached: true},
        {path: '/list/new', action: require('./list/new'), index: 102, cached: true},
        {path: '/post/:id', action: require('./post/index'), index: 201}
    ];

});
