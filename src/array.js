/**
 * @fileoverview This module has some functions for handling array.
 * @author NHN Ent.
 *         FE Development Team <jiung.kang@nhnent.com>
 * @dependency type.js
 */

(function(tui) {
    'use strict';
    if (!tui) {
        tui = window.tui = {};
    }
    if (!tui.util) {
        tui.util = window.tui.util = {};
    }

    var aps = Array.prototype.slice;

    /**
     * Generate an integer Array containing an arithmetic progression.
     * @param {number} start
     * @param {number} stop
     * @param {number} step
     * @memberof tui.util
     * @returns {Array}
     * @example
     *
     *   var arr = tui.util.range(5);
     *   console.log(arr); // [0,1,2,3,4]
     *
     *   arr = tui.util.range(1, 5);
     *   console.log(arr); // [1,2,3,4]
     *
     *   arr = tui.util.range(2, 10, 2);
     *   console.log(arr); // [2,4,6,8]
     *
     *   arr = tui.util.range(10, 2, -2);
     *   console.log(arr); // [10,8,6,4]
     */
    var range = function(start, stop, step) {
        var arr = [],
            flag;

        if (tui.util.isUndefined(stop)) {
            stop = start || 0;
            start = 0;
        }

        step = step || 1;
        flag = step < 0 ? -1 : 1;
        stop *= flag;

        for(; start * flag < stop; start += step) {
            arr.push(start);
        }

        return arr;
    };

    /**
     * Zip together multiple lists into a single array
     * @param {...Array}
     * @memberof tui.util
     * @returns {Array}
     * @example
     *
     *   var result = tui.util.zip([1, 2, 3], ['a', 'b','c'], [true, false, true]);
     *
     *   console.log(result[0]); // [1, 'a', true]
     *   console.log(result[1]); // [2, 'b', false]
     *   console.log(result[2]); // [3, 'c', true]
     */
    var zip = function() {
        var arr2d = aps.call(arguments),
            result = [];

        tui.util.forEach(arr2d, function(arr) {
            tui.util.forEach(arr, function(value, index) {
                if (!result[index]) {
                    result[index] = [];
                }
                result[index].push(value);
            });
        });

        return result;
    };

    tui.util.range = range;
    tui.util.zip = zip;
})(window.tui);
