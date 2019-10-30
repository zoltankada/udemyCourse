const { series, src, dest } = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del');

const config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}

function beginClean () {
    return del(['./app/temp/sprite', './app/assets/images/sprites']);
}

function createSprite () {
    return src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(dest('./app/temp/sprite/'));
}

function copySpriteGraphic () {
    return src('./app/temp/sprite/css/**/*.svg')
        .pipe(dest('./app/assets/images/sprites'));
}

function copySpriteCss () {
    return src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(dest('./app/assets/styles/modules'));
}

function endClean () {
    return del('./app/temp/sprite');
}

exports.createSprite = series(beginClean, createSprite,copySpriteGraphic, copySpriteCss, endClean);