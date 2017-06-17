const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {

  gulp.src('./src/**/**.js').pipe(babel({
    "presets":["es2015-without-strict"],
    "plugins":[
      "transform-object-rest-spread",
    ]
  })).pipe(gulp.dest('lib'));
});
