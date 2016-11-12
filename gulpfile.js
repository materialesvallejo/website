var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    htmlmin = require('gulp-htmlmin'),
    gzip = require('gulp-gzip'),
    uglify = require('gulp-uglify'),
    sitemap = require('gulp-sitemap');

//  Minify and compress .html
gulp.task('markdown', function(){
  gulp.src('build/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/'))
});

//  Minify and compress .css
gulp.task('styles', function() {
  gulp.src('build/estilos/*.css')
    .pipe(cssmin())
    .pipe(gzip())
    .pipe(gulp.dest('build/estilos'));
});

//  Minify and compress .js
gulp.task('scripts', function () {
  gulp.src('build/javascript/*.js')
    .pipe(uglify())
    .pipe(gzip())
    .pipe(gulp.dest('build/javascript'))
});

//  Generate sitemap
gulp.task('sitemap', function() {
  gulp.src('build/**/*.html', {
    read: false
  })
  .pipe(sitemap({
    siteUrl: 'https://www.tymforest.com'
  }))
  .pipe(gulp.dest('./build'));
});

// Run previously declared tasks on `gulp`
gulp.task('build', ['markdown', 'styles', 'scripts', 'sitemap']);
