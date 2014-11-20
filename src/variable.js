/**
 * @fileoverview 전역변수를 쉽게 사용하기 위한 모듈
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
     * 전역변수를 저장하기 위한 변수
     * @type {object}
     */
    var settings = {};


    /**
     * 설정했던 전역변수를 가져온다
     * @param {string} path
     */
    function get(path) {
        if (!ne.util.isDefined(path)) {
            return undefined;
        }

        var pathList = path.split('.'),
            i = 0,
            len = pathList.length,
            pathChunk,
            parent = settings;

        for (; i < len; i++) {
            pathChunk = pathList[i];
            if (typeof parent === 'undefined') {
                break;
            }

            parent = parent[pathChunk];
        }

        return parent;
    }

    /**
     * 전역변수를 설정한다
     *
     * 이미 설정되어있는 변수를 설정하면 덮어쓴다.
     *
     * @param {(string|object)} path 변수를 저장할 path 또는 변경할 {path:value} 객체
     * @param {*} obj 저장할 값
     * @return {*} 단일 값 세팅 시는 세팅한 값을 반환한다 (반환 값은 참조형이기 때문에 주의를 요한다)
     * @example
     * // 단일 값 세팅
     * ne.util.set('msg.loginerror', '로그인 오류가 발생했습니다');
     *
     * // 여러 값을 한번에 변경
     * ne.util.set({
     *     'msg.loginerror': '로그인 중 오류가 발생했습니다. 잠시 후 다시 시도하세요',
     *     'msg.loginfail': '없는 아이디이거나 패스워드가 맞지 않습니다'
     * });
     */
    function set(path, obj) {
        if (typeof path !== 'string') {
            ne.util.forEach(path, function(value, key) {
                set(key, value);
            });
        } else if (typeof obj !== 'undefined') {
            var pathList = path.split('.'),
                i = 0,
                len = pathList.length,
                pathStr,
                parent = settings;

            for (; i < len; i++) {
                pathStr = pathList[i];

                if (i === len - 1) {
                    return parent[pathStr] = obj;
                }

                if (typeof parent[pathStr] === 'undefined') {
                    parent[pathStr] = {};
                }

                parent = parent[pathStr];
            }
        }
    }

    /**
     * 전역변수 공간을 인자 객체로 재설정한다
     * @param {object} obj
     */
    function reset(obj) {
        if (ne.util.isDefined(obj)) {

            if (!ne.util.isObject(obj) || ne.util.isFunction(obj) || ne.util.isArray(obj)) {
                throw new Error('variable: 전역변수 공간은 object 형태의 데이터로만 설정이 가능합니다.');
            } else {
                settings = obj;
            }

        } else {
            settings = {};
        }
    }

    ne.util.variable = {
        get: get,
        set: set,
        reset: reset
    };

})(window.ne);
