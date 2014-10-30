describe('browser', function() {

    beforeEach(function() {
        ne.browser.detect();
    });

    it('현재 브라우저를 잘 판단한다.', function() {
        var key, hasTrueValue = false;

        for(key in ne.browser) {
            if (ne.browser.hasOwnProperty(key)) {
                if (key === 'detect') {
                    continue;
                }

                if (ne.browser[key]) {
                    hasTrueValue = true;
                    break;
                }
            }
        }

        expect(hasTrueValue).toBeTruthy();
    });

});
