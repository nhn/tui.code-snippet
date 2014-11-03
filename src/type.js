/**
 * @fileoverview 타입체크 모듈
 * @author FE개발팀
 */

(function(ne) {
    'use strict';
    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }

    function isDefined(obj) {
        return obj !== null && obj !== undefined;
    }

    function isTruthy(obj) {
        return isDefined(obj) && obj !== false;
    }

    /**
     * 인자가 배열인지 확인
     * @param {*} obj
     * @return {boolean}
     */
    function isArray(obj) {
        return isDefined(Array.isArray) ? Array.isArray(obj) : Object.prototype.toString.call(obj) === '[object Array]';
    }

    function isObject(obj) {
        return obj === Object(obj);
    }

    function isFunction(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
    }

    function isNumber(obj) {
        return Object.prototype.toString.call(obj) === '[object Number]';
    }

    function isString(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
    }

    function isBoolean(obj) {
        return Object.prototype.toString.call(obj) === '[object Boolean]';
    }

    ne.isDefined = isDefined;
    ne.isTruthy = isTruthy;
    ne.isArray = isArray;
    ne.isObject = isObject;
    ne.isFunction = isFunction;
    ne.isNumber = isNumber;
    ne.isString = isString;
    ne.isBoolean = isBoolean;

})(window.ne);
