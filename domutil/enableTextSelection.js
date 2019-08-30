/**
 * @fileoverview Transform the Array-like object to Array.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var off = require('../domevent/off');
var preventDefault = require('../domevent/preventDefault');
var testCSSProp = require('./_testCSSProp');

var SUPPORT_SELECTSTART = 'onselectstart' in document;
var userSelectProperty = testCSSProp([
    'userSelect',
    'WebkitUserSelect',
    'OUserSelect',
    'MozUserSelect',
    'msUserSelect'
]);

/**
 * Enable browser's text selection behaviors.
 * @param {HTMLElement} [el] - target element. if not supplied, use `document`
 * @name enableTextSelection
 * @memberof tui.dom
 * @function
 */
function enableTextSelection(el) {
    var style;

    if (!el) {
        el = document;
    }

    if (SUPPORT_SELECTSTART) {
        off(el, 'selectstart', preventDefault);
    } else {
        el = (el === document) ? document.documentElement : el;
        style = el.style;
        style[userSelectProperty] = el.prevSelectStyle || 'auto';
        delete el.prevSelectStyle;
    }
}

module.exports = enableTextSelection;
