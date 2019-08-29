/**
 * @fileoverview Disable browser's text selection behaviors.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var on = require('../domevent/on');
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
 * Disable browser's text selection behaviors.
 * @param {HTMLElement} [el] - target element. if not supplied, use `document`
 * @name disableTextSelection
 * @memberof tui.dom
 * @function
 */
function disableTextSelection(el) {
    var style;

    if (!el) {
        el = document;
    }

    if (SUPPORT_SELECTSTART) {
        on(el, 'selectstart', preventDefault);
    } else {
        el = (el === document) ? document.documentElement : el;
        style = el.style;
        style.prevSelectStyle = style[userSelectProperty];
        style[userSelectProperty] = 'none';
    }
}

module.exports = disableTextSelection;
