const concat = require('gulp-concat'),
  gulp = require('gulp'),
  minify = require('gulp-minify');

// Make a collection of paths used by the various
// build steps
const paths = {
  wcscript: [
    './alert/js/dist/pearson-alert.js'
  ],
  dist: './build/',
};


function scripts(done) {
  gulp
    .src([
      './datepicker/js/dist/pearson-datepicker.js',
      './alert/js/dist/pearson-alert.js',
      './coachmark/js/dist/pearson-coachmark.js',
      './drawer/js/dist/pearson-drawer.js',
      './file-uploader/js/dist/pearson-file-upload.js',
      './footer/js/dist/pearson-footer.js',
      './loader/js/dist/pearson-loader.js',
      './modal/js/dist/pearson-modal.js',
      './progress-bar/js/dist/progress-bar.js',
      './tab-navigation/js/dist/pearson-tabs.js',
      './timepicker/js/dist/pearson-timepicker.js',
      './toggle/js/dist/pearson-toggle.js',
      './pagination/js/dist/pearson-pagination.js'
    ])
    .pipe(concat('pearson-web-components.js'))
    .pipe(minify())
    .pipe(gulp.dest(paths.dist));
  done();
}


const build = gulp.series(scripts);
exports.build = build;
exports.default = gulp.series(build);
