var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");

gulp.task("sass", function() {
  return gulp
    .src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css/"))
    .pipe(browserSync.reload({ stream: true }));
});

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task(
  "serve",
  gulp.series("sass", function() {
    browserSync({
      server: {
        baseDir: "./"
      }
    });

    gulp.watch("sass/**/*.scss", gulp.series("sass"));
  })
);