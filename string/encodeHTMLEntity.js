/**
 * @fileoverview Transform the given string into HTML Entity string.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Transform the given string into HTML Entity string.
 * @param {String} html - String for encoding
 * @returns {String} HTML Entity
 * @memberof module:string
 * @example
 * // ES6
 * import encodeHTMLEntity from 'tui-code-snippet/string/encodeHTMLEntity';
 * 
 * // CommonJS
 * const encodeHTMLEntity = require('tui-code-snippet/string/encodeHTMLEntity');
 *
 * const htmlEntityString = "<script> alert('test');</script><a href='test'>";
 * const result = encodeHTMLEntity(htmlEntityString);
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
