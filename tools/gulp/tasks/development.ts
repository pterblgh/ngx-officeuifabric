import { resolve } from 'path';
import { task, watch, src, dest } from 'gulp';
import * as gulpSass from 'gulp-sass';
import { server, reload } from 'gulp-connect';
import { runSequence, createCopyTask, createWatchTask, createCleanTask, createCompileTask, createSassTask } from 'gulp-helpers';
import { buildConfig } from 'build';

const demoApp = resolve(buildConfig.srcDir, 'demo-app');

const DEMO_APP_OUT_PATH = 'dist/demo-app';

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
        root: DEMO_APP_OUT_PATH,
    });
});

const compileTask = createCompileTask('demo-app:ts', demoApp, DEMO_APP_OUT_PATH, tscConfig.compilerOptions);
const sassTask = createSassTask('demo-app', 'src/demo-app/**/*.scss', DEMO_APP_OUT_PATH);

const watchers = [
    {
        name: 'demo-app:ts',
        path: `${demoApp}/**/*.ts`,
        tasks: [compileTask]
    },
    {
        name: 'demo-app:sass',
        path: `${demoApp}/**/*.scss`,
        tasks: [sassTask]
    }
];

const watchTask = watchers.map(watch => createWatchTask(watch.name, watch.path, watch.tasks));

task('build', runSequence(
    createCleanTask('demo-app', DEMO_APP_OUT_PATH),
    createCopyTask('demo-app:assets', ['**/*.html', '**/*.js'], { path: demoApp }, DEMO_APP_OUT_PATH),    
    createCopyTask('demo-app:vendor', vendor, { path: buildConfig.projectDir, base: './node_modules' }, `${DEMO_APP_OUT_PATH}/node_modules`),    
    compileTask,
    sassTask
));

task('development', runSequence(
    'build',
    ...watchTask,
    'connect'
));
