var gulp  = require('gulp');
var react = require('gulp-react');


var VIEWS_PATH      = 'src/*.html';
var COMPONENTS_PATH = 'src/**/*.js';


gulp.task('views', function() {
  return gulp.src(VIEWS_PATH)
    .pipe(gulp.dest('build'));
});


gulp.task('components', function () {
  return gulp.src(COMPONENTS_PATH)
    .pipe(react())
    .pipe(gulp.dest('build'));
});


gulp.task('watch', function() {
  gulp.watch(VIEWS_PATH, ['views'])
  gulp.watch(COMPONENTS_PATH, ['components'])
});


gulp.task('compile', ['views', 'components']);


gulp.task('default', ['compile', 'watch']);
