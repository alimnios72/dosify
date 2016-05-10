var gulp = require('gulp');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var concat = require('gulp-concat');

gulp.task('styles', function() {
    gulp.src('css/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('coffee', function() {
    gulp.src('app/models/**/*.coffee')
        .pipe(coffee({bare:true}).on('error', gutil.log))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app/'));
});

gulp.task('test', function() {
    gulp.src('app/tests/test1.js')
        .pipe(mocha());
});

gulp.task('default',function() {
    gulp.watch('css/sass/**/*.scss',['styles']);
});