/**
 * @file Start Server
 * @author treelite(c.xinle@gmail.com)
 */

var ajax = require('saber-ajax').ejson;

ajax.config({
    host: 'http://local:8848/api'
});

var app = require('rebas');

app.load(require('./lib/config'));

var options = {
    template: require('./lib/common/common.tpl'),
    // TODO
    // 考虑可配置
    templateData: {
        config: {
            root: ''
        }
    }
};

app.start(8000, options);
