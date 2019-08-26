/**
 * @fileoverview Check whether the given variable is undefined or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Check whether the given variable is undefined or not.<br>
 * If the given variable is undefined, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is undefined?
 * @memberof tui.util
 */
function isUndefined(obj) {
    return obj === undefined; // eslint-disable-line no-undefined
}

module.exports = isUndefined;
