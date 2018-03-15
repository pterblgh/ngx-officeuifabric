import { task, src, dest } from 'gulp';
import * as sass from 'node-sass';
import * as postcss from 'postcss';

const autoprefixer = require('autoprefixer');

/** gulp-inline-ng2-template has no type definitions */
const inlineResources = require('gulp-inline-ng2-template');

function styleProcessor(path: string, _ext: string, _file: string, cb: (err: Error | null, result: string | null) => void) {
  sass.render({
    file: path,
    includePaths: ['node_modules/office-ui-fabric-core/src/sass/variables', 'src/lib/common/styles', 'src/lib/common/mixins'],
    outputStyle: 'compressed'
  }, (err, sassResult) => {
    if (err) {
      cb(err, null);
    } else {
      const css = sassResult.css.toString();
      postcss([autoprefixer])
        .process(css, { from: undefined })
        .then( (autoPrefixerResult: postcss.Result) => {
          autoPrefixerResult.warnings().forEach((warn: postcss.ResultMessage) => {
            console.warn(warn.toString());
          });
          cb(null, autoPrefixerResult.css);
        });
    }
  });
}

export function inlineSources(taskName: string, path: string, outPath: string): string {
  taskName = `inline-resources:${taskName}`;
  task(taskName, () => {
    return src(path)
      .pipe(inlineResources({ useRelativePaths: true, removeLineBreaks: true, styleProcessor }))
      .pipe(dest(outPath));
  });
  return taskName;
}
