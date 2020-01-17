/**
 * Bundle and transpile ES6 files.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var path = require('path');
var webpack = require('webpack');

var defaultConfig = {
  mode: 'production',
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
      },
      {
        test: /\.mjs$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '/* eslint-disable */',
      raw: true
    })
  ],
  optimization: {
    minimize: false
  }
};

function createConfig(entry, output) {
  var splitOutput = output.split(/\/([^/]*)$/);

  return Object.assign(defaultConfig, {
    entry: entry,
    output: {
      libraryTarget: 'umd',
      libraryExport: 'default',
      path: path.resolve(__dirname, splitOutput[0]),
      filename: splitOutput[1]
    }
  });
}

module.exports = [createConfig('./ajax/index.mjs', './ajax/index.js')];
