/**
 * @file Start Server
 * @author treelite(c.xinle@gmail.com)
 */

var app = require('rebas');
var path = require('path');
var ajax = require('saber-ajax').ejson;
var config = app.get('app');

ajax.config({
    host: config.remote,
    logger: app.logger
});

// 透传异步请求的HTTP Header
ajax.rebas(app, ['cookie', 'set-cookie']);

// 启用存储
require('saber-storage').rebas(app);

var routeInfo = require('./lib/config');
app.load(routeInfo);

app.setSyncData('root', config.root);

app.after(function (req, res, next) {
    // 是否启动SPA模式
    // TODO
    // 根据访客终端来判断是否启用SPA模式
    res.templateData.isSPA = false;
    res.templateData.presenter = routeInfo[res.routeIndex].action;
    next();
});

var options = {

    basePath: path.resolve(__dirname, 'lib'),

    template: require('./lib/common/common.tpl'),

    templateData: {
        config: {
            root: config.root,
            staticRoot: config.staticRoot
        }
    }

};

app.start(config.port, options);
