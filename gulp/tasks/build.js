const { series, src, dest } = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

function previewDist(done) {
    browserSync.init({
        server: {
            baseDir: "docs"
        }
    });
    done();
}

function deleteDistFolder() {
    return del("./docs");
}

function optimizeImages() {
    return src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(dest("./docs/assets/images"));
}

function buildJSandCSS () {
    return src("./app/index.html")
        .pipe(usemin({
            css: [function() {return rev()}, function() {return cssnano()}],
            js: [function() {return rev()}, function() { return uglify()}]
        }))
        .pipe(dest("./docs"));
}

exports.build = series(deleteDistFolder, optimizeImages, buildJSandCSS, previewDist);