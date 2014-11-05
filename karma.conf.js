// Karma configuration
// Generated on Wed Oct 22 2014 11:36:33 GMT+0900 (KST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/jquery/jquery.js',
      'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
      'src/**/*.js',
      'test/**/*.test.js'
    ],

    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-ievms',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-safari-launcher',
      'karma-slimerjs-launcher',
      'karma-phantomjs-launcher',
      'karma-junit-reporter'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      'dots',
      'junit',
      'coverage'
    ],

    junitReporter: {
      outputFile: 'report/junit-result.xml',
      suite: ''
    },

    coverageReporter: {
      type: 'html',
      dir: 'report/coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    _browsers: ['PhantomJS'], //로컬에서 작게 테스트할 용도

    browsers: [
      'IE7 - WinXP',
      'IE8 - WinXP',
      'IE9 - Win7',
      'IE11 - Win7',
      'Chrome',
      'SlimerJS',
      'PhantomJS'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
