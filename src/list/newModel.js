/**
 * @file new list model
 * @author saber(saber@baidu.com)
 */

define(function (require) {

    var config = {};

    config.constructor = require('./Model');

    config.url = '/feed/newest';

    return config;

});
