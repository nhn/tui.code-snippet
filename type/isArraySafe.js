/**
 * @fileoverview Check whether the given variable is an instance of Array or not. (for multiple frame environments)
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Check whether the given variable is an instance of Array or not.<br>
 * If the given variable is an instance of Array, return true.<br>
 * (It is used for multiple frame environments)
 * @param {*} obj - Target for checking
 * @returns {boolean} Is an instance of array?
 * @memberof tui.util
 */
function isArraySafe(obj) {
    return toString.call(obj) === '[object Array]';
}

module.exports = isArraySafe;