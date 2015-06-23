/**
 * @fileoverview
 *  This module provides some functions for custom events.
 *  And it is implemented in the observer design pattern.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency type.js, collection.js object.js
 */

(function(ne) {
    'use strict';
    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }

    /* istanbul ignore if */
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * A unit of event handler item.
     * @ignore
     * @typedef {Object} handlerItem
     * @property {function} fn - event handler
     * @property {*} ctx - context of event handler
     */

    /**
     * A data structure for storing handlerItems bound with a specific context
     *  and is a unit item of ctxEvents.
     * Handlers in this item, will be executed with same event.
     * @ignore
     * @typedef {Object.<string, handlerItem>} ctxEventsItem
     * @example
     *  ctxEventsItem = {
     *      1_1: {
     *          fn: function(){...},
     *          ctx: context1
     *      },
     *      2_1: {
     *          fn: function(){...},
     *          ctx: context1
     *      }
     *  }
     */

    /**
     * A data structure for storing ctxEventsItem and length for each event(or event name).
     * @ignore
     * @typedef {Object.<string, (ctxEventsItem|number)>} ctxEvents
     * @example
     *  ctxEvents = {
     *      eventName1_idx: {
     *          1_1: {
     *              fn: function(){...},
     *              ctx: context1
     *          },
     *          2_1: {
     *              fn: function(){...},
     *              ctx: context1
     *          }
     *      },
     *      eventName1_len: 2,
     *      eventName2_idx: {
     *          3_2: {
     *              fn: function(){...},
     *              ctx: context2
     *          },
     *          4_2: {
     *              fn: function(){...},
     *              ctx: context2
     *          }
     *      },
     *      eventName2_len: 2
     *  };
     */


    /**
     * @constructor
     * @memberof ne.util
     */
    function CustomEvents() {
        /**
         * Caching a data structure that has normal event handlers which are not bound with a specific context.
         * @type {object.<string, handlerItem[]>}
         * @private
         */
        this._events = null;

        /**
         * Caching a {ctxEvents}
         * @type {ctxEvents}
         * @private
         */
        this._ctxEvents = null;
    }


    /**********
     * static
     **********/

    /**
     * Use for making a constructor to be able to do CustomEvent's functions.
     * @param {function} func - Constructor
     * @example
     *  function Model() {
     *      this.name = '';
     *  }
     *  ne.util.CustomEvents.mixin(Model);
     *
     *  var model = new Model();
     *  model.on('change', function() { this.name = 'model'; }, this);
     *  model.fire('change');
     *  alert(model.name); // 'model';
     */
    CustomEvents.mixin = function(func) {
        ne.util.extend(func.prototype, CustomEvents.prototype);
    };

    /**********
     * private
     **********/

    /**
     * Work similarly to Array.prototype.forEach(),
     *  however does Array.prototype.splice() additionally.
     * Callback(iteratee) function is invoked with four arguments:
     *  - The value of the element
     *  - The index of the element
     *  - The array being traversed
     *  - A special callback function that decreases the length of array
     * @param {Array} arr - Array that will be traversed
     * @param {function} iteratee - Callback function
     */
    CustomEvents.prototype._forEachArraySplice = function(arr, iteratee) {
        var i,
            len,
            item,
            decrease = function() {
                arr.splice(i, 1);
                len -= 1;
                i -= 1;
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
     * Execute the callback once for each ctxEventsItem.
     * Callback function(iteratee) is invoked with three arguments:
     *  - {ctxEventsItem} A unit item of ctxEvents
     *  - {string} A key (ex - 'eventName_idx' or 'eventName_len')
     *  - {ctxEvents} A ctxEvents being traversed
     * @param {function} iteratee - Callback function
     * @private
     */
    CustomEvents.prototype._eachCtxEvents = function(iteratee) {
        var events = this._ctxEvents;
        ne.util.forEachOwnProperties(events, iteratee);
    };

    /**
     * Execute the callback once
     *  for each handler item that is value of the key including a specific string(=id, arguments[1]).
     * Callback function(iteratee) is invoked with two arguments:
     *  - handlerItem
     *  - handlerItemId
     * @param {ctxEventsItem} ctxEventsItem - A data structure storing handlerItems.
     * @param {string} id - An id of handler for searching
     * @param {function} iteratee - Callback function
     * @private
     */
    CustomEvents.prototype._eachCtxHandlerItemByContainId = function(ctxEventsItem, id, iteratee) {
        ne.util.forEachOwnProperties(ctxEventsItem, function(handlerItem, handlerItemId) {
            if (handlerItemId.indexOf(id) > -1) {
                iteratee(handlerItem, handlerItemId);
            }
        });
    };

    /**
     * Execute the callback once
     *  for each case of when the provided handler(arguments[0]) is equal to a handler in ctxEventsItem.
     * Callback function(iteratee) is invoked with four arguments:
     *  - handlerItem
     *  - handlerItemId
     *  - ctxEventsItem
     *  - eventKey, A Name of custom event (ex - 'eventName_idx')
     * @param {function} handler - Event handler
     * @param {function} iteratee - Callback function
     * @private
     */
    CustomEvents.prototype._eachCtxEventByHandler = function(handler, iteratee) {
        var handlerId = ne.util.stamp(handler),
            eachById = this._eachCtxHandlerItemByContainId;

        this._eachCtxEvents(function(ctxEventsItem, eventKey) {
            eachById(ctxEventsItem, handlerId, function(handlerItem, handlerItemId) {
                iteratee(handlerItem, handlerItemId, ctxEventsItem, eventKey);
            });
        });
    };

    /**
     * Execute the callback once
     *  for each case of when the provided context(arguments[0]) is equal to a context in ctxEventsItem.
     * Callback function(iteratee) is invoked with four arguments:
     *  - handlerItem
     *  - handlerItemId
     *  - ctxEventsItem
     *  - eventKey, A Name of custom event with postfix (ex - 'eventName_idx')
     * @param {*} context - Context for searching
     * @param {function} iteratee - Callback function
     * @private
     */
    CustomEvents.prototype._eachCtxEventByContext = function(context, iteratee) {
        var contextId = ne.util.stamp(context),
            eachById = this._eachCtxHandlerItemByContainId;

        this._eachCtxEvents(function(ctxEventsItem, eventKey) {
            eachById(ctxEventsItem, contextId, function(handlerItem, handlerItemId) {
                iteratee(handlerItem, handlerItemId, ctxEventsItem, eventKey);
            });
        });
    };

    /**
     * Execute the callback once for each handler of ctxEventsItem of the provided eventName(arguments[0]).
     * Callback function(iteratee) is invoked with four arguments:
     *  - handlerItem
     *  - handlerItemId
     *  - ctxEventsItem
     *  - eventKey, A Name of custom event with postfix (ex - 'eventName_idx')
     * @param {string} eventName - Custom event name
     * @param {function} iteratee - Callback function
     * @private
     */
    CustomEvents.prototype._eachCtxEventByEventName = function(eventName, iteratee) {
        if (!this._ctxEvents) {
            return;
        }

        var key = this._getCtxKey(eventName),
            ctxEventsItem = this._ctxEvents[key],
            args;

        ne.util.forEachOwnProperties(ctxEventsItem, function() {
            args = Array.prototype.slice.call(arguments);
            args.push(key);
            iteratee.apply(null, args);
        });
    };

    /**********
     * normal event handler
     **********/

    /**
     * Execute the callback once
     *  for each handler in instance equal to the provided handler(arguments[0]).
     * Callback function(iteratee) is invoked with five arguments:
     *  - handlerItem
     *  - index of handlerItem array
     *  - eventList by handler
     *  - eventKey, A Name of custom event with postfix (ex - 'eventName_idx')
     *  - decrease, A special callback function that decreases the length of array.
     * @param {function} handler - A handler for searching
     * @param {function} iteratee - Callback function
     * @private
     */
    CustomEvents.prototype._eachEventByHandler = function(handler, iteratee) {
        var events = this._events,
            forEachArrayDecrease = this._forEachArraySplice,
            idx = 0;

        ne.util.forEachOwnProperties(events, function(eventList, eventKey) {
            forEachArrayDecrease(eventList, function(handlerItem, index, eventList, decrease) {
                if (handlerItem.fn === handler) {
                    iteratee(handlerItem, idx, eventList, eventKey, decrease);
                    idx += 1;
                }
            });
        });
    };

    /**
     * Execute the callback once for each handler of normal events of the provided eventName.
     * Callback function(iteratee) is invoked with four arguments:
     *  - handler
     *  - index of handler-list
     *  - handler-list
     *  - decrease, A special callback function that decreases the length of array
     * @param {string} eventName - Custom event name
     * @param {function} iteratee - Callback function
     * @private
     */
    CustomEvents.prototype._eachEventByEventName = function(eventName, iteratee) {
        var events;

        if (!this._events) {
            return;
        }

        events = this._events[eventName];
        if (!ne.util.isExisty(events)) {
            return;
        }

        this._forEachArraySplice(events, iteratee);
    };

    /**
     * Return a new key for saving a handler with a context in event name.
     * @param {string} eventName A event name
     * @returns {string} Key
     * @private
     */
    CustomEvents.prototype._getCtxKey = function(eventName) {
        return eventName + '_idx';
    };

    /**
     * Return a new key for saving length of handlers in event name.
     * @param {string} eventName A event name
     * @returns {string} Key
     * @private
     */
    CustomEvents.prototype._getCtxLenKey = function(eventName) {
        return eventName + '_len';
    };

    /**
     * Return a new key for storing to ctxEventsItem.
     * @param {function} func A event handler
     * @param {*} ctx A context in handler
     * @returns {string} Key
     * @private
     */
    CustomEvents.prototype._getHandlerKey = function(func, ctx) {
        return ne.util.stamp(func) + '_' + ne.util.stamp(ctx);
    };


    /**
     * Set the length of handlers in ctxEventsItem.
     * @param {string} lenKey - A key for saving the length of handlers in `this._ctxEvents`
     * @param {number} change - A variation value of length
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
     * Store a {handlerItem} to instance.
     * @param {string} eventName - Custom event name
     * @param {*} context - Context for binding
     * @param {function} handler - Handler function
     * @private
     */
    CustomEvents.prototype._addCtxEvent = function(eventName, context, handler) {
        var events = this._ctxEvents,
            key = this._getCtxKey(eventName),
            event;

        if (!ne.util.isExisty(events)) {
            events = this._ctxEvents = {};
        }

        event = events[key];
        if (!ne.util.isExisty(event)) {
            event = events[key] = {};
        }

        var lenKey = this._getCtxLenKey(eventName),
            handlerItemId = this._getHandlerKey(handler, context);

        event[handlerItemId] = {
            fn: handler,
            ctx: context
        };

        this._setCtxLen(lenKey, +1);
    };

    /**
     * Store a event handler without context to instance.
     * @param {string} eventName - Custom event name
     * @param {function} handler - Handler function
     * @private
     */
    CustomEvents.prototype._addNormalEvent = function(eventName, handler) {
        var events = this._events,
            event;

        if (!ne.util.isExisty(events)) {
            events = this._events = {};
        }

        event = events[eventName];
        if (!ne.util.isExisty(event)) {
            event = events[eventName] = [];
        }

        event.push({ fn: handler });
    };


    /**
     * Take the event handler off by handler(arguments[0])
     * @param {function} handler - Handler for offing
     * @private
     */
    CustomEvents.prototype._offByHandler = function(handler) {
        var ctxEvents = this._ctxEvents,
            lenKey;

        this._eachCtxEventByHandler(handler, function(handlerItem, hanId, ctxItems, eventKey) {
            lenKey = eventKey.replace('_idx', '_len');
            delete ctxItems[hanId];
            ctxEvents[lenKey] -= 1;
        });

        this._eachEventByHandler(handler, function(handlerItem, index, items, eventKey, decrease) {
            items.splice(index, 1);
            decrease();
        });
    };

    /**
     * Take the event handler off by context with event name
     * @param {*} context - Context
     * @param {(string|function)} [eventName] - Custom event name
     * @private
     */
    CustomEvents.prototype._offByContext = function(context, eventName) {
        var ctxEvents = this._ctxEvents,
            hasArgs = ne.util.isExisty(eventName),
            matchEventName,
            matchHandler,
            lenKey;

        this._eachCtxEventByContext(context, function(handlerItem, hanId, ctxItems, eventKey) {
            lenKey = eventKey.replace('_idx', '_len');

            matchEventName = hasArgs && ne.util.isString(eventName) && eventKey.indexOf(eventName) > -1;
            matchHandler = hasArgs && ne.util.isFunction(eventName) && handlerItem.fn === eventName;

            if (!hasArgs || (matchEventName || matchHandler)) {
                delete ctxItems[hanId];
                ctxEvents[lenKey] -= 1;
            }
        });
    };

    /**
     * Take the event handler off by event name with handler
     * @param {string} eventName - Custom event name
     * @param {function} [handler] - Event handler
     * @private
     */
    CustomEvents.prototype._offByEventName = function(eventName, handler) {
        var ctxEvents = this._ctxEvents,
            hasHandler = ne.util.isExisty(handler),
            lenKey;

        this._eachCtxEventByEventName(eventName, function(handlerItem, hanId, ctxItems, eventKey) {
            lenKey = eventKey.replace('_idx', '_len');
            if (!hasHandler || (hasHandler && handlerItem.fn === handler)) {
                delete ctxItems[hanId];
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

    /**********
     * public
     **********/

    /**
     * Attach the event handler with event name and context.
     * @param {(string|{name:string, handler:function})} eventName - Custom event name or an object {eventName: handler}
     * @param {(function|*)} [handler] - Handler function or context
     * @param {*} [context] - Context for binding
     * @example
     *  // 1. Basic
     *  customEvent.on('onload', handler);
     *
     *  // 2. With context
     *  customEvent.on('onload', handler, myObj);
     *
     *  // 3. Attach with an object
     *  customEvent.on({
     *    'play': handler,
     *    'pause': handler2
     *  });
     *
     *  // 4. Attach with an object with context
     *  customEvent.on({
     *    'play': handler
     *  }, myObj);
     */
    CustomEvents.prototype.on = function(eventName, handler, context) {
        var eventNameList;

        if (ne.util.isObject(eventName)) {
            // {eventName: handler}
            context = handler;
            ne.util.forEachOwnProperties(eventName, function(handler, name) {
                 this.on(name, handler, context);
            }, this);
            return;
        } else if (ne.util.isString(eventName) && eventName.indexOf(' ') > -1) {
            // processing of multiple events by split event name
            eventNameList = eventName.split(' ');
            ne.util.forEachArray(eventNameList, function(name) {
                this.on(name, handler, context);
            }, this);
            return;
        }

        var ctxId;

        if (ne.util.isExisty(context)) {
            ctxId = ne.util.stamp(context);
        }

        if (ne.util.isExisty(ctxId)) {
            this._addCtxEvent(eventName, context, handler);
        } else {
            this._addNormalEvent(eventName, handler);
        }
    };

    /**
     * Detach the event handler.
     * @param {(string|{name:string, handler:function})} eventName - Custom event name or an object {eventName: handler}
     * @param {function} [handler] Handler function
     * @example
     * // 1. off by context
     * customEvent.off(myObj);
     *
     * // 2. off by event name
     * customEvent.off('onload');
     *
     * // 3. off by handler
     * customEvent.off(handler);
     *
     * // 4. off by event name and handler
     * customEvent.off('play', handler);
     *
     * // 5. off by context and handler
     * customEvent.off(myObj, handler);
     *
     * // 6. off by context and event name
     * customEvent.off(myObj, 'onload');
     *
     * // 7. off by an Object.<string, function> that is {eventName: handler}
     * customEvent.off({
     *   'play': handler,
     *   'pause': handler2
     * });
     *
     * // 8. off the all events
     * customEvent.off();
     */
    CustomEvents.prototype.off = function(eventName, handler) {
        if (!arguments.length) {
            // 8. off the all events
            this._events = null;
            this._ctxEvents = null;
            return;
        }

        if (ne.util.isFunction(eventName)) {
            // 3. off by handler
            this._offByHandler(eventName);

        } else if (ne.util.isObject(eventName)) {
            if (ne.util.hasStamp(eventName)) {
                // 1, 5, 6 off by context
                this._offByContext(eventName, handler);
            } else {
                // 4. off by an Object.<string, function>
                ne.util.forEachOwnProperties(eventName, function(handler, name) {
                    this.off(name, handler);
                }, this);
            }

        } else {
            // 2, 4 off by event name
            this._offByEventName(eventName, handler);

        }
    };

    /**
     * Return a count of events registered.
     * @param {string} eventName - Custom event name
     * @returns {*}
     */
    CustomEvents.prototype.getListenerLength = function(eventName) {
        var ctxEvents = this._ctxEvents,
            events = this._events,
            existy = ne.util.isExisty,
            lenKey = this._getCtxLenKey(eventName);

        var normal = (existy(events) && ne.util.isArray(events[eventName])) ? events[eventName].length : 0,
            ctx = (existy(ctxEvents) && existy(ctxEvents[lenKey])) ? ctxEvents[lenKey] : 0;

        return normal + ctx;
    };

    /**
     * Return whether at least one of the handlers is registered in the given event name.
     * @param {string} eventName - Custom event name
     * @returns {boolean} Is there at least one handler in event name?
     */
    CustomEvents.prototype.hasListener = function(eventName) {
        return this.getListenerLength(eventName) > 0;
    };



    /**
     * Fire a event and returns the result of operation 'boolean AND' with all listener's results.
     * So, It is different from {@link CustomEvents#fire}.
     * In service code,
     *  use this as a before event in component level usually for notifying that the event is cancelable.
     * @param {string} eventName - Custom event name
     * @param {...*} data - Data for event
     * @returns {boolean} The result of operation 'boolean AND'
     * @example
     *  if (this.invoke('beforeZoom')) {    // check the result of 'beforeZoom'
     *      // if true,
     *      // doSomething
     *  }
     *
     *  // In service code,
     *  map.on({
     *      'beforeZoom': function() {
     *          if (that.disabled && this.getState()) {    // It should cancel the 'zoom' event by some conditions.
     *              return false;
     *          }
     *          return true;
     *      }
     *  });
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
     * Fire a event by event name with data.
     * @param {string} eventName - Custom event name
     * @param {...*} data - Data for event
     * @return {Object} this
     * @example
     *  instance.on('move', function(direction) {
     *      var direction = direction;
     *  });
     *  instance.fire('move', 'left');
     */
    CustomEvents.prototype.fire = function(eventName, data) {
        this.invoke.apply(this, arguments);
        return this;
    };

    /**
     * Attache a one-shot event.
     * @param {(object|string)} eventName - Custom event name or an object {eventName: handler}
     * @param {function} fn - Handler function
     * @param {*} [context] - Context for binding
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

    ne.util.CustomEvents = CustomEvents;

})(window.ne);
