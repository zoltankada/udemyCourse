const { series, parallel, watch, src } = require('gulp'),
    styles = require('./styles'),
    scripts = require('./scripts'),
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

function watchScripts () {
    watch('./app/assets/scripts/**/*.js', {events: 'change'}, series(scripts.scripts, function (done){
        browserSync.reload();
        done();
    }));
}

exports.watch = series(sync, parallel(watchHtml, watchCss, watchScripts));