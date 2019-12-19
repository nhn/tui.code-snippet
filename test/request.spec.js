'use strict';

var browser = require('../browser/browser');
var imagePing = require('../request/imagePing');
var sendHostname = require('../request/sendHostname');

describe('module:request', function() {
  describe('imagePing', function() {
    beforeEach(function() {
      document.body.innerHTML = '';
    });

    it('should add tracking dom in body', function() {
      var trackingElement = imagePing('https://www.google-analytics.com/collect', {
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

  // @TODO: localStorage mocking 버그. 이후 수정 필요
  if (!(browser.msie && browser.version === 8)) {
    describe('sendHostname', function() {
      beforeEach(function() {
        window.tui = window.tui || {};

        // can not spy on imagePing. spy on appendChild instead.
        spyOn(document.body, 'appendChild');
        spyOn(document.body, 'removeChild');
        spyOn(Storage.prototype, 'getItem').and.returnValue(null);
      });

      it('should call appendChild', function(done) {
        sendHostname('editor');

        setTimeout(function() {
          expect(document.body.appendChild).toHaveBeenCalled();
          done();
        }, 1500);
      });

      it('should not call appendChild', function(done) {
        window.tui.usageStatistics = false;

        sendHostname('editor');

        setTimeout(function() {
          expect(document.body.appendChild).not.toHaveBeenCalled();
          done();
        }, 1500);
      });
    });

    describe('sendHostname with localstorage', function() {
      beforeEach(function() {
        window.tui = window.tui || {};

        // can not spy on imagePing. spy on appendChild instead.
        spyOn(document.body, 'appendChild');
        spyOn(document.body, 'removeChild');
      });

      it('should not call appendChild within 7 days', function(done) {
        var now = new Date().getTime();
        var ms6days = 6 * 24 * 60 * 60 * 1000;

        spyOn(Storage.prototype, 'getItem').and.returnValue(now - ms6days);

        window.tui.usageStatistics = true;

        sendHostname('editor');

        setTimeout(function() {
          expect(document.body.appendChild).not.toHaveBeenCalled();
          done();
        }, 1500);
      });

      it('should call appendChild after 7 days', function(done) {
        var now = new Date().getTime();
        var ms8days = 8 * 24 * 60 * 60 * 1000;
        spyOn(Storage.prototype, 'getItem').and.returnValue(now - ms8days);

        window.tui.usageStatistics = true;

        sendHostname('editor');

        setTimeout(function() {
          expect(document.body.appendChild).toHaveBeenCalled();
          done();
        }, 1500);
      });
    });
  }
});
