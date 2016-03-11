var gulp = require('gulp');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');

gulp.task('styles', function() {
    gulp.src('css/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('coffee', function() {
    gulp.src('app/coffee/**/*.coffee')
        .pipe(coffee({bare:true}).on('error', gutil.log))
        .pipe(gulp.dest('app/'));
});

gulp.task('default',function() {
    gulp.watch('css/sass/**/*.scss',['styles']);
});