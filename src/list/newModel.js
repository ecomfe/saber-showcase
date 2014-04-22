define(function (require) {

    var Resolver = require('saber-promise');

    // mock data
    var data = [
            {id: 1001, title: '这部分数据是new了'},
            {id: 1002, title: '属于new的数据'},
            {id: 1003, title: 'rider'}
        ];

    var config = {};

    config.fetch = function (query) {

        return Resolver.resolved({
            list: data
        });
    };

    return config;

});
