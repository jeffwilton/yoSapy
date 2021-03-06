var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var istanbul = require('gulp-istanbul');

gulp.task('test', function test(coverage) {
    gulp.src('app/*.js')
        .pipe(istanbul({
        	includeUntested: true
        }))
        .pipe(istanbul.hookRequire())
        .on('finish', function() {
            gulp.src(['test/*.js'])
                .pipe(jasmine())
                .pipe(istanbul.writeReports())
                .on('end', coverage);
        });
});
