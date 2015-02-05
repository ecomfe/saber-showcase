/**
 * @file Hot view
 * @author treelite(c.xinle@gmail.com)
 */

var config = {};

config.constructor = require('./View');

// BAD
config.template = require('./hot.tpl');

module.exports = config;
