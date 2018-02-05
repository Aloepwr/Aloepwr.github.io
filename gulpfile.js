const gulp = require('gulp');
const livereload = require('gulp-livereload');
const less = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix');
const LessCleanCSS = require('less-plugin-clean-css');

const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions', 'ie >= 10'] });
const cleanCSS = new LessCleanCSS();


gulp.task('less', () => {
  return gulp.src('./assets/stylesheets/styles.less')
    .pipe(less({
      paths: [ './assets/stylesheets' ],
      plugins: [ autoprefix, cleanCSS ]
    }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./assets/stylesheets/**/*.less', gulp.series(['less']));
})

gulp.task('default', gulp.series('watch'));
