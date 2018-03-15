import * as source from 'vinyl-source-stream';
import { task, dest } from 'gulp';

/** rollup-stream has no type definitions */
const rollupStream = require('rollup-stream');

export interface RollupConfig {
  input: string;
  format: 'amd' | 'cjs' | 'es' | 'iife' | 'umd' | 'system';
  name?: string;
  external: string[];
  output: {
    file: string;
  };
  sourcemap?: boolean;
  globals?: { [key: string]: string };
  plugins?: (() => void)[];
}

export function rollup(taskName: string, config: RollupConfig): string {
  taskName = `rollup:${taskName}`;
  task(taskName, () => {
    return rollupStream(config)
      .pipe(source(config.output.file))
      .pipe(dest('./'));
  });
  return taskName;
}
