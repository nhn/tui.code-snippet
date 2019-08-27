/**
 * @fileoverview Retrieve a nested item from the given object/array.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var isUndefined = require('../type/isUndefined');
var isNull = require('../type/isNull');

/**
 * Retrieve a nested item from the given object/array.
 * @param {object|Array} obj - Object for retrieving
 * @param {...string|number} paths - Paths of property
 * @returns {*} Value
 * @memberof tui.util
 * @example
 * //-- #1. Get Module --//
 * var util = require('tui-code-snippet'); // node, commonjs
 * var util = tui.util; // distribution file
 *
 * //-- #2. Use property --//
 * var obj = {
 *     'key1': 1,
 *     'nested' : {
 *         'key1': 11,
 *         'nested': {
 *             'key1': 21
 *         }
 *     }
 * };
 * util.pick(obj, 'nested', 'nested', 'key1'); // 21
 * util.pick(obj, 'nested', 'nested', 'key2'); // undefined
 *
 * var arr = ['a', 'b', 'c'];
 * util.pick(arr, 1); // 'b'
 */
function pick(obj, paths) { // eslint-disable-line no-unused-vars
    var args = arguments;
    var target = args[0];
    var i = 1;
    var length = args.length;

    for (; i < length; i += 1) {
        if (isUndefined(target) ||
            isNull(target)) {
            return;
        }

        target = target[args[i]];
    }

    return target; // eslint-disable-line consistent-return
}

module.exports = pick;
