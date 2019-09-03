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
 * @name off
 * @memberof tui.dom
 * @function
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
 */
function unbindEvent(element, type, handler) {
    var events = safeEvent(element, type);
    var index;

    forEach(events, function(item, idx) {
        if (!handler || handler === item.keyFn) {
            if ('removeEventListener' in element) {
                element.removeEventListener(type, item.valueFn);
            } else if ('detachEvent' in element) {
                element.detachEvent('on' + type, item.valueFn);
            }
            index = idx;
        }
    });

    if (handler) {
        events.splice(index, 1);
    } else {
        events.splice(0, events.length);
    }
}

module.exports = off;
