import { task, watch } from 'gulp';

/**
 * Creates a watch task which triggers other tasks to run
 * when any modification occures in the watched path.
 * @param taskName 
 * @param watchPath 
 * @param trigger 
 */
export function createWatchTask(taskName: string, watchPath: string, trigger: string[]): string {
    taskName = `watch:${taskName}`;
    task(taskName, () => watch(watchPath, trigger));
    return taskName;
}
