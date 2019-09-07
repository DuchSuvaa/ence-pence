var gulp = require('gulp');
var postcss = require('gulp-postcss');
var precss = require('precss');
var watch = require('gulp-watch');

gulp.task('stream', function () {
  var processors = [
    precss
  ];
    return watch('src/*.css', { ignoreInitial: false })
        .pipe(postcss(processors))
        .pipe(gulp.dest('dest'));
});
gulp.task("default", function () {
  gulp.start("stream");
});
