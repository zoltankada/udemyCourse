const { parallel, watch } = require('gulp');

function itsworking (done){
    console.log('default is running yay');
    done();
}

function watchHtml (){
    watch('./app/index.html', {events: 'change'}, function (done){
        console.log('something happened to your html :O');
        done();
    });
}

function watchCss (){
    watch('.app/assets/styles/**/*.css', {events: 'change'}, function (done) {
        console.log('something happened to your css :O');
        done();
    });
}

exports.default = itsworking;
exports.watch = parallel(watchHtml, watchCss);