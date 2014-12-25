/**
 * @file host list
 * @author saber team
 */

define(function (require) {

    var config = {};

    config.constructor = require('./Action');

    config.model = require('./hotModel');

    config.view = require('./hotView');

    return config;

});
