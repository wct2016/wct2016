/*----------------------------------------------------------------------------*/
/* Dependencies
/*----------------------------------------------------------------------------*/

var gulp           = require('gulp'),
    $              = require('gulp-load-plugins')({ pattern: ['gulp-*', 'gulp.*'], replaceString: /\bgulp[\-.]/}),
    argv           = require('yargs').argv,
    browserSync    = require('browser-sync'),
    runSequence    = require('run-sequence')
;

/*----------------------------------------------------------------------------*/
/* File Destinations
/*----------------------------------------------------------------------------*/

var paths = {
  'root'           : './',
  'vhost'          : 'wct2016.dev',
  'port'           : 3000,
// html
  'htmlDest'       : 'src/html/',
// images
  'imageDest'      : 'files/2016/',
  'imagePath'      : 'src/images/',
// jade
  'jadePath'       : 'src/jade/',
// scss
  'scssPath'       : 'src/scss/',
// css
  'cssDest'        : './',
// php
  'phpFiles'       : [ '*.php', '**/*.php' ]
};

var nodeSassConf = {
  includePaths  : [],
  outputStyle   : 'compressed'
};

/*----------------------------------------------------------------------------*/
/* initializing Foundation
/*----------------------------------------------------------------------------*/

gulp.task('npm:install', $.shell.task(['npm install foundation-sites']));

gulp.task('install:foundation', function() {
  return gulp.src('src/shell/', {read: false})
    .pipe($.shell(['bash src/shell/foundation.sh']));
});

gulp.task('init', function(cb) {
  runSequence('npm:install', 'install:foundation', cb);
});

/*----------------------------------------------------------------------------*/
/* build
/*----------------------------------------------------------------------------*/

gulp.task('zip:dist', function() {
  return gulp.src('src/shell/', {read: false})
    .pipe($.shell(['bash src/shell/zip.sh']));
});

/*----------------------------------------------------------------------------*/
/* BrowserSync
/*----------------------------------------------------------------------------*/

gulp.task('browser-sync', function() {
  var args = {};
  if (argv.mode == 'server' ) {
    args.server =  { baseDir: paths.root };
    args.startPath = paths.htmlDest;
  } else {
    args.proxy =  paths.vhost;
    args.open = 'external';
  };
  browserSync.init(args);
})

gulp.task('bs-reload', function() {
  browserSync.reload()
});

/*----------------------------------------------------------------------------*/
/* image tasks
/*----------------------------------------------------------------------------*/

gulp.task('image-min', function() {
  return gulp.src(paths.imageDest + 'pages/**/*.*')
    .pipe($.imagemin({ optimizationLevel: 3 }))
    .pipe(gulp.dest(paths.imageDest + 'pages/'))
    .pipe(browserSync.reload({ stream: true }));
});

// gulp.task('sprite', function() {
//   var spriteData = gulp.src(paths.imagePath + 'sprite/*.png')
//   .pipe($.spritesmith({
//     imgName: 'sprite.png',
//     imgPath: '../images/sprite.png',
//     cssName: '_sprite.scss',
//     algorithm: 'top-down',
//     padding: 20
//   }));
//   spriteData.img.pipe(gulp.dest(paths.imageDest));
//   spriteData.css.pipe(gulp.dest(paths.scssPath + 'core'));
// });

// gulp.task('sprite-svg', function() {
//   return gulp.src(paths.imagePath + 'sprite-svg/*.svg')
//     .pipe($.svgSprite({
//       dest: './',
//       mode: { symbol: { dest: './' } }
//     }))
//     .pipe($.rename({
//       basename: 'symbol',
//       dirname: './',
//       prefix: 'sprite' + '.'
//     }))
//     .pipe(gulp.dest(paths.imageDest));
// });

/*----------------------------------------------------------------------------*/
 /* Jade Tasks
/*----------------------------------------------------------------------------*/

gulp.task('jade', function() {
  return gulp.src(paths.jadePath + '*.jade')
    .pipe($.data(function(file) {
      return require('./setting.json');
    }))
    .pipe($.plumber())
    .pipe($.jade({ pretty: true }))
    .pipe(gulp.dest(paths.htmlDest))
    .pipe(browserSync.reload({ stream: true }));
});

/*----------------------------------------------------------------------------*/
/* Sass tasks
/*----------------------------------------------------------------------------*/

gulp.task('sass', function () {
  return gulp.src(paths.scssPath + '**/style.scss')
    // .pipe($.changed(paths.cssDest, {extension: '.css'}))
    .pipe($.sourcemaps.init())
    .pipe($.cssGlobbing({ extensions: ['.scss'] }))
    .pipe($.sass(nodeSassConf).on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie 10', 'ie 9'],
      cascade: false
    }))
    .pipe($.sourcemaps.write('maps', {
      includeContent: false,
      sourceRoot: paths.scssPath
    }))
    .pipe(gulp.dest(paths.cssDest))
    .pipe(browserSync.reload({ stream: true }));
});

/*----------------------------------------------------------------------------*/
/* gulp tasks
/*----------------------------------------------------------------------------*/

gulp.task('watch', function() {
  // gulp.watch([paths.imageDest + 'sprite/*.png'], ['sprite']);
  // gulp.watch([paths.imagePath + 'sprite-svg/*.svg'], ['sprite-svg'])
  gulp.watch([paths.htmlDest  + '*.html'], ['bs-reload']);
  gulp.watch([paths.phpFiles], ['bs-reload']);
  gulp.watch([paths.jadePath  + '**/*.jade'], ['jade']);
  gulp.watch([paths.scssPath  + '**/*.scss'], ['sass']);
});

gulp.task('default', [
  'browser-sync',
  'bs-reload',
  'image-min',
  'jade',
  'sass',
  // 'sprite',
  // 'sprite-svg',
  'watch'
]);
