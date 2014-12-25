/**
 * @file 详情页model
 * @author saber team
 */

define(function (require) {

    var Resolver = require('saber-promise');
    var ajax = require('saber-ajax/ejson');

    var URL = '/post/';

    var config = {};

    config.fetch = function(query) {
        if (!query.id) {
            return Resolver.resolved({detail: {}, comments: []});
        }

        var url = URL + query.id;
        return ajax.get(url);
    };

    return config;

});
