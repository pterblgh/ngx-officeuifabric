import * as gulp from 'gulp';

/**
 * Creates a watch task which triggers other tasks to run
 * when any modification occures in the watched path.
 * @param taskName
 * @param path
 * @param trigger
 */
export function watch(taskName: string, path: string | string[], trigger: string[]): string {
  taskName = `watch:${taskName}`;
  gulp.task(taskName, () => gulp.watch(path, trigger));
  return taskName;
}
