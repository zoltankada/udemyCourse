const {task} = require('gulp');
const {watch} = require('gulp');

task('default', function(done) {
    console.log("yay, new gulp task here");
    done();
});

task('html', function(done) {
    console.log("imagine stuff happening to your html");
    done();
});

const watcher = watch(['./app/index.html']);
watcher.on('change', function () {
    task('html');
});