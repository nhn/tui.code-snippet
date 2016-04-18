/**
 * @fileoverview This module has some functions for handling the string.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 */

(function(tui) {
    'use strict';

    if (!tui) {
        tui = window.tui = {};
    }
    if (!tui.util) {
        tui.util = window.tui.util = {};
    }

    /**
     * Transform the given HTML Entity string into plain string
     * @param {String} htmlEntity - HTML Entity type string
     * @return {String} Plain string
     * @memberof tui.util
     * @example
     *  var htmlEntityString = "A &#39;quote&#39; is &lt;b&gt;bold&lt;/b&gt;"
     *  var result = decodeHTMLEntity(htmlEntityString); //"A 'quote' is <b>bold</b>"
     */
    function decodeHTMLEntity(htmlEntity) {
        var entities = {'&quot;' : '"', '&amp;' : '&', '&lt;' : '<', '&gt;' : '>', '&#39;' : '\'', '&nbsp;' : ' '};
        return htmlEntity.replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&nbsp;/g, function(m0) {
            return entities[m0] ? entities[m0] : m0;
        });
    }

    /**
     * Transform the given string into HTML Entity string
     * @param {String} html - String for encoding
     * @return {String} HTML Entity
     * @memberof tui.util
     * @example
     *  var htmlEntityString = "<script> alert('test');</script><a href='test'>";
     *  var result = encodeHTMLEntity(htmlEntityString); //"&lt;script&gt; alert(&#39;test&#39;);&lt;/script&gt;&lt;a href=&#39;test&#39;&gt;"
     */
    function encodeHTMLEntity(html) {
        var entities = {'"': 'quot', '&': 'amp', '<': 'lt', '>': 'gt', '\'': '#39'};
        return html.replace(/[<>&"']/g, function(m0) {
            return entities[m0] ? '&' + entities[m0] + ';' : m0;
        });
    }

    /**
     * Return whether the string capable to transform into plain string is in the given string or not.
     * @param {String} string
     * @memberof tui.util
     * @return {boolean}
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
     * tui.util.getDuplicatedChar('fe dev', 'nhn entertainment');
     * => 'e'
     * tui.util.getDuplicatedChar('fdsa', 'asdf');
     * => 'asdf'
     */
    function getDuplicatedChar(operandStr1, operandStr2) {
        var dupl,
            key,
            i = 0,
            len = operandStr1.length,
            pool = {};

        for (; i < len; i += 1) {
            key = operandStr1.charAt(i);
            pool[key] = 1;
        }

        for (i = 0, len = operandStr2.length; i < len; i += 1) {
            key = operandStr2.charAt(i);
            if(pool[key]) {
                pool[key] += 1;
            }
        }

        pool = tui.util.filter(pool, function(item) {
            return item > 1;
        });

        pool = tui.util.keys(pool).sort();
        dupl = pool.join('');

        return dupl;
    }

    tui.util.decodeHTMLEntity = decodeHTMLEntity;
    tui.util.encodeHTMLEntity = encodeHTMLEntity;
    tui.util.hasEncodableString = hasEncodableString;
    tui.util.getDuplicatedChar = getDuplicatedChar;

})(window.tui);
