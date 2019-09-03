/**
 * @fileoverview Bind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var isString = require('../type/isString');
var forEach = require('../collection/forEach');

var safeEvent = require('./_safeEvent');

/**
 * Bind DOM events
 * @param {HTMLElement} element - element to bind events
 * @param {(string|object)} types - Space splitted events names or
 *  eventName:handler object
 * @param {(function|object)} handler - handler function or context for handler
 *  method
 * @param {object} [context] context - context for handler method.
 * @name on
 * @memberof tui.dom
 * @function
 */
function on(element, types, handler, context) {
    if (isString(types)) {
        forEach(types.split(/\s+/g), function(type) {
            bindEvent(element, type, handler, context);
        });

        return;
    }

    forEach(types, function(func, type) {
        bindEvent(element, type, func, handler);
    });
}

/**
 * Bind DOM events
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} handler - handler function or context for handler
 *  method
 * @param {object} [context] context - context for handler method.
 */
function bindEvent(element, type, handler, context) {
    /**
     * Event handler
     * @param {Event} e - event object
     */
    function eventHandler(e) {
        handler.call(context || element, e || window.event);
    }

    if ('addEventListener' in element) {
        element.addEventListener(type, eventHandler);
    } else if ('attachEvent' in element) {
        element.attachEvent('on' + type, eventHandler);
    }
    memorizeHandler(element, type, handler, eventHandler);
}

/**
 * Memorize DOM event handler for unbinding.
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} keyFn - handler function that user passed at on() use
 * @param {function} valueFn - handler function that wrapped by domevent for
 *  implementing some features
 */
function memorizeHandler(element, type, keyFn, valueFn) {
    var events = safeEvent(element, type);
    var item;

    forEach(events, function(obj) {
        if (obj.keyFn === keyFn) {
            item = obj;

            return false;
        }

        return true;
    });

    if (!item) {
        item = {
            keyFn: keyFn,
            valueFn: valueFn
        };
        events.push(item);
    }
}

module.exports = on;
