/**
 * @fileoverview Check mouse was leave event element with ignoreing child nodes
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Check mouse was leave event element with ignoreing child nodes
 * @param {HTMLElement} element - element to check
 * @param {MouseEvent} e - mouse event
 * @returns {boolean} whether mouse leave element?
 * @name checkMouse
 * @function
 */
function checkMouse(element, e) {
    var related = e.relatedTarget;

    if (!related) {
        return true;
    }

    try {
        while (related && (related !== element)) {
            related = related.parentNode;
        }
    } catch (err) {
        return false;
    }

    return (related !== element);
}

module.exports = checkMouse;
