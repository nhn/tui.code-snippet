/**
 * @fileoverview
 * @author FE개발팀
 */

(function(ne) {
    'use strict';
    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }

    /**
     * 데이터 객체를 확장하는 메서드 (deep copy 는 하지 않는다)
     * @param {object} target - 확장될 객체
     * @param {...object} objects - 프로퍼티를 복사할 객체들
     * @return {object}
     */
    function extend(target, objects) {
        var source,
            prop,
            hasOwnProp = Object.prototype.hasOwnProperty,
            i, len;

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
     * @type {number}
     */
    var lastId = 0;

    /**
     * 객체에 unique한 ID를 프로퍼티로 할당한다.
     * @param {object} obj - ID를 할당할 객체
     * @return {number}
     */
    function stamp(obj) {
        obj.__fe_id = obj.__fe_id || ++lastId;
        return obj.__fe_id;
    }

    function resetLastId() {
        lastId = 0;
    }

    ne.object = {
        extend: extend,
        stamp: stamp,
        resetLastId: resetLastId
    };

})(window.ne);