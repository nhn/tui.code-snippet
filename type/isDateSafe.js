/**
 * @fileoverview Check whether the given variable is an instance of Date or not. (for multiple frame environments)
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Check whether the given variable is an instance of Date or not.<br>
 * If the given variables is an instance of Date, return true.<br>
 * (It is used for multiple frame environments)
 * @param {*} obj - Target for checking
 * @returns {boolean} Is an instance of Date?
 * @memberof tui.util
 */
function isDateSafe(obj) {
    return toString.call(obj) === '[object Date]';
}

module.exports = isDateSafe;
