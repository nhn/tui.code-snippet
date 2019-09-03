/**
 * @fileoverview Remove element from parent node.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Remove element from parent node.
 * @param {HTMLElement} element - element to remove.
 * @name removeElement
 * @memberof tui.dom
 * @function
 */
function removeElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}

module.exports = removeElement;
