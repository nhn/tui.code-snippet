/**
 * @fileoverview Stop event propagation.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Stop event propagation.
 * @param {Event} e - event object
 * @name stopPropagation
 * @memberof tui.dom
 * @function
 */
function stopPropagation(e) {
    if (e.stopPropagation) {
        e.stopPropagation();

        return;
    }

    e.cancelBubble = true;
}

module.exports = stopPropagation;
