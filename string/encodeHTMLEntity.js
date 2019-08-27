/**
 * @fileoverview Transform the given string into HTML Entity string.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Transform the given string into HTML Entity string.
 * @param {String} html - String for encoding
 * @returns {String} HTML Entity
 * @memberof tui.util
 * @example
 * //-- #1. Get Module --//
 * var util = require('tui-code-snippet'); // node, commonjs
 * var util = tui.util; // distribution file
 *
 * //-- #2. Use property --//
 *  var htmlEntityString = "<script> alert('test');</script><a href='test'>";
 *  var result = util.encodeHTMLEntity(htmlEntityString);
 * //"&lt;script&gt; alert(&#39;test&#39;);&lt;/script&gt;&lt;a href=&#39;test&#39;&gt;"
 */
function encodeHTMLEntity(html) {
    var entities = {
        '"': 'quot',
        '&': 'amp',
        '<': 'lt',
        '>': 'gt',
        '\'': '#39'
    };

    return html.replace(/[<>&"']/g, function(m0) {
        return entities[m0] ? '&' + entities[m0] + ';' : m0;
    });
}

module.exports = encodeHTMLEntity;
