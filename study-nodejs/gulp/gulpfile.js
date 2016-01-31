var path = require('path');
var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var sass = require('gulp-sass');
var stripDebug = require('gulp-strip-debug');

var src = 'public/src';
var dist = 'public/dist';

var paths = {
  files: {
    js: src + '/js/**/*.js',
    sass: [src + '/sass/**/*.scss', src + '/sass/**/*.sass'],
    html: src + '/**/*.html',
    distJs: dist + '/js/**/*.js',
    distCss: dist + '/css/**/*.css',
    distHtml: dist + '/**/*.html'
  },
  js: src + '/js',
  sass: src + '/sass',
  distJs: dist + '/js',
  distCss: dist + '/css'
};

gulp.task('clean', function() {
  return del(dist);
});

gulp.task('combine-js', function() {
  return gulp.src(paths.files.js)
  .pipe(concat('all.js'))
  .pipe(stripDebug())
  .pipe(gulp.dest(paths.distJs));
});

gulp.task('compile-sass', function() {
  return gulp.src(paths.files.sass)
  .pipe(sass())
  .pipe(gulp.dest(paths.distCss));
});

gulp.task('default', ['clean', 'combine-js', 'compile-sass']);
