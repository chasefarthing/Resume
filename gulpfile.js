var gulp = require('gulp');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');



// LESS
gulp.task('sass', function() {
    return gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(''));
});





// Default task
gulp.task('default', function() {
    gulp.run('sass');
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('sass/*.scss', ['sass']).on('change', livereload.changed);
    gulp.watch('*').on('change', livereload.changed);
});
