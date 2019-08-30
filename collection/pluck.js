/**
 * @fileoverview Fetch a property
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var forEach = require('./forEach');

/**
 * fetching a property
 * @param {Array} arr target collection
 * @param {String|Number} property property name
 * @returns {Array}
 * @memberof tui.util
 * @example
 * //-- #1. Get Module --//
 * var util = require('tui-code-snippet'); // node, commonjs
 * var util = tui.util; // distribution file
 *
 * //-- #2. Use property --//
 * var objArr = [
 *     {'abc': 1, 'def': 2, 'ghi': 3},
 *     {'abc': 4, 'def': 5, 'ghi': 6},
 *     {'abc': 7, 'def': 8, 'ghi': 9}
 * ];
 * var arr2d = [
 *     [1, 2, 3],
 *     [4, 5, 6],
 *     [7, 8, 9]
 * ];
 * util.pluck(objArr, 'abc'); // [1, 4, 7]
 * util.pluck(arr2d, 2); // [3, 6, 9]
 */
function pluck(arr, property) {
    var resultArray = [];

    forEach(arr, function(item) {
        resultArray.push(item[property]);
    });

    return resultArray;
}

module.exports = pluck;
