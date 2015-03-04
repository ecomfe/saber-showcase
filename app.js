/**
 * @file Start Server
 * @author treelite(c.xinle@gmail.com)
 */

var app = require('rebas');
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


app.load(require('./lib/config'));

app.setSyncData('root', config.root);

var options = {

    template: require('./lib/common/common.tpl'),

    templateData: {
        config: {
            root: config.root,
            staticRoot: config.staticRoot
        }
    }

};

app.start(config.port, options);
