/**
 * @fileoverview Execute the provided callback once for each property of object(or element of array) which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var isArray = require('../type/isArray');
var forEachArray = require('../collection/forEachArray');
var forEachOwnProperties = require('../collection/forEachOwnProperties');

/**
 * Execute the provided callback once for each property of object(or element of array) which actually exist.<br>
 * If the object is Array-like object(ex-arguments object), It needs to transform to Array.(see 'ex2' of example).<br>
 * If the callback function returns false, the loop will be stopped.<br>
 * Callback function(iteratee) is invoked with three arguments:
 *  - The value of the property(or The value of the element)
 *  - The name of the property(or The index of the element)
 *  - The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof tui.util
 * @example
 * //-- #1. Get Module --//
 * var util = require('tui-code-snippet'); // node, commonjs
 * var util = tui.util; // distribution file
 *
 * //-- #2. Use property --//
 * var sum = 0;
 *
 * util.forEach([1,2,3], function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 *
 * // In case of Array-like object
 * var array = Array.prototype.slice.call(arrayLike); // change to array
 * util.forEach(array, function(value){
 *     sum += value;
 * });
 */
function forEach(obj, iteratee, context) {
    if (isArray(obj)) {
        forEachArray(obj, iteratee, context);
    } else {
        forEachOwnProperties(obj, iteratee, context);
    }
}

module.exports = forEach;
