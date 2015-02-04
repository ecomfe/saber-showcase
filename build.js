/**
 * @file build
 * @author treelite(c.xinle@gmail.com)
 */

var fs = require('fs');
var path = require('path');
var html2js = require('html2js');

function compileTPL(dir) {
    var files = fs.readdirSync(dir);
    var stat;

    files.forEach(function (file) {
        file = path.resolve(dir, file);
        stat = fs.statSync(file);

        if (stat.isDirectory()) {
            compileTPL(file);
        }
        else if (stat.isFile() && path.extname(file) == '.tpl') {
            console.log('compile %s to %s', file, file + '.js');
            var data = fs.readFileSync(file, 'utf8');
            data = html2js(data, {wrap: 'commonjs'}) + '\n';
            fs.writeFileSync(file + '.js', data, 'utf8');
        }
    });
}

compileTPL(path.resolve(__dirname, 'lib'));
