/**
 * @fileoverview Check whether the given variable is existing or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var isUndefined = require('./isUndefined');
var isNull = require('./isNull');

/**
 * Check whether the given variable is existing or not.<br>
 * If the given variable is not null and not undefined, returns true.
 * @param {*} param - Target for checking
 * @returns {boolean} Is existy?
 * @memberof tui.util
 * @example
 * //-- #1. Get Module --//
 * var util = require('tui-code-snippet'); // node, commonjs
 * var util = tui.util; // distribution file
 *
 * //-- #2. Use property --//
 * util.isExisty(''); //true
 * util.isExisty(0); //true
 * util.isExisty([]); //true
 * util.isExisty({}); //true
 * util.isExisty(null); //false
 * util.isExisty(undefined); //false
*/
function isExisty(param) {
    return !isUndefined(param) && !isNull(param);
}

module.exports = isExisty;
