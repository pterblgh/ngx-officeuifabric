import { task } from 'gulp';
import * as del from 'del';

/**
 * Creates a task which deletes everything under the given path.
 * @param taskName
 * @param path
 */
export function clean(taskName: string, path: string): string {
  taskName = `clean:${taskName}`;
  task(taskName, () => del(path));
  return taskName;
}
