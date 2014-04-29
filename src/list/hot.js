/**
 * @file host list
 * @author saber(saber@baidu.com)
 */

define(function (require) {

    var config = {};

    config.constructor = require('./Action');

    config.model = require('./hotModel');

    config.view = require('./hotView');

    return config;

});
