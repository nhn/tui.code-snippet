/**
 * @fileoverview Get event collection for specific HTML element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var EVENT_KEY = '_feEventKey';

/**
 * Get event collection for specific HTML element
 * @param {HTMLElement} element - HTML element
 * @param {string} type - event type
 * @returns {array}
 */
function safeEvent(element, type) {
    var events = element[EVENT_KEY];
    var handlersArray;

    if (!events) {
        events = element[EVENT_KEY] = {};
    }

    handlersArray = events[type];
    if (!handlersArray) {
        handlersArray = events[type] = [];
    }

    return handlersArray;
}

module.exports = safeEvent;
