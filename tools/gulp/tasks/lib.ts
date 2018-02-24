import { join } from 'path';
import { buildConfig } from 'build';
import { sass, copy, runSequence, inlineSources, ngc, clean } from 'gulp-helpers';
import { task } from 'gulp';

const { srcDir, projectDir } = buildConfig;

const path = {
  lib: join(srcDir, 'lib'),
  outTsc: join(projectDir, 'out-tsc'),
  temp: {
    root: join(projectDir, 'temp'),
    lib: join(projectDir, 'temp', 'lib'),
    es2015: join(projectDir, 'temp', 'lib', 'tsconfig.lib.json'),
    es5: join(projectDir, 'temp', 'lib', 'tsconfig.es5.json'),
  },
};

task('build:lib', runSequence(
  clean('out-tsc', path.outTsc),
  copy('temp', ['**/*'], { path: path.lib }, path.temp.lib),
  sass('lib', path.temp.lib, path.temp.lib, [`${path.temp.lib}/common/styles`]),
  inlineSources('lib', join(path.temp.lib, '**/*.component.ts'), path.temp.lib),
  ngc('es2015', path.temp.es2015),
  ngc('es5', path.temp.es5),
  clean('temp', path.temp.root),
));
