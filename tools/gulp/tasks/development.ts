import { resolve } from 'path';
import { task} from 'gulp';
import { server} from 'gulp-connect';
import { runSequence, createCopyTask, createWatchTask, createCleanTask, createCompileTask, createSassTask } from 'gulp-helpers';
import { buildConfig } from 'build';

const demoAppPath = resolve(buildConfig.srcDir, 'demo-app');

const DEMO_APP_OUT_PATH = 'dist/demo-app';

const tscConfig = require(resolve(demoAppPath, 'tsconfig.json'));

const vendor = [
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/@angular/**/*.js',
    'node_modules/rxjs/**/*.js',
    'node_modules/office-ui-fabric-core/dist/css/fabric.css',
];

task('connect', () => {
    server({
        root: DEMO_APP_OUT_PATH,
    });
});

const compileTask = createCompileTask('demo-app:ts', demoAppPath, DEMO_APP_OUT_PATH, tscConfig.compilerOptions);
const sassTask = createSassTask('demo-app', demoAppPath, DEMO_APP_OUT_PATH);
const copyAssetsTask = createCopyTask('demo-app:assets', ['**/*.html', '**/*.js'], { path: demoAppPath }, DEMO_APP_OUT_PATH);

const watchers = [
    {
        name: 'demo-app:ts',
        path: `${demoAppPath}/**/*.ts`,
        tasks: [compileTask],
    },
    {
        name: 'demo-app:sass',
        path: `${demoAppPath}/**/*.scss`,
        tasks: [sassTask],
    },
    {
        name: 'demo-app:html',
        path: `${demoAppPath}/**/*.html`,
        tasks: [copyAssetsTask],
    },
];

const watchTasks = watchers.map(watch => createWatchTask(watch.name, watch.path, watch.tasks));

task('watch:demo-app', runSequence(...watchTasks));

task('build', runSequence(
    createCleanTask('demo-app', DEMO_APP_OUT_PATH),
    createCopyTask('demo-app:vendor', vendor, { path: buildConfig.projectDir, base: './node_modules' }, `${DEMO_APP_OUT_PATH}/node_modules`),
    copyAssetsTask,
    compileTask,
    sassTask,
    'build:lib',
));

task('development', runSequence(
    'build',
    'build:lib',
    'connect',
    'watch:demo-app',
    'watch:lib',
));
