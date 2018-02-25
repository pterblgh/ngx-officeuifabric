import { join } from 'path';
import { buildConfig } from 'build';
import { sass, copy, runSequence, inlineSources, ngc, clean } from 'gulp-helpers';
import { task } from 'gulp';

const { srcDir, projectDir } = buildConfig;

const path = {
  lib: join(srcDir, 'lib'),
  outTsc: {
    root: join(projectDir, 'out-tsc'),
    es2015: join(projectDir, 'out-tsc', 'lib-es2015'),
    es5: join(projectDir, 'out-tsc', 'lib-es5'),
  },
  temp: {
    root: join(projectDir, 'temp'),
    lib: join(projectDir, 'temp', 'lib'),
    es2015: join(projectDir, 'temp', 'lib', 'tsconfig.lib.json'),
    es5: join(projectDir, 'temp', 'lib', 'tsconfig.es5.json'),
  },
  dist: {
    root: join(projectDir, 'dist'),
    src: join(projectDir, 'dist', 'src'),
    esm2015: join(projectDir, 'dist', 'esm2015'),
    esm5: join(projectDir, 'dist', 'esm5'),
    bundle: join(projectDir, 'dist', 'bundle'),
  },
};

task('build:lib', runSequence(
  clean('out-tsc', path.outTsc.root),
  copy('temp', ['**/*'], { path: path.lib }, path.temp.lib),
  sass('lib', path.temp.lib, path.temp.lib, [`${path.temp.lib}/common/styles`]),
  inlineSources('lib', join(path.temp.lib, '**/*.component.ts'), path.temp.lib),
  ngc('es5', path.temp.es5),
  ngc('es2015', path.temp.es2015),
  clean('temp', path.temp.root),
  'bundle:lib',
));

task('bundle:lib', runSequence(
  clean('dist', path.dist.root),
  copy('metadata', ['**/*.metadata.json'], { path: path.outTsc.es2015 }, path.dist.root),
  copy('type-definitions:lib', ['**/*.d.ts'], { path: path.outTsc.es2015 }, path.dist.root),
  copy('esm5', ['**/*.js', '**/*.js.map'], { path: path.outTsc.es5 }, path.dist.esm5),
  copy('esm2015', ['**/*.js', '**/*.js.map'], { path: path.outTsc.es2015 }, path.dist.esm2015),
));
