/**
 * @fileoverview 객체나 배열을 다루기위한 펑션들이 정의 되어있는 모듈
 * @author FE개발팀
 * @dependency type.js, object.js
 */

(function(ne) {
    'use strict';
    if (!ne) {
        ne = window.ne = {};
    }

    /**
     * 배열나 유사배열를 순회하며 콜백함수에 전달한다.
     * 콜백함수가 false를 리턴하면 순회를 종료한다.
     * @param {Array} arr
     * @param {Function} iteratee  값이 전달될 콜백함수
     * @param {*} [context] 콜백함수의 컨텍스트
     * @example
     *
     * var sum = 0;
     *
     * forEachArray([1,2,3], function(value){
     *     sum += value;
     * });
     *
     * => sum == 6
     */
    function forEachArray(arr, iteratee, context) {
        var index = 0,
            len = arr.length;

        for (; index < len; index++) {
            if (iteratee.call(context || null, arr[index], index, arr) === false) {
                break;
            }
        }
    }


    /**
     * obj에 상속된 프로퍼티를 제외한 obj의 고유의 프로퍼티만 순회하며 콜백함수에 전달한다.
     * 콜백함수가 false를 리턴하면 순회를 중료한다.
     * @param {object} obj
     * @param {Function} iteratee  프로퍼티가 전달될 콜백함수
     * @param {*} [context] 콜백함수의 컨텍스트
     * @example
     * var sum = 0;
     *
     * forEachOwnProperties({a:1,b:2,c:3}, function(value){
     *     sum += value;
     * });
     *
     * => sum == 6
     **/
    function forEachOwnProperties(obj, iteratee, context) {
        var key;

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (iteratee.call(context || null, obj[key], key, obj) === false) {
                    break;
                }
            }
        }
    }

    /**
     * 파라메터로 전달된 객체나 배열를 순회하며 데이터를 콜백함수에 전달한다.
     * 유사배열의 경우 배열로 전환후 사용해야함.(ex2 참고)
     * 콜백함수가 false를 리턴하면 순회를 종료한다.
     * @param {*} obj 순회할 객체
     * @param {Function} iteratee 데이터가 전달될 콜백함수
     * @param {*} [context] 콜백함수의 컨텍스트
     * @example
     *
     * //ex1)
     * var sum = 0;
     *
     * forEach([1,2,3], function(value){
     *     sum += value;
     * });
     *
     * => sum == 6
     *
     * //ex2) 유사 배열사용
     * function sum(){
     *     var factors = Array.prototype.slice.call(arguments); //arguments를 배열로 변환, arguments와 같은정보를 가진 새 배열 리턴
     *
     *     forEach(factors, function(value){
     *          ......
     *     });
     * }
     *
     **/
    function forEach(obj, iteratee, context) {
        var key,
            len;

        if (ne.isArray(obj)) {
            for (key = 0, len = obj.length; key < len; key++) {
                iteratee.call(context || null, obj[key], key, obj);
            }
        } else {
            ne.forEachOwnProperties(obj, iteratee, context);
        }
    }

    /**
     * 파라메터로 전달된 객체나 배열를 순회하며 콜백을 실행한 리턴값을 배열로 만들어 리턴한다.
     * 유사배열의 경우 배열로 전환후 사용해야함.(forEach example참고)
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
    function map(obj, iteratee, context) {
        var resultArray = [];

        ne.forEach(obj, function() {
            resultArray.push(iteratee.apply(context || null, arguments));
        });

        return resultArray;
    }

    /**
     * 파라메터로 전달된 객체나 배열를 순회하며 콜백을 실행한 리턴값을 다음 콜백의 첫번째 인자로 넘겨준다.
     * 유사배열의 경우 배열로 전환후 사용해야함.(forEach example참고)
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
    function reduce(obj, iteratee, context) {
        var keys,
            index = 0,
            length,
            store;


        if (!ne.isArray(obj)) {
            keys = ne.keys(obj);
        }

        length = keys ? keys.length : obj.length;

        store = obj[keys ? keys[index++] : index++];

        for (; index < length; index++) {
            store = iteratee.call(context || null, store, obj[keys ? keys[index] : index]);
        }

        return store;
    }
    /**
     * 유사배열을 배열 형태로 변환한다.
     * @param {*} arrayLike 유사배열
     * @return {Array}
     * @example

     var arrayLike = {
        0: 'one',
        1: 'two',
        2: 'three',
        3: 'four',
        length: 4
    };
     var result = toArray(arrayLike);

     => ['one', 'two', 'three', 'four'];
     */
    function toArray(arrayLike) {
        var arr;
        try {
            arr = Array.prototype.slice.call(arrayLike);
        } catch (e) {
            arr = [];
            forEachArray(arrayLike, function(value) {
                arr.push(value);
            });
        }
        return arr;
    }

    ne.forEachOwnProperties = forEachOwnProperties;
    ne.forEachArray = forEachArray;
    ne.forEach = forEach;
    ne.toArray = toArray;
    ne.map = map;
    ne.reduce = reduce;

})(window.ne);
