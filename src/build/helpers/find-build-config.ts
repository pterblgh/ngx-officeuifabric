import { resolve, dirname, join } from 'path';
import { existsSync } from 'fs';

/** Name of the build config file. */
const BUILD_CONFIG_FILENAME = 'build-config.js';

export function findBuildConfig(): string | null {
  let currentDirectory = process.cwd();

  while (!existsSync(resolve(currentDirectory, BUILD_CONFIG_FILENAME))) {
    const parentDir = dirname(currentDirectory);

    if (parentDir === currentDirectory) {
      return null;
    }

    currentDirectory = parentDir;
  }

  return join(currentDirectory, BUILD_CONFIG_FILENAME);
}
