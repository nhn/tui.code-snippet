/**
 * @fileoverview Create a new array or plain object with all elements(or properties) that pass the test implemented by the provided function.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var isObject = require('../type/isObject');
var isFunction = require('../type/isFunction');
var isArray = require('../type/isArray');
var forEach = require('./forEach');

/**
 * Create a new array or plain object with all elements(or properties)
 * that pass the test implemented by the provided function.<br>
 * Callback function(iteratee) is invoked with three arguments:
 *  - The value of the property(or The value of the element)
 *  - The name of the property(or The index of the element)
 *  - The object being traversed
 * @param {Object} obj Object(plain object or Array) that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @returns {Object} plain object or Array
 * @memberof tui.util
 * @example
 * //-- #1. Get Module --//
 * var util = require('tui-code-snippet'); // node, commonjs
 * var util = tui.util; // distribution file
 *
 * //-- #2. Use property --//
 * var result1 = util.filter([0,1,2,3], function(value) {
 *     return (value % 2 === 0);
 * });
 * alert(result1); // [0, 2]
 *
 * var result2 = util.filter({a : 1, b: 2, c: 3}, function(value) {
 *     return (value % 2 !== 0);
 * });
 * alert(result2.a); // 1
 * alert(result2.b); // undefined
 * alert(result2.c); // 3
 */
function filter(obj, iteratee, context) {
    var result, add;

    context = context || null;

    if (!isObject(obj) || !isFunction(iteratee)) {
        throw new Error('wrong parameter');
    }

    if (isArray(obj)) {
        result = [];
        add = function(subResult, args) {
            subResult.push(args[0]);
        };
    } else {
        result = {};
        add = function(subResult, args) {
            subResult[args[1]] = args[0];
        };
    }

    forEach(obj, function() {
        if (iteratee.apply(context, arguments)) {
            add(result, arguments);
        }
    }, context);

    return result;
}

module.exports = filter;
