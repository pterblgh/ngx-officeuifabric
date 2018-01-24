import {findBuildConfig} from './find-build-config';

export interface BuildConfig {
  /** Current version of the project. */
  projectVersion: string;
  /** Path to the root of the project. */
  projectDir: string;
  /** Path to the directory where all source code can be found. */
  srcDir: string;
  /** Path to the directory where the output will be stored. */
  outputDir: string;
}

// Search for a build config by walking up the current working directory of the Node process.
const buildConfigPath = findBuildConfig();

if (!buildConfigPath) {
  throw new Error(`"build-config.js" file could not be found in the project`);
}

// Load the config file using a basic CommonJS import.
export const buildConfig = require(buildConfigPath) as BuildConfig;
