describe('browser', function() {
    it('현재 브라우저를 잘 판단한다.', function() {
        var key, hasTrueValue = false;

        for(key in tui.util.browser) {
            if (tui.util.browser.hasOwnProperty(key)) {
                if (tui.util.browser[key]) {
                    hasTrueValue = true;
                    break;
                }
            }
        }

        expect(hasTrueValue).toBe(true);
    });

});
