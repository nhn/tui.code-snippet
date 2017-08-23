'use strict';

var browser = require('../src/js/browser');

describe('browser', function() {
    it('현재 브라우저를 잘 판단한다.', function() {
        var key, hasTrueValue = false;

        for (key in browser) {
            if (browser.hasOwnProperty(key)) {
                if (browser[key]) {
                    hasTrueValue = true;
                    break;
                }
            }
        }

        expect(hasTrueValue).toBe(true);
    });
});
