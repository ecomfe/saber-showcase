define(function (require) {

    return [
        {path: '/', action: require('./list/hot'), index: 101},
        {path: '/list/new', action: require('./list/new'), index: 102},
        // {path: '/detail/:id', action: require('./detail/index'), index: 201}
    ];

});
