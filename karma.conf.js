module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/test/js/**/*Spec.js',
            'src/main/webapp/js/servicejs.js'
        ],
        exclude: [
        ],
        preprocessors: {
            'src/main/webapp/js/servicejs.js': ['coverage']
        },
        reporters: ['progress', 'coverage', 'junit'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: [/*'Chrome',*/ /*'Firefox'*/ 'FirefoxHeadless'],
        customLaunchers: {
            'FirefoxHeadless': {
                base: 'Firefox',
                flags: [
                    '-headless'
                ]
            }
        },
        singleRun: false,
        concurrency: Infinity,
        coverageReporter: {
            type: 'html',
            dir: 'target/coverage/'
        },
        junitReporter: {
            outputDir: './target',
            suite: '',
            useBrowserName: true,
            properties: {},
            xmlVersion: null
        }
    });
};
