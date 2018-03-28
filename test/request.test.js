'use strict';

var request = require('../src/js/request');

describe('module:request', function() {
    describe('imagePing', function() {
        beforeEach(function() {
            document.body.innerHTML = '';
        });

        it('should add tracking dom in body', function() {
            var trackingElement = request.imagePing('https://www.google-analytics.com/collect', {
                v: 1,
                t: 'event',
                tid: 'tracnkingid',
                cid: 'cid',
                dp: 'dp',
                dh: 'dh'
            });

            expect(trackingElement.src).toBe('https://www.google-analytics.com/collect?v=1&t=event&tid=tracnkingid&cid=cid&dp=dp&dh=dh');
        });
    });
});
