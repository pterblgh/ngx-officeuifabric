import { resolve } from 'path';
import { task, watch, src, dest } from 'gulp';
import * as gulpSass from 'gulp-sass';
import { server, reload } from 'gulp-connect';
import { runSequence, createCopyTask, createWatchTask, createCleanTask, createCompileTask } from 'gulp-helpers';
import { buildConfig } from 'build';

const demoApp = resolve(buildConfig.srcDir, 'demo-app');

const tscConfig = require(resolve(demoApp, 'tsconfig.json'));

const vendor = [
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/@angular/**/*.js',
    'node_modules/rxjs/**/*.js',
];

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

const compileTask = createCompileTask('demo-app:ts', demoApp, 'dist/demo-app', tscConfig.compilerOptions);

const watchers = [
    {
        name: 'demo-app:ts',
        path: `${demoApp}/**/*.ts`,
        tasks: [compileTask]
    },
    {
        name: 'demo-app:sass',
        path: `${demoApp}/**/*.scss`,
        tasks: ['sass']
    }
];

const watchTask = watchers.map(watch => createWatchTask(watch.name, watch.path, watch.tasks));

task('build', runSequence(
    createCleanTask('demo-app', 'dist/demo-app'),
    createCopyTask('demo-app:assets', ['**/*.html', '**/*.js'], { path: demoApp }, 'dist/demo-app'),    
    createCopyTask('demo-app:vendor', vendor, { path: buildConfig.projectDir, base: './node_modules' }, 'dist/demo-app/node_modules'),    
    compileTask,
    'sass',
));

task('development', runSequence(
    'build',
    ...watchTask,
    'connect'
));
