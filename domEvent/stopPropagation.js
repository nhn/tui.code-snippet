/**
 * @fileoverview Stop event propagation.
 */

'use strict';

/**
 * Stop event propagation.
 * @param {Event} e - event object
 * @memberof module:domEvent
 */
function stopPropagation(e) {
  if (e.stopPropagation) {
    e.stopPropagation();

    return;
  }

  e.cancelBubble = true;
}

module.exports = stopPropagation;
