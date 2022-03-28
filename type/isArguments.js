/**
 * @fileoverview Check whether the given variable is an arguments object or not.
 */

'use strict';

var isExisty = require('./isExisty');

/**
 * @module type
 */

/**
 * Check whether the given variable is an arguments object or not.
 * If the given variable is an arguments object, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is arguments?
 * @memberof module:type
 */
function isArguments(obj) {
  var result = isExisty(obj) &&
        ((Object.prototype.toString.call(obj) === '[object Arguments]') || !!obj.callee);

  return result;
}

module.exports = isArguments;
