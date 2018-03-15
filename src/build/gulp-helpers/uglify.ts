import * as uglify from 'gulp-uglify';
import { task, src, dest } from 'gulp';
import { join } from 'path';

/** gulp-rename has no type definitions */
const rename = require('gulp-rename');

export function uglifyJsFile(taskName: string, inputPath: string, outputPath: string): string {
  taskName = `uglify:${taskName}`;
  task(taskName, () => {
    return src(join(inputPath, '/**/*.js'))
      .pipe(uglify({ mangle: true }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(dest(outputPath));
  });
  return taskName;
}
