import { task, src, dest } from 'gulp';
import * as gulpSass from 'gulp-sass';
import * as autoprefixer from 'autoprefixer';

/** gulp-postcss has no type definitions */
const postcss = require('gulp-postcss');

/**
 * Compiles SASS files to CSS
 * @param taskName
 * @param path
 * @param outPath
 * @param includePaths
 */
export function createSassTask(taskName: string, path: string, outPath: string, includePaths?: string[]): string {
  taskName = `sass:${taskName}`;
  const scssGlob = '/**/*.scss';
  if (path.slice(-scssGlob.length) !== scssGlob) {
    path += scssGlob;
  }
  task(taskName, () => {
    return src(path)
      .pipe(gulpSass(includePaths ? {includePaths} : undefined).on('error', gulpSass.logError))
      .pipe(postcss([autoprefixer()]))
      .pipe(dest(outPath));
  });
  return taskName;
}
