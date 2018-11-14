var gulp = require("gulp"),
  deploy = require("gulp-gh-pages");

gulp.task("deploy", function() {
  return gulp.src("build/default/**/*").pipe(deploy());
});
