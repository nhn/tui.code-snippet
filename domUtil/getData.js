/**
 * @fileoverview Get data value from data-attribute
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Get data value from data-attribute
 * @param {HTMLElement} element - target element
 * @param {string} key - key
 * @returns {string} value
 * @memberof module:domUtil
 */
function getData(element, key) {
    if (element.dataset) {
        return element.dataset[key];
    }

    key = key.replace(/([A-Z])/g, function(match) {
        return '-' + match.toLowerCase();
    });

    return element.getAttribute('data-' + key);
}

module.exports = getData;
