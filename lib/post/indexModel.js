/**
 * @file 详情页model
 * @author saber team
 */

var Resolver = require('saber-promise');
var ajax = require('saber-ajax').ejson;
var Storage = require('saber-storage');
var storage = new Storage('local');

var KEY_READED = 'readlist';

var URL = '/post/';

var config = {};

config.fetch = function (query) {
    var id = query.id;
    if (!id) {
        return Resolver.resolved({detail: {}, comments: []});
    }

    var readed = storage.getItem(KEY_READED) || [];
    if (readed.indexOf(id) < 0) {
        readed.push(id);
        storage.setItem(KEY_READED, readed);
    }

    return ajax.get(URL + id);
};

module.exports = config;
