/**
 * @fileoverview Unbind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var isString = require('../type/isString');
var forEach = require('../collection/forEach');

var safeEvent = require('./_safeEvent');

/**
 * Unbind DOM events
 * If a handler function is not passed, remove all events of that type.
 * @param {HTMLElement} element - element to unbindbind events
 * @param {(string|object)} types - Space splitted events names or
 *  eventName:handler object
 * @param {function} [handler] - handler function
 * @memberof module:domEvent
 */
function off(element, types, handler) {
    if (isString(types)) {
        forEach(types.split(/\s+/g), function(type) {
            unbindEvent(element, type, handler);
        });

        return;
    }

    forEach(types, function(func, type) {
        unbindEvent(element, type, func);
    });
}

/**
 * Unbind DOM events
 * If a handler function is not passed, remove all events of that type.
 * @param {HTMLElement} element - element to unbind events
 * @param {string} type - events name
 * @param {function} [handler] - handler function
 * @private
 */
function unbindEvent(element, type, handler) {
    var events = safeEvent(element, type);
    var index;

    if (!handler) {
        forEach(events, function(item) {
            removeHandler(element, type, item.wrappedHandler);
        });
        events.splice(0, events.length);
    } else {
        forEach(events, function(item, idx) {
            if (handler === item.handler) {
                removeHandler(element, type, item.wrappedHandler);
                index = idx;

                return false;
            }

            return true;
        });
        events.splice(index, 1);
    }
}

/**
 * Remove an event handler
 * @param {HTMLElement} element - An element to remove an event
 * @param {string} type - event type
 * @param {function} handler - event handler
 * @private
 */
function removeHandler(element, type, handler) {
    if ('removeEventListener' in element) {
        element.removeEventListener(type, handler);
    } else if ('detachEvent' in element) {
        element.detachEvent('on' + type, handler);
    }
}

module.exports = off;
