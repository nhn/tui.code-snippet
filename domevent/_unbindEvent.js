/**
 * @fileoverview Unbind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var safeEvent = require('./_safeEvent');
var forgetHandler = require('./_forgetHandler');

/**
 * Unbind DOM events
 * @param {HTMLElement} element - element to unbind events
 * @param {string} type - events name
 * @param {function} handler - handler function or context for handler
 *  method
 */
function unbindEvent(element, type, handler) {
    var events = safeEvent(element, type);
    var func = events.get(handler);

    if (!func) {
        return;
    }

    forgetHandler(element, type, handler);

    if ('removeEventListener' in element) {
        element.removeEventListener(type, func);
    } else if ('detachEvent' in element) {
        element.detachEvent('on' + type, func);
    }
}

module.exports = unbindEvent;
