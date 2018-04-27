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

    describe('sendHostname', function() {
        beforeEach(function() {
            window.tui = window.tui || {};

            // can not spy on imagePing. spy on appendChild instead.
            spyOn(document.body, 'appendChild');
            spyOn(document.body, 'removeChild');
        });

        it('should call appendChild', function(done) {
            request.sendHostname('editor');

            setTimeout(function() {
                expect(document.body.appendChild).toHaveBeenCalled();
                done();
            }, 1500);
        });

        it('should not call appendChild', function(done) {
            window.tui.usageStatistics = false;

            request.sendHostname('editor');

            setTimeout(function() {
                expect(document.body.appendChild).not.toHaveBeenCalled();
                done();
            }, 1500);
        });
    });
});
