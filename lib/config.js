module.exports = [
    {path: '/', action: require('./list/hot'), index: 1},
    {path: '/list/new', action: require('./list/new'), index: 2},
    {path: '/post/:id', action: require('./post/index'), index: 3}
];
