/**
 * @fileoverview Check whether the given variable is a number or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Check whether the given variable is a number or not.<br>
 * If the given variable is a number, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is number?
 * @memberof tui.util
 */
function isNumber(obj) {
    return typeof obj === 'number' || obj instanceof Number;
}

module.exports = isNumber;
