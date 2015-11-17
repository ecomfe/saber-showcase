/**
 * @file Hot
 * @author treelite(c.xinle@gmail.com)
 */

var config = {};

config.constructor = require('./Presenter');

config.model = require('./hotModel');

config.view = require('./hotView');

module.exports = config;
