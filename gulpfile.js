/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp'),
        minifyHtml = require('gulp-minify-html'),
        minifyCss = require('gulp-minify-css'),
        uglify = require('gulp-uglify'),
        concat = require('gulp-concat'),
        imagemin = require('gulp-imagemin');


var basePath = './public_html/';
var path = basePath + 'dist';


//Main function
gulp.task('default', function () {
    gulp.start('minify-js');
    gulp.start('prepareCss');
    //gulp.start('optimizeImages');
    gulp.start('minify-html');
});

gulp.task('minify-html', function () {
    gulp.src('./public_html/html/*.html')
            .pipe(minifyHtml())
            .pipe(gulp.dest(path));
});

gulp.task('minify-js', function () {
    gulp.src(basePath + 'js/*.js')
            .pipe(uglify())
            .pipe(gulp.dest(path));
});

gulp.task('prepareCss', function () {
    gulp.src(basePath + 'css/*.css')
            .pipe(minifyCss())
            .pipe(concat('myStyles.css'))
            .pipe(gulp.dest(path));
});

gulp.task('watchHtml', function () {
    gulp.watch([basePath + 'html/*.html'], ['minify-html']);
    gulp.watch([basePath + 'js/*.js'], ['minify-js']);
    gulp.watch([basePath + 'css/*.css'], ['prepareCss']);

});
gulp.task('watchJs', function () {
    gulp.watch([basePath + 'js/*.js'], ['minify-js']);
});
gulp.task('watchCss', function () {
    gulp.watch([basePath + 'css/*.css'], ['prepareCss']);
});

/*gulp.task('optimizeImages', function () {
 gulp.src(basePath + 'imgs/*.*')
 .pipe(imagemin())
 .pipe(basePath + 'imgs');
 });*/