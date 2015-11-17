/**
 * @file list列表Model基类
 * @author saber team
 */

define(function (require) {

    var inherits = require('saber-lang/inherits');
    var Resolver = require('saber-promise');
    var ajax = require('saber-ajax').ejson;
    var Base = require('saber-mm/Model');
    var Storage = require('saber-storage');

    var KEY_READED = 'readlist';

    var storage = new Storage();

    function process(list) {
        var readed = storage.getItem(KEY_READED) || [];

        list.forEach(function (item) {
            var str = [item.points + ' point'];
            if (item.points > 1) {
                str.push('s');
            }
            str.push(', ' + item.comments + ' comment');
            if (item.comments > 1) {
                str.push('s');
            }

            item.meta = str.join('');

            item.read = readed.indexOf(item.id) >= 0;
        });
    }

    function Model(options) {
        this.data = [];

        Base.call(this, options);
    }

    inherits(Model, Base);

    Model.prototype.fetch = function (query) {
        var me = this;
        var url = this.url + (query.page ? '?page=' + query.page : '');

        return ajax.get(url).success(function (data) {
            var res = {};

            res.list = data.data || [];
            process(res.list);
            me.data = me.data.concat(res.list);
            me.moreToken = data.condition.more;
            res.more = !!me.moreToken;

            return res;
        });
    };

    Model.prototype.more = function () {
        var token = this.moreToken;
        if (token) {
            this.moreToken = null;
            return this.fetch({page: token});
        }
        else {
            return Resolver.rejected();
        }
    };

    return Model;

});
