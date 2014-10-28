/**
 * @fileoverview 공용 유틸리티 함수 모음
 * @author FE개발팀
 */

(function(ne) {
    'use strict';
    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }

    var util = {
        /**
         * 인자가 배열인지 확인
         * @param {*} obj
         * @return {boolean}
         */
        isArray: Array.isArray || (function(obj) {
            /* istanbul ignore next */
            return Object.prototype.toString.call(obj) === '[object Array]';
        }),

        /**
         * 데이터 객체를 확장하는 메서드 (deep copy 는 하지 않는다)
         * @param {object} target - 확장될 객체
         * @param {...object} objects - 프로퍼티를 복사할 객체들
         * @return {object}
         */
        extend: function(target, objects) {
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
        },

        /**
         * @type {number}
         */
        lastId: 0,

        /**
         * 객체에 unique한 ID를 프로퍼티로 할당한다.
         * @param {object} obj - ID를 할당할 객체
         * @return {number}
         */
        stamp: function(obj) {
            obj._t_id = obj._t_id || ++util.lastId;
            return obj._t_id;
        },

        /**
         * 커링 메서드
         * @param {function()} fn
         * @param {*} obj - this로 사용될 객체
         * @return {function()}
         */
        bind: function(fn, obj) {
            var slice = Array.prototype.slice;

            if (fn.bind) {
                return fn.bind.apply(fn, slice.call(arguments, 1));
            }

            /* istanbul ignore next */
            var args = slice.call(arguments, 2);

            /* istanbul ignore next */
            return function() {
                /* istanbul ignore next */
                return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
            };
        }
    };

    ne.util = util;

})(window.ne);
