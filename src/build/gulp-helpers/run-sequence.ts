/** gulp-sequence has no type definitions */
const gulpSequence = require('gulp-sequence');

export function runSequence(...tasks: string[]) {
  return (done: any) => {
    gulpSequence(
      ...tasks,
      done,
    );
  };
}
