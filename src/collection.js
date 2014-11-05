/**
 * @fileoverview
 * @author FE개발팀
 * @dependency type.js, object.js
 */

(function(ne) {
    'use strict';
    if (!ne) {
        ne = window.ne = {};
    }

    /**
     * 파라메터로 전달된 객체나 어레이를 순회하며 데이터를 콜백함수에 전달한다.
     * @param {*} obj 순회할 객체
     * @param {Function} iteratee 데이터가 전달될 콜백함수
     * @param {*} [context] 콜백함수의 컨텍스트
     **/
    var forEach = function(obj, iteratee, context) {
        var key,
            t;

        if (ne.isArray(obj)) {
            for (key = 0, t = obj.length; key < t; key++) {
                iteratee.call(context || null, obj[key], key, obj);
            }
        } else {
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    iteratee.call(context || null, obj[key], key, obj);
                }
            }
        }
    };

    /**
     * 파라메터로 전달된 객체나 어레이를 순회하며 콜백을 실행한 리턴값을 배열로 만들어 리턴한다.
     * @param {*} obj 순회할 객체
     * @param {Function} iteratee 데이터가 전달될 콜백함수
     * @param {*} [context] 콜백함수의 컨텍스트
     * @returns {Array}
     * @example
     * map([0,1,2,3], function(value) {
     *     return value + 1;
     * });
     *
     * => [1,2,3,4];
     */
    var map = function(obj, iteratee, context) {
        var resultArray = [];

        forEach(obj, function() {
            resultArray.push(iteratee.apply(context || null, arguments));
        });

        return resultArray;
    };

    /**
     * 파라메터로 전달된 객체나 어레이를 순회하며 콜백을 실행한 리턴값을 다음 콜백의 첫번째 인자로 넘겨준다.
     * @param {*} obj 순회할 객체
     * @param {Function} iteratee 데이터가 전달될 콜백함수
     * @param {*} [context] 콜백함수의 컨텍스트
     * @returns {*}
     * @example
     * reduce([0,1,2,3], function(stored, value) {
     *     return stored + value;
     * });
     *
     * => 6;
     */
    var reduce = function(obj, iteratee, context) {
        var keys,
            index = 0,
            length,
            store,
            t;


        if (!ne.isArray(obj)) {
            keys = ne.keys(obj);
        }

        length = keys ? keys.length : obj.length;

        store = obj[keys ? keys[index++] : index++];

        for (; index < length; index++) {
            store = iteratee.call(context || null, store, obj[keys ? keys[index] : index]);
        }

        return store;
    };

    ne.forEach = forEach;
    ne.map = map;
    ne.reduce = reduce;

})(window.ne);