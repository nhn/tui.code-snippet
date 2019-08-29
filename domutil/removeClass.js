/**
 * @fileoverview Remove css class from element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var forEach = require('../collection/forEach');
var filter = require('../collection/filter');
var inArray = require('../array/inArray');
var getClass = require('./getClass');
var setClassName = require('./_setClassName');

/**
 * Remove css class from element
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {...string} cssClass - css classes to remove
 * @name removeClass
 * @memberof tui.dom
 * @function
 */
function removeClass(element) {    // eslint-disable-line
    var cssClass = Array.prototype.slice.call(arguments, 1); // eslint-disable-line prefer-rest-params
    var classList = element.classList;
    var origin, newClass;

    if (classList) {
        forEach(cssClass, function(name) {
            classList.remove(name);
        });

        return;
    }

    origin = getClass(element).split(/\s+/);

    newClass = filter(origin, function(name) {
        return inArray(name, cssClass) < 0;
    });

    setClassName(element, newClass);
}

module.exports = removeClass;
