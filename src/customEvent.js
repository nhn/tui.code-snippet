/**
 * @fileoverview
 *  This module provides some functions for custom events.<br>
 *  And it is implemented in the observer design pattern.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency type.js, collection.js object.js
 */

(function(tui) {
    'use strict';
    /* istanbul ignore if */
    if (!tui) {
        tui = window.tui = {};
    }

    /* istanbul ignore if */
    if (!tui.util) {
        tui.util = window.tui.util = {};
    }

    var EVENTNAME_SPLIT = /\s+/g;  // eslint-disable

    /**
     * A unit of event handler item.
     * @ignore
     * @typedef {object} HandlerItem
     * @property {function} fn - event handler
     * @property {object} ctx - context of event handler
     */

    /**
     * @constructor
     * @memberof tui.util
     */
    function CustomEvents() {
        /**
         * @type {HandlerItem[]}
         */
        this.events = null;

        /**
         * only for checking specific context event was binded
         * @type {object[]}
         */
        this.context = null;
    }

    /**
     * Mixin custom events feature to specific constructor
     * @param {function} func - constructor
     * @example
     *  function Model() {
     *      this.name = '';
     *  }
     *  tui.util.CustomEvents.mixin(Model);
     *
     *  var model = new Model();
     *  model.on('change', function() { this.name = 'model'; }, this);
     *
     *  model.fire('change');
     *  alert(model.name); // 'model';
     */
    CustomEvents.mixin = function(func) {
        tui.util.extend(func.prototype, CustomEvents.prototype);
    };

    /**
     * Get HandlerItem object
     * @param {function} handler - handler function
     * @param {object} [context] - context for handler
     * @returns {HandlerItem} HandlerItem object
     * @private
     */
    CustomEvents.prototype._getHandlerItem = function(handler, context) {
        var item = {handler: handler};

        if (context) {
            item.context = context;
        }

        return item;
    };

    /**
     * Get event object safely
     * @param {string} [eventName] - create sub event map if not exist.
     * @returns {(object|array)} event object. if you supplied `eventName`
     *  parameter then make new array and return it
     * @private
     */
    CustomEvents.prototype._safeEvent = function(eventName) {
        var events = this.events,
            byName;

        if (!events) {
            events = this.events = {};
        }

        if (eventName) {
            byName = events[eventName];

            if (!byName) {
                byName = [];
                events[eventName] = byName;
            }

            events = byName;
        }

        return events;
    };

    /**
     * Get context array safely
     * @returns {array} context array
     */
    CustomEvents.prototype._safeContext = function() {
        var context = this.context;

        if (!context) {
            context = this.context = [];
        }

        return context;
    };

    /**
     * Get index of context
     * @param {object} ctx - context that used for bind custom event
     * @returns {number} index of context
     */
    CustomEvents.prototype._indexOfContext = function(ctx) {
        var context = this._safeContext(),
            index = 0;

        while (context[index]) {
            if (ctx === context[index][0]) {
                return index;
            }

            index += 1;
        }

        return -1;
    };

    /**
     * Memorize supplied context for recognize supplied object is context or
     *  name: handler pair object when off()
     * @param {object} ctx - context object to memorize
     */
    CustomEvents.prototype._memorizeContext = function(ctx) {
        var context, index;

        if (!tui.util.isExisty(ctx)) {
            return;
        }

        context = this._safeContext();
        index = this._indexOfContext(ctx);

        if (index > -1) {
            context[index][1] += 1;
        } else {
            context.push([ctx, 1]);
        }
    };

    /**
     * Forget supplied conect object
     * @param {object} ctx - context object to forget
     */
    CustomEvents.prototype._forgetContext = function(ctx) {
        var context, contextIndex;

        if (!tui.util.isExisty(ctx)) {
            return;
        }

        context = this._safeContext();
        contextIndex = this._indexOfContext(ctx);

        if (contextIndex > -1) {
            context[contextIndex][1] -= 1;

            if (context[contextIndex][1] <= 0) {
                context.splice(contextIndex, 1);
            }
        }
    };

    /**
     * Bind event handler
     * @param {(string|{name:string, handler:function})} eventName - custom
     *  event name or an object {eventName: handler}
     * @param {(function|object)} [handler] - handler function or context
     * @param {object} [context] - context for binding
     * @private
     */
    CustomEvents.prototype._bindEvent = function(eventName, handler, context) {
        var events = this._safeEvent(eventName);
        this._memorizeContext(context);
        events.push(this._getHandlerItem(handler, context));
    };

    /**
     * Bind event handlers
     * @param {(string|{name:string, handler:function})} eventName - custom
     *  event name or an object {eventName: handler}
     * @param {(function|object)} [handler] - handler function or context
     * @param {object} [context] - context for binding
     * @example
     *  // 1. Basic
     *  customEvent.on('onload', handler);
     *
     *  // 2. With context
     *  customEvent.on('onload', handler, myObj);
     *
     *  // 3. Bind by object that name, handler pairs
     *  customEvent.on({
     *    'play': handler,
     *    'pause': handler2
     *  });
     *
     *  // 4. Bind by object that name, handler pairs with context object
     *  customEvent.on({
     *    'play': handler
     *  }, myObj);
     */
    CustomEvents.prototype.on = function(eventName, handler, context) {
        var self = this;

        if (tui.util.isString(eventName)) {
            // [syntax 1, 2]
            eventName = eventName.replace(EVENTNAME_SPLIT, ' ').split(' ');
            tui.util.forEach(eventName, function(eventName) {
                self._bindEvent(eventName, handler, context);
            });
        } else if (tui.util.isObject(eventName)) {
            // [syntax 3, 4]
            context = handler;
            tui.util.forEach(eventName, function(handler, eventName) {
                self.on(eventName, handler, context);
            });
        }
    };

    /**
     * Bind one-shot event handlers
     * @param {(string|{name:string, handler:function})} eventName - custom
     *  event name or an object {eventName: handler}
     * @param {(function|object)} [handler] - handler function or context
     * @param {object} [context] - context for binding
     */
    CustomEvents.prototype.once = function(eventName, handler, context) {
        var self = this,
            context;

        if (tui.util.isObject(eventName)) {
            context = handler;
            tui.util.forEach(eventName, function(handler, eventName) {
                self.once(eventName, handler, context);
            });
            return;
        }

        function onceHandler() {
            handler.apply(context, arguments);
            self.off(eventName, onceHandler, context);
        }

        this.on(eventName, onceHandler, context);
    };

    /**
     * Splice supplied array by omit() callback result
     * @param {array} arr - array to splice
     * @param {function} predicate - function return boolean
     * @private
     */
    CustomEvents.prototype._removeArray = function(arr, predicate) {
        var i, len;

        if (!tui.util.isArray(arr)) {
            return;
        }

        for (i = 0, len = arr.length; i < len; i += 1) {
            if (predicate(arr[i]) === true) {
                arr.splice(i, 1);
                len -= 1;
                i -= 1;
            }
        }
    };

    /**
     * Get matcher for unbind specific handler events
     * @param {function} handler - handler function
     * @returns {function} handler matcher
     * @private
     */
    CustomEvents.prototype._matchHandler = function(handler) {
        var self = this;

        return function(item) {
            var needRemove = handler === item.handler;
            needRemove && self._forgetContext(item.context);

            return needRemove;
        };
    };

    /**
     * Get matcher for unbind specific context events
     * @param {object} context - context
     * @returns {function} object matcher
     * @private
     */
    CustomEvents.prototype._matchContext = function(context) {
        var self = this;

        return function(item) {
            var needRemove = context === item.context;
            needRemove && self._forgetContext(item.context);

            return needRemove;
        };
    };

    /**
     * Get matcher for unbind specific hander, context pair events
     * @param {function} handler - handler function
     * @param {object} context - context
     * @returns {function} handler, context matcher
     * @private
     */
    CustomEvents.prototype._matchHandlerAndContext = function(handler, context) {
        var self = this;

        return function(item) {
            var matchHandler = (handler === item.handler),
                matchContext = (context === item.context),
                needRemove = (matchHandler && matchContext);

            needRemove && self._forgetContext(item.context);

            return needRemove;
        }
    };

    /**
     * Unbind event by event name
     * @param {string} eventName - custom event name to unbind
     * @param {function} [handler] - handler function
     * @private
     */
    CustomEvents.prototype._offByEventName = function(eventName, handler) {
        var self = this,
            forEach = tui.util.forEachArray,
            andByHandler = tui.util.isFunction(handler);

        eventName = eventName.replace(EVENTNAME_SPLIT, ' ').split(' ');

        forEach(eventName, function(eventName) {
            var handlerItems = self.events[eventName];

            if (andByHandler) {
                self._removeArray(handlerItems, self._matchHandler(handler));
            } else {
                forEach(handlerItems, function(item) {
                    self._forgetContext(item.context);
                });

                self.events[eventName] = [];
            }
        });
    };

    /**
     * Unbind event by handler function
     * @param {function} handler - handler function
     * @private
     */
    CustomEvents.prototype._offByHandler = function(handler) {
        var self = this,
            matchHandler = this._matchHandler(handler);

        tui.util.forEach(this.events, function(handlerItems) {
            self._removeArray(handlerItems, matchHandler);
        });
    };

    /**
     * Unbind event by object(name: handler pair object or context object)
     * @param {object} obj - context or {name: handler} pair object
     * @param {function} handler - handler function
     * @private
     */
    CustomEvents.prototype._offByObject = function(obj, handler) {
        var self = this,
            matchFunc;

        if (this._indexOfContext(obj) < 0) {
            tui.util.forEach(obj, function(handler, eventName) {
                self.off(eventName, handler);
            });
        } else if (tui.util.isString(handler)) {
            matchFunc = this._matchContext(obj);

            self._removeArray(this.events[handler], matchFunc);
        } else if (tui.util.isFunction(handler)) {
            matchFunc = this._matchHandlerAndContext(handler, obj);

            tui.util.forEach(this.events, function(handlerItems) {
                self._removeArray(handlerItems, matchFunc);
            });
        } else {
            matchFunc = this._matchContext(obj);

            tui.util.forEach(this.events, function(handlerItems) {
                self._removeArray(handlerItems, matchFunc);
            });
        }
    };

    /**
     * Unbind custom events
     * @param {(string|object|function)} eventName - event name or context or
     *  {name: handler} pair object or handler function
     * @param {(function)} handler - handler function
     * @example
     * // 1. off by event name
     * customEvent.off('onload');
     *
     * // 2. off by event name and handler
     * customEvent.off('play', handler);
     *
     * // 3. off by handler
     * customEvent.off(handler);
     *
     * // 4. off by context
     * customEvent.off(myObj);
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
        if (tui.util.isString(eventName)) {
            // [syntax 1, 2]
            this._offByEventName(eventName, handler);
        } else if (!arguments.length) {
            // [syntax 8]
            this.events = this.context = [];
        } else if (tui.util.isFunction(eventName)) {
            // [syntax 3]
            this._offByHandler(eventName);
        } else if (tui.util.isObject(eventName)) {
            // [syntax 4, 5, 6]
            this._offByObject(eventName, handler);
        };
    };

    /**
     * Fire custom event
     * @param {string} eventName - name of custom event
     */
    CustomEvents.prototype.fire = function(eventName) {  // eslint-disable
        this.invoke.apply(this, arguments);
    };

    /**
     * Fire a event and returns the result of operation 'boolean AND' with all
     *  listener's results.
     *
     * So, It is different from {@link CustomEvents#fire}.
     *
     * In service code, use this as a before event in component level usually
     *  for notifying that the event is cancelable.
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
     *          // It should cancel the 'zoom' event by some conditions.
     *          if (that.disabled && this.getState()) {
     *              return false;
     *          }
     *          return true;
     *      }
     *  });
     */
    CustomEvents.prototype.invoke = function(eventName) {
        var events, args, index, item;

        if (!this.hasListener(eventName)) {
            return true;
        }

        events = this._safeEvent(eventName);
        args = Array.prototype.slice.call(arguments, 1);
        index = 0;

        while (events[index]) {
            item = events[index];

            if (item.handler.apply(item.context, args) === false) {
                return false;
            }

            index += 1;
        }

        return true;
    };

    /**
     * Return whether at least one of the handlers is registered in the given
     *  event name.
     * @param {string} eventName - Custom event name
     * @returns {boolean} Is there at least one handler in event name?
     */
    CustomEvents.prototype.hasListener = function(eventName) {
        return this.getListenerLength(eventName) > 0;
    };

    /**
     * Return a count of events registered.
     * @param {string} eventName - Custom event name
     * @returns {number} number of event
     */
    CustomEvents.prototype.getListenerLength = function(eventName) {
        if (!eventName) {
            return 0;
        }

        return this._safeEvent(eventName).length;
    };

    tui.util.CustomEvents = CustomEvents;
})(window.tui);
