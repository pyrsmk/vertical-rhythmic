var fs = require('fs'),
	gulp = require('gulp'),
	shell = require('gulp-shell');

var version = fs.readFileSync('README.md', {encoding:'utf8'}).match(/^[\w-]+ ([0-9.]+)/)[1];

// ======================================== gulp publish

gulp.task('publish', shell.task([
	"git tag -a "+version+" -m '"+version+"'",
	'git push --tags'
]));

// ======================================== gulp

gulp.task('default', ['publish']);
