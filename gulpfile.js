const { parallel, watch, src, dest } = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested');

function itsworking (done){
    console.log('default is running yay');
    done();
}

function watchHtml (){
    watch('app/**/*.html', {events: 'change'}, function (done){
        console.log('something happened to your html :O');
        done();
    });
}

function watchCss (){
    watch('app/assets/styles/**/*.css', {events: 'change'}, function () {
        return src('app/assets/styles/styles.css')
            .pipe(postcss([cssvars, nested, autoprefixer]))
            .pipe(dest('app/temp/styles'));
    });
}

exports.default = itsworking;
exports.watch = parallel(watchHtml, watchCss);