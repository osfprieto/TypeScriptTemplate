const {
    task,
    cleanTask,
    tscTask,
    jestTask,
    series
} = require('just-scripts');

task('clean', cleanTask(['bin', 'dist', 'lib']));
task('jest', jestTask());
task('ts', tscTask({ build: 'tsconfig.json' }));

task('build', series('ts'));
task('test', series('jest'));
