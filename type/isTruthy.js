/**
 * @fileoverview Check whether the given variable is truthy or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var isExisty = require('./isExisty');

/**
 * Check whether the given variable is truthy or not.<br>
 * If the given variable is not null or not undefined or not false, returns true.<br>
 * (It regards 0 as true)
 * @param {*} obj - Target for checking
 * @returns {boolean} Is truthy?
 * @memberof tui.util
 */
function isTruthy(obj) {
    return isExisty(obj) && obj !== false;
}

module.exports = isTruthy;
