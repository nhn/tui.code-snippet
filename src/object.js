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
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * 데이터 객체를 확장하는 메서드 (deep copy 는 하지 않는다)
     * @param {object} target - 확장될 객체
     * @param {...object} objects - 프로퍼티를 복사할 객체들
     * @return {object}
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
     * @type {number}
     */
    var lastId = 0;

    /**
     * 객체에 unique한 ID를 프로퍼티로 할당한다.
     * @param {object} obj - ID를 할당할 객체
     * @return {number}
     * @memberOf ne.util
     */
    function stamp(obj) {
        obj.__fe_id = obj.__fe_id || ++lastId;
        return obj.__fe_id;
    }

    /**
     * object#stamp로 UniqueID를 부여했었는지 여부 확인
     * @param {object} obj
     * @returns {boolean}
     * @memberOf ne.util
     */
    function hasStamp(obj) {
        return ne.util.isExisty(ne.util.pick(obj, '__fe_id'));
    }

    function resetLastId() {
        lastId = 0;
    }

    /**
     * 객체를 전달받아 객체의 키목록을 배열로만들어 리턴해준다.
     * @param obj
     * @returns {Array}
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
     *
     * 여러개의 json객체들을 대상으로 그것들이 동일한지 비교하여 리턴한다.
     * (출처) http://stackoverflow.com/questions/1068834/object-comparison-in-javascript
     *
     * @param {...object} object 비교할 객체 목록
     * @return {boolean} 파라미터로 전달받은 json객체들의 동일 여부
     * @example
     *
       var jsonObj1 = {name:'milk', price: 1000},
           jsonObj2 = {name:'milk', price: 1000},
           jsonObj3 = {name:'milk', price: 1000}

       ne.util.compareJSON(jsonObj1, jsonObj2, jsonObj3);
           => return true

       var jsonObj4 = {name:'milk', price: 1000},
           jsonObj5 = {name:'beer', price: 3000}

       ne.util.compareJSON(jsonObj4, jsonObj5);
          => return false

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

            //인풋 데이터 x의 오브젝트 키값으로 값을 순회하면서
            //hasOwnProperty, typeof 체크를 해서 비교하고 x[prop]값과 y[prop] 가 같은 객체인지 판별한다.
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
     * 인자로 받은 object 와 하위 프로퍼티 문자열로 해당 위치의 값을 반환한다.
     * @param {object} 대상 객체
     * @param {...string}   하위 프로퍼티 문자열
     * @returns {*} 반환된 값
     * @example
     *
        var obj = {
            'key1': 1,
            'nested' : {
                'key1': 11,
                'nested': {
                    'key1': 21
                }
            }
        };


         ne.util.pick(obj, 'nested', 'nested', 'key1');
         => 21

        ne.util.pick(obj, 'nested', 'nested', 'key2');
        => undefined

        var arr = ['a', 'b', 'c'];

        ne.util.pick(arr, 1);
         => 'b'
     */
    function pick() {
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
