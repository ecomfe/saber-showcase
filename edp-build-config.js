var epr = require( 'edp-provider-rider' );
var riderUI = require('rider-ui');

function stylusPlugin( style ) {
    style.use(epr.plugin());
    style.use(riderUI());
}

exports.stylus = epr.stylus;
exports.input = __dirname;

var path = require( 'path' );
exports.output = path.resolve( __dirname, 'output' );

// var moduleEntries = 'html,htm,phtml,tpl,vm,js';
// var pageEntries = 'html,htm,phtml,tpl,vm';

exports.getProcessors = function () {
    var stylusProcessor = new StylusCompiler({
            stylus: epr.stylus,
            compileOptions: {
                use: stylusPlugin
            },
            files: [
                'src/common/app.styl'
            ]
        });
    var html2jsCompiler = new Html2JsCompiler({
        extnames: 'tpl',
        combine: true
    });
    var html2jsCleanner = new Html2JsCompiler({
        extnames: 'tpl',
        clean: true
    });
    var cssProcessor = new CssCompressor();
    var moduleProcessor = new ModuleCompiler();
    var jsProcessor = new JsCompressor();
    var pathMapperProcessor = new PathMapper();
    var addCopyright = new AddCopyright();

    return {
        'default': [ stylusProcessor, html2jsCompiler, moduleProcessor, html2jsCleanner, pathMapperProcessor ],
        'release': [
            stylusProcessor, cssProcessor, html2jsCompiler, moduleProcessor, html2jsCleanner,
            jsProcessor, pathMapperProcessor, addCopyright
        ]
    };
};

exports.exclude = [
    'tool',
    'doc',
    'test',
    'module.conf',
    'dep/packages.manifest',
    'dep/*/*/test',
    'dep/*/*/doc',
    'dep/*/*/demo',
    'dep/*/*/tool',
    'dep/*/*/*.md',
    'dep/*/*/package.json',
    'edp-*',
    'node_modules',
    '.edpproj',
    '.svn',
    '.git',
    '.gitignore',
    '.idea',
    '.project',
    'Desktop.ini',
    'Thumbs.db',
    '.DS_Store',
    '*.tmp',
    '*.bak',
    '*.swp'
];

exports.injectProcessor = function ( processors ) {
    for ( var key in processors ) {
        global[ key ] = processors[ key ];
    }
};

