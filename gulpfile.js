const watch = require('./gulp/tasks/watch'),
    sprites = require('./gulp/tasks/sprites');


exports.watch = watch.watch;
exports.createSprite = sprites.createSprite;