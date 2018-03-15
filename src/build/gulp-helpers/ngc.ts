import { task } from 'gulp';
import { main as ngcCli } from '@angular/compiler-cli/src/main';

export function ngc(taskName: string, project: string): string {
  taskName = `ngc:${taskName}`;
  task(taskName, () => {
    return ngcCli(['-p', project]);
  });
  return taskName;
}
