import { join } from 'path';
import { buildConfig } from 'build';
import { sass, copy, runSequence, inlineSources, ngc, clean, rollup, RollupConfig, uglifyJsFile, htmlMin } from 'gulp-helpers';
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
    bundle: join(projectDir, 'dist', 'bundles'),
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
  htmlMin('tmp', path.tmp.src, path.tmp.src),
  sass('lib', path.tmp.src, path.tmp.src, [`${path.tmp.src}/common/styles`]),
  inlineSources('lib', join(path.tmp.src, '**/*.component.ts'), path.tmp.src),
  'clean:sources',
  ngc('esm5', join(path.tmp.src, 'tsconfig.esm5.json')),
  ngc('esm2015', join(path.tmp.src, 'tsconfig.esm2015.json')),
  'bundle:lib',
));

const rollupGlobals = {
  'tslib': 'tslib',

  '@angular/animations': 'ng.animations',
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/forms': 'ng.forms',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
  '@angular/cdk': 'ng.cdk',
  '@angular/cdk/overlay': 'ng.cdk.overlay',
  '@angular/cdk/portal': 'ng.cdk.portal',

  'rxjs/BehaviorSubject': 'Rx',
  'rxjs/Observable': 'Rx',
  'rxjs/Subject': 'Rx',
  'rxjs/Subscription': 'Rx',
  'rxjs/Observer': 'Rx',
  'rxjs/Subscriber': 'Rx',
  'rxjs/Scheduler': 'Rx',

  'rxjs/observable/combineLatest': 'Rx.Observable',
  'rxjs/observable/forkJoin': 'Rx.Observable',
  'rxjs/observable/fromEvent': 'Rx.Observable',
  'rxjs/observable/merge': 'Rx.Observable',
  'rxjs/observable/of': 'Rx.Observable',
  'rxjs/observable/throw': 'Rx.Observable',
  'rxjs/observable/defer': 'Rx.Observable',
  'rxjs/observable/fromEventPattern': 'Rx.Observable',
  'rxjs/observable/empty': 'Rx.Observable',

  'rxjs/operators/debounceTime': 'Rx.operators',
  'rxjs/operators/takeUntil': 'Rx.operators',
  'rxjs/operators/take': 'Rx.operators',
  'rxjs/operators/first': 'Rx.operators',
  'rxjs/operators/filter': 'Rx.operators',
  'rxjs/operators/map': 'Rx.operators',
  'rxjs/operators/tap': 'Rx.operators',
  'rxjs/operators/startWith': 'Rx.operators',
  'rxjs/operators/auditTime': 'Rx.operators',
  'rxjs/operators/switchMap': 'Rx.operators',
  'rxjs/operators/finalize': 'Rx.operators',
  'rxjs/operators/catchError': 'Rx.operators',
  'rxjs/operators/share': 'Rx.operators',
  'rxjs/operators/delay': 'Rx.operators',
  'rxjs/operators/combineLatest': 'Rx.operators',
};

const esm2015RollupConfig: RollupConfig = {
  input: join(path.tmp.esm2015, (require(join(path.tmp.src, 'tsconfig.esm2015.json'))).angularCompilerOptions.flatModuleOutFile),
  external: Object.keys(rollupGlobals),
  format: 'es',
  output: {
    file: join(path.dist.esm2015, (require(join(path.tmp.src, 'tsconfig.esm2015.json'))).angularCompilerOptions.flatModuleOutFile),
  },
};

const esm5RollupConfig: RollupConfig = {
  input: join(path.tmp.esm5, (require(join(path.tmp.src, 'tsconfig.esm5.json'))).angularCompilerOptions.flatModuleOutFile),
  external: Object.keys(rollupGlobals),
  format: 'es',
  output: {
    file: join(path.dist.esm5, (require(join(path.tmp.src, 'tsconfig.esm5.json'))).angularCompilerOptions.flatModuleOutFile),
  },
};

const umdRollupConfig: RollupConfig = {
  input: join(path.tmp.esm5, (require(join(path.tmp.src, 'tsconfig.esm5.json'))).angularCompilerOptions.flatModuleOutFile),
  format: 'umd',
  name: 'ngxOfficeUiFabric',
  external: Object.keys(rollupGlobals),
  output: {
    file: join(path.dist.bundle, `${(require(join(path.tmp.src, 'tsconfig.esm5.json'))).angularCompilerOptions.flatModuleId}.umd.js`),
  },
  globals: rollupGlobals,
};

task('bundle:lib', runSequence(
  clean('dist', path.dist.root),
  copy('metadata', ['**/*.metadata.json'], { path: path.tmp.esm2015 }, path.dist.root),
  copy('type-definitions:lib', ['*/**/*.d.ts'], { path: path.tmp.esm2015 }, path.dist.src),
  copy('type-definitions:lib', ['*.d.ts'], { path: path.tmp.esm2015 }, path.dist.root),
  copy('package.json', ['package.json'], { path: path.tmp.src }, path.dist.root),
  rollup('esm5', esm5RollupConfig),
  rollup('esm2015', esm2015RollupConfig),
  rollup('umd', umdRollupConfig),
  uglifyJsFile('umd', path.dist.bundle, path.dist.bundle),
));
