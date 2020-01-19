'use strict';

var forEachOwnProperties = require('../collection/forEachOwnProperties');

var ajax = require('../ajax/')['default'];
var defaultOptions = require('../ajax/_options').defaultOptions;
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

      expect(success).toHaveBeenCalled();
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

      expect(error).toHaveBeenCalled();
      expect(complete).toHaveBeenCalled();
    });
  });

  describe('response wrapper', function() {
    it('should have status, statusText, data, and headers', function() {
      var response;

      ajax({
        url: 'https://ui.toast.com/',
        method: 'GET',
        success: function(res) {
          response = res;
        }
      });

      jasmine.Ajax.requests.mostRecent().respondWith({
        'status': 201,
        'statusText': 'Created',
        'responseText': '{"name":"tui-code-snippet","description":"TOAST UI Utility: CodeSnippet","author":"NHN. FE Development Lab <dl_javascript@nhn.com>"}',
        'responseHeaders': {
          'content-type': 'application/json',
          'date': 'Fri, 17 Jan 2020 11:38:17 GMT',
          'x-custom-header': 'CUSTOM'
        }
      });

      expect(response.status).toBe(201);
      expect(response.statusText).toBe('Created');
      expect(response.data).toEqual({
        'name': 'tui-code-snippet',
        'description': 'TOAST UI Utility: CodeSnippet',
        'author': 'NHN. FE Development Lab <dl_javascript@nhn.com>'
      });
      expect(response.headers).toEqual({
        'content-type': 'application/json',
        'date': 'Fri, 17 Jan 2020 11:38:17 GMT',
        'x-custom-header': 'CUSTOM'
      });
    });

    it('should have raw responseText if it does not meet a JSON format', function() {
      var response;

      ajax({
        url: 'https://ui.toast.com/',
        method: 'GET',
        success: function(res) {
          response = res;
        }
      });

      jasmine.Ajax.requests.mostRecent().respondWith({
        'status': 201,
        'responseText': 'tui-code-snippet'
      });

      expect(response.data).toBe('tui-code-snippet');
    });
  });

  describe('error wrapper', function() {
    it('should have status and statusText', function() {
      var error;

      ajax({
        url: 'https://ui.toast.com/',
        method: 'GET',
        error: function(err) {
          error = err;
        }
      });

      jasmine.Ajax.requests.mostRecent().respondWith({
        'status': 502,
        'statusText': 'Bad Gateway'
      });

      expect(error.status).toBe(502);
      expect(error.statusText).toBe('Bad Gateway');
    });
  });

  describe('default options', function() {
    var request;

    beforeEach(function() {
      ajax.defaults = defaultOptions;
    });

    it('should set a baseURL', function() {
      ajax.defaults.baseURL = 'https://nhn.github.io/';

      ajax({
        url: '/tui-code-snippet',
        method: 'GET'
      });

      request = jasmine.Ajax.requests.mostRecent();
      expect(request.url).toBe('https://nhn.github.io/tui-code-snippet');

      ajax({
        // If a url starts with 'http', baseURL is not applied
        url: 'https://ui.toast.com',
        method: 'POST'
      });

      request = jasmine.Ajax.requests.mostRecent();
      expect(request.url).toBe('https://ui.toast.com');
    });

    it('should set headers and contentType', function() {
      ajax.defaults.common = {
        contentType: 'application/json',
        headers: {
          'X-Common-Header': 'COMMON',
          'X-Custom-Header': 'CUSTOM-COMMON'
        }
      };

      ajax({
        url: 'https://ui.toast.com',
        method: 'PUT'
      });

      request = jasmine.Ajax.requests.mostRecent();
      // v2.3.0, ajax module supports charset=UTF-8 only
      expect(request.requestHeaders['Content-Type']).toBe('application/json; charset=UTF-8');
      expect(request.requestHeaders['X-Common-Header']).toBe('COMMON');
      expect(request.requestHeaders['X-Custom-Header']).toBe('CUSTOM-COMMON');

      ajax.defaults.POST.contentType = 'text/plain';
      ajax.defaults.POST.headers = {'X-Custom-Header': 'CUSTOM-POST'};

      ajax({
        url: 'https://ui.toast.com',
        method: 'POST'
      });

      request = jasmine.Ajax.requests.mostRecent();
      // v2.3.0, ajax module supports charset=UTF-8 only
      // defaults.common is overidden by defaults[method]
      expect(request.requestHeaders['Content-Type']).toBe('text/plain; charset=UTF-8');
      expect(request.requestHeaders['X-Common-Header']).toBe('COMMON');
      expect(request.requestHeaders['X-Custom-Header']).toBe('CUSTOM-POST');

      ajax({
        url: 'https://ui.toast.com',
        method: 'POST',
        headers: {
          'X-Custom-Header': 'CUSTOM-AJAX-OPTION'
        }
      });

      request = jasmine.Ajax.requests.mostRecent();
      // v2.3.0, ajax module supports charset=UTF-8 only
      // defaults[method] is overidden by ajax's options
      expect(request.requestHeaders['Content-Type']).toBe('text/plain; charset=UTF-8');
      expect(request.requestHeaders['X-Common-Header']).toBe('COMMON');
      expect(request.requestHeaders['X-Custom-Header']).toBe('CUSTOM-AJAX-OPTION');
    });

    it('should set a serializer', function() {
      ajax.defaults.serializer = function(params) {
        var result = [];

        forEachOwnProperties(params, function(value, key) {
          result.push('param-' + key + '=' + value);
        });

        return result.join('&');
      };

      ajax({
        url: 'https://ui.toast.com',
        method: 'GET',
        params: {
          first: 1,
          second: 2,
          third: 3
        }
      });

      request = jasmine.Ajax.requests.mostRecent();
      expect(request.url).toBe('https://ui.toast.com?param-first=1&param-second=2&param-third=3');
    });

    it('should set event handlers', function() {
      var success = jasmine.createSpy('ajaxOptionSuccess');
      var defaultSuccess = jasmine.createSpy('defaultSuccess');
      var defaultComplete = jasmine.createSpy('defaultComplete');

      ajax.defaults.success = defaultSuccess;
      ajax.defaults.complete = defaultComplete;

      ajax({
        url: 'https://ui.toast.com',
        method: 'GET',
        success: success
      });

      jasmine.Ajax.requests.mostRecent().respondWith({
        'status': 201,
        'responseText': 'tui-code-snippet'
      });

      expect(success).toHaveBeenCalled();
      expect(defaultSuccess).not.toHaveBeenCalled();
      expect(defaultComplete).toHaveBeenCalled();
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
