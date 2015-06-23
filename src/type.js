/**
 * @fileoverview This module provides some functions to check the type of variable
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency collection.js
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
     * Check whether the given variable is existing or not.
     *  If the given variable is not null and not undefined, returns true.
     * @param {*} param - Target for checking
     * @returns {boolean} Is existy?
     * @memberOf ne.util
     * @example
     *  ne.util.isExisty(''); //true
     *  ne.util.isExisty(0); //true
     *  ne.util.isExisty([]); //true
     *  ne.util.isExisty({}); //true
     *  ne.util.isExisty(null); //false
     *  ne.util.isExisty(undefined); //false
    */
    function isExisty(param) {
        return param != null;
    }

    /**
     * Check whether the given variable is undefined or not.
     *  If the given variable is undefined, returns true.
     * @param {*} obj - Target for checking
     * @returns {boolean} Is undefined?
     * @memberOf ne.util
     */
    function isUndefined(obj) {
        return obj === undefined;
    }

    /**
     * Check whether the given variable is null or not.
     *  If the given variable(arguments[0]) is null, returns true.
     * @param {*} obj - Target for checking
     * @returns {boolean} Is null?
     * @memberOf ne.util
     */
    function isNull(obj) {
        return obj === null;
    }

    /**
     * Check whether the given variable is truthy or not.
     *  If the given variable is not null or not undefined or not false, returns true.
     *  (It regards 0 as true)
     * @param {*} obj - Target for checking
     * @return {boolean} Is truthy?
     * @memberOf ne.util
     */
    function isTruthy(obj) {
        return isExisty(obj) && obj !== false;
    }

    /**
     * Check whether the given variable is falsy or not.
     *  If the given variable is null or undefined or false, returns true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is falsy?
     * @memberOf ne.util
     */
    function isFalsy(obj) {
        return !isTruthy(obj);
    }


    var toString = Object.prototype.toString;

    /**
     * Check whether the given variable is an arguments object or not.
     *  If the given variable is an arguments object, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is arguments?
     * @memberOf ne.util
     */
    function isArguments(obj) {
        var result = isExisty(obj) &&
            ((toString.call(obj) === '[object Arguments]') || !!obj.callee);

        return result;
    }

    /**
     * Check whether the given variable is an instance of Array or not.
     *  If the given variable is an instance of Array, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is array instance?
     * @memberOf ne.util
     */
    function isArray(obj) {
        return obj instanceof Array;
    }

    /**
     * Check whether the given variable is an object or not.
     *  If the given variable is an object, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is object?
     * @memberOf ne.util
     */
    function isObject(obj) {
        return obj === Object(obj);
    }

    /**
     * Check whether the given variable is a function or not.
     *  If the given variable is a function, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is function?
     * @memberOf ne.util
     */
    function isFunction(obj) {
        return obj instanceof Function;
    }

    /**
     * Check whether the given variable is a number or not.
     *  If the given variable is a number, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is number?
     * @memberOf ne.util
     */
    function isNumber(obj) {
        return typeof obj === 'number' || obj instanceof Number;
    }

    /**
     * Check whether the given variable is a string or not.
     *  If the given variable is a string, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is string?
     * @memberOf ne.util
     */
    function isString(obj) {
        return typeof obj === 'string' || obj instanceof String;
    }

    /**
     * Check whether the given variable is a boolean or not.
     *  If the given variable is a boolean, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is boolean?
     * @memberOf ne.util
     */
    function isBoolean(obj) {
        return typeof obj === 'boolean' || obj instanceof Boolean;
    }


    /**
     * Check whether the given variable is an instance of Array or not.
     *  If the given variable is an instance of Array, return true.
     *  (It is used for multiple frame environments)
     * @param {*} obj - Target for checking
     * @return {boolean} Is an instance of array?
     * @memberOf ne.util
     */
    function isArraySafe(obj) {
        return toString.call(obj) === '[object Array]';
    }

    /**
     * Check whether the given variable is a function or not.
     *  If the given variable is a function, return true.
     *  (It is used for multiple frame environments)
     * @param {*} obj - Target for checking
     * @return {boolean} Is a function?
     * @memberOf ne.util
     */
    function isFunctionSafe(obj) {
        return toString.call(obj) === '[object Function]';
    }

    /**
     * Check whether the given variable is a number or not.
     *  If the given variable is a number, return true.
     *  (It is used for multiple frame environments)
     * @param {*} obj - Target for checking
     * @return {boolean} Is a number?
     * @memberOf ne.util
     */
    function isNumberSafe(obj) {
        return toString.call(obj) === '[object Number]';
    }

    /**
     * Check whether the given variable is a string or not.
     *  If the given variable is a string, return true.
     *  (It is used for multiple frame environments)
     * @param {*} obj - Target for checking
     * @return {boolean} Is a string?
     * @memberOf ne.util
     */
    function isStringSafe(obj) {
        return toString.call(obj) === '[object String]';
    }

    /**
     * Check whether the given variable is a boolean or not.
     *  If the given variable is a boolean, return true.
     *  (It is used for multiple frame environments)
     * @param {*} obj - Target for checking
     * @return {boolean} Is a boolean?
     * @memberOf ne.util
     */
    function isBooleanSafe(obj) {
        return toString.call(obj) === '[object Boolean]';
    }

    /**
     * Check whether the given variable is a instance of HTMLNode or not.
     *  If the given variables is a instance of HTMLNode, return true.
     * @param {*} html - Target for checking
     * @return {boolean} Is HTMLNode ?
     * @memberOf ne.util
     */
    function isHTMLNode(html) {
        if (typeof(HTMLElement) === 'object') {
            return (html && (html instanceof HTMLElement || !!html.nodeType));
        }
        return !!(html && html.nodeType);
    }

    /**
     * Check whether the given variable is a HTML tag or not.
     *  If the given variables is a HTML tag, return true.
     * @param {*} html - Target for checking
     * @return {Boolean} Is HTML tag?
     * @memberOf ne.util
     */
    function isHTMLTag(html) {
        if (typeof(HTMLElement) === 'object') {
            return (html && (html instanceof HTMLElement));
        }
        return !!(html && html.nodeType && html.nodeType === 1);
    }

    /**
     * Check whether the given variable is empty(null, undefined, or empty array, empty object) or not.
     *  If the given variables is empty, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is empty?
     * @memberOf ne.util
     */
    function isEmpty(obj) {
        var hasKey = false;

        if (!isExisty(obj)) {
            return true;
        }

        if (isString(obj) && obj === '') {
            return true;
        }

        if (isArray(obj) || isArguments(obj)) {
            return obj.length === 0;
        }

        if (isObject(obj) && !isFunction(obj)) {
            ne.util.forEachOwnProperties(obj, function() {
                hasKey = true;
                return false;
            });

            return !hasKey;
        }

        return true;

    }

    /**
     * Check whether the given variable is not empty(not null, not undefined, or not empty array, not empty object) or not.
     *  If the given variables is not empty, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is not empty?
     * @memberOf ne.util
     */
    function isNotEmpty(obj) {
        return !isEmpty(obj);
    }


    ne.util.isExisty = isExisty;
    ne.util.isUndefined = isUndefined;
    ne.util.isNull = isNull;
    ne.util.isTruthy = isTruthy;
    ne.util.isFalsy = isFalsy;
    ne.util.isArguments = isArguments;
    ne.util.isArray = Array.isArray || isArray;
    ne.util.isArraySafe = Array.isArray || isArraySafe;
    ne.util.isObject = isObject;
    ne.util.isFunction = isFunction;
    ne.util.isFunctionSafe = isFunctionSafe;
    ne.util.isNumber = isNumber;
    ne.util.isNumberSafe = isNumberSafe;
    ne.util.isString = isString;
    ne.util.isStringSafe = isStringSafe;
    ne.util.isBoolean = isBoolean;
    ne.util.isBooleanSafe = isBooleanSafe;
    ne.util.isHTMLNode = isHTMLNode;
    ne.util.isHTMLTag = isHTMLTag;
    ne.util.isEmpty = isEmpty;
    ne.util.isNotEmpty = isNotEmpty;

})(window.ne);
