/**
 * @fileoverview Zip together multiple lists into a single array.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var forEach = require('../collection/forEach');

/**
 * Zip together multiple lists into a single array.
 * @param {...Array} ...Arrays - Arrays to be zipped
 * @returns {Array}
 * @memberof tui.util
 * @example
 * //-- #1. Get Module --//
 * var util = require('tui-code-snippet'); // node, commonjs
 * var util = tui.util; // distribution file
 *
 * //-- #2. Use property --//
 * var result = util.zip([1, 2, 3], ['a', 'b','c'], [true, false, true]);
 * console.log(result[0]); // [1, 'a', true]
 * console.log(result[1]); // [2, 'b', false]
 * console.log(result[2]); // [3, 'c', true]
 */
var zip = function() {
    var arr2d = Array.prototype.slice.call(arguments);
    var result = [];

    forEach(arr2d, function(arr) {
        forEach(arr, function(value, index) {
            if (!result[index]) {
                result[index] = [];
            }
            result[index].push(value);
        });
    });

    return result;
};

module.exports = zip;
