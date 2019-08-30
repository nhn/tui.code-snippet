/**
 * @fileoverview Check whether the given variable is an arguments object or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var isExisty = require('./isExisty');

/**
 * Check whether the given variable is an arguments object or not.<br>
 * If the given variable is an arguments object, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is arguments?
 * @memberof tui.util
 */
function isArguments(obj) {
    var result = isExisty(obj) &&
        ((Object.prototype.toString.call(obj) === '[object Arguments]') || !!obj.callee);

    return result;
}

module.exports = isArguments;
