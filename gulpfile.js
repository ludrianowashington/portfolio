const { src, dest, series, parallel, watch } = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const cssnano = require("cssnano");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();

const files = {
  jsPath: "./app/js/**/*.js",
  cssPath: "./app/scss/**/*.scss",
  htmlPath: "**/*.html",
  filesProd: "./app/dist",
  devCss: "./app/css/",
  devJs: "./app/js/",
};

function jsTask() {
  return src(files.jsPath)
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest(files.filesProd));
}

function cssTask() {
  return src(files.cssPath)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest(files.devCss))
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest(files.filesProd))
    .pipe(browserSync.stream());
}

function watchTask() {
  browserSync.init({
    server: {
      baseDir: ".",
      index: "index.html",
    },
  });
  watch([files.htmlPath, files.jsPath]).on("change", browserSync.reload);

  watch([files.cssPath, files.jsPath], parallel(cssTask, jsTask));
}

exports.default = series(parallel(cssTask, jsTask), watchTask);
