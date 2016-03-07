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
     */
    CustomEvents.prototype.getHandlerItem = function(handler, context) {
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
     */
    CustomEvents.prototype.safeEvent = function(eventName) {
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
     * Bind event handler
     * @param {(string|{name:string, handler:function})} eventName - custom
     *  event name or an object {eventName: handler}
     * @param {(function|object)} [handler] - handler function or context
     * @param {object} [context] - context for binding
     */
    CustomEvents.prototype.bindEvent = function(eventName, handler, context) {
        var event = this.safeEvent(eventName);
        event.push(this.getHandlerItem(handler, context));
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

        if (context) {
            tui.util.stamp(context);
        }

        if (tui.util.isString(eventName)) {
            // [syntax 1, 2]
            eventName = eventName.replace(EVENTNAME_SPLIT, ' ').split(' ');
            tui.util.forEach(eventName, function(eventName) {
                self.bindEvent(eventName, handler, context);
            });
        } else if (tui.util.isObject(eventName)) {
            // [syntax 3, 4]
            context = handler;
            tui.util.forEach(eventName, function(handler, eventName) {
                if (eventName.indexOf(' ') > -1) {
                    // [syntax 1, 2]
                    self.on(eventName, handler, context);
                    return;
                }

                self.bindEvent(eventName, handler, context);
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
     * @param {function} omit - function return boolean
     */
    CustomEvents.prototype._spliceArray = function(arr, omit) {
        var i, len;

        if (!(tui.util.isExisty(arr) && tui.util.isArray(arr))) {
            return;
        }

        for (i = 0, len = arr.length; i < len; i += 1) {
            if (omit(arr[i]) === true) {
                arr.splice(i, 1);
                len -= 1;
                i -= 1;
            }
        }
    };

    /**
     * Delete event by handler function
     * @param {HandlerItem[]} arr - handler item list
     * @param {function} handler - handler function
     */
    CustomEvents.prototype._offByHandler = function(arr, handler) {
        this._spliceArray(arr, function(item) {
            return handler === item.handler;
        });
    };

    /**
     * Delete event by context
     * @param {object} context - context object
     * @param {(function|string)} [eventName] - event name or handler function
     */
    CustomEvents.prototype._offByContext = function(context, eventName) {
        var self = this,
            handler;

        if (tui.util.isString(eventName)) {
            tui.util.forEach(this.events, function(arr, eventKey) {
                if (eventName === eventKey) {
                    self._spliceArray(arr, function(item) {
                        return (context === item.context);
                    });
                }
            });
        } else {
            handler = eventName;
            tui.util.forEach(this.events, function(arr) {
                self._spliceArray(arr, function(item) {
                    var matchContext = (context === item.context),
                        matchHandler = (handler === item.handler);

                    if (!Boolean(handler)) {
                        return matchContext;
                    }

                    return matchContext && matchHandler;
                });
            });
        }
    };

    /**
     * Unbind custom events
     * @param {string} eventName - event name to unbind
     * @param {function} handler - handler function
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
        var self = this,
            isContext;

        if (!arguments.length) {
            // [syntax 8] - off all custom events
            this.events = {};
            return;
        }

        if (tui.util.isFunction(eventName)) {
            // [syntax 3] - off by custom event handler
            tui.util.forEach(this.events, function(arr) {
                self._offByHandler(arr, eventName);
            });
        }

        if (tui.util.isObject(eventName)) {
            isContext = tui.util.hasStamp(eventName);

            if (isContext) {
                // [syntax 1, 5, 6]
                this._offByContext(eventName, handler);
            } else {
                // [syntax 7]
                tui.util.forEach(eventName, function(handler, eventName) {
                    self.off(eventName, handler);
                });
            }
        }

        if (tui.util.isString(eventName)) {
            // [syntax 2, 4] - off by name and handler
            eventName = eventName.replace(EVENTNAME_SPLIT, ' ').split(' ');
            tui.util.forEach(eventName, function(eventName) {
                if (!handler) {
                    self.events[eventName] = [];
                } else {
                    self._offByHandler(self.events[eventName], handler);
                }
            });
        }
    };

    /**
     * Fire custom event
     * @param {string} eventName - name of custom event
     * @returns {CustomEvents} return self
     */
    CustomEvents.prototype.fire = function(eventName) {  // eslint-disable
        this.invoke.apply(this, arguments);
        return this;
    };

    /**
     * Fire a event and returns the result of operation 'boolean AND' with all listener's results.<br>
     * So, It is different from {@link CustomEvents#fire}.<br>
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
    CustomEvents.prototype.invoke = function(eventName) {
        var events = this.safeEvent(eventName),
            args = Array.prototype.slice.call(arguments, 1),
            i = 0, item = events[i], result = true;

        if (!this.hasListener(eventName)) {
            return true;
        }

        do {
            if (item.handler.apply(item.context, args) === false) {
                result = false;
                break;
            }
            i += 1;
            item = events[i];
        } while(item);

        return result;
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
     * Return a count of events registered.
     * @param {string} eventName - Custom event name
     * @returns {number} number of event
     */
    CustomEvents.prototype.getListenerLength = function(eventName) {
        return this.safeEvent(eventName).length;
    };

    tui.util.CustomEvents = CustomEvents;
})(window.tui);
