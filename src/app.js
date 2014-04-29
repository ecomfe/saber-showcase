/**
 * @file app
 * @author saber(saber@baidu.com)
 */

define(function (require) {

    var dom = require('saber-dom');
    var Resolver = require('saber-promise');
    var firework = require('saber-firework');

    // 使用slide转场效果
    var slide = require('saber-viewport/transition/slide');

    // Only For Debug
    // 关闭Promise的异常捕获，方便调试
    Resolver.disableExceptionCapture();

    // 加载路由配置信息
    firework.load(require('./config'));

    // 完成页面加载后隐藏splash
    firework.on('afterload', function () {
        dom.hide(dom.g('splash-screen'));
    });

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

    return {
        init: function () {
            firework.start('viewport', config);
        }
    };

});
