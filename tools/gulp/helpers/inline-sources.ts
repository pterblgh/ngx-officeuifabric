import { task, src, dest } from 'gulp';

/** gulp-inline-ng2-template has no type definitions */
const inlineResources = require('gulp-inline-ng2-template');

export function inlineSources(taskName: string, path: string, outPath: string): string {
  taskName = `inline-resources:${taskName}`;
  task(taskName, () => {
    return src(path)
      .pipe(inlineResources({ useRelativePaths: true }))
      .pipe(dest(outPath));
  });
  return taskName;
}
