/**
 * Configs file for bundling
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var path = require('path');
var pkg = require('./package.json');
var webpack = require('webpack');

module.exports = function(env, argv) {
  var isProduction = argv.mode === 'production';
  var FILENAME = pkg.name + (isProduction ? '.min.js' : '.js');
  var BANNER = [
    'TOAST UI Code Snippet',
    '@version ' + pkg.version,
    '@author ' + pkg.author,
    '@license ' + pkg.license
  ].join('\n');

  return {
    mode: 'development',
    entry: './index.js',
    output: {
      library: ['tui', 'util'],
      libraryTarget: 'umd',
      path: path.resolve(__dirname, 'dist'),
      publicPath: 'dist',
      filename: FILENAME
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            failOnError: isProduction
          }
        }
      ]
    },
    plugins: [
      new webpack.BannerPlugin(BANNER)
    ]
  };
};
