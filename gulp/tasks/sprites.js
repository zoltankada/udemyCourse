const { series, src, dest } = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del'),
    svg2png = require('gulp-svg2png');

const config = {
    shape: {
        spacing: {
            padding: 1
        }
    },
    mode: {
        css: {
            variables: {
                replaceSvgWithPng: function () {
                    return function (sprite, render) {
                        return render(sprite).split('.svg').join('.png');
                    }
                }
            },
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

function createPngCopy() {
    return src('./app/temp/sprite/css/*svg')
        .pipe(svg2png())
        .pipe(dest("./app/temp/sprite/css"));
}

function copySpriteGraphic () {
    return src('./app/temp/sprite/css/**/*.{svg,png}')
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

exports.createSprite = series(beginClean, createSprite, createPngCopy, copySpriteGraphic, copySpriteCss, endClean);