/**
 * @file new list
 * @author saber team
 */

define(function (require) {

    var config = {};

    config.constructor = require('./Presenter');

    config.model = require('./newModel');

    config.view = require('./newView');

    return config;

});
