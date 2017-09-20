import { resolve } from 'path';
import { task, watch, src, dest } from 'gulp';
import * as del from 'del';
import * as trypescript from 'gulp-typescript';
import * as gulpSass from 'gulp-sass';
import { server, reload } from 'gulp-connect';
import { runSequence } from 'gulp-helpers';
import { buildConfig } from 'build';

const demoApp = resolve(buildConfig.srcDir, 'demo-app');

const tscConfig = require(resolve(demoApp, 'tsconfig.json'));

task('clean', () => del('dist/**/*'));

task('copy:assets', () => {
    const assets = ['index.html', 'systemjs.config.js', 'systemjs-angular-loader.js'];
    return src(assets.map(asset => `${demoApp}/${asset}`))
        .pipe(dest('dist/demo-app'));
});

task('copy:vendor', () => {
    const vendor = [
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/@angular/**/*.js',
        'node_modules/rxjs/**/*.js',
    ];
    return src(vendor, { base: './node_modules' })
        .pipe(dest('dist/demo-app/node_modules'));
});

task('compile:ts', () => {
    return src('src/demo-app/**/*.ts')
    .pipe(trypescript(tscConfig.compilerOptions))
    .pipe(dest('dist/demo-app'))
    .pipe(reload());
});

task('connect', () => {
    server({
        root: 'dist/demo-app',
        livereload: true
    });
});

task('sass', () => {
    src('src/demo-app/**/*.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(dest('dist/demo-app'))
        .pipe(reload());
});

task('watch:ts', () => {
    watch('src/demo-app/**/*.ts', ['compile:ts']);
});

task('watch:sass', () => {
    watch('src/demo-app/**/*.scss', ['sass']);
});

task('build', runSequence(
    'clean', 
    'copy:assets', 
    'copy:vendor', 
    'compile:ts',
    'sass'
));

task('development', runSequence(
    'build',
    'watch:ts',
    'watch:sass',
    'connect'
));
