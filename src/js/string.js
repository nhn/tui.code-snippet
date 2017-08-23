/**
 * @fileoverview This module has some functions for handling the string.
 * @author NHN Ent.
 *         FE Development Lab <dl_javascript@nhnent.com>
 */

'use strict';

var collection = require('./collection');
var object = require('./object');
/**
 * Transform the given HTML Entity string into plain string
 * @param {String} htmlEntity - HTML Entity type string
 * @returns {String} Plain string
 * @memberof tui.util
 * @example
 *  var decodeCodeEntity = require('tui-code-snippet').decodeCodeEntity; // commonjs
 *  var decodeCodeEntity = tui.util.decodeCodeEntity; // script
 * 
 *  var htmlEntityString = "A &#39;quote&#39; is &lt;b&gt;bold&lt;/b&gt;"
 *  var result = decodeHTMLEntity(htmlEntityString); //"A 'quote' is <b>bold</b>"
 */
function decodeHTMLEntity(htmlEntity) {
    var entities = {
        '&quot;': '"',
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#39;': '\'',
        '&nbsp;': ' '
    };

    return htmlEntity.replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&nbsp;/g, function(m0) {
        return entities[m0] ? entities[m0] : m0;
    });
}

/**
 * Transform the given string into HTML Entity string
 * @param {String} html - String for encoding
 * @returns {String} HTML Entity
 * @memberof tui.util
 * @example
 *  var encodeHTMLEntity = require('tui-code-snippet').encodeHTMLEntity; // commonjs
 *  var encodeHTMLEntity = tui.util.encodeHTMLEntity; // script
 * 
 *  var htmlEntityString = "<script> alert('test');</script><a href='test'>";
 *  var result = encodeHTMLEntity(htmlEntityString);
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

/**
 * Return whether the string capable to transform into plain string is in the given string or not.
 * @param {String} string - test string
 * @memberof tui.util
 * @returns {boolean}
 */
function hasEncodableString(string) {
    return (/[<>&"']/).test(string);
}

/**
 * Return duplicate charters
 * @param {string} operandStr1 The operand string
 * @param {string} operandStr2 The operand string
 * @private
 * @memberof tui.util
 * @returns {string}
 * @example
 *  var getDuplicatedChar = require('tui-code-snippet').getDuplicatedChar; // commonjs
 *  var getDuplicatedChar = tui.util.getDuplicatedChar; // script
 * 
 * getDuplicatedChar('fe dev', 'nhn entertainment'); // 'e'
 * getDuplicatedChar('fdsa', 'asdf'); // 'asdf'
 */
function getDuplicatedChar(operandStr1, operandStr2) {
    var i = 0;
    var len = operandStr1.length;
    var pool = {};
    var dupl, key;

    for (; i < len; i += 1) {
        key = operandStr1.charAt(i);
        pool[key] = 1;
    }

    for (i = 0, len = operandStr2.length; i < len; i += 1) {
        key = operandStr2.charAt(i);
        if (pool[key]) {
            pool[key] += 1;
        }
    }

    pool = collection.filter(pool, function(item) {
        return item > 1;
    });

    pool = object.keys(pool).sort();
    dupl = pool.join('');

    return dupl;
}

module.exports = {
    decodeHTMLEntity: decodeHTMLEntity,
    encodeHTMLEntity: encodeHTMLEntity,
    hasEncodableString: hasEncodableString,
    getDuplicatedChar: getDuplicatedChar
};