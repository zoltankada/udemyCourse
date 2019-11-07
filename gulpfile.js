const { series } = require('gulp'),
    watch = require('./gulp/tasks/watch'),
    sprites = require('./gulp/tasks/sprites'),
    styles = require('./gulp/tasks/styles'),
    scripts = require('./gulp/tasks/scripts'),
    build = require('./gulp/tasks/build');


exports.watch = watch.watch;
exports.createSprite = sprites.createSprite;
exports.build = series(sprites.createSprite, styles.postCss, scripts.scripts, build.build);