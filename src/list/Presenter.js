/**
 * @file list 列表 Presenter 基类
 * @author saber team
 */

define(function (require) {

    var extend = require('saber-lang/extend');
    var bind = require('saber-lang/bind');
    var inherits = require('saber-lang/inherits');
    var Base = require('saber-mm/Presenter');

    var events = {
        'view:more': function () {
            var view = this.view;
            this.model.more().then(bind(view.add, view));
        }
    };

    function Presenter(options) {
        options = options || {};
        extend(events, options.events || {});
        options.events = events;

        Base.call(this, options);
    }

    inherits(Presenter, Base);

    return Presenter;

});
