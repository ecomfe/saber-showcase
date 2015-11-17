/**
 * @file WebServer 配置
 * @author edpx-mobile
 */

// 引入 rider 支持
var epr = require('./edp-rider-config');

// 指定匹配版本的 stylus
exports.stylus = epr.stylus;

// 端口
exports.port = 8848;

// 网站根目录
exports.documentRoot = process.cwd();

// 当路径为目录时，是否显示文件夹内文件列表
exports.directoryIndexes = true;

/* handlers
 * 支持expressjs的path的写法，可以通过request.parameters来获取url中的参数
 * 如:
 *  {
 *      location: '/lib/:filename',
 *      handler: function(context) {
 *          console.log(context.request.parameters);
 *      }
 *  }
 *
 * 如果访问http://127.0.0.1:8848/lib/config.js
 *  handler将打印出{"filename": "config.js"}
 */
exports.getLocations = function () {
    return [
        {
            location: '/',
            handler: [
                home('index.html'),
                // 推荐使用 Chrome 开发者工具调试页面
                // 如需单独调试 Android 4.4- 设备，可启用 Weinre 相关配置
                // weinre({port: 8889}),
                livereload()
            ]
        },
        {
            location: /^[^\?]+?\.css($|\?)/,
            handler: [
                autostylus({
                    stylus: epr.stylus,
                    use: epr.stylusPlugin
                })
            ]
        },
        {
            location: /^[^\?]+?\.tpl\.js($|\?)/,
            handler: [
                html2js()
            ]
        },
        {
            location: /^\/(feed|post)\/*/,
            handler: [
                function (context) {
                    delete context.request.headers.host;
                },
                proxy('startupnews.treelite.me')
            ]
        },
        {
            location: /\.md($|\?)/,
            handler: [
                markdown()
            ]
        },
        {
            location: /^.*$/,
            handler: [
                file(),
                // weinre({port: 8889}),
                livereload(),
                proxyNoneExists()
            ]
        }
    ];
};

exports.injectResource = function (res) {
    for (var key in res) {
        global[key] = res[key];
    }
};
