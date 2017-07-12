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
        defaultConfig.plugins.push('karma-edge-launcher');
        defaultConfig.plugins.push('karma-webdriver-launcher');
        defaultConfig.customLaunchers = {
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
        };
        defaultConfig.browsers = [
            'IE8',
            'IE9',
            'IE10',
            'IE11',
            'Chrome-WebDriver',
            'Firefox-WebDriver',
            'Edge'
        ];
    } else {
        defaultConfig.browsers = [
            'Chrome',
            'Firefox',
            'Safari'
        ];
    }
}

module.exports = function(config) {
    var defaultConfig = {
        basePath: './',
        frameworks: ['jasmine'],
        files: [
            {
                pattern: 'node_modules/jquery/dist/jquery.min.js',
                watched: false
            },
            {
                pattern: 'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
                watched: false
            },
            {
                pattern: 'node_modules/jasmine-ajax/lib/mock-ajax.js',
                watched: false
            },
            'test/*.test.js'
        ],
        preprocessors: {
            './test/*.test.js': ['webpack'],
            'src/**/*.js': ['coverage']
        },
        webpack: {
            devtool: 'inline-source-map',
            module: {
                preLoaders: [
                    {
                        test: /\.js$/,
                        include: /src/,
                        exclude: /(bower_components|node_modules)/,
                        loader: 'eslint-loader',
                        options: {
                            failOnWarning: true
                        }
                    }
                ]
            }
        },

        webpackMiddleware: {
            noInfo: true
        },

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
            dir: 'report/coverage/',
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

        plugins: [
            'karma-jasmine',
            'karma-webpack',
            'karma-chrome-launcher',
            'karma-safari-launcher',
            'karma-firefox-launcher',
            'karma-coverage',
            'karma-junit-reporter'
        ],

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: true
    };

    setConfig(defaultConfig, process.env.SERVER);
    config.set(defaultConfig);
};
