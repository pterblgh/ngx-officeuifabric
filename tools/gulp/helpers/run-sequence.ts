const gulpSequence = require('gulp-sequence');

export function runSequence(...tasks: string[]) {
    return (done: any) => {
        gulpSequence(
            ...tasks,
            done
        );
    };
}