const { series, src, pipe, dest, watch, parallel } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const zip = require('gulp-zip');

function compileScss() {
  return src('src/scss/**/*.scss')
    .pipe(scss().on('error', scss.logError))
    .pipe(dest('src/css'));
}

function cssMinify() {
  return src('src/css/index.css')
    .pipe(cssnano())
    .pipe(dest('src/css'))
}


function compileJS() {
  return src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(dest('src/js'));
}

function liveReload() {
  browserSync.init({
    server: './src'
  });

  watch('src/scss/**/*.scss', compileScss);
  watch("src/*.html").on('change', browserSync.reload);
}


function buildHTML() {
  return src('src/*.html').pipe(dest('build'));
}

function buildCSS() {
  return src('src/css/*.css').pipe(dest('build/css'));
}

function buildJS() {
  return src('src/js/main.js').pipe(dest('build/js'));
}

function archive() {
  return src('./build/*')
    .pipe(zip('archive.zip'))
    .pipe(dest('./'))
}

exports.build = series(parallel(buildHTML, buildCSS, buildJS), archive);
exports.cssMinify = cssMinify;
exports.js = compileJS;
exports.scss = compileScss;
exports.default = liveReload;

