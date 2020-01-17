'use strict';

var ajax = require('../ajax/')['default'];
// import ajax from '../ajax';

fdescribe('Ajax', function() {
  beforeEach(function() {
    jasmine.Ajax.install();
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

  describe('Request', function() {
    var request;

    it('should be sent correctly by using GET', function() {
      ajax({
        url: 'https://ui.toast.com/',
        method: 'GET',
        params: {
          q: 'query'
        },
        headers: {'X-Custom-Header': 'CUSTOM'}
      });

      request = jasmine.Ajax.requests.mostRecent();
      expect(request.url).toBe('https://ui.toast.com/?q=query');
      expect(request.method).toBe('GET');
      expect(request.requestHeaders['X-Custom-Header']).toBe('CUSTOM');
    });
  });
});
