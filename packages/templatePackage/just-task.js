const {
    task,
    cleanTask,
    tscTask,
    series
} =  require('just-scripts');

task('clean', cleanTask(['bin', 'dist', 'lib']));
task('ts', series(tscTask({ build: 'tsconfig.json' }), () => {console.log('kmas')}));
task('build', series('ts'));
