define(function (require) {

    var Resolver = require('saber-promise');

    // mock data
    var data = {};

    var config = {};

    config.fetch = function(query) {

        return Resolver.resolved({
            list: data
        });

    };

    return config;

});
