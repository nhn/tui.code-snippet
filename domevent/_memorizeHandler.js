/**
 * @fileoverview Memorize DOM event handler for unbinding.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var safeEvent = require('./_safeEvent');

/**
 * Memorize DOM event handler for unbinding.
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} keyFn - handler function that user passed at on() use
 * @param {function} valueFn - handler function that wrapped by domevent for
 *  implementing some features
 */
function memorizeHandler(element, type, keyFn, valueFn) {
    var map = safeEvent(element, type);
    var items = map.get(keyFn);

    if (items) {
        items.push(valueFn);
    } else {
        items = [valueFn];
        map.set(keyFn, items);
    }
}

module.exports = memorizeHandler;
