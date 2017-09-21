import { task, src, dest } from 'gulp';
import { CompilerOptions } from 'typescript';
import * as typescript from 'gulp-typescript';

/**
 * Compile all declared TypeScript sources to JavaScript with a
 * given tsConfig styled compilerOptions.
 * @param taskName 
 * @param rootPath 
 * @param destPath 
 * @param compilerOptions 
 */
export function createCompileTask(taskName: string, rootPath: string, destPath: string, compilerOptions: CompilerOptions): string {
    taskName = `compile:${taskName}`;
    task(taskName, () => {
        return src(`${rootPath}/**/*.ts`)
            .pipe(typescript(compilerOptions))
            .pipe(dest(destPath));
    });
    return taskName;
}
