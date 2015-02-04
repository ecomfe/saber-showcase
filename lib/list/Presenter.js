/**
 * @file list列表Presenter基类
 * @author saber team
 */

var extend = require('saber-lang').extend;
var bind = require('saber-lang').bind;
var inherits = require('saber-lang').inherits;

var Base = require('saber-mm').Presenter;

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

module.exports = Presenter;
