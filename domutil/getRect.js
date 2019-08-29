/**
 * @fileoverview getBoundingClientRect polyfill
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var isUndefined = require('../type/isUndefined');

/**
 * getBoundingClientRect polyfill
 * @param {HTMLElement} element - target element
 * @returns {object} rect object
 * @name getRect
 * @memberof tui.dom
 * @function
 */
function getRect(element) {
    var rect = element.getBoundingClientRect();
    var width = rect.width;
    var height = rect.height;

    if (isUndefined(width) || isUndefined(height)) {
        width = element.offsetWidth;
        height = element.offsetHeight;
    }

    return {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: width,
        height: height
    };
}

module.exports = getRect;
