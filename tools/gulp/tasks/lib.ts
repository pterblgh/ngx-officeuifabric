import { join } from 'path';
import { buildConfig } from 'build';
import { sass, copy, runSequence, inlineSources, ngc, clean } from 'gulp-helpers';
import { task } from 'gulp';

const { srcDir, projectDir } = buildConfig;

const path = {
  lib: join(srcDir, 'lib'),
  tmp: {
    root: join(projectDir, 'tmp'),
    src: join(projectDir, 'tmp', 'src'),
    esm2015: join(projectDir, 'tmp', 'esm2015'),
    esm5: join(projectDir, 'tmp', 'esm5'),
  },
  dist: {
    root: join(projectDir, 'dist'),
    src: join(projectDir, 'dist', 'src'),
    esm2015: join(projectDir, 'dist', 'esm2015'),
    esm5: join(projectDir, 'dist', 'esm5'),
    bundle: join(projectDir, 'dist', 'bundle'),
  },
};

task('clean:sources', runSequence(
  clean('tmp:html', `${path.tmp.src}/**/*.html`),
  clean('tmp:sass', `${path.tmp.src}/**/*.scss`),
  clean('tmp:css', `${path.tmp.src}/**/*.css`),
));

task('build:lib', runSequence(
  clean('tmp', path.tmp.root),
  copy('tmp', ['**/*'], { path: path.lib }, path.tmp.src),
  sass('lib', path.tmp.src, path.tmp.src, [`${path.tmp.src}/common/styles`]),
  inlineSources('lib', join(path.tmp.src, '**/*.component.ts'), path.tmp.src),
  'clean:sources',
  ngc('esm5', join(path.tmp.src, 'tsconfig.esm5.json')),
  ngc('esm2015', join(path.tmp.src, 'tsconfig.esm2015.json')),
  'bundle:lib',
));

task('bundle:lib', runSequence(
  clean('dist', path.dist.root),
  copy('metadata', ['**/*.metadata.json'], { path: path.tmp.esm2015 }, path.dist.root),
  copy('type-definitions:lib', ['**/*.d.ts'], { path: path.tmp.esm2015 }, path.dist.root),
  copy('esm5', ['**/*.js', '**/*.js.map'], { path: path.tmp.esm5 }, path.dist.esm5),
  copy('esm2015', ['**/*.js', '**/*.js.map'], { path: path.tmp.esm2015 }, path.dist.esm2015),
));
