import { task, src, dest } from 'gulp';
import { join } from 'path';

/** gulp-cleanhtml has no type definitions */
const cleanhtml = require('gulp-cleanhtml');

export function htmlMin(taskName: string, inputPath: string, outputPath: string): string {
  taskName = `html-min:${taskName}`;
  task(taskName, () => {
    return src(join(inputPath, '/**/*.html'))
      .pipe(cleanhtml())
      .pipe(dest(outputPath));
  });
  return taskName;
}
