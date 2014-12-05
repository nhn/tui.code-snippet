/**
 * @fileoverview
 * @author FE개발팀
 */

(function(ne) {
    'use strict';
    if (!ne) {
        ne = window.ne = {};
    }
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    $.fn.extend({
        isChildOf : function(filter_string) {
            var parents = $(this).parents().get();
            for (var j=0; j<parents.length; j++){
                if($(parents[j]).is(filter_string)){
                    return true;
                }
            }

            return false;
        },
        serializeObject : function(){
            var o = {};
            var a = this.serializeArray();
            $.each(a, function() {
                if (o[this.name] !== undefined) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        },
        getTagName : function(){
            var el = this[0],
                tagName = "";
            if(el){
                tagName = el.tagName;
            }
            return tagName.toLowerCase();
        }
    });

    $.stripTags = function(targetString){
        return targetString.replace(/<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/ig, '');
    };

    $.escapeHTML = function(targetString){
        var entities = {'"':'quot','&':'amp','<':'lt','>':'gt','\'':'#39'};
        return targetString.replace(/[<>&"']/g, function(m0){
            return entities[m0]?'&'+entities[m0]+';':m0;
        });
    };

    $.hasInArray = function(checkValue, targetArray){
        return $.inArray(checkValue, targetArray) > -1;
    };

    $.refuseInArray = function(refuseValue, targetArray){
        var resultArray = [];
        for(var i=0; i<targetArray.length; i++){
            if(targetArray[i] != refuseValue) resultArray.push(targetArray[i]);
        }
        return resultArray;
    };

    $.bytes = function(targetString, maxBytes, charset){
        var i, code = 0, bytes = 0, len;
        charset = charset || ((document.charset || document.characterSet || document.defaultCharset)+"");

        if (charset.toLowerCase() == "utf-8") {
            for(i=0, len=targetString.length; i<len; i++) {
                code = targetString.charCodeAt(i);
                if (code < 128) {
                    bytes += 1;
                }else if (code < 2048){
                    bytes += 2;
                }else if (code < 65536){
                    bytes += 3;
                }else{
                    bytes += 4;
                }

                if (maxBytes > 0 && bytes > maxBytes) {
                    targetString = targetString.substr(0,i);
                    break;
                }
            }
        } else {
            for(i=0, len=targetString.length; i<len; i++) {
                bytes += (targetString.charCodeAt(i) > 128)?2:1;

                if (maxBytes > 0 && bytes > maxBytes) {
                    targetString = targetString.substr(0,i);
                    break;
                }
            }
        }

        return maxBytes > 0 ? targetString : bytes;
    };

    /**
     * jQuery JSON plugin 2.4.0
     *
     * @author Brantley Harris, 2009-2011
     * @author Timo Tijhof, 2011-2012
     * @source This plugin is heavily influenced by MochiKit's serializeJSON, which is
     *         copyrighted 2005 by Bob Ippolito.
     * @source Brantley Harris wrote this plugin. It is based somewhat on the JSON.org
     *         website's http://www.json.org/json2.js, which proclaims:
     *         "NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.", a sentiment that
     *         I uphold.
     * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
     */
    var escape = /["\\\x00-\x1f\x7f-\x9f]/g,
        meta = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        hasOwn = Object.prototype.hasOwnProperty;

    /**
     * jQuery.toJSON
     * Converts the given argument into a JSON representation.
     *
     * @param o {Mixed} The json-serializable *thing* to be converted
     *
     * If an object has a toJSON prototype, that will be used to get the representation.
     * Non-integer/string keys are skipped in the object, as are keys that point to a
     * function.
     *
     */
    $.toJSON = typeof JSON === 'object' && JSON.stringify ? JSON.stringify : function (o) {
        if (o === null) {
            return 'null';
        }

        var pairs, k, name, val,
            type = $.type(o);

        if (type === 'undefined') {
            return undefined;
        }

        // Also covers instantiated Number and Boolean objects,
        // which are typeof 'object' but thanks to $.type, we
        // catch them here. I don't know whether it is right
        // or wrong that instantiated primitives are not
        // exported to JSON as an {"object":..}.
        // We choose this path because that's what the browsers did.
        if (type === 'number' || type === 'boolean') {
            return String(o);
        }
        if (type === 'string') {
            return $.quoteString(o);
        }
        if (typeof o.toJSON === 'function') {
            return $.toJSON(o.toJSON());
        }
        if (type === 'date') {
            var month = o.getUTCMonth() + 1,
                day = o.getUTCDate(),
                year = o.getUTCFullYear(),
                hours = o.getUTCHours(),
                minutes = o.getUTCMinutes(),
                seconds = o.getUTCSeconds(),
                milli = o.getUTCMilliseconds();

            if (month < 10) {
                month = '0' + month;
            }
            if (day < 10) {
                day = '0' + day;
            }
            if (hours < 10) {
                hours = '0' + hours;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            if (milli < 100) {
                milli = '0' + milli;
            }
            if (milli < 10) {
                milli = '0' + milli;
            }
            return '"' + year + '-' + month + '-' + day + 'T' +
                hours + ':' + minutes + ':' + seconds +
                '.' + milli + 'Z"';
        }

        pairs = [];

        if ($.isArray(o)) {
            for (k = 0; k < o.length; k++) {
                pairs.push($.toJSON(o[k]) || 'null');
            }
            return '[' + pairs.join(',') + ']';
        }

        // Any other object (plain object, RegExp, ..)
        // Need to do typeof instead of $.type, because we also
        // want to catch non-plain objects.
        if (typeof o === 'object') {
            for (k in o) {
                // Only include own properties,
                // Filter out inherited prototypes
                if (hasOwn.call(o, k)) {
                    // Keys must be numerical or string. Skip others
                    type = typeof k;
                    if (type === 'number') {
                        name = '"' + k + '"';
                    } else if (type === 'string') {
                        name = $.quoteString(k);
                    } else {
                        continue;
                    }
                    type = typeof o[k];

                    // Invalid values like these return undefined
                    // from toJSON, however those object members
                    // shouldn't be included in the JSON string at all.
                    if (type !== 'function' && type !== 'undefined') {
                        val = $.toJSON(o[k]);
                        pairs.push(name + ':' + val);
                    }
                }
            }
            return '{' + pairs.join(',') + '}';
        }
    };

    /**
     * jQuery.evalJSON
     * Evaluates a given json string.
     *
     * @param str {String}
     */
    $.evalJSON = typeof JSON === 'object' && JSON.parse ? JSON.parse : function (str) {
        /*jshint evil: true */
        return eval('(' + str + ')');
    };

    /**
     * jQuery.secureEvalJSON
     * Evals JSON in a way that is *more* secure.
     *
     * @param str {String}
     */
    $.secureEvalJSON = typeof JSON === 'object' && JSON.parse ? JSON.parse : function (str) {
        var filtered =
            str
                .replace(/\\["\\\/bfnrtu]/g, '@')
                .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                .replace(/(?:^|:|,)(?:\s*\[)+/g, '');

        if (/^[\],:{}\s]*$/.test(filtered)) {
            /*jshint evil: true */
            return eval('(' + str + ')');
        }
        throw new SyntaxError('Error parsing JSON, source is not valid.');
    };

    /**
     * jQuery.quoteString
     * Returns a string-repr of a string, escaping quotes intelligently.
     * Mostly a support function for toJSON.
     * Examples:
     * >>> jQuery.quoteString('apple')
     * "apple"
     *
     * >>> jQuery.quoteString('"Where are we going?", she asked.')
     * "\"Where are we going?\", she asked."
     */
    $.quoteString = function (str) {
        if (str.match(escape)) {
            return '"' + str.replace(escape, function (a) {
                var c = meta[a];
                if (typeof c === 'string') {
                    return c;
                }
                c = a.charCodeAt();
                return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
            }) + '"';
        }
        return '"' + str + '"';
    };

    /**
     * Object comparison - http://stackoverflow.com/questions/1068834/object-comparison-in-javascript
     */
    $.compareJSON = function() {
        var leftChain, rightChain;

        function compare2Objects (x, y) {
            var p;

            // remember that NaN === NaN returns false
            // and isNaN(undefined) returns true
            if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
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
            if ((typeof x === 'function' && typeof y === 'function') ||
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

            if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
                return false;
            }

            if (x.constructor !== y.constructor) {
                return false;
            }

            if (x.prototype !== y.prototype) {
                return false;
            }

            // check for infinitive linking loops
            if ($.inArray(x, leftChain) > -1 || $.inArray(y, rightChain) > -1) {
                return false;
            }

            // Quick checking of one object beeing a subset of another.
            // todo: cache the structure of arguments[0] for performance
            for (p in y) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                }
                else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }
            }

            for (p in x) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                }
                else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }

                switch (typeof (x[p])) {
                    case 'object':
                    case 'function':

                        leftChain.push(x);
                        rightChain.push(y);

                        if (!compare2Objects (x[p], y[p])) {
                            return false;
                        }

                        leftChain.pop();
                        rightChain.pop();
                        break;

                    default:
                        if (x[p] !== y[p]) {
                            return false;
                        }
                        break;
                }
            }

            return true;
        }

        if (arguments.length < 1) {
            return true; //Die silently? Don't know how to handle such case, please help...
            // throw "Need two or more arguments to compare";
        }

        for (var i = 1, l = arguments.length; i < l; i++) {

            leftChain = []; //todo: this can be cached
            rightChain = [];

            if (!compare2Objects(arguments[0], arguments[i])) {
                return false;
            }
        }

        return true;
    };

    /**
     * 배열을 순회하면서 인자로 넘긴 반복자(iterator)를 실행하며 값을 단일 변수로 추려내는 메서드
     * @method reduce
     * @param {*} obj 유사배열
     * @param {Function} iterator 배열의 각 요소에 실행할 반복자.
     * @param {*} memo 추려낼 때 사용할 변수의 초기
     * @param {*} context
     * @returns {*}
     * @examples
     * // 배열에서 undefined가 포함되어 있는지 확인값
     * var arr = [true, 1, 'asd', undefined, 125];
     *
     * var isNotExistUndefined = $.reduce(
     *     arr,
     *     function(memo, value){
	 *         return memo && typeof(value) !== 'undefined';
	 *     },
     *     true
     * );
     * console.log(isNotExistUndefined);    // false
     *
     * // 배열의 중복 값 수 계산
     * var arr = [1, 3, 4, 6, 88, 23, 1, 7, 6, 4, 3, 1, 7, 77, 46, 32, 1, 3, 1, 66, 35];
     *
     * var dupCount = $.reduce(
     *     arr,
     *     function(memo, value){
	 *         return value === 1 ? (memo + 1) : memo;
	 *     },
     *     0
     * );
     * console.log(dupCount);    // 5
     */
    $.reduce = function(obj, iterator, memo, context) {
        var initial = arguments.length > 2;

        if(obj == null){
            obj = [];
        }

        iterator = function(func, context){
            return function(accumulator, value, index, collection) {
                return func.call(context, accumulator, value, index, collection);
            };
        }(iterator, context);

        $.forEach(obj, function(value, index, list) {
            if (!initial) {
                memo = value;
                initial = true;
            } else {
                memo = iterator(memo, value, index, list);
            }
        });

        if (!initial){
            throw TypeError('e');
        }

        return memo;
    };


    $.forEach = function (obj, iterator, context){
        var i, length;
        if(obj == null) {
            return obj;
        }
        if(obj.length === +obj.length){
            for(i = 0, length = obj.length; i < length; i++){
                if(iterator.call(context, obj[i], i, obj) === {}){
                    return;
                }
            }
        }else{
            var keys = $.keys(obj);
            for(i = 0, length = keys.length; i < length; i++){
                if(iterator.call(context, obj[keys[i]], keys[i], obj) === {}){
                    return;
                }
            }
        }
        return obj;
    };

    $.keys = function (obj){
        if(!$.isObject(obj)){
            return [];
        }
        var keys = [];
        for(var key in obj){
            if($.has(obj, key)){
                keys.push(key);
            }
        }
        return keys;
    };

    $.isObject = function (obj){
        return obj === Object(obj);
    };

    $.has = function (obj, key){
        return obj != null && hasOwnProperty.call(obj, key);
    };

    ne.util.$stripTags = $.stripTags;
    ne.util.$escapeHTML = $.escapeHTML;
    ne.util.$hasInArray = $.hasInArray;
    ne.util.$refuseInArray = $.refuseInArray;
    ne.util.$bytes = $.bytes;
    ne.util.$toJSON = $.toJSON;
    ne.util.$evalJSON = $.evalJSON;
    ne.util.$secureEvalJSON = $.secureEvalJSON;
    ne.util.$quoteString = $.quoteString;
    ne.util.$compareJSON = $.compareJSON;
    ne.util.$reduce = $.reduce;
    ne.util.$forEach = $.forEach;
    ne.util.$keys = $.keys;
    ne.util.$isObject = $.isObject;
    ne.util.$has = $.has;

})(window.ne);