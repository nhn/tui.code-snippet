/**
 * @fileoverview Bind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var isString = require('../type/isString');
var forEach = require('../collection/forEach');
var bindEvent = require('./_bindEvent');

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

module.exports = on;
