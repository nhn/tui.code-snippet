/**
 * @fileoverview Check specific CSS style is available.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Check specific CSS style is available.
 * @param {array} props property name to testing
 * @returns {(string|boolean)} return true when property is available
 * @name testCSSProp
 * @memberof tui.dom
 * @function
 * @example
 * //-- #1. Get Module --//
 * var domUtil = require('tui-dom'); // node, commonjs
 * var domUtil = tui.dom; // distribution file
 *
 * //-- #2. Use property --//
 * var props = ['transform', '-webkit-transform'];
 * domutil.testCSSProp(props);    // 'transform'
 */
function testCSSProp(props) {
    var style = document.documentElement.style;
    var i, len;

    for (i = 0, len = props.length; i < len; i += 1) {
        if (props[i] in style) {
            return props[i];
        }
    }

    return false;
}

module.exports = testCSSProp;
