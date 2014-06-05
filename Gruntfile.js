module.exports = function(grunt) {
    var karma, unit, ci;

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: karmaConfig(), 
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.task.registerTask("test", ["karma:unit"]);
    grunt.task.registerTask("ci-test", ["karma:ci"]);
};

function karmaConfig() {
    unit = {
        configFile: 'karma.conf.js',
        reporters: ['dots'],
        singleRun: false, 
    };
    ci = {
        configFile: 'karma.conf.js',
        reporters: ['junit'],
        junitReporter: {
            outputFile: 'build/reports/test-results.xml'
        },
        singleRun: true,
    };
    karma = {
        unit: unit,
        ci: ci, 
    };
    return karma;
};
