/**
 * @fileoverview Get a target element from an event object.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Get a target element from an event object.
 * @param {Event} e - event object
 * @returns {HTMLElement} - target element
 * @name getTarget
 */
function getTarget(e) {
    return e.target || e.srcElement;
}

module.exports = getTarget;
