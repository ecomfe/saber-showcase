var epr = require( 'edp-provider-rider' );
var riderUI = require('rider-ui');

function stylusConfig( style ) {
    style.use(epr.plugin());
    style.use(riderUI());
}
exports.stylus = epr.stylus;

exports.port = 8848;
exports.directoryIndexes = true;
exports.documentRoot = __dirname;
exports.getLocations = function () {
    return [
        {
            location: /\/$/,
            handler: [
                home( 'index.html' ),
                livereload()
            ]
        },
        {
            location: /\.css($|\?)/,
            handler: [
                autocss({
                    stylus: {
                        use: stylusConfig
                    }
                })
            ]
        },
        {
            location: /\.tpl\.js($|\?)/,
            handler: [
                html2js()
            ]
        },
        {
            location: /\/(feed|post)\/.*$/,
            handler: [
                function (context) {
                    delete context.request.headers.host;
                },
                proxy('startupnews.duapp.com')
            ]
        },
        {
            location: /^.*$/,
            handler: [
                file(),
                proxyNoneExists()
            ]
        }
    ];
};

exports.injectResource = function ( res ) {
    for ( var key in res ) {
        global[ key ] = res[ key ];
    }
};
