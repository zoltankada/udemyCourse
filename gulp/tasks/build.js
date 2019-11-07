const { series, src, dest } = require('gulp');

function optimizeImages() {
    return src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
        .pipe()
        .pipe(dest("./dist/asstes/images"))
}

function build() {

}