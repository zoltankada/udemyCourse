const { series } = require('gulp'),
    webpack = require('webpack');

function scripts(callback) {
    webpack(require('../../webpack.config.js'), function (err, stats) {
        if(err) {
            console.log(err.toString());
        }

        console.log(stats.toString());
        callback();
    });
}

exports.scripts = series(scripts);