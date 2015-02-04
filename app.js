/**
 * @file Start Server
 * @author treelite(c.xinle@gmail.com)
 */

var ajax = require('saber-ajax').ejson;

ajax.config({
    host: 'http://local:8848'
});

var app = require('isom');

app.load(require('./lib/config'));

var options = {
    template: require('./lib/common/common.tpl.js')
};

app.start(8000, options);
