define(function (require) {

    var Resolver = require('saber-promise');

    // mock data
    var data = [
            {id: 1001, title: '当随机不够随机：一个在线扑克游戏的教训', type: 'hot'},
            {id: 1002, title: '少有人知的 GitHub 使用技巧', type: 'hot'},
            {id: 1003, title: 'Python中的高级数据结构', type: 'hot'},
            {id: 1004, title: '10个核心的Linux面试问题与答案', type: 'hot'}
        ];

    var config = {};

    config.fetch = function (query) {
        var res = {
                filter: query.filter
            };

        query.filter = query.filter || 'hot';
        res.list = data.filter(function (item) {
            return item.type == query.filter;
        });

        return Resolver.resolved(res);
    };

    return config;

});
