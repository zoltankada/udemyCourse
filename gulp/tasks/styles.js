const {src, dest} = require('gulp'),
    postcss = require('gulp-postcss'),
    cssImport = require('postcss-import'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    autoprefixer = require('autoprefixer');


function postCss () {
    return src('app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .pipe(dest('app/temp/styles'));
}

exports.postCss = postCss;