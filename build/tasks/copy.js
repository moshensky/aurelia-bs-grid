var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');


gulp.task('copy', function() {
  del([paths.bsGridPath], {
    force: true
  }, function (err, deletedFiles) {
    gulp.src(['dist/amd/**/*']).pipe(gulp.dest(paths.bsGridPath));
  });
});
