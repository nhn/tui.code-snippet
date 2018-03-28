'use strict';

var request = require('../src/js/request');

describe('module:request', function() {
    describe('imagePing', function() {
        beforeEach(function() {
            document.body.innerHTML = '';
        });

        it('should add tracking dom in body', function() {
            request.imagePing('https://www.google-analytics.com/collect', {
                v: 1,
                t: 'event',
                tid: 'UA-115377265-7',
                cid: 'cid',
                dp: 'dp',
                dh: 'dh'
            }, 'tracking');

            expect(document.querySelector('.tracking')).not.toBeNull();
        });
    });
});
