/**
 * @fileoverview 타입체크 모듈
 * @author FE개발팀
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
     * 값이 정의되어 있는지 확인(null과 undefined가 아니면 true를 반환한다)
     * @param {*} param
     * @returns {boolean}
     * @example
     *
     *
     * ne.util.isExisty(''); //true
     * ne.util.isExisty(0); //true
     * ne.util.isExisty([]); //true
     * ne.util.isExisty({}); //true
     * ne.util.isExisty(null); //false
     * ne.util.isExisty(undefined); //false
     * @memberOf ne.util
    */
    function isExisty(param) {
        return param != null;
    }

    /**
     * 인자가 undefiend 인지 체크하는 메서드
     * @param obj
     * @returns {boolean}
     * @memberOf ne.util
     */
    function isUndefined(obj) {
        return obj === undefined;
    }

    /**
     * 인자가 null 인지 체크하는 메서드
     * @param {*} obj
     * @returns {boolean}
     * @memberOf ne.util
     */
    function isNull(obj) {
        return obj === null;
    }

    /**
     * 인자가 null, undefined, false가 아닌지 확인하는 메서드
     * (0도 true로 간주한다)
     *
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isTruthy(obj) {
        return isExisty(obj) && obj !== false;
    }

    /**
     * 인자가 null, undefined, false인지 확인하는 메서드
     * (truthy의 반대값)
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isFalsy(obj) {
        return !isTruthy(obj);
    }


    var toString = Object.prototype.toString;

    /**
     * 인자가 arguments 객체인지 확인
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isArguments(obj) {
        var result = isExisty(obj) &&
            ((toString.call(obj) === '[object Arguments]') || !!obj.callee);

        return result;
    }

    /**
     * 인자가 배열인지 확인
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isArray(obj) {
        return obj instanceof Array;
    }

    /**
     * 인자가 객체인지 확인하는 메서드
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isObject(obj) {
        return obj === Object(obj);
    }

    /**
     * 인자가 함수인지 확인하는 메서드
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isFunction(obj) {
        return obj instanceof Function;
    }

    /**
     * 인자가 숫자인지 확인하는 메서드
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isNumber(obj) {
        return typeof obj === 'number' || obj instanceof Number;
    }

    /**
     * 인자가 문자열인지 확인하는 메서드
     * @param obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isString(obj) {
        return typeof obj === 'string' || obj instanceof String;
    }

    /**
     * 인자가 불리언 타입인지 확인하는 메서드
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isBoolean(obj) {
        return typeof obj === 'boolean' || obj instanceof Boolean;
    }


    /**
     * 인자가 배열인지 확인.
     * <br>iframe 사용할 경우 부모 자식 window 간 타입 체크를 위해 사용한다.
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isArrayToStr(obj) {
        return toString.call(obj) === '[object Array]';
    }

    /**
     * 인자가 함수인지 확인하는 메서드
     * <br>iframe 사용할 경우 부모 자식 window 간 타입 체크를 위해 사용한다.
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isFunctionToStr(obj) {
        return toString.call(obj) === '[object Function]';
    }

    /**
     * 인자가 숫자인지 확인하는 메서드
     * <br>iframe 사용할 경우 부모 자식 window 간 타입 체크를 위해 사용한다.
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isNumberToStr(obj) {
        return toString.call(obj) === '[object Number]';
    }

    /**
     * 인자가 문자열인지 확인하는 메서드
     * <br>iframe 사용할 경우 부모 자식 window 간 타입 체크를 위해 사용한다.
     * @param obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isStringToStr(obj) {
        return toString.call(obj) === '[object String]';
    }

    /**
     * 인자가 불리언 타입인지 확인하는 메서드
     * <br>iframe 사용할 경우 부모 자식 window 간 타입 체크를 위해 사용한다.
     * @param {*} obj
     * @return {boolean}
     * @memberOf ne.util
     */
    function isBooleanToStr(obj) {
        return toString.call(obj) === '[object Boolean]';
    }

    /**
     * 인자가 HTML Node 인지 검사한다. (Text Node 도 포함)
     * @param {HTMLElement} html
     * @return {Boolean} HTMLElement 인지 여부
     * @memberOf ne.util
     */
    function isHTMLNode(html) {
        if (typeof(HTMLElement) === 'object') {
            return (html && (html instanceof HTMLElement || !!html.nodeType));
        }
        return !!(html && html.nodeType);
    }

    /**
     * 인자가 HTML Tag 인지 검사한다. (Text Node 제외)
     * @param {HTMLElement} html
     * @return {Boolean} HTMLElement 인지 여부
     * @memberOf ne.util
     */
    function isHTMLTag(html) {
        if (typeof(HTMLElement) === 'object') {
            return (html && (html instanceof HTMLElement));
        }
        return !!(html && html.nodeType && html.nodeType === 1);
    }

    /**
     * null, undefined 여부와 순회 가능한 객체의 순회가능 갯수가 0인지 체크한다.
     * @param {*} obj 평가할 대상
     * @return {boolean}
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
     * isEmpty 메서드와 반대로 동작한다.
     * @param {*} obj 평가할 대상
     * @return {boolean}
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
    ne.util.isArrayToStr = Array.isArray || isArrayToStr;
    ne.util.isObject = isObject;
    ne.util.isFunction = isFunction;
    ne.util.isFunctionToStr = isFunctionToStr;
    ne.util.isNumber = isNumber;
    ne.util.isNumberToStr = isNumberToStr;
    ne.util.isString = isString;
    ne.util.isStringToStr = isStringToStr;
    ne.util.isBoolean = isBoolean;
    ne.util.isBooleanToStr = isBooleanToStr;
    ne.util.isHTMLNode = isHTMLNode;
    ne.util.isHTMLTag = isHTMLTag;
    ne.util.isEmpty = isEmpty;
    ne.util.isNotEmpty = isNotEmpty;

})(window.ne);
