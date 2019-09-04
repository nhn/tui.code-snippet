'use strict';

var decodeHTMLEntity = require('../string/decodeHTMLEntity');
var encodeHTMLEntity = require('../string/encodeHTMLEntity');

describe('string', function() {
    it('decodeHTMLEntity() should transform the given HTML Entity string into plain string.', function() {
        var htmlEntityString = 'A &#39;quote&#39; is &lt;b&gt;bold&lt;/b&gt;',
            expectString = 'A \'quote\' is <b>bold</b>';
        expect(decodeHTMLEntity(htmlEntityString)).toEqual(expectString);
    });

    it('encodeHTMLEntity() should transform the given string into HTML Entity string.', function() {
        var htmlEntityString = '<script> alert(\'test\');</script><a href=\'test\'>',
            expectString = '&lt;script&gt; alert(&#39;test&#39;);&lt;/script&gt;&lt;a href=&#39;test&#39;&gt;';

        expect(encodeHTMLEntity(htmlEntityString)).toEqual(expectString);
    });
});
