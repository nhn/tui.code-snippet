/**
 * @fileoverview Bind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var memorizeHandler = require('./_memorizeHandler');
var checkMouse = require('../domevent/checkMouse');

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

    /**
     * Event handler for normalize mouseenter event
     * @param {MouseEvent} e - event object
     */
    function mouseEnterHandler(e) {
        e = e || window.event;

        if (checkMouse(element, e)) {
            eventHandler(e);
        }
    }

    if ('addEventListener' in element) {
        if (type === 'mouseenter' || type === 'mouseleave') {
            type = (type === 'mouseenter') ? 'mouseover' : 'mouseout';
            element.addEventListener(type, mouseEnterHandler);
            memorizeHandler(element, type, handler, mouseEnterHandler);
        } else {
            element.addEventListener(type, eventHandler);
            memorizeHandler(element, type, handler, eventHandler);
        }
    } else if ('attachEvent' in element) {
        element.attachEvent('on' + type, eventHandler);
        memorizeHandler(element, type, handler, eventHandler);
    }
}

module.exports = bindEvent;
