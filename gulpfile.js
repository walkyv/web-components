const concat = require('gulp-concat'),
  gulp = require('gulp'),
  minify = require('gulp-minify'),
  awspublish = require("gulp-awspublish"),
  path   = require('path'),
  rename = require('gulp-rename'),
  NEW_S3_DIRECTORY = 'components';

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
      './alert/js/dist/pearson-alert.js',
      './button-bar/js/dist/pearson-button-bar.js',
      './card/js/dist/pearson-card.js',
      './coachmark/js/dist/pearson-coachmark.js',
      './datepicker/js/dist/pearson-datepicker.js',
      './drawer/js/dist/pearson-drawer.js',
      './dropdown/js/dist/pearson-dropdown.js',
      './file-uploader/js/dist/pearson-file-upload.js',
      './footer/js/dist/pearson-footer.js',
      './header/js/dist/pearson-header.js',
      './loader/js/dist/pearson-loader.js',
      './modal/js/dist/pearson-modal.js',
      './pagination/js/dist/pearson-pagination.js',
      './progress-bar/js/dist/progress-bar.js',
      './tab-navigation/js/dist/pearson-tabs.js',
      './timepicker/js/dist/pearson-timepicker.js',
      './toggle/js/dist/pearson-toggle.js',

    ])
    .pipe(concat('pearson-web-components.js'))
    .pipe(minify())
    .pipe(gulp.dest(paths.dist));
  done();
}


const build = gulp.series(scripts);
exports.build = build;
exports.default = gulp.series(build);

gulp.task("publish", function() {
  var publisher = awspublish.create(
    {
      region: "sfo2",
      endpoint: "sfo2.digitaloceanspaces.com",
      params: {
        Bucket: "pearsonux"
      },
      accessKeyId: process.env.S3_KEY,
      secretAccessKey: process.env.S3_SECRET
    }
  );

  const headers = {
    "Cache-Control": "max-age=315360000, no-transform, public"
  };

  return (
    gulp
    .src("./build/pearson-web-components-min.js")
    .pipe(rename(function(filePath) {
      filePath.dirname = path.join(NEW_S3_DIRECTORY, filePath.dirname);
    }))
    .pipe(awspublish.gzip({ ext: ".gz" }))
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter())
  );
});

