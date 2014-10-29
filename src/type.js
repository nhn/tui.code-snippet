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

    function isArray(obj) {
        return isDefined(Array.isArray) ? Array.isArray(obj) : Object.prototype.toString.call(obj) === '[object Array]';
    }

    function isObject(obj) {
        return obj === Object(obj);
    }

    ne.type = {
        isDefined: isDefined,
        isTruthy: isTruthy,
        isArray: isArray,
        isObject: isObject
    };

})(window.ne);