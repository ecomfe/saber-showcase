/**
 * @file Start Server
 * @author treelite(c.xinle@gmail.com)
 */

var app = require('rebas');
var ajax = require('saber-ajax').ejson;
var config = app.get('app');

ajax.config({
    host: config.remote
});

app.load(require('./lib/config'));

var options = {

    template: require('./lib/common/common.tpl'),

    templateData: {
        config: {
            root: ''
        }
    }

};

app.start(config.port, options);
