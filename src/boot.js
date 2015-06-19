/**
 * @file Boot multi page
 * @author treelite(c.xinle@gmail.com)
 */

define(function (require) {

    var app = require('saber-rainbow');
    var Resolver = require('saber-promise');

    var ajax = require('saber-ajax').ejson;
    // 设置所有异步请求的URL前缀
    ajax.config({
        host: '/api'
    });

    // Only For Debug
    // 关闭Promise的异常捕获，方便调试
    Resolver.disableExceptionCapture();

    // 填充同步的存储数据
    require('saber-storage').sync(app);

    app.config({
        isomorphic: true,
        template: require('./common/common.tpl')
    });

    return function (config, path) {
        app.boot(config, path);
    }
});
