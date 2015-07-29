var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');

var bsGridPath = '../global_test/src/frontend/jspm_packages/github/moshensky/aurelia-bs-grid@master';

gulp.task('copy', function() {
  del([bsGridPath], {
    force: true
  }, function (err, deletedFiles) {
    gulp.src(['dist/system/**/*']).pipe(gulp.dest(bsGridPath));
  });
});
