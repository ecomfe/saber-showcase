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

// 附件异步请求中间件
app.before(ajax.express(['cookie', 'set-cookie']));

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
