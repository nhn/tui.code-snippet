/**
 * @fileoverview Returns the first index at which a given element can be found in the array.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var isArray = require('../type/isArray');

/**
 * Returns the first index at which a given element can be found in the array
 * from start index(default 0), or -1 if it is not present.<br>
 * It compares searchElement to elements of the Array using strict equality
 * (the same method used by the ===, or triple-equals, operator).
 * @param {*} searchElement Element to locate in the array
 * @param {Array} array Array that will be traversed.
 * @param {number} startIndex Start index in array for searching (default 0)
 * @returns {number} the First index at which a given element, or -1 if it is not present
 * @memberof tui.util
 * @example
 * //-- #1. Get Module --//
 * var util = require('tui-code-snippet'); // node, commonjs
 * var util = tui.util; // distribution file
 *
 * //-- #2. Use property --//
 * var arr = ['one', 'two', 'three', 'four'];
 * var idx1 = util.inArray('one', arr, 3); // -1
 * var idx2 = util.inArray('one', arr); // 0
 */
// eslint-disable-next-line complexity
var inArray = function(searchElement, array, startIndex) {
    var i;
    var length;
    startIndex = startIndex || 0;

    if (!isArray(array)) {
        return -1;
    }

    if (Array.prototype.indexOf) {
        return Array.prototype.indexOf.call(array, searchElement, startIndex);
    }

    length = array.length;
    for (i = startIndex; startIndex >= 0 && i < length; i += 1) {
        if (array[i] === searchElement) {
            return i;
        }
    }

    return -1;
};

module.exports = inArray;
