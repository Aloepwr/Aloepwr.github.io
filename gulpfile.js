const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');


gulp.task('prefix', () => {
  return gulp.src('/assets/stylesheets/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 10']
    }))
    .pipe(gulp.dest('/dist'));
});

gulp.task('minify', () => {
  return gulp.src('/assets/stylesheets/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('/dist'));
});

gulp.task('default', gulp.series('prefix', 'minify'));
