describe('browser', function() {
    it('현재 브라우저를 잘 판단한다.', function() {
        var key, hasTrueValue = false;

        for(key in ne.browser) {
            if (ne.browser.hasOwnProperty(key)) {
                if (ne.browser[key]) {
                    hasTrueValue = true;
                    break;
                }
            }
        }

        expect(hasTrueValue).toBe(true);
    });

});
