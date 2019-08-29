/**
 * @fileoverview Set element bounding box
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var forEachArray = require('../collection/forEachArray');
var isNumber = require('../type/isNumber');
var extend = require('../object/extend');

var properties = ['top', 'right', 'bottom', 'left', 'width', 'height'];

/**
 * Set element bounding box
 * If the property in rect is number, it is assumed to be in pixels.
 * @param {HTMLElement} element - element to change bounding box
 * @param {object} rect - rect object
 * @param {number|string} rect.top - top
 * @param {number|string} rect.right - right
 * @param {number|string} rect.bottom - bottom
 * @param {number|string} rect.left - left
 * @param {number|string} rect.width - width
 * @param {number|string} rect.height - height
 * @name setRect
 * @memberof tui.dom
 * @function
 */
function setRect(element, rect) {
    var newRect = {};
    var value;

    forEachArray(properties, function(prop) {
        if (prop in rect) {
            value = rect[value];
            newRect[prop] = isNumber(value) ? value + 'px' : value;
        }
    });

    extend(element.style, newRect);
}

module.exports = setRect;
