/**
 * @file new list
 * @author saber(saber@baidu.com)
 */

define(function (require) {

    var config = {};

    config.constructor = require('./Action');

    config.model = require('./newModel');

    config.view = require('./newView');

    return config;

});
