'use strict';

var webdriverConfig = {
  hostname: 'fe.nhnent.com',
  port: 4444,
  remoteHost: true
};

/**
 * manipulate config by server
 * @param {Object} defaultConfig - base configuration
 * @param {'ne'|null|undefined} server - ne: team selenium grid, null or undefined: local machine
 */
function setConfig(defaultConfig, server) {
  if (server === 'ne') {
    defaultConfig.customLaunchers = {
      'IE8': {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'internet explorer',
        version: '8'
      },
      'IE9': {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'internet explorer',
        version: '9'
      },
      'IE10': {
        base: 'WebDriver',
        browserName: 'internet explorer',
        config: webdriverConfig,
        version: '10'
      },
      'IE11': {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'internet explorer',
        version: '11',
        platformName: 'windows'
      },
      'Edge': {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'MicrosoftEdge'
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
      // 'Safari-WebDriver': {
      //     base: 'WebDriver',
      //     config: webdriverConfig,
      //     browserName: 'safari'
      // }
    };
    defaultConfig.browsers = [
      // 'IE8' // TODO: fail due to babel
      'IE9',
      'IE10',
      'IE11',
      'Edge',
      'Chrome-WebDriver',
      'Firefox-WebDriver'
      // 'Safari-WebDriver'
    ];
    defaultConfig.reporters.push('coverage');
    defaultConfig.reporters.push('junit');
    defaultConfig.coverageReporter = {
      dir: 'report/coverage/',
      reporters: [{
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
      }]
    };
    defaultConfig.junitReporter = {
      outputDir: 'report/junit',
      suite: ''
    };
  } else {
    defaultConfig.browsers = ['ChromeHeadless'];
  }
}

module.exports = function(config) {
  var defaultConfig = {
    basePath: './',
    frameworks: ['fixture', 'jasmine-ajax', 'jasmine'],
    files: [
      'test/*.spec.js'
    ],
    preprocessors: {
      './test/*.spec.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots'],
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            enforce: 'pre'
          },
          {
            test: /\.mjs$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true
  };

  /* eslint-disable */
    setConfig(defaultConfig, process.env.KARMA_SERVER);
    config.set(defaultConfig);
};
