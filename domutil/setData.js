/**
 * @fileoverview Set data attribute to target element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Set data attribute to target element
 * @param {HTMLElement} element - element to set data attribute
 * @param {string} key - key
 * @param {string} value - value
 * @name setData
 * @memberof tui.dom
 * @function
 */
function setData(element, key, value) {
    if (element.dataset) {
        element.dataset[key] = value;

        return;
    }

    key = key.replace(/([A-Z])/g, function(match) {
        return '-' + match.toLowerCase();
    });

    element.setAttribute('data-' + key, value);
}

module.exports = setData;
