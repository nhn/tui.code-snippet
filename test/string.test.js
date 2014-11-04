describe('type', function() {
    it('encodeHTMLEntity()', function() {
        var htmlEntityString = '<script> alert(\'test\');</script><a href=\'test\'>',
            expectString = '&lt;script&gt; alert(&#39;test&#39;);&lt;/script&gt;&lt;a href=&#39;test&#39;&gt;';

        expect(ne.encodeHTMLEntity(htmlEntityString)).toEqual(expectString);
    });
    it('decodeHTMLEntity()', function() {
        var htmlEntityString = 'A &#39;quote&#39; is &lt;b&gt;bold&lt;/b&gt;',
            expectString = 'A \'quote\' is <b>bold</b>';
        expect(ne.decodeHTMLEntity(htmlEntityString)).toEqual(expectString);
    });
});
