var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();


gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('./css'))
});


gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
    });
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
    gulp.watch("*.html").on("change", browserSync.reload);
    gulp.watch("html/*.html").on("change", browserSync.reload);

})