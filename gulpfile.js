// 获取 gulp
var gulp = require('gulp')
// 获取模块
var cleanCSS = require('gulp-clean-css')//压缩css
var sass = require('gulp-ruby-sass')//sass编译成css
var autoprefixer = require('gulp-autoprefixer')//添加浏览器兼容性前缀
var minjs = require('gulp-uglify')//压缩js
var rename = require('gulp-rename')//修改名称
var sourcemaps = require('gulp-sourcemaps');//sourcemaps(这里用于在浏览器上可直接查看sass)

//路径
var paths = {
	html: 'src/*.html',
	sass: ['src/sass/style.scss'],
	css: 'src/css/*.css',
	js: 'src/js/**/*.js',
	images: 'src/images/**/*',
};

//将sass文件编译成css
gulp.task('sass', function() {
    sass(paths.sass,{
    		style:'expanded',
    		sourcemap: true
    })
    .on('error', sass.logError)
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'Android >= 4.0'],
        cascade: true, 
        remove:true
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('src/css'))
});

//迁移并压缩css
gulp.task('css', function () {
    gulp.src(paths.css)
//  .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
})

//迁移html
gulp.task('html', function() {
    gulp.src(paths.html)
    .pipe(gulp.dest('dist'))
});

//迁移图片
gulp.task('images', function() {
    gulp.src(paths.images)
    .pipe(gulp.dest('dist/images'))
});

//压缩并迁移JS
gulp.task('js', function() {
    gulp.src(paths.js)
//  .pipe(minjs())
    .pipe(gulp.dest('dist/js'))
});



// 监听文件修改，当文件被修改则执行任务
gulp.task('auto', function () {
    gulp.watch(paths.sass, ['sass'])
    gulp.watch(paths.css, ['css'])
    gulp.watch(paths.html, ['html'])
    gulp.watch(paths.js, ['js'])
    gulp.watch(paths.images, ['images'])
});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动[]里的任务
gulp.task('default', [ 'css', 'html','images','js'])