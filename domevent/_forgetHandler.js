/**
 * @fileoverview Forget memorized DOM event handlers
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var safeEvent = require('./_safeEvent');

/**
 * Forget memorized DOM event handlers
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} keyFn - handler function that user passed at on() use
 */
function forgetHandler(element, type, keyFn) {
    safeEvent(element, type).delete(keyFn);
}

module.exports = forgetHandler;
