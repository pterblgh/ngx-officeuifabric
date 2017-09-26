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
    task(taskName, () => {
        return src(path)
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(dest(outPath))
    });
    return taskName;
}