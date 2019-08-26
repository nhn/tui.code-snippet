/**
 * @fileoverview Check whether the given variable is not empty(not null, not undefined, or not empty array, not empty object) or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var isEmpty = require('./isEmpty');

/**
 * Check whether the given variable is not empty
 * (not null, not undefined, or not empty array, not empty object) or not.<br>
 * If the given variables is not empty, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is not empty?
 * @memberof tui.util
 */
function isNotEmpty(obj) {
    return !isEmpty(obj);
}

module.exports = isNotEmpty;
