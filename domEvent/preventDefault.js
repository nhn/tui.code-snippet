/**
 * @fileoverview Prevent default action
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Prevent default action
 * @param {Event} e - event object
 * @name preventDefault
 * @memberof tui.dom
 * @function
 */
function preventDefault(e) {
    if (e.preventDefault) {
        e.preventDefault();

        return;
    }

    e.returnValue = false;
}

module.exports = preventDefault;
