'use strict';

var path = require('path');
var pkg = require('./package.json');
var webpack = require('webpack');

var isProduction = process.argv.indexOf('-p') > -1;

var FILENAME = pkg.name + (isProduction ? '.min.js' : '.js');
var BANNER = [
    FILENAME,
    '@version ' + pkg.version,
    '@author ' + pkg.author,
    '@license ' + pkg.license
].join('\n');

module.exports = {
    eslint: {
        failOnError: isProduction
    },
    entry: {
        'entry': './src/index.js'
    },
    output: {
        libraryTarget: 'umd',
        library: ['tui', 'util'],
        path: path.resolve(__dirname, 'dist'),
        filename: FILENAME
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /(test|node_modules|bower_components)/,
                loader: 'eslint-loader'
            },
            {
                test: /\.png$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin(BANNER)
    ]
};
