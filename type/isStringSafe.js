/**
 * @fileoverview Check whether the given variable is a string or not. (for multiple frame environments)
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Check whether the given variable is a string or not.<br>
 * If the given variable is a string, return true.<br>
 * (It is used for multiple frame environments)
 * @param {*} obj - Target for checking
 * @returns {boolean} Is a string?
 * @memberof tui.util
 */
function isStringSafe(obj) {
    return toString.call(obj) === '[object String]';
}

module.exports = isStringSafe;
