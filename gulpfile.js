var gulp          = require('gulp');
var sass          = require('gulp-sass');
var nodemon       = require('nodemon');
var uglify        = require('gulp-uglify');
var imagemin      = require('gulp-imagemin');
var plumber       = require('gulp-plumber');
var browserSync   = require('browser-sync');
var autoprefixer  = require('gulp-autoprefixer');

gulp.task('default', ['sass', 'scripts', 'imgs', 'browserSync' ],function(){})

gulp.task('sass', function() {
  return gulp.src('./src/sass/main.sass')
          .pipe(sass().on('error', sass.logError))
          .pipe(plumber())
          .pipe(autoprefixer({
            browser: ['last 2 versions'],
            cascade: false
          }))
          .pipe(gulp.dest('./public/css/'))
          .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function() {
  return gulp.src('./src/js/functions.js')
          .pipe(plumber())
          .pipe(gulp.dest('./public/js/'))
          .pipe(browserSync.reload({stream: true}))
});

gulp.task('imgs', function() {
  return gulp.src('./src/imgs/*')
          .pipe(imagemin({
            progressive: true
          }))
          .pipe(gulp.dest('./public/imgs/'))
});

gulp.task('browserSync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: 'http://localhost:8080',
    files: ['views/index.ejs'],
    port: 9000
  });

  gulp.watch('./src/sass/**/*.sass', ['sass']);
  gulp.watch('./src/js/*.js', ['scripts']);
  gulp.watch('./**/*.ejs').on('change', browserSync.reload);
})

gulp.task('nodemon', function(cb) {
  var started = false;

	return nodemon({
		script: 'app.js'
	}).on('start', function () {

		if (!started) {
			cb();
			started = true;
		}
	});
})
