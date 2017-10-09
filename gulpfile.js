/**
 * Created by SXDELL on 2017/10/9.
 */
var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
gulp.task('StyleFile',function(){
    gulp.src('./css/*.css')
        .pipe(concat('main.css'))
        .pipe(minifyCss())
        .pipe(rename({suffix:".min"}))
        .pipe(gulp.dest('dask'))
        .pipe(notify({message:'ok'}))

})
gulp.task('ScriptFile',function(){
    gulp.src('./js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({suffix:".min"}))
        .pipe(gulp.dest('dask'))
        .pipe(notify({message:'ok'}))

})
