import gulp from "gulp";
import imagemin from "gulp-imagemin";
import GulpCleanCss from "gulp-clean-css";
import minify from "gulp-minify";
import htmlmin from "gulp-htmlmin";
import removeHTMLComments from "gulp-remove-html-comments";

function minifyImages() {
  return gulp
    .src("assets/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("build/assets/images"));
}

function minifyIcons() {
  return gulp
    .src("assets/icons/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("build/assets/icons"));
}

function minifyCSS() {
  return gulp
    .src("assets/css/**/*")
    .pipe(GulpCleanCss())
    .pipe(gulp.dest("build/assets/css"));
}

function minifyJS() {
  return gulp
    .src("assets/js/**/*")
    .pipe(
      minify({
        noSource: true,
        ext: {
          min: ".js",
        },
      })
    )
    .pipe(gulp.dest("build/assets/js"));
}

function minifyHTML() {
  return gulp
    .src("index.html")
    .pipe(removeHTMLComments())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

function minifyFontsCSS() {
  return gulp
    .src("assets/css/*.css")
    .pipe(GulpCleanCss())
    .pipe(gulp.dest("build/assets/css"));
}

function copyFonts() {
  return gulp
    .src("assets/fonts/*.{otf,ttf,woff}")
    .pipe(gulp.dest("build/assets/fonts"));
}

function copyFavicon() {
  return gulp.src("assets/favicon.ico").pipe(gulp.dest("build/assets/"));
}

export default gulp.parallel(
  minifyImages,
  minifyIcons,
  minifyCSS,
  minifyJS,
  minifyHTML,
  minifyFontsCSS,
  copyFonts,
  copyFavicon
);
