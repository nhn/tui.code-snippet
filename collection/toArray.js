/**
 * @fileoverview Transform the Array-like object to Array.
 */

'use strict';

var forEachArray = require('./forEachArray');

/**
 * Transform the Array-like object to Array.
 * In low IE (below 8), Array.prototype.slice.call is not perfect. So, try-catch statement is used.
 * @param {*} arrayLike Array-like object
 * @returns {Array} Array
 * @memberof module:collection
 * @example
 * // ES6
 * import toArray from 'tui-code-snippet/collection/toArray'; 
 * 
 * // CommonJS
 * const toArray = require('tui-code-snippet/collection/toArray'); 
 *
 * const arrayLike = {
 *   0: 'one',
 *   1: 'two',
 *   2: 'three',
 *   3: 'four',
 *   length: 4
 * };
 * const result = toArray(arrayLike);
 *
 * alert(result instanceof Array); // true
 * alert(result); // one,two,three,four
 */
function toArray(arrayLike) {
  var arr;
  try {
    arr = Array.prototype.slice.call(arrayLike);
  } catch (e) {
    arr = [];
    forEachArray(arrayLike, function(value) {
      arr.push(value);
    });
  }

  return arr;
}

module.exports = toArray;
