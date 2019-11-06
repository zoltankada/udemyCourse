const { series, src, dest } = require('gulp'),
    modernizr = require('gulp-modernizr');

function Modernizr() {
    return src(['./app/asstets/styles/**/*.css', './app/assets/scripts/**/*.js'])
        .pipe(modernizr({
            'options': ['setClasses'],
            'tests': [
                'svg',
                'flexbox'
            ]
        }))
        .pipe(dest('./app/temp/scripts/'));
}

exports.modernizr = series(Modernizr);