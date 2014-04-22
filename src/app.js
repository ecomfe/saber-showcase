define(function (require) {

    var Resolver = require('saber-promise');
    var firework = require('saber-firework');

    var slide = require('saber-viewport/transition/slide');

    Resolver.disableExceptionCapture();

    firework.load(require('./config'));

    var config = {
            // 加载公共模版
            template: require('./common/common.tpl'),

            viewport: {
                transition: 'slide'
            },

            processor: {
                // 处理转场的方向
                transition: function (back, front) {
                    var options = {};
                    // 页面初始化时没有原始的route信息
                    front = front || {};
                    if (back.index && front.index) {
                        options.direction = back.index > front.index
                                            ? slide.RIGHT
                                            : slide.LEFT;
                    }
                    return options;
                }
            }
        };

    firework.start('viewport', config);

});
