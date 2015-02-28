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
            location: /^[^\?]+?\.css($|\?)/,
            handler: [
                autostylus({
                    stylus: epr.stylus,
                    use: epr.stylusPlugin
                })
            ]
        },
        {
            location: /^\/api\/*/,
            handler: [
                function (context) {
                    var url = context.request.url;
                    context.request.url = url.replace('/api/', '/');
                    delete context.request.headers.host;
                },
                proxy('startupnews.duapp.com')
            ]
        },
        {
            location: /^\/startup\/[^\/.]*$/,
            handler: [
                function (context) {
                    var url = context.request.url;
                    context.request.url = url.replace('/startup/', '/');
                    delete context.request.headers.host;
                },
                proxy('127.0.0.1', '8000')
            ]
        },
        {
            location: /^.*$/,
            handler: [
                file(),
                // 动态处理src下不存在的js与tpl
                function (context) {
                    var path = require('path');
                    var c2a = require('c2a');
                    var pathname = context.request.pathname;
                    var extname = path.extname(pathname);
                    if (context.status == 404
                        && pathname.indexOf('/src/') === 0
                        && extname === '.js'
                    ) {
                        context.status = 200;
                        context.request.pathname = pathname.replace('/src/', '/lib/');
                        var handler;
                        if (pathname.indexOf('.tpl') < 0) {
                            handler = c2a.edpWebserver();
                        }
                        else {
                            handler = html2js();
                        }
                        handler(context);
                    }
                }
            ]
        }
    ];
};

exports.injectResource = function (res) {
    for (var key in res) {
        global[key] = res[key];
    }
};
