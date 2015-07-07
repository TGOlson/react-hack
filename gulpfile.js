var gulp       = require('gulp');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var shell      = require('gulp-shell');


var VIEWS_PATH           = 'src/*.html';
var APP_ENTRY_POINT      = 'src/app.js';
var COMPONENTS_SPEC_PATH = 'src/**/*.spec.js';
var COMPONENTS_PATH      = 'src/**/*.js';


gulp.task('build:compile:views', function() {
  return gulp.src(VIEWS_PATH)
    .pipe(gulp.dest('./build'));
});


gulp.task('build:compile:components', function() {
  return browserify(APP_ENTRY_POINT, {debug: true})
    .transform(babelify)
    .bundle()
    .on('error', logBundleError)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/js'));
});

function logBundleError(err) {
  console.log('Error bundling components: ', err.message);
}


gulp.task('watch', function() {
  gulp.watch(VIEWS_PATH, ['build:compile:views'])
  gulp.watch([COMPONENTS_PATH, '!' + COMPONENTS_SPEC_PATH], ['build:compile:components'])
});


gulp.task('test:units', shell.task('jasmine'));


gulp.task('test:tdd', ['test:units'], function() {
  gulp.watch(COMPONENTS_SPEC_PATH, ['test:units'])
});


gulp.task('build:compile', ['build:compile:views', 'build:compile:components']);


gulp.task('default', ['build:compile', 'watch', 'test:tdd']);
