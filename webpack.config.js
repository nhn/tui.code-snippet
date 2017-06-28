'use strict';

var path = require('path');

module.exports = {
    entry: {
        'entry': './src/index.js'
    },
    output: {
        libraryTarget: 'umd',
        library: ['tui', 'util'],
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};
