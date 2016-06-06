import gulp from 'gulp';
import source from 'vinyl-source-stream';
import scssToJson from 'scss-to-json';
import pug from 'gulp-pug';
import sass from 'gulp-sass';
import str from 'underscore.string';
import gulpCopy from'gulp-copy';

import browserify from 'browserify';
import babelify from 'babelify';
import collapse from 'bundle-collapser/plugin';

import del from 'del';
const debug = false;
const src = {
	image : './image/*',
	view : './src/view/*.pug',
	style : './src/style/**/*.scss',
	script : './src/script/**/*.js',
	launcher : './src/script/app.js',
	lib : './src/script/lib.js',
	config : './src/style/config/_classnames.scss'
};

const rootPath = 'dist';

gulp.task('clean', () => del(rootPath) );

gulp.task('image', () => gulp.src(src.image).pipe(gulpCopy(rootPath)));

gulp.task('view', () => {
	let isClass = scssToJson(src.config);
	for (var i in isClass) {
		isClass[ str.camelize(i.replace(/\$|class|\-name|grid\-/gim, ''), true) ] = isClass[i];
		delete isClass[i];
	}

	return gulp.src(src.view)
		.pipe(pug({
			locals: {
				name : isClass,
			}
		}))
		.pipe(gulp.dest(rootPath));
});

gulp.task('lib', () => browserify({
		entries: src.lib,
		debug,
		insertGlobals : false
	})
	.transform(babelify, {
		sourceMaps: debug,
		sourceMapsAbsolute: false,
		presets : ["es2015", "angular2" ], 
		plugins : ["transform-object-assign"],
		comments : debug,
		compact : debug,
		minified : !debug
	})
	.plugin(collapse)
	.transform({
		sourcemap: debug,
		global : true
	}, 'uglifyify')
	.bundle()
	.pipe(source('lib.js'))
	.pipe(gulp.dest(rootPath)));

gulp.task('launcher', () => browserify({
		entries: src.launcher,
		debug,
		insertGlobals : false
	})
	.transform(babelify, {
		sourceMaps: debug,
		sourceMapsAbsolute: false,
		presets : ["es2015", "angular2" ], 
		plugins : ["transform-object-assign"],
		comments : debug,
		compact : debug,
		minified : !debug
	})
	.transform({
		sourcemap: debug,
		global : true
	}, 'uglifyify')
	.plugin(collapse)
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest(rootPath)));

gulp.task('style', () => gulp.src(src.style)
		.pipe(sass({
			includePaths: [
				'./src/style/contrib/'
			],
			outputStyle: debug ? 'nested' : 'compact',
			sourceComments : debug
		}).on('error', sass.logError))
		.pipe(gulp.dest(rootPath)));

gulp.task('watch', ['default'] , () => {
	gulp.watch(src.image, ['image']);
	gulp.watch(src.view, ['view']);
	gulp.watch(src.style, ['style']);
	gulp.watch(src.script, [ 'lib', 'launcher']);
});

gulp.task('default', [ 'view', 'style', 'lib', 'launcher', 'image']);
