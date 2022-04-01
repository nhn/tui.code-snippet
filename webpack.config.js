/**
 * Configs file for bundling
 */

'use strict';

var path = require('path');
var pkg = require('./package.json');
var webpack = require('webpack');
var TerserPlugin = require('terser-webpack-plugin');

function getOptimization(isMinified) {
  if (isMinified) {
    return {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
          extractComments: false
        })
      ]
    };
  }

  return {
    minimize: false
  };
}

module.exports = function(_, argv) {
  var isMinified = !!argv.minify;
  var FILENAME = pkg.name + (isMinified ? '.min.js' : '.js');
  var BANNER = [
    'TOAST UI Code Snippet',
    '@version ' + pkg.version,
    '@license ' + pkg.license
  ].join('\n');

  return {
    mode: 'production',
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
          test: /\.m?js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            failOnError: true
          },
          enforce: 'pre'
        }
      ]
    },
    plugins: [
      new webpack.BannerPlugin(BANNER)
    ],
    optimization: getOptimization(isMinified)
  };
};
