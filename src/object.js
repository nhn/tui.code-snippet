/**
 * @fileoverview This module has some functions for handling a plain object, json.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency type.js, collection.js
 */

(function(ne) {
    'use strict';
    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * Extend the target object from other objects.
     * @param {object} target - Object that will be extended
     * @param {...object} objects - Objects as sources
     * @return {object} Extended object
     * @memberOf ne.util
     */
    function extend(target, objects) {
        var source,
            prop,
            hasOwnProp = Object.prototype.hasOwnProperty,
            i,
            len;

        for (i = 1, len = arguments.length; i < len; i++) {
            source = arguments[i];
            for (prop in source) {
                if (hasOwnProp.call(source, prop)) {
                    target[prop] = source[prop];
                }
            }
        }
        return target;
    }

    /**
     * The last id of stamp
     * @type {number}
     */
    var lastId = 0;

    /**
     * Assign a unique id to an object
     * @param {object} obj - Object that will be assigned id.
     * @return {number} Stamped id
     * @memberOf ne.util
     */
    function stamp(obj) {
        obj.__fe_id = obj.__fe_id || ++lastId;
        return obj.__fe_id;
    }

    /**
     * Verify whether an object has a stamped id or not.
     * @param {object} obj
     * @returns {boolean}
     * @memberOf ne.util
     */
    function hasStamp(obj) {
        return ne.util.isExisty(ne.util.pick(obj, '__fe_id'));
    }

    /**
     * Reset the last id of stamp
     */
    function resetLastId() {
        lastId = 0;
    }

    /**
     * Return a key-list(array) of a given object
     * @param {object} obj - Object from which a key-list will be extracted
     * @returns {Array} A key-list(array)
     * @memberOf ne.util
     */
    function keys(obj) {
        var keys = [],
            key;

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                keys.push(key);
            }
        }

        return keys;
    }

    /**
     * Return the equality for multiple objects(jsonObjects).<br>
     *  See {@link http://stackoverflow.com/questions/1068834/object-comparison-in-javascript}
     * @param {...object} object - Multiple objects for comparing.
     * @return {boolean} Equality
     * @example
     *
     *  var jsonObj1 = {name:'milk', price: 1000},
     *      jsonObj2 = {name:'milk', price: 1000},
     *      jsonObj3 = {name:'milk', price: 1000};
     *
     *  ne.util.compareJSON(jsonObj1, jsonObj2, jsonObj3);   // true
     *
     *
     *  var jsonObj4 = {name:'milk', price: 1000},
     *      jsonObj5 = {name:'beer', price: 3000};
     *
     *      ne.util.compareJSON(jsonObj4, jsonObj5); // false

     * @memberOf ne.util
     */
    function compareJSON(object) {
        var leftChain,
            rightChain,
            argsLen = arguments.length,
            i;

        function isSameObject(x, y) {
            var p;

            // remember that NaN === NaN returns false
            // and isNaN(undefined) returns true
            if (isNaN(x) &&
                isNaN(y) &&
                ne.util.isNumber(x) &&
                ne.util.isNumber(y)) {
                return true;
            }

            // Compare primitives and functions.
            // Check if both arguments link to the same object.
            // Especially useful on step when comparing prototypes
            if (x === y) {
                return true;
            }

            // Works in case when functions are created in constructor.
            // Comparing dates is a common scenario. Another built-ins?
            // We can even handle functions passed across iframes
            if ((ne.util.isFunction(x) && ne.util.isFunction(y)) ||
                (x instanceof Date && y instanceof Date) ||
                (x instanceof RegExp && y instanceof RegExp) ||
                (x instanceof String && y instanceof String) ||
                (x instanceof Number && y instanceof Number)) {
                return x.toString() === y.toString();
            }

            // At last checking prototypes as good a we can
            if (!(x instanceof Object && y instanceof Object)) {
                return false;
            }

            if (x.isPrototypeOf(y) ||
                y.isPrototypeOf(x) ||
                x.constructor !== y.constructor ||
                x.prototype !== y.prototype) {
                return false;
            }

            // check for infinitive linking loops
            if (ne.util.inArray(x, leftChain) > -1 ||
                ne.util.inArray(y, rightChain) > -1) {
                return false;
            }

            // Quick checking of one object beeing a subset of another.
            for (p in y) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                }
                else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }
            }

            //This for loop executes comparing with hasOwnProperty() and typeof for each property in 'x' object,
            //and verifying equality for x[property] and y[property].
            for (p in x) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                }
                else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }

                if (typeof(x[p]) === 'object' || typeof(x[p]) === 'function') {
                    leftChain.push(x);
                    rightChain.push(y);

                    if (!isSameObject(x[p], y[p])) {
                        return false;
                    }

                    leftChain.pop();
                    rightChain.pop();
                } else if (x[p] !== y[p]) {
                    return false;
                }
            }

            return true;
        }

        if (argsLen < 1) {
            return true;
        }

        for (i = 1; i < argsLen; i++) {
            leftChain = [];
            rightChain = [];

            if (!isSameObject(arguments[0], arguments[i])) {
                return false;
            }
        }

        return true;
    }

    /**
     * Retrieve a nested item from the given object/array
     * @param {object|Array} obj - Object for retrieving
     * @param {...string|number} paths - Paths of property
     * @returns {*} Value
     * @example
     *  var obj = {
     *      'key1': 1,
     *      'nested' : {
     *          'key1': 11,
     *          'nested': {
     *              'key1': 21
     *          }
     *      }
     *  };
     *  ne.util.pick(obj, 'nested', 'nested', 'key1'); // 21
     *  ne.util.pick(obj, 'nested', 'nested', 'key2'); // undefined
     *
     *  var arr = ['a', 'b', 'c'];
     *  ne.util.pick(arr, 1); // 'b'
     */
    function pick(obj, paths) {
        var args = arguments,
            target = args[0],
            length = args.length,
            i;
        try {
            for (i = 1; i < length; i++) {
                target = target[args[i]];
            }
            return target;
        } catch(e) {
            return;
        }
    }

    ne.util.extend = extend;
    ne.util.stamp = stamp;
    ne.util.hasStamp = hasStamp;
    ne.util._resetLastId = resetLastId;
    ne.util.keys = Object.keys || keys;
    ne.util.compareJSON = compareJSON;
    ne.util.pick = pick;
})(window.ne);
