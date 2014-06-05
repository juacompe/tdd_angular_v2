module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
          unit: {
            configFile: 'karma.conf.js',
            reporters: ['dots'],
            singleRun: false, 
          },
          ci: {
            configFile: 'karma.conf.js',
            reporters: ['junit'],
            junitReporter: {
              outputFile: 'build/reports/e2e/test-results.xml'
            },
            singleRun: true,
          }
        },
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.task.registerTask("test", ["karma:unit"]);
    grunt.task.registerTask("ci-test", ["karma:ci"]);
};

