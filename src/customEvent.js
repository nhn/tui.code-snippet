/**
 * @fileoverview 옵저버 패턴을 이용하여 객체 간 커스텀 이벤트를 전달할 수 있는 기능을 제공하는 모듈
 * @author FE개발팀
 * @dependency type.js, collection.js object.js
 */


(function(ne) {
    'use strict';
    if (!ne) {
        ne = window.ne = {};
    }
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * 커스텀 이벤트
     * @constructor
     * @exports CustomEvents2
     * @class
     */
    function CustomEvents2() {

        this._events = {};
    }

    /**********
     * static prop
     **********/


    CustomEvents2.mixin = function(func) {
        ne.util.extend(func.prototype, CustomEvents2.prototype);
    };

    /**********
     * private props
     **********/

    CustomEvents2.prototype._getNameCtxKey = function(name) {
        var keys = {
            idx: '__' + name + '_idx',
            len: '__' + name + '_len'
        };

        return keys;
    };

    CustomEvents2.prototype._getCtxKey = function(name) {
        return '__' + name + '_idx';
    };

    CustomEvents2.prototype._getCtxLenKey = function(name) {
        return '__' + name + '_len';
    };


    CustomEvents2.prototype._eachPlainHandler = function(name) {

    };

    CustomEvents2.prototype._eachCtxHandler = function(name, func) {
        var events = this._events,
            key = this._getCtxKey(name),
            event = events[key];

        if (ne.util.isExisty(event)) {
            ne.util.forEachOwnProperties(event, function(obj, eventKey) {

            })
        }
    };

    /**
     * 컨텍스트용 이벤트 캐시 구조로 저장한다
     * @param {string} name 이벤트명
     * @param {*} context 핸들러에 바인딩할 컨텍스트
     * @param {function} handler 핸들러 함수
     * @private
     */
    CustomEvents2.prototype._addCtxEvent = function(name, context, handler) {
        var events = this._events,
            ctxId = ne.util.stamp(context),
            key = this._getCtxKey(name),
            lenKey = this._getCtxLenKey(name),
            event = events[key];

        // 핸들러 등록
        if (!ne.util.isExisty(event)) {
            event = events[key] = {};
        }

        var handlerId = ne.util.stamp(handler),
            ctxEventId = handlerId + '_' + ctxId;

        event[ctxEventId] = {
            fn: handler,
            ctx: context
        };

        // 핸들러 갯수 설정
        if (!ne.util.isExisty(events[lenKey])) {
            events[lenKey] = 0;
        }

        events[lenKey] += 1;
    };

    /**********
     * public props
     **********/

    /**
     * @typedef {object} EventItem
     * @property {string}
     */

    /**
     * 이벤트를 등록한다
     * @param {(string|{name:string, handler:function})} name 등록할 이벤트명 또는 {이벤트명: 핸들러} 객체
     * @param {(function|*)} [handler] 핸들러 함수 또는 context
     * @param {*} [context] 핸들러 함수의 context 지정 가능
     * @example
     * // 1. 기본적인 등록
     * customEvent.on('onload', handler);
     *
     * // 2. 컨텍스트 전달
     * customEvent.on('onload', handler, myObj);
     *
     * // 3. 이벤트명: 핸들러 객체로 등록
     * customEvent.on({
     *   'play': handler,
     *   'pause': handler2
     * });
     *
     * // 4. 이벤트명: 핸들러 + 컨텍스트
     * customEvent.on({
     *   'play': handler
     * }, myObj);
     */
    CustomEvents2.prototype.on = function(name, handler, context) {
        if (ne.util.isObject(name)) {
            context = handler;
            ne.util.forEachOwnProperties(name, function(handler, name) {
                 this.on(name, handler, context);
            }, this);
            return;
        }

        var events = this._events || {},
            ctxId;

        if (ne.util.isExisty(context)) {
            ctxId = ne.util.stamp(context);
        }

        if (ne.util.isExisty(ctxId)) {
            this._addCtxEvent(name, context, handler);
        } else {
            if (!ne.util.isExisty(events[name])) {
                events[name] = [];
            }

            events[name].push({ fn: handler });
        }
    };

    /**
     * 등록된 이벤트를 해제한다
     * @param {(string|function|{name:string, handler:function})} name 이벤트명 또는 핸들러 또는 {이벤트명: 핸들러} 객체
     * @param {function} [handler] 핸들러 함수
     * @example
     * // 1. 컨텍스트 전달
     * customEvent.off(myObj);
     *
     * // 2. 이벤트명 전달
     * customEvent.off('onload');
     *
     * // 3. 핸들러 전달
     * customEvent.off(handler);
     *
     * // 4. 이벤트명, 핸들러 전달
     * customEvent.off('play', handler);
     *
     * // 5. 컨텍스트, 핸들러 전달
     * customEvent.off(myObj, handler);
     *
     * // 6. 컨텍스트, 이벤트명 전달
     * customEvent.off(myObj, 'onload');
     *
     * // 4. 이벤트명: 핸들러 전달 (특정 핸들러만 해제 원할때)
     * customEvent.off({
     *   'play': handler,
     *   'pause': handler2
     * });
     */
    CustomEvents2.prototype.off = function(name, handler) {
        var key = '';
        if (ne.util.isObject(name)) {

            if (ne.util.isExisty(handler)) {

                if (ne.util.isString(handler)) {

                } else {

                }

            } else {
                key = this._getCtxKey(name);
                this._events[key] = null;
            }


            return;
        }


    };


    ne.util.CustomEvents = CustomEvents2;


})(window.ne);


//
//(function(ne) {
//    'use strict';
//    /* istanbul ignore if */
//    if (!ne) {
//        ne = window.ne = {};
//    }
//    if (!ne.util) {
//        ne.util = window.ne.util = {};
//    }
//
//    /**
//     * 이벤트 핸들러에 저장되는 단위
//     * @typedef {object} eventItem
//     * @property {object.<string, object>} eventObject
//     * @property {function()} eventObject.fn 이벤트 핸들러 함수
//     * @property {*} [eventObject.ctx] 이벤트 핸들러 실행 시 컨텍스트 지정가능
//     */
//
//
//    /**
//     * 커스텀 이벤트 클래스
//     * @constructor
//     * @exports CustomEvents
//     * @class
//     */
//    function CustomEvents() {
//
//        /**
//         * 이벤트 핸들러를 저장하는 객체
//         * @type {object.<string, eventItem>}
//         * @private
//         */
//        this._events = {};
//    }
//
//    var CustomEventMethod = /** @lends CustomEvents */ {
//        /**
//         * 인스턴스가 발생하는 이벤트에 핸들러를 등록하는 메서드
//         * @param {(object|String)} types - 이벤트 타입 (타입과 함수 쌍으로 된 객체를 전달할 수도 있고 타입만
//         * 전달할 수 있다. 후자의 경우 두 번째 인자에 핸들러를 전달해야 한다.)
//         * @param {function()=} fn - 이벤트 핸들러 목록
//         * @param {*=} context
//         * @example
//         * // 첫 번째 인자에 이벤트명:핸들러 데이터 객체를 넘긴 경우
//         * instance.on({
//         *     zoom: function() {},
//         *     pan: function() {}
//         * }, this);
//         *
//         * // 여러 이벤트를 한 핸들러로 처리할 수 있도록 함
//         * instance.on('zoom pan', function() {});
//         */
//        on: function(types, fn, context) {
//            this._toggle(true, types, fn, context);
//        },
//
//        /**
//         * 인스턴스에 등록했던 이벤트 핸들러를 해제할 수 있다.
//         * @param {(object|string)=} types 등록 해지를 원하는 이벤트 객체 또는 타입명. 아무 인자도 전달하지 않으면 모든 이벤트를 해제한다.
//         * @param {Function=} fn 삭제할 핸들러, 핸들러를 전달하지 않으면 types 해당 이벤트가 모두 삭제된다.
//         * @param {*=} context
//         * @example
//         * // zoom 이벤트만 해제
//         * instance.off('zoom', onZoom);
//         *
//         * // pan 이벤트 해제 (이벤트 바인딩 시에 context를 넘겼으면 그대로 넘겨주어야 한다)
//         * instance.off('pan', onPan, this);
//         *
//         * // 인스턴스 내 모든 이벤트 해제
//         * instance.off();
//         */
//        off: function(types, fn, context) {
//            if (!ne.util.isExisty(types)) {
//                this._events = null;
//                return;
//            }
//
//            this._toggle(false, types, fn, context);
//        },
//
//        /**
//         * on, off 메서드의 중복 코드를 줄이기 위해 만든 on토글 메서드
//         * @param {boolean} isOn
//         * @param {(Object|String)} types - 이벤트 타입 (타입과 함수 쌍으로 된 객체를 전달할 수도 있고 타입만
//         * 전달할 수 있다. 후자의 경우 두 번째 인자에 핸들러를 전달해야 한다.)
//         * @param {function()=} fn - 이벤트 핸들러 목록
//         * @param {*=} context
//         * @private
//         */
//        _toggle: function(isOn, types, fn, context) {
//            var methodName = isOn ? '_on' : '_off',
//                method = this[methodName];
//
//            if (ne.util.isObject(types)) {
//                ne.util.forEachOwnProperties(types, function(handler, type) {
//                    method.call(this, type, handler, fn);
//                }, this);
//            } else {
//                types = types.split(' ');
//
//                ne.util.forEach(types, function(type) {
//                    method.call(this, type, fn, context);
//                }, this);
//            }
//        },
//
//        /**
//         * 내부적으로 실제로 이벤트를 등록하는 로직을 담는 메서드.
//         *
//         * 옵션에 따라 이벤트를 배열에 등록하기도 하고 해시에 등록하기도 한다.
//         *
//         * 두개를 사용하는 기준:
//         *
//         * 핸들러가 이미 this바인딩이 되어 있고 핸들러를 사용하는 object가 같은 종류가 동시다발적으로 생성/삭제되는 경우에는 context인자를
//         * 전달하여 해시의 빠른 접근 속도를 이용하는 것이 좋다.
//         *
//         * @param {(object.<string, function()>|string)} type - 이벤트 타입 (타입과 함수 쌍으로 된 객체를 전달할 수도 있고 타입만
//         * 전달할 수 있다. 후자의 경우 두 번째 인자에 핸들러를 전달해야 한다.)
//         * @param {function()} fn - 이벤트 핸들러
//         * @param {*=} context
//         * @private
//         */
//        _on: function(type, fn, context) {
//            var events = this._events = this._events || {},
//                contextId = context && (context !== this) && ne.util.stamp(context);
//
//            if (contextId) {
//                /*
//                 context가 현재 인스턴스와 다를 때 context의 아이디로 내부의 해시에서 빠르게 해당 핸들러를 컨트롤 하기 위한 로직.
//                 이렇게 하면 동시에 많은 이벤트를 발생시키거나 제거할 때 성능면에서 많은 이점을 제공한다.
//                 특히 동시에 많은 엘리먼트들이 추가되거나 해제될 때 도움이 될 수 있다.
//                 */
//                var indexKey = type + '_idx',
//                    indexLenKey = type + '_len',
//                    typeIndex = events[indexKey] = events[indexKey] || {},
//                    id = ne.util.stamp(fn) + '_' + contextId; // 핸들러의 id + context의 id
//
//                if (!typeIndex[id]) {
//                    typeIndex[id] = {
//                        fn: fn,
//                        ctx: context
//                    };
//
//                    // 할당된 이벤트의 갯수를 추적해 두고 할당된 핸들러가 없는지 여부를 빠르게 확인하기 위해 사용한다
//                    events[indexLenKey] = (events[indexLenKey] || 0) + 1;
//                }
//            } else {
//                // fn이 이미 this 바인딩이 된 상태에서 올 경우 단순하게 처리해준다
//                events[type] = events[type] || [];
//                events[type].push({fn: fn});
//            }
//        },
//
//        /**
//         * 실제로 구독을 해제하는 메서드
//         * @param {(object|string)=} type 등록 해지를 원하는 핸들러명
//         * @param {function} [fn] 삭제할 이벤트 핸들러
//         * @param {*} context
//         * @private
//         */
//        _off: function(type, fn, context) {
//            var events = this._events,
//                indexKey = type + '_idx',
//                indexLenKey = type + '_len';
//
//            if (!events) {
//                return;
//            }
//
//            var contextId = context && (context !== this) && ne.util.stamp(context),
//                listeners,
//                id;
//
//            if (contextId) {
//                id = ne.util.stamp(fn) + '_' + contextId;
//                listeners = events[indexKey];
//
//                if (listeners && listeners[id]) {
//                    listeners[id] = null;
//                    events[indexLenKey] -= 1;
//                }
//
//            } else if(!fn) {
//                events[type] = null;
//            } else {
//                listeners = events[type];
//
//                if (listeners) {
//                    if(fn){
//                        ne.util.forEach(listeners, function(listener, index) {
//                            if (ne.util.isExisty(listener) && (listener.fn === fn)) {
//                                listeners.splice(index, 1);
//                                return true;
//                            }
//                        });
//                    }
//                }
//            }
//        },
//
//        /**
//         * 이벤트를 발생시키는 메서드
//         *
//         * 등록한 리스너들의 실행 결과를 boolean AND 연산하여
//         *
//         * 반환한다는 점에서 {@link CustomEvents#fire} 와 차이가 있다
//         *
//         * 보통 컴포넌트 레벨에서 before 이벤트로 사용자에게
//         *
//         * 이벤트를 취소할 수 있게 해 주는 기능에서 사용한다.
//         * @param {string} type
//         * @param {*...} data
//         * @returns {*}
//         * @example
//         * // 확대 기능을 지원하는 컴포넌트 내부 코드라 가정
//         * if (this.invoke('beforeZoom')) {    // 사용자가 등록한 리스너 결과 체크
//         *     // 리스너의 실행결과가 true 일 경우
//         *     // doSomething
//         * }
//         *
//         * //
//         * // 아래는 사용자의 서비스 코드
//         * map.on({
//         *     'beforeZoom': function() {
//         *         if (that.disabled && this.getState()) {    //서비스 페이지에서 어떤 조건에 의해 이벤트를 취소해야한다
//         *             return false;
//         *         }
//         *         return true;
//         *     }
//         * });
//         */
//        invoke: function(type, data) {
//            if (!this.hasListener(type)) {
//                return true;
//            }
//
//            var args = Array.prototype.slice.call(arguments, 1),
//                events = this._events;
//
//            if (!events) {
//                return true;
//            }
//
//            var typeIndex = events[type + '_idx'],
//                listeners,
//                result = true;
//
//            if (events[type]) {
//                listeners = events[type].slice();
//
//                ne.util.forEach(listeners, function(listener) {
//                    if (listener.fn.apply(this, args) === false) {
//                        result = false;
//                    }
//                }, this);
//            }
//
//            ne.util.forEachOwnProperties(typeIndex, function(eventItem) {
//                if (eventItem.fn.apply(eventItem.ctx, args) === false) {
//                    result = false;
//                }
//            });
//
//            return result;
//        },
//
//        /**
//         * 이벤트를 발생시키는 메서드
//         * @param {string} type 이벤트 타입명
//         * @param {(object|string)=} data 발생과 함께 전달할 이벤트 데이터
//         * @return {*}
//         * @example
//         * instance.fire('move', { direction: 'left' });
//         *
//         * // 이벤트 핸들러 처리
//         * instance.on('move', function(moveEvent) {
//         *     var direction = moveEvent.direction;
//         * });
//         */
//        fire: function(type, data) {
//            this.invoke.apply(this, arguments);
//            return this;
//        },
//
//        /**
//         * 이벤트 핸들러 존재 여부 확인
//         * @param {string} type 핸들러명
//         * @return {boolean}
//         */
//        hasListener: function(type) {
//            var events = this._events,
//                existyFunc = ne.util.isExisty;
//
//            return existyFunc(events) && (existyFunc(events[type]) || events[type + '_len']);
//        },
//
//        /**
//         * 등록된 이벤트 핸들러의 갯수 반환
//         * @param {string} type
//         * @returns {number}
//         */
//        getListenerLength: function(type) {
//            var events = this._events,
//                lenKey = type + '_len',
//                length = 0,
//                types,
//                len;
//
//            if (!ne.util.isExisty(events)) {
//                return 0;
//            }
//
//            types = events[type];
//            len = events[lenKey];
//
//            length += (ne.util.isExisty(types) && ne.util.isArray(types)) ? types.length : 0;
//            length += ne.util.isExisty(len) ? len : 0;
//
//            return length;
//        },
//
//        /**
//         * 단발성 커스텀 이벤트 핸들러 등록 시 사용
//         * @param {(object|string)} types 이벤트명:핸들러 객체 또는 이벤트명
//         * @param {function()=} fn 핸들러 함수
//         * @param {*=} context
//         */
//        once: function(types, fn, context) {
//            var that = this;
//
//            if (ne.util.isObject(types)) {
//                ne.util.forEachOwnProperties(types, function(handler, type) {
//                    this.once(type, handler, fn);
//                }, this);
//
//                return;
//            }
//
//            function onceHandler() {
//                fn.apply(context, arguments);
//                that.off(types, onceHandler, context);
//            }
//
//            this.on(types, onceHandler, context);
//        }
//
//    };
//
//    CustomEvents.prototype = CustomEventMethod;
//    CustomEvents.prototype.constructor = CustomEvents;
//
//    /**
//     * 커스텀 이벤트 기능을 믹스인할 때 사용하는 메서드
//     * @param {function()} func 생성자 함수
//     * @example
//     * // 모델 클래스 변경 시 컨트롤러에게 알림을 주고 싶은데
//     * // 그 기능을 모델 클래스 자체에게 주고 싶다
//     * function Model() {}
//     *
//     * // 커스텀 이벤트 믹스인
//     * ne.util.CustomEvents.mixin(Model);
//     *
//     * var model = new Model();
//     *
//     * model.on('changed', function() {}, this);
//     */
//    CustomEvents.mixin = function(func) {
//        ne.util.extend(func.prototype, CustomEventMethod);
//    };
//
//    ne.util.CustomEvents = CustomEvents;
//
//})(window.ne);
