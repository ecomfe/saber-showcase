/**
 * @file list列表Model基类
 * @author saber team
 */

var inherits = require('saber-lang').inherits;
var Resolver = require('saber-promise');
var ajax = require('saber-ajax').ejson;
var BaseModel = require('saber-mm').Model;
var Storage = require('saber-storage');

var KEY_READED = 'readlist';
var storage = new Storage('local');

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
    BaseModel.call(this, options);
}

inherits(Model, BaseModel);

Model.prototype.fetch = function (query) {
    var me = this;
    var url = this.url + (query.page ? '?page=' + query.page : '');

    return ajax.get(url).success(function (data) {
        var res = {};

        res.list = data.data || [];
        process(res.list);
        var token = data.condition.more;
        me.set('token', token);
        res.more = !!token;

        return res;
    });
};

Model.prototype.more = function () {
    var token = this.del('token');
    if (token) {
        return this.fetch({page: token});
    }
    else {
        return Resolver.rejected();
    }
};

Model.prototype.getReaded = function () {
    return storage.getItem(KEY_READED) || [];
};

module.exports = Model;
