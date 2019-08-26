/**
 * @fileoverview Check whether the given variable is a string or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Check whether the given variable is a boolean or not.<br>
 *  If the given variable is a boolean, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is boolean?
 * @memberof tui.util
 */
function isBoolean(obj) {
    return typeof obj === 'boolean' || obj instanceof Boolean;
}

module.exports = isBoolean;
