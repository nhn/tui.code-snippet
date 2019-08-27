/**
 * @fileoverview Execute the provided callback function once for each element in an array, in order, and constructs a new array from the results.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var forEach = require('./forEach');

/**
 * Execute the provided callback function once for each element in an array, in order,
 * and constructs a new array from the results.<br>
 * If the object is Array-like object(ex-arguments object),
 * It needs to transform to Array.(see 'ex2' of forEach example)<br>
 * Callback function(iteratee) is invoked with three arguments:
 *  - The value of the property(or The value of the element)
 *  - The name of the property(or The index of the element)
 *  - The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @returns {Array} A new array composed of returned values from callback function
 * @memberof tui.util
 * @example
 * //-- #1. Get Module --//
 * var util = require('tui-code-snippet'); // node, commonjs
 * var util = tui.util; // distribution file
 *
 * //-- #2. Use property --//
 * var result = util.map([0,1,2,3], function(value) {
 *     return value + 1;
 * });
 *
 * alert(result);  // 1,2,3,4
 */
function map(obj, iteratee, context) {
    var resultArray = [];

    context = context || null;

    forEach(obj, function() {
        resultArray.push(iteratee.apply(context, arguments));
    });

    return resultArray;
}

module.exports = map;
