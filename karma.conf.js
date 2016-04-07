// Karma configuration
// Generated on Wed Oct 22 2014 11:36:33 GMT+0900 (KST)

module.exports = function(config) {
  var webdriverConfig = {
    hostname: 'fe.nhnent.com',
    port: 4444,
    remoteHost: true
  };


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
      'node_modules/jasmine-ajax/lib/mock-ajax.js',
      'src/**/*.js',
      'test/**/*.test.js',
      // 'test/array.test.js',
      // 'test/browser.test.js',
      // 'test/collection.test.js',
      // 'test/customEvent.test.js',
      // 'test/defineClass.test.js',
      // 'test/defineModule.test.js',
      // 'test/defineNamespace.test.js',
      // 'test/enum.test.js',
      // 'test/exMap.test.js',
      // 'test/formatDate.test.js'
      // 'test/func.test.js',
      // 'test/hashMap.test.js',
      // 'test/inheritance.test.js',
      // 'test/map.test.js',
      // 'test/object.test.js',
      // 'test/string.test.js',
      // 'test/tricks.test.js',
      // 'test/type.test.js'
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
      outputDir: 'report',
      suite: ''
    },

    coverageReporter: {
      dir : 'report/coverage/',
      reporters: [
        {
          type: 'html',
          subdir: function(browser) {
            return 'report-html/' + browser;
          }
        },
        {
          type: 'cobertura',
          subdir: function(browser) {
            return 'report-cobertura/' + browser;
          },
          file: 'cobertura.txt'
        }
      ]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'IE7', // Karma bug - 무한대기 (Karma 0.13.22, Karma-jasmine 0.3.8)
      // 'IE8',
      'IE9',
      'IE10',
      'IE11',
      'Chrome-WebDriver',
      'Firefox-WebDriver'
      , 'PhantomJS'
    ],

    customLaunchers: {
      'IE7': {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'internet explorer',
        version: 7
      },
      'IE8': {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'internet explorer',
        version: 8
      },
      'IE9': {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'internet explorer',
        version: 9
      },
      'IE10': {
        base: 'WebDriver',
        browserName: 'internet explorer',
        config: webdriverConfig,
        version: 10
      },
      'IE11': {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'internet explorer',
        version: 11
      },
      'Chrome-WebDriver': {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'chrome'
      },
      'Firefox-WebDriver': {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'firefox'
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
