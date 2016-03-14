var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('default', function() {
    gulp.src('app/tests/test1.js')
        .pipe(mocha());
});