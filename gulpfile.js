const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');

/* -------- server --------*/
gulp.task('server', function() {
    browserSync.init({
    	port: 9000,
        server: {
            baseDir: "build"
        }
    });


    gulp.watch('build/**/*').on('change', browserSync.reload);
});

/* -------- pug compile --------*/
gulp.task('templates:compile', function buildHTML() {
  return gulp.src('source/template/index.pug')
  .pipe(pug({
    pretty: true
  }))
});
