/**
 * @fileoverview Remove data property
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Remove data property
 * @param {HTMLElement} element - target element
 * @param {string} key - key
 * @memberof module:domUtil
 */
function removeData(element, key) {
  if (element.dataset) {
    delete element.dataset[key];

    return;
  }

  key = key.replace(/([A-Z])/g, function(match) {
    return '-' + match.toLowerCase();
  });

  element.removeAttribute('data-' + key);
}

module.exports = removeData;
