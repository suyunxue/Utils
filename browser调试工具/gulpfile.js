var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync',function  () {
	browserSync({
		server:{
			baseDir: "./bin"
		}
	});
	gulp.watch("./bin/**/*.*").on("change",browserSync.reload);
})