import { task, src, dest } from 'gulp';

export interface SrcConfig {
  path: string;
  base?: string;
}

/**
 * Creates a task which copy a single file or multiple files given by
 * their exact name or with globs. Do not provide the full path to the
 * files, use the srcConfig variable instead.
 * @param taskName
 * @param files
 * @param srcConfig
 * @param outPath
 */
export function copy(taskName: string, files: string[], srcConfig: SrcConfig, outPath: string): string {
  taskName = `copy:${taskName}`;
  task(taskName, () => {
    return src(files.map(file => `${srcConfig.path}/${file}`), srcConfig.base ? {base: srcConfig.base} : undefined)
      .pipe(dest(outPath));
  });
  return taskName;
}
