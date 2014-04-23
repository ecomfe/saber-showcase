define(function (require) {

    var Resolver = require('saber-promise');

    // mock data
    var data = [
            { id: 1001, title: '当随机不够随机：一个在线扑克游戏的教训', read: false, author: 'firede' },
            { id: 1002, title: '少有人知的 GitHub 使用技巧', read: true, author: 'treelite' },
            { id: 1003, title: 'Python中的高级数据结构', read: false, author: 'redmed' },
            { id: 1004, title: '在Android上测试异步任务', read: false, author: 'zfkun' },
            { id: 1005, title: '内核代号101 — 动手写自己的内核', read: false, author: 'junmer' },
            { id: 1006, title: 'Google X实验室的终极梦想——改变世界', read: false, author: 'errorrik' },
            { id: 1007, title: 'TaggingJS – 可以灵活定制的 jQuery 标签系统插件', read: false, author: 'leeight' },
            { id: 1008, title: '10个核心的Linux面试问题与答案', read: true, author: 'otakustay' },
            { id: 1009, title: '王垠：《对Go语言的综合评价》', read: true, author: 'chriswong' },
            { id: 1010, title: 'List of some unique features that event presenters get for Free at Yapsody', read: false, author: 'justineo' }
        ];

    var config = {};

    config.fetch = function(query) {

        return Resolver.resolved({
            list: data
        });

    };

    return config;

});
