/**
 * @fileoverview Get event collection for specific HTML element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var Map = require('../map/map');

var EVENT_KEY = '_feEventKey';

/**
 * Get event collection for specific HTML element
 * @param {HTMLElement} element - HTML element
 * @param {string} type - event type
 * @returns {(object|Map)}
 */
function safeEvent(element, type) {
    var events = element[EVENT_KEY];
    var handlerMap;

    if (!events) {
        events = element[EVENT_KEY] = {};
    }

    handlerMap = events[type];
    if (!handlerMap) {
        handlerMap = events[type] = new Map();
    }

    return handlerMap;
}

module.exports = safeEvent;
