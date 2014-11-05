/**
 * @file watch配置
 * @author edpx-mobile
 */

exports.baseDir = __dirname;

var globalFilters = {
    ignoreNodeModules: '!(node_modules/*|*/node_modules/*)',
    ignoreEdpPackages: '!dep/*',
    ignoreVCSFiles   : '!(*).(git|svn|idea)/*',
    ignoreIDEFiles   : '!(*).(DS_Store)',
    ignoreNodeConfig : '!(*)(.gitignore|packkage.json|*.md)'
};

var commonFilters = {
    staticFiles: '*.(tpl|html|js|coffee|less|styl|css|xml)',
    mediaFiles: '*.(gif|jpg|jpeg|png|swf|fla|mp3)'
};

exports.globalFilters = globalFilters;

exports.getTasks = function () {
    return {
        'livereload': {
            filters: [
                commonFilters.staticFiles,
                commonFilters.staticFiles
            ],
            events: [
                'addedFiles',
                'modifiedFiles'
            ],
            plugins: livereload(),
            intervalTime: 3000
        }
    };
};

exports.getGroups = function () {
    return {
        'default': ['livereload']
    };
};

exports.injectPlugin = function (plugins) {
    for (var key in plugins) {
        global[key] = plugins[key];
    }
};
