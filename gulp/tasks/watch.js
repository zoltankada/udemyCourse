const { series, parallel, watch, src } = require('gulp'),
    styles = require('./styles'),
    browserSync = require('browser-sync').create();

function sync (done) {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
    done();
}

function cssInject () {
    return src('app/temp/styles/styles.css')
        .pipe(browserSync.stream());
}

function watchHtml () {
    watch('app/**/*.html', {events: 'change'}, function (done){
        browserSync.reload();
        done();
    });
}

function watchCss () {
    watch('app/assets/styles/**/*.css', {events: 'change'}, series(styles.postCss, cssInject));
}

exports.watch = series(sync, parallel(watchHtml, watchCss));