'use strict';

var ajax = require('../ajax/')['default'];
// import ajax from '../ajax';

function supportPromise() {
  return typeof Promise !== 'undefined';
}

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

  // TODO: Edge17 does not support Promise.finally()
  // eslint-disable-next-line no-undef
  if (supportPromise() && Promise.prototype['finally']) {
    describe('Promise', function() {
      var resolve, reject, success, error;

      beforeEach(function() {
        resolve = jasmine.createSpy('resolve');
        reject = jasmine.createSpy('reject');
        success = jasmine.createSpy('success');
        error = jasmine.createSpy('error');
      });

      it('should execute resolve() when the request completed successfully', function() {
        ajax({
          url: 'https://ui.toast.com',
          method: 'GET'
        }).then(resolve)
          .catch(reject) // eslint-disable-line dot-notation
          .finally(function() { // eslint-disable-line dot-notation
            expect(resolve).toHaveBeenCalled();
            expect(reject).not.toHaveBeenCalled();
          });

        jasmine.Ajax.requests.mostRecent().respondWith({
          'status': 200,
          'contentType': 'text/plain',
          'responseText': 'Test for the Ajax module'
        });
      });

      it('should execute reject() when the request failed', function() {
        ajax({
          url: 'https://ui.toast.com',
          method: 'GET'
        }).then(resolve)
          .catch(reject) // eslint-disable-line dot-notation
          .finally(function() { // eslint-disable-line dot-notation
            expect(resolve).not.toHaveBeenCalled();
            expect(reject).toHaveBeenCalled();
          });

        jasmine.Ajax.requests.mostRecent().respondWith({
          'status': 500,
          'statusText': 'Internal Server Error'
        });
      });

      it('should execute success() and resolve() when the request completed successfully', function() {
        ajax({
          url: 'https://ui.toast.com',
          method: 'GET',
          success: success,
          error: error
        }).then(resolve)
          .catch(reject) // eslint-disable-line dot-notation
          .finally(function() { // eslint-disable-line dot-notation
            expect(success).toHaveBeenCalled();
            expect(resolve).toHaveBeenCalled();
            expect(success).toHaveBeenCalledBefore(resolve);
            expect(error).not.toHaveBeenCalled();
          });

        jasmine.Ajax.requests.mostRecent().respondWith({
          'status': 200,
          'contentType': 'text/plain',
          'responseText': 'Test for the Ajax module'
        });
      });

      it('should execute error() and reject() when the request failed', function() {
        ajax({
          url: 'https://ui.toast.com',
          method: 'GET',
          success: success,
          error: error
        }).then(resolve)
          .catch(reject) // eslint-disable-line dot-notation
          .finally(function() { // eslint-disable-line dot-notation
            expect(error).toHaveBeenCalled();
            expect(reject).toHaveBeenCalled();
            expect(error).toHaveBeenCalledBefore(reject);
            expect(success).not.toHaveBeenCalled();
          });

        jasmine.Ajax.requests.mostRecent().respondWith({
          'status': 500,
          'statusText': 'Internal Server Error'
        });
      });
    });
  }
});
