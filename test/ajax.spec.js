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

  describe('Event handler', function() {
    var beforeRequest, success, error, complete;

    beforeEach(function() {
      beforeRequest = jasmine.createSpy('beforeRequest').and.callFake(function() {
        expect(success).not.toHaveBeenCalled();
        expect(error).not.toHaveBeenCalled();
        expect(complete).not.toHaveBeenCalled();
      });
      success = jasmine.createSpy('success').and.callFake(function() {
        expect(error).not.toHaveBeenCalled();
      });
      error = jasmine.createSpy('error').and.callFake(function() {
        expect(success).not.toHaveBeenCalled();
      });
      complete = jasmine.createSpy('complete');
    });

    it('beforeRequest should be called before receiving the response', function() {
      ajax({
        url: 'https://ui.toast.com/',
        method: 'GET',
        beforeRequest: beforeRequest,
        success: success,
        error: error,
        complete: complete
      });

      expect(beforeRequest).toHaveBeenCalled();
      expect(success).not.toHaveBeenCalled();
      expect(error).not.toHaveBeenCalled();
      expect(complete).not.toHaveBeenCalled();
    });

    it('should execute success and complete function when the request completed successfully', function() {
      ajax({
        url: 'https://ui.toast.com/',
        method: 'POST',
        beforeRequest: beforeRequest,
        success: success,
        error: error,
        complete: complete
      });

      jasmine.Ajax.requests.mostRecent().respondWith({
        'status': 201,
        'contentType': 'text/plain',
        'responseText': 'Test for the Ajax module'
      });

      expect(success).toHaveBeenCalledWith('Test for the Ajax module');
      expect(complete).toHaveBeenCalled();
    });

    it('should execute error and complete function when the request failed', function() {
      ajax({
        url: 'https://ui.toast.com/',
        method: 'PUT',
        success: success,
        error: error,
        complete: complete
      });

      jasmine.Ajax.requests.mostRecent().respondWith({
        'status': 404,
        'statusText': 'Page Not Found'
      });

      expect(error).toHaveBeenCalledWith('Page Not Found');
      expect(complete).toHaveBeenCalled();
    });
  });
});
