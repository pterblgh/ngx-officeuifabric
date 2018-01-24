import { resolve, join } from 'path';
import { buildConfig } from 'build';
import { createCompileTask, createSassTask, createCopyTask, runSequence, createWatchTask } from 'gulp-helpers';
import { task } from 'gulp';

const libPath = resolve(buildConfig.srcDir, 'lib');

const tsConfigPath = require(resolve(join(libPath, 'tsconfig.json')));

const LIB_OUT_PATH = 'dist/demo-app/lib';

/**
 * Include all SASS definitions from office-ui-fabric-core
 * and from the common/styles library
 */
const sassIncludePaths = [
    'node_modules/office-ui-fabric-core/src/sass/variables',
    `${libPath}/common/styles`,
];

const compileTask = createCompileTask('ngx-fabric:ts', libPath, LIB_OUT_PATH, tsConfigPath.compilerOptions);
const sassTask = createSassTask('ngx-fabric', libPath, LIB_OUT_PATH, sassIncludePaths);
const copyTask = createCopyTask('ngx-fabric:html', ['**/*.html'], { path: libPath }, LIB_OUT_PATH);

const watchers = [
    {
        name: 'lib:ts',
        path: `${libPath}/**/*.ts`,
        tasks: [compileTask],
    },
    {
        name: 'lib:sass',
        path: `${libPath}/**/*.scss`,
        tasks: [sassTask],
    },
    {
        name: 'lib:html',
        path: `${libPath}/**/*.html`,
        tasks: [copyTask],
    },
];

const watchTask = watchers.map(watch => createWatchTask(watch.name, watch.path, watch.tasks));

task('build:lib', runSequence(
    compileTask,
    sassTask,
    copyTask,
));

task('watch:lib', runSequence(...watchTask));
