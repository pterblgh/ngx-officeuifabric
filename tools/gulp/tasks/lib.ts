import { resolve, join } from 'path';
import { buildConfig } from 'build';
import { createCompileTask, createSassTask, createCopyTask, runSequence, createWatchTask } from 'gulp-helpers';
import { task } from 'gulp';

const libPath = resolve(buildConfig.srcDir, 'lib');

const tsConfigPath = require(resolve(join(libPath, 'tsconfig.json')));

const LIB_OUT_PATH = 'dist/demo-app/lib';

const compileTask = createCompileTask('ngx-fabric:ts', libPath, LIB_OUT_PATH, tsConfigPath.compilerOptions);
const sassTask = createSassTask('ngx-fabric', libPath, LIB_OUT_PATH);
const copyTask = createCopyTask('ngx-fabric:html', ['**/*.html'], { path: libPath }, LIB_OUT_PATH);

const watchers = [
    {
        name: 'lib:ts',
        path: `${libPath}/**/*.ts`,
        tasks: [compileTask]
    },
    {
        name: 'lib:sass',
        path: `${libPath}/**/*.scss`,
        tasks: [sassTask]
    }
];

const watchTask = watchers.map(watch => createWatchTask(watch.name, watch.path, watch.tasks));

task('build:lib', runSequence(
    compileTask,
    sassTask,
    copyTask,
    ...watchTask
));
