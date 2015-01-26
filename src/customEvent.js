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
     * 이벤트 핸들러 저장 단위
     * @typedef {{fn: function, ctx: *}} handlerItem
     */

    /**
     * 컨텍스트 별로 저장하기 위한 데이터 구조
     * @typedef {object.<string, handlerItem>} ctxEvents
     */

    function CustomEvents() {
        /**
         * 일반 핸들러 캐싱
         * @type {object.<string, handlerItem[]>}
         * @private
         */
        this._events = null;

        /**
         * 컨텍스트 핸들러 캐싱
         * @type {ctxEvents}
         * @private
         */
        this._ctxEvents = null;
    }

    /**********
     * static props
     **********/

    /**
     * 커스텀 이벤트 기능을 믹스인할 때 사용하는 메서드
     * @param {function()} func 생성자 함수
     * @example
     * // 모델 클래스 변경 시 컨트롤러에게 알림을 주고 싶은데
     * // 그 기능을 모델 클래스 자체에게 주고 싶다
     * function Model() {}
     *
     * // 커스텀 이벤트 믹스인
     * ne.util.CustomEvents.mixin(Model);
     *
     * var model = new Model();
     *
     * model.on('changed', function() {}, this);
     */
    CustomEvents.mixin = function(func) {
        ne.util.extend(func.prototype, CustomEvents.prototype);
    };

    /**********
     * private props
     **********/

    /**
     * 배열 반복자를 실행시키되 전체 순회 수를 감소시키는 메서드를 제공한다
     * @param {Array} arr
     * @param {function} iteratee
     */
    CustomEvents.prototype._forEachArrayDecrease = function(arr, iteratee) {
        var i,
            len,
            item,
            decrease = function() {
                len -= 1;
            };

        if (!ne.util.isExisty(arr) || !ne.util.isArray(arr)) {
            return;
        }

        for (i = 0, len = arr.length; i < len; i++) {
            item = arr[i];

            if (iteratee(item, i, arr, decrease) === false) {
                return;
            }
        }
    };

    /**********
     * context event handler
     **********/

    /**
     * 컨텍스트 핸들러 캐시 데이터 구조를 순회하며 반복자 수행
     * @param {function(ctxEvents: ctxEvents, eventKey: string)} iteratee
     * @private
     */
    CustomEvents.prototype._eachCtxEvents = function(iteratee) {
        var events = this._ctxEvents;
        ne.util.forEachOwnProperties(events, iteratee);
    };

    /**
     * ctxEvents 구조에서 id문자열을 포함하는 핸들러를 순회하며 반복자를 수행
     *
     * 커스텀 이벤트 데이터 내에서 각 핸들러를 순회할 때 사용한다
     * @param {ctxEvents} ctxEvents
     * @param {string} id
     * @param {function(handlerItem: handlerItem, handlerItemId: string)} iteratee
     * @private
     */
    CustomEvents.prototype._eachCtxHandlerItemByContainId = function(ctxEvents, id, iteratee) {
        ne.util.forEachOwnProperties(ctxEvents, function(handlerItem, handlerItemId) {
            if (handlerItemId.indexOf(id) > -1) {
                iteratee(handlerItem, handlerItemId);
            }
        });
    };

    /**
     * 핸들러를 받아 핸들러가 포함된 컨텍스트 이벤트 핸들러를 순회하며 반복자를 실행함
     * @param {function} handler
     * @param {function(handlerItem: handlerItem, ctxEventId: string, ctxEvents: ctxEvents, eventKey: string)} iteratee
     * @private
     */
    CustomEvents.prototype._eachCtxEventByHandler = function(handler, iteratee) {
        var handlerId = ne.util.stamp(handler),
            eachById = this._eachCtxHandlerItemByContainId;

        this._eachCtxEvents(function(ctxEvents, eventKey) {
            eachById(ctxEvents, handlerId, function(handlerItem, handlerItemId) {
                iteratee(handlerItem, handlerItemId, ctxEvents, eventKey);
            });
        });
    };

    /**
     * 컨텍스트를 기준으로 할당된 이벤트 핸들러를 순회하며 반복자를 수행
     * @param {*} context
     * @param {function(handlerItem: handlerItem, ctxEventId: string, ctxEvents: ctxEvents, eventKey: string)} iteratee
     * @private
     */
    CustomEvents.prototype._eachCtxEventByContext = function(context, iteratee) {
        var contextId = ne.util.stamp(context),
            eachById = this._eachCtxHandlerItemByContainId;

        this._eachCtxEvents(function(ctxEvents, eventKey) {
            eachById(ctxEvents, contextId, function(handlerItem, handlerItemId) {
                iteratee(handlerItem, handlerItemId, ctxEvents, eventKey);
            });
        });
    };

    /**
     * 이벤트 이름 기준으로 컨텍스트 이벤트 핸들러를 순회하며 반복자를 실행
     * @param {string} name
     * @param {function(handlerItem: handlerItem, handlerItemId: string, ctxEvents: ctxEvents, eventKey: string)} iteratee
     * @private
     */
    CustomEvents.prototype._eachCtxEventByEventName = function(name, iteratee) {
        if (!this._ctxEvents) {
            return;
        }

        var key = this._getCtxKey(name),
            ctxEvents = this._ctxEvents[key],
            args;

        ne.util.forEachOwnProperties(ctxEvents, function() {
            args = Array.prototype.slice.call(arguments);
            args.push(key);
            iteratee.apply(null, args);
        });
    };

    /**********
     * normal event handler
     **********/

    /**
     * 핸들러를 받아 핸들러가 포함된 일반 이벤트 핸들러를 순회하며 반복자를 수행
     * @param {function} handler
     * @param {function(handlerItem: handlerItem, index: number, eventList: handlerItem[], eventKey: string, decrease: function)} iteratee
     * @private
     */
    CustomEvents.prototype._eachEventByHandler = function(handler, iteratee) {
        var events = this._events,
            forEachArrayDecrease = this._forEachArrayDecrease,
            idx = 0;

        ne.util.forEachOwnProperties(events, function(eventList, eventKey) {
            forEachArrayDecrease(eventList, function(handlerItem, index, eventList, decrease) {
                if (handlerItem.fn === handler) {
                    iteratee(handlerItem, idx++, eventList, eventKey, decrease);
                }
            });
        });
    };

    /**
     * 이벤트명 기준으로 일반 이벤트를 순회하며 반복자를 수행
     * @param {string} name
     * @param {function(handlerItem: handlerItem, index: number, itemList: handlerItem[], decrease: function)} iteratee
     * @private
     */
    CustomEvents.prototype._eachEventByEventName = function(name, iteratee) {
        if (!this._events) {
            return;
        }

        var events = this._events[name];

        if (!ne.util.isExisty(events)) {
            return;
        }

        this._forEachArrayDecrease(events, iteratee);
    };

    /**
     * 컨텍스트 핸들러 저장용 키를 만든다
     * @param {string} name 이벤트명
     * @returns {string}
     * @private
     */
    CustomEvents.prototype._getCtxKey = function(name) {
        return name + '_idx';
    };

    /**
     * 컨텍스트 핸들러 등록 개수 저장용 키를 만든다
     * @param {string} name 이벤트명
     * @returns {string}
     * @private
     */
    CustomEvents.prototype._getCtxLenKey = function(name) {
        return name + '_len';
    };

    /**
     * 핸들러 저장용 키를 만든다
     * @param {function} func 이벤트 핸들러
     * @param {*} ctx 핸들러 실행 컨텍스트
     * @returns {string}
     * @private
     */
    CustomEvents.prototype._getHandlerKey = function(func, ctx) {
        return ne.util.stamp(func) + '_' + ne.util.stamp(ctx);
    };


    /**
     * 컨텍스트 이벤트 핸들러의 갯수를 카운팅
     * @param {string} lenKey
     * @param {number} change 증감 값
     * @private
     */
    CustomEvents.prototype._setCtxLen = function(lenKey, change) {
        var events = this._ctxEvents;

        if (!ne.util.isExisty(events[lenKey])) {
            events[lenKey] = 0;
        }

        events[lenKey] += change;
    };


    /**
     * 컨텍스트용 이벤트 캐시 구조로 저장한다
     * @param {string} name 이벤트명
     * @param {*} context 핸들러에 바인딩할 컨텍스트
     * @param {function} handler 핸들러 함수
     * @private
     */
    CustomEvents.prototype._addCtxEvent = function(name, context, handler) {
        var events = this._ctxEvents,
            key = this._getCtxKey(name),
            event;

        // 핸들러 등록
        if (!ne.util.isExisty(events)) {
            events = this._ctxEvents = {};
        }

        event = events[key];
        if (!ne.util.isExisty(event)) {
            event = events[key] = {};
        }

        var lenKey = this._getCtxLenKey(name),
            handlerItemId = this._getHandlerKey(handler, context);

        event[handlerItemId] = {
            fn: handler,
            ctx: context
        };

        // 핸들러 갯수 설정
        this._setCtxLen(lenKey, +1);
    };

    /**
     * 일반 이벤트 등록
     * @param {string} name 이벤트명
     * @param {function} handler 이벤트 핸들러
     * @private
     */
    CustomEvents.prototype._addNormalEvent = function(name, handler) {
        var events = this._events,
            event;

        if (!ne.util.isExisty(events)) {
            events = this._events = {};
        }

        event = events[name];
        if (!ne.util.isExisty(event)) {
            event = events[name] = [];
        }

        event.push({ fn: handler });
    };

    /**********
     * public props
     **********/

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
    CustomEvents.prototype.on = function(name, handler, context) {
        var names;

        if (ne.util.isObject(name)) {
            // 이벤트명: 핸들러 전달
            context = handler;
            ne.util.forEachOwnProperties(name, function(handler, name) {
                 this.on(name, handler, context);
            }, this);
            return;
        } else if (ne.util.isString(name) && name.indexOf(' ') > -1) {
            // 공백으로 여러 이벤트 처리
            names = name.split(' ');
            ne.util.forEachArray(names, function(name) {
                this.on(name, handler, context);
            }, this);
            return;
        }

        var ctxId;

        if (ne.util.isExisty(context)) {
            ctxId = ne.util.stamp(context);
        }

        if (ne.util.isExisty(ctxId)) {
            // 컨텍스트 전달
            this._addCtxEvent(name, context, handler);
        } else {
            // 일반 이벤트 등록
            this._addNormalEvent(name, handler);
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
     * // 7. 이벤트명: 핸들러 전달 (특정 핸들러만 해제 원할때)
     * customEvent.off({
     *   'play': handler,
     *   'pause': handler2
     * });
     *
     * // 8. 모든 등록 핸들러 제거
     * customEvent.off();
     */
    CustomEvents.prototype.off = function(name, handler) {
        if (!arguments.length) {
            // 8. 모든 핸들러 제거
            this._events = null;
            this._ctxEvents = null;
            return;
        }

        if (ne.util.isFunction(name)) {
            // 3. 핸들러 기준
            this._offByHandler(name);

        } else if (ne.util.isObject(name)) {
            if (ne.util.hasStamp(name)) {
                // 1, 5, 6 컨텍스트 기준
                this._offByContext(name, handler);
            } else {
                // 4. 이벤트명: 핸들러 전달
                ne.util.forEachOwnProperties(name, function(handler, name) {
                    this.off(name, handler);
                }, this);
            }

        } else {
            // 2, 4 이벤트명 기준
            this._offByEventName(name, handler);

        }
    };

    /**
     * 이벤트 등록 수 반환
     * @param {string} eventName
     * @returns {*}
     */
    CustomEvents.prototype.getListenerLength = function(eventName) {
        var ctxEvents = this._ctxEvents,
            events = this._events,
            existy = ne.util.isExisty,
            lenKey = this._getCtxLenKey(eventName);

        var normal = (existy(events) && ne.util.isArray(events[eventName])) ? events[eventName].length : 0,
            ctx = existy(ctxEvents) ? ctxEvents[lenKey] : 0;

        return normal + ctx;
    };

    /**
     * 이벤트 등록 여부 반환
     * @param {string} eventName 이벤트명
     * @returns {boolean}
     */
    CustomEvents.prototype.hasListener = function(eventName) {
        return this.getListenerLength(eventName) > 0;
    };



    /**
     * 이벤트를 발생시키는 메서드
     *
     * 등록한 리스너들의 실행 결과를 boolean AND 연산하여
     *
     * 반환한다는 점에서 {@link CustomEvents#fire} 와 차이가 있다
     *
     * 보통 컴포넌트 레벨에서 before 이벤트로 사용자에게
     *
     * 이벤트를 취소할 수 있게 해 주는 기능에서 사용한다.
     * @param {string} eventName
     * @param {*...} data
     * @returns {*}
     * @example
     * // 확대 기능을 지원하는 컴포넌트 내부 코드라 가정
     * if (this.invoke('beforeZoom')) {    // 사용자가 등록한 리스너 결과 체크
     *     // 리스너의 실행결과가 true 일 경우
     *     // doSomething
     * }
     *
     * //
     * // 아래는 사용자의 서비스 코드
     * map.on({
     *     'beforeZoom': function() {
     *         if (that.disabled && this.getState()) {    //서비스 페이지에서 어떤 조건에 의해 이벤트를 취소해야한다
     *             return false;
     *         }
     *         return true;
     *     }
     * });
     */
    CustomEvents.prototype.invoke = function(eventName, data) {
        if (!this.hasListener(eventName)) {
            return true;
        }

        var args = Array.prototype.slice.call(arguments, 1),
            self = this,
            result = true,
            existy = ne.util.isExisty;

        this._eachEventByEventName(eventName, function(item) {
            if (existy(item) && item.fn.apply(self, args) === false) {
                result = false;
            }
        });

        this._eachCtxEventByEventName(eventName, function(item) {
            if (existy(item) && item.fn.apply(item.ctx, args) === false) {
                result = false;
            }
        });

        return result;
    };

    /**
     * 이벤트를 발생시키는 메서드
     * @param {string} eventName 이벤트 이름
     * @param {*...} data 발생과 함께 전달할 이벤트 데이터 (래핑하지 않고 인자로 전달한다)
     * @return {*}
     * @example
     * instance.fire('move', 'left');
     *
     * // 이벤트 핸들러 처리
     * instance.on('move', function(direction) {
     *     var direction = direction;
     * });
     */
    CustomEvents.prototype.fire = function(eventName, data) {
        this.invoke.apply(this, arguments);
        return this;
    };

    /**
     * 단발성 커스텀 이벤트 핸들러 등록 시 사용
     * @param {(object|string)} eventName 이벤트명:핸들러 객체 또는 이벤트명
     * @param {function()=} fn 핸들러 함수
     * @param {*=} context
     */
    CustomEvents.prototype.once = function(eventName, fn, context) {
        var that = this;

        if (ne.util.isObject(eventName)) {
            ne.util.forEachOwnProperties(eventName, function(handler, eventName) {
                this.once(eventName, handler, fn);
            }, this);

            return;
        }

        function onceHandler() {
            fn.apply(context, arguments);
            that.off(eventName, onceHandler, context);
        }

        this.on(eventName, onceHandler, context);
    };

    /**
     * 핸들러 함수로 이벤트 해제
     * @param {function} handler 이벤트 핸들러 함수
     * @private
     */
    CustomEvents.prototype._offByHandler = function(handler) {
        var ctxEvents = this._ctxEvents,
            lenKey;

        this._eachCtxEventByHandler(handler, function(handlerItem, hanId, ctxItems, eventKey) {
            lenKey = eventKey.replace('_idx', '_len');
            ctxItems[hanId] = null;
            ctxEvents[lenKey] -= 1;
        });

        this._eachEventByHandler(handler, function(handlerItem, index, items, eventKey, decrease) {
            items.splice(index, 1);
            decrease();
        });
    };

    /**
     * 컨텍스트로 이벤트 해제
     * @param {*} context
     * @param {(string|function)} [eventName]
     * @private
     */
    CustomEvents.prototype._offByContext = function(context, eventName) {
        var ctxEvents = this._ctxEvents,
            hasArgs = ne.util.isExisty(eventName),
            isStr = hasArgs && ne.util.isString(eventName),
            isFunc = hasArgs && ne.util.isFunction(eventName),
            lenKey;

        this._eachCtxEventByContext(context, function(handlerItem, hanId, ctxItems, eventKey) {
            lenKey = eventKey.replace('_idx', '_len');

            if (!hasArgs || ( hasArgs &&
                (isStr && eventKey.indexOf(eventName) > -1 || isFunc && handlerItem.fn === eventName))
            ) {
                ctxItems[hanId] = null;
                ctxEvents[lenKey] -= 1;
            }
        });
    };

    /**
     * 이벤트명으로 이벤트 해제
     * @param {string} eventName 이벤트명
     * @param {function} [handler] 이벤트 핸들러
     * @private
     */
    CustomEvents.prototype._offByEventName = function(eventName, handler) {
        var ctxEvents = this._ctxEvents,
            hasHandler = ne.util.isExisty(handler),
            lenKey;

        this._eachCtxEventByEventName(eventName, function(handlerItem, hanId, ctxItems, eventKey) {
            lenKey = eventKey.replace('_idx', '_len');
            if (!hasHandler || (hasHandler && handlerItem.fn === handler)) {
                ctxItems[hanId] = null;
                ctxEvents[lenKey] -= 1;
            }
        });

        this._eachEventByEventName(eventName, function(handlerItem, index, items, decrease) {
            if (!hasHandler || (hasHandler && handlerItem.fn === handler)) {
                items.splice(index, 1);
                decrease();
            }
        });

    };

    ne.util.CustomEvents = CustomEvents;

})(window.ne);
