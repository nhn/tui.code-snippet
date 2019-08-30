/**
 * @fileoverview Check whether the given variable is a boolean or not. (for multiple frame environments)
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Check whether the given variable is a boolean or not.<br>
 * If the given variable is a boolean, return true.<br>
 * (It is used for multiple frame environments)
 * @param {*} obj - Target for checking
 * @returns {boolean} Is a boolean?
 * @memberof tui.util
 */
function isBooleanSafe(obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]';
}

module.exports = isBooleanSafe;
