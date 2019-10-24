const { parallel } = require('gulp'),
    requireDir = require('require-dir'),
    dir = requireDir('./gulp/tasks');

exports.watch = parallel(dir.watch);