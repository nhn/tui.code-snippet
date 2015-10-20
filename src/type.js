/**
 * @fileoverview This module provides some functions to check the type of variable
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency collection.js
 */

(function(tui) {
    'use strict';
    /* istanbul ignore if */
    if (!tui) {
        tui = window.tui = {};
    }
    if (!tui.util) {
        tui.util = window.tui.util = {};
    }

    /**
     * Check whether the given variable is existing or not.<br>
     *  If the given variable is not null and not undefined, returns true.
     * @param {*} param - Target for checking
     * @returns {boolean} Is existy?
     * @memberOf tui.util
     * @example
     *  tui.util.isExisty(''); //true
     *  tui.util.isExisty(0); //true
     *  tui.util.isExisty([]); //true
     *  tui.util.isExisty({}); //true
     *  tui.util.isExisty(null); //false
     *  tui.util.isExisty(undefined); //false
    */
    function isExisty(param) {
        return param != null;
    }

    /**
     * Check whether the given variable is undefined or not.<br>
     *  If the given variable is undefined, returns true.
     * @param {*} obj - Target for checking
     * @returns {boolean} Is undefined?
     * @memberOf tui.util
     */
    function isUndefined(obj) {
        return obj === undefined;
    }

    /**
     * Check whether the given variable is null or not.<br>
     *  If the given variable(arguments[0]) is null, returns true.
     * @param {*} obj - Target for checking
     * @returns {boolean} Is null?
     * @memberOf tui.util
     */
    function isNull(obj) {
        return obj === null;
    }

    /**
     * Check whether the given variable is truthy or not.<br>
     *  If the given variable is not null or not undefined or not false, returns true.<br>
     *  (It regards 0 as true)
     * @param {*} obj - Target for checking
     * @return {boolean} Is truthy?
     * @memberOf tui.util
     */
    function isTruthy(obj) {
        return isExisty(obj) && obj !== false;
    }

    /**
     * Check whether the given variable is falsy or not.<br>
     *  If the given variable is null or undefined or false, returns true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is falsy?
     * @memberOf tui.util
     */
    function isFalsy(obj) {
        return !isTruthy(obj);
    }


    var toString = Object.prototype.toString;

    /**
     * Check whether the given variable is an arguments object or not.<br>
     *  If the given variable is an arguments object, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is arguments?
     * @memberOf tui.util
     */
    function isArguments(obj) {
        var result = isExisty(obj) &&
            ((toString.call(obj) === '[object Arguments]') || !!obj.callee);

        return result;
    }

    /**
     * Check whether the given variable is an instance of Array or not.<br>
     *  If the given variable is an instance of Array, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is array instance?
     * @memberOf tui.util
     */
    function isArray(obj) {
        return obj instanceof Array;
    }

    /**
     * Check whether the given variable is an object or not.<br>
     *  If the given variable is an object, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is object?
     * @memberOf tui.util
     */
    function isObject(obj) {
        return obj === Object(obj);
    }

    /**
     * Check whether the given variable is a function or not.<br>
     *  If the given variable is a function, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is function?
     * @memberOf tui.util
     */
    function isFunction(obj) {
        return obj instanceof Function;
    }

    /**
     * Check whether the given variable is a number or not.<br>
     *  If the given variable is a number, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is number?
     * @memberOf tui.util
     */
    function isNumber(obj) {
        return typeof obj === 'number' || obj instanceof Number;
    }

    /**
     * Check whether the given variable is a string or not.<br>
     *  If the given variable is a string, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is string?
     * @memberOf tui.util
     */
    function isString(obj) {
        return typeof obj === 'string' || obj instanceof String;
    }

    /**
     * Check whether the given variable is a boolean or not.<br>
     *  If the given variable is a boolean, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is boolean?
     * @memberOf tui.util
     */
    function isBoolean(obj) {
        return typeof obj === 'boolean' || obj instanceof Boolean;
    }


    /**
     * Check whether the given variable is an instance of Array or not.<br>
     *  If the given variable is an instance of Array, return true.<br>
     *  (It is used for multiple frame environments)
     * @param {*} obj - Target for checking
     * @return {boolean} Is an instance of array?
     * @memberOf tui.util
     */
    function isArraySafe(obj) {
        return toString.call(obj) === '[object Array]';
    }

    /**
     * Check whether the given variable is a function or not.<br>
     *  If the given variable is a function, return true.<br>
     *  (It is used for multiple frame environments)
     * @param {*} obj - Target for checking
     * @return {boolean} Is a function?
     * @memberOf tui.util
     */
    function isFunctionSafe(obj) {
        return toString.call(obj) === '[object Function]';
    }

    /**
     * Check whether the given variable is a number or not.<br>
     *  If the given variable is a number, return true.<br>
     *  (It is used for multiple frame environments)
     * @param {*} obj - Target for checking
     * @return {boolean} Is a number?
     * @memberOf tui.util
     */
    function isNumberSafe(obj) {
        return toString.call(obj) === '[object Number]';
    }

    /**
     * Check whether the given variable is a string or not.<br>
     *  If the given variable is a string, return true.<br>
     *  (It is used for multiple frame environments)
     * @param {*} obj - Target for checking
     * @return {boolean} Is a string?
     * @memberOf tui.util
     */
    function isStringSafe(obj) {
        return toString.call(obj) === '[object String]';
    }

    /**
     * Check whether the given variable is a boolean or not.<br>
     *  If the given variable is a boolean, return true.<br>
     *  (It is used for multiple frame environments)
     * @param {*} obj - Target for checking
     * @return {boolean} Is a boolean?
     * @memberOf tui.util
     */
    function isBooleanSafe(obj) {
        return toString.call(obj) === '[object Boolean]';
    }

    /**
     * Check whether the given variable is a instance of HTMLNode or not.<br>
     *  If the given variables is a instance of HTMLNode, return true.
     * @param {*} html - Target for checking
     * @return {boolean} Is HTMLNode ?
     * @memberOf tui.util
     */
    function isHTMLNode(html) {
        if (typeof(HTMLElement) === 'object') {
            return (html && (html instanceof HTMLElement || !!html.nodeType));
        }
        return !!(html && html.nodeType);
    }

    /**
     * Check whether the given variable is a HTML tag or not.<br>
     *  If the given variables is a HTML tag, return true.
     * @param {*} html - Target for checking
     * @return {Boolean} Is HTML tag?
     * @memberOf tui.util
     */
    function isHTMLTag(html) {
        if (typeof(HTMLElement) === 'object') {
            return (html && (html instanceof HTMLElement));
        }
        return !!(html && html.nodeType && html.nodeType === 1);
    }

    /**
     * Check whether the given variable is empty(null, undefined, or empty array, empty object) or not.<br>
     *  If the given variables is empty, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is empty?
     * @memberOf tui.util
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
            tui.util.forEachOwnProperties(obj, function() {
                hasKey = true;
                return false;
            });

            return !hasKey;
        }

        return true;

    }

    /**
     * Check whether the given variable is not empty(not null, not undefined, or not empty array, not empty object) or not.<br>
     *  If the given variables is not empty, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is not empty?
     * @memberOf tui.util
     */
    function isNotEmpty(obj) {
        return !isEmpty(obj);
    }

    /**
     * Check whether the given variable is an instance of Date or not.<br>
     *  If the given variables is an instance of Date, return true.
     * @param {*} obj - Target for checking
     * @returns {boolean} Is an instance of Date?
     * @memberOf tui.util
     */
    function isDate(obj) {
        return obj instanceof Date;
    }

    /**
     * Check whether the given variable is an instance of Date or not.<br>
     *  If the given variables is an instance of Date, return true.<br>
     *  (It is used for multiple frame environments)
     * @param {*} obj - Target for checking
     * @returns {boolean} Is an instance of Date?
     * @memberOf tui.util
     */
    function isDateSafe(obj) {
        return toString.call(obj) === '[object Date]';
    }


    tui.util.isExisty = isExisty;
    tui.util.isUndefined = isUndefined;
    tui.util.isNull = isNull;
    tui.util.isTruthy = isTruthy;
    tui.util.isFalsy = isFalsy;
    tui.util.isArguments = isArguments;
    tui.util.isArray = Array.isArray || isArray;
    tui.util.isArraySafe = Array.isArray || isArraySafe;
    tui.util.isObject = isObject;
    tui.util.isFunction = isFunction;
    tui.util.isFunctionSafe = isFunctionSafe;
    tui.util.isNumber = isNumber;
    tui.util.isNumberSafe = isNumberSafe;
    tui.util.isDate = isDate;
    tui.util.isDateSafe = isDateSafe;
    tui.util.isString = isString;
    tui.util.isStringSafe = isStringSafe;
    tui.util.isBoolean = isBoolean;
    tui.util.isBooleanSafe = isBooleanSafe;
    tui.util.isHTMLNode = isHTMLNode;
    tui.util.isHTMLTag = isHTMLTag;
    tui.util.isEmpty = isEmpty;
    tui.util.isNotEmpty = isNotEmpty;

})(window.tui);
