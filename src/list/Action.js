/**
 * @file list列表Action基类
 * @author saber team
 */

define(function (require) {

    var extend = require('saber-lang/extend');
    var bind = require('saber-lang/bind');
    var inherits = require('saber-lang/inherits');
    var BaseAction = require('saber-firework/Action');

    var events = {
        'view:more': function () {
            var view = this.view;
            this.model.more().then(bind(view.add, view));
        }
    };

    function Action(options) {
        options = options || {};
        extend(events, options.events || {});
        options.events = events;

        BaseAction.call(this, options);
    }

    inherits(Action, BaseAction);

    return Action;

});
