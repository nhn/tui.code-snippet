/**
 * @fileoverview Check whether the given variable is a number or not. (for multiple frame environments)
 */

'use strict';

/**
 * Check whether the given variable is a number or not.
 * If the given variable is a number, return true.
 * (It is used for multiple frame environments)
 * @param {*} obj - Target for checking
 * @returns {boolean} Is a number?
 * @memberof module:type
 */
function isNumberSafe(obj) {
  return Object.prototype.toString.call(obj) === '[object Number]';
}

module.exports = isNumberSafe;
