/**
 * @file new list
 * @author saber team
 */

define(function (require) {

    var config = {};

    config.constructor = require('./Action');

    config.model = require('./newModel');

    config.view = require('./newView');

    return config;

});
