import { task, src, dest } from 'gulp';
import { CompilerOptions } from 'typescript';
import * as typescript from 'gulp-typescript';

/**
 * Compile all declared TypeScript sources to JavaScript with a
 * given tsConfig styled compilerOptions.
 * @param taskName
 * @param path
 * @param outPath
 * @param compilerOptions
 */
export function createCompileTask(taskName: string, path: string, outPath: string, compilerOptions: CompilerOptions): string {
  taskName = `compile:${taskName}`;
  task(taskName, () => {
    return src(`${path}/**/*.ts`)
      .pipe(typescript(compilerOptions))
      .pipe(dest(outPath));
  });
  return taskName;
}
