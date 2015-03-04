/**
 * @file app
 * @author saber team
 */

define(function (require) {

    var dom = require('saber-dom');
    var Resolver = require('saber-promise');
    var app = require('saber-firework');

    var ajax = require('saber-ajax').ejson;
    // 设置所有异步请求的URL前缀
    ajax.config({
        host: '/api'
    });

    // 启用同构模式
    require('saber-firework/extension/isomorphic');

    // 使用slide转场效果
    var slide = require('saber-viewport/transition/slide');

    // Only For Debug
    // 关闭Promise的异常捕获，方便调试
    Resolver.disableExceptionCapture();

    // 加载路由配置信息
    app.load(require('./config'));

    // 填充同步的存储数据
    require('saber-storage').fill(app);

    var config = {
            root: app.getSyncData('root'),
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
        init: function (data) {
            config.templateData = data;
            app.start('viewport', config);
        }
    };

});
