/**
 * @fileoverview This module has some functions for handling array.
 * @author NHN Ent.
 *         FE Development Team <jiung.kang@nhnent.com>
 * @dependency type.js, collection.js
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
     * This variable saves whether the 'indexOf' method is in Array.prototype or not.<br>
     * And it will be checked only once when the page is loaded.
     * @type {boolean}
     */
    var hasIndexOf = !!Array.prototype.indexOf;

    /**
     * Generate an integer Array containing an arithmetic progression.
     * @memberof tui.util
     * @param {number} start
     * @param {number} stop
     * @param {number} step
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
     * @memberof tui.util
     * @param {...Array}
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

    /**
     * Returns the first index at which a given element can be found in the array from start index(default 0), or -1 if it is not present.<br>
     * It compares searchElement to elements of the Array using strict equality (the same method used by the ===, or triple-equals, operator).
     * @memberof tui.util
     * @param {*} searchElement Element to locate in the array
     * @param {Array} array Array that will be traversed.
     * @param {number} startIndex Start index in array for searching (default 0)
     * @return {number} the First index at which a given element, or -1 if it is not present
     * @example
     *
     *   var arr = ['one', 'two', 'three', 'four'],
     *       idx1,
     *       idx2;
     *
     *   idx1 = tui.util.inArray('one', arr, 3);
     *   alert(idx1); // -1
     *
     *   idx2 = tui.util.inArray('one', arr);
     *   alert(idx2); // 0
     */
    var inArray = function(searchElement, array, startIndex) {
        var i, length;

        if (!tui.util.isArray(array)) {
            return -1;
        }

        if (hasIndexOf) {
            return Array.prototype.indexOf.call(array, searchElement, startIndex);
        }

        length = array.length;
        if (tui.util.isUndefined(startIndex)) {
            startIndex = 0;
        } else if (startIndex >= length || startIndex < 0) {
            return -1;
        }

        for (i = startIndex; i < length; i++) {
            if (array[i] === searchElement) {
                return i;
            }
        }

        return -1;
    };

    tui.util.inArray = inArray;
    tui.util.range = range;
    tui.util.zip = zip;
})(window.tui);
