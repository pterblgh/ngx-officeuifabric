import { task, src, dest } from 'gulp';
import * as gulpSass from 'gulp-sass';

/**
 * Compiles SASS files to CSS
 * @param taskName 
 * @param path 
 * @param outPath 
 */
export function createSassTask(taskName: string, path: string, outPath: string): string {
    taskName = `sass:${taskName}`;
    const scssGlob = '/**/*.scss';
    if (path.slice(scssGlob.length) !== scssGlob) {
        path += scssGlob;
    }
    task(taskName, () => {
        return src(path)
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(dest(outPath))
    });
    return taskName;
}
