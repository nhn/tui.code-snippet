/**
 * @fileoverview Check whether the given variable is a function or not. (for multiple frame environments)
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Check whether the given variable is a function or not.<br>
 * If the given variable is a function, return true.<br>
 * (It is used for multiple frame environments)
 * @param {*} obj - Target for checking
 * @returns {boolean} Is a function?
 * @memberof tui.util
 */
function isFunctionSafe(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
}

module.exports = isFunctionSafe;
