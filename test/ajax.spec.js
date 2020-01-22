'use strict';

var forEachOwnProperties = require('../collection/forEachOwnProperties');

var ajax = require('../ajax/index.js');

describe('Ajax', function() {
  beforeEach(function() {
    jasmine.Ajax.install();
    ajax._reset();
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

  describe('Serializer', function() {
    var request;

    describe('without request body', function() {
      it('should serialize parameters with &', function() {
        ajax.get('https://ui.toast.com/', {
          params: {
            q: 'query',
            name: 'toast-ui',
            space: 's p a c e'
          }
        });

        request = jasmine.Ajax.requests.mostRecent();
        expect(request.url).toBe('https://ui.toast.com/?q=query&name=toast-ui&space=s%20p%20a%20c%20e');
      });

      it('should serialize array parameters by brackets', function() {
        ajax.head('https://ui.toast.com/', {
          params: {
            qs: ['toast-ui', 'code', 'snippet']
          }
        });

        request = jasmine.Ajax.requests.mostRecent();
        expect(request.url).toBe('https://ui.toast.com/?qs%5B%5D=toast-ui&qs%5B%5D=code&qs%5B%5D=snippet');
      });

      it('should serialize object parameters by brackets', function() {
        ajax.head('https://ui.toast.com/', {
          params: {
            qs: {
              name: 'toast-ui',
              product: 'code-snippet'
            }
          }
        });

        request = jasmine.Ajax.requests.mostRecent();
        expect(request.url).toBe('https://ui.toast.com/?qs%5Bname%5D=toast-ui&qs%5Bproduct%5D=code-snippet');
      });
    });

    describe('with request body', function() {
      it('should serialize using default serializer and \'+\' for spaces if Content-Type is application/x-www-form-urlencoded', function() {
        ajax.post('https://ui.toast.com/', {
          params: {
            q: 'query',
            qs: ['toast-ui', 'code', 'snippet'],
            product: {
              code: 'snippet'
            },
            space: 's p a c e'
          }
        });

        request = jasmine.Ajax.requests.mostRecent();
        expect(request.params).toBe('q=query&qs%5B%5D=toast-ui&qs%5B%5D=code&qs%5B%5D=snippet&product%5Bcode%5D=snippet&space=s+p+a+c+e');
      });

      it('should serialize using JSON.stringify() if Content-Type is not application/x-www-form-urlencoded', function() {
        ajax.post('https://ui.toast.com/', {
          params: {
            q: 'query',
            qs: ['toast-ui', 'code', 'snippet'],
            product: {
              code: 'snippet'
            },
            space: 's p a c e'
          },
          contentType: 'application/json'
        });

        request = jasmine.Ajax.requests.mostRecent();
        expect(request.params).toBe(JSON.stringify({
          q: 'query',
          qs: ['toast-ui', 'code', 'snippet'],
          product: {
            code: 'snippet'
          },
          space: 's p a c e'
        }));
      });
    });
  });

  describe('Event handler', function() {
    var beforeRequest, success, error, complete;

    beforeEach(function() {
      beforeRequest = jasmine.createSpy('beforeRequest');
      success = jasmine.createSpy('success');
      error = jasmine.createSpy('error');
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
        status: 201,
        contentType: 'text/plain',
        responseText: 'Test for the Ajax module'
      });

      expect(success).toHaveBeenCalled();
      expect(error).not.toHaveBeenCalled();
      expect(complete).toHaveBeenCalled();
      expect(success).toHaveBeenCalledBefore(complete);
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
        status: 404,
        statusText: 'Page Not Found'
      });

      expect(success).not.toHaveBeenCalled();
      expect(error).toHaveBeenCalled();
      expect(complete).toHaveBeenCalled();
      expect(error).toHaveBeenCalledBefore(complete);
    });
  });

  describe('response wrapper', function() {
    it('should have status, statusText, data, and headers', function() {
      var response;

      ajax({
        url: '//ui.toast.com/',
        method: 'GET',
        success: function(res) {
          response = res;
        }
      });

      jasmine.Ajax.requests.mostRecent().respondWith({
        status: 201,
        statusText: 'Created',
        responseText: '{"name":"tui-code-snippet","description":"TOAST UI Utility: CodeSnippet","author":"NHN. FE Development Lab <dl_javascript@nhn.com>"}',
        responseHeaders: {
          'Content-Type': 'application/json',
          date: 'Fri, 17 Jan 2020 11:38:17 GMT',
          'x-custom-header': 'CUSTOM'
        }
      });

      expect(response.status).toBe(201);
      expect(response.statusText).toBe('Created');
      expect(response.data).toEqual({
        name: 'tui-code-snippet',
        description: 'TOAST UI Utility: CodeSnippet',
        author: 'NHN. FE Development Lab <dl_javascript@nhn.com>'
      });
      expect(response.headers).toEqual({
        'Content-Type': 'application/json',
        date: 'Fri, 17 Jan 2020 11:38:17 GMT',
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
        status: 201,
        responseText: 'tui-code-snippet',
        responseHeaders: {
          'Content-Type': 'text/plain'
        }
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
        status: 502,
        statusText: 'Bad Gateway'
      });

      expect(error.status).toBe(502);
      expect(error.statusText).toBe('Bad Gateway');
    });
  });

  describe('default options', function() {
    var request;

    afterEach(function() {
      ajax._reset();
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

    it('should set headers and contentType depending on the priority (defaults.common < defaults.[method] < ajax options)', function() {
      ajax.defaults.headers.common = {
        'X-Common-Header': 'COMMON',
        'X-Custom-Header': 'CUSTOM-COMMON',
        'Content-Type': 'application/json'
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

      ajax.defaults.headers.post = {
        'X-Custom-Header': 'CUSTOM-POST',
        'Content-Type': 'text/plain'
      };

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

    it('should set event handlers and they should be called in order depending on the priority (defaults -> ajax option)', function() {
      var success = jasmine.createSpy('ajaxOptionSuccess');
      var complete = jasmine.createSpy('ajaxOptionComplete');
      var defaultSuccess = jasmine.createSpy('defaultSuccess');
      var defaultComplete = jasmine.createSpy('defaultComplete');

      ajax.defaults.success = defaultSuccess;
      ajax.defaults.complete = defaultComplete;

      ajax({
        url: 'https://ui.toast.com',
        method: 'GET',
        success: success,
        complete: complete
      });

      jasmine.Ajax.requests.mostRecent().respondWith({
        status: 201,
        responseText: 'tui-code-snippet'
      });

      expect(success).toHaveBeenCalled();
      expect(complete).toHaveBeenCalled();
      expect(defaultSuccess).toHaveBeenCalled();
      expect(defaultComplete).toHaveBeenCalled();
      expect(defaultSuccess).toHaveBeenCalledBefore(success);
      expect(defaultComplete).toHaveBeenCalledBefore(complete);
    });
  });

  describe('request methods (static method)', function() {
    var options = {contentType: 'text/plain'};
    var request;

    afterEach(function() {
      ajax._reset();
    });

    it('ajax.get() should send the request by GET', function() {
      ajax.get('https://ui.toast.com', options);

      request = jasmine.Ajax.requests.mostRecent();
      expect(request.url).toBe('https://ui.toast.com');
      expect(request.method).toBe('GET');
      expect(request.requestHeaders['Content-Type']).toBeUndefined();
    });

    it('ajax.post() should send the request by POST', function() {
      ajax.defaults.headers.post = {
        'Content-Type': 'application/json'
      };
      ajax.post('https://nhn.github.io/tui-code-snippet');

      request = jasmine.Ajax.requests.mostRecent();
      expect(request.url).toBe('https://nhn.github.io/tui-code-snippet');
      expect(request.method).toBe('POST');
      expect(request.requestHeaders['Content-Type']).toBe('application/json; charset=UTF-8');
    });

    it('ajax.put() should send the request by PUT', function() {
      ajax.put('https://nhn.github.io/tui-code-snippet', options);

      request = jasmine.Ajax.requests.mostRecent();
      expect(request.url).toBe('https://nhn.github.io/tui-code-snippet');
      expect(request.method).toBe('PUT');
      expect(request.requestHeaders['Content-Type']).toBe('text/plain; charset=UTF-8');
    });

    it('ajax.delete() should send the request by DELETE', function() {
      ajax['delete']('https://ui.toast.com', options);

      request = jasmine.Ajax.requests.mostRecent();
      expect(request.url).toBe('https://ui.toast.com');
      expect(request.method).toBe('DELETE');
      expect(request.requestHeaders['Content-Type']).toBeUndefined();
    });

    it('ajax.patch() should send the request by PATCH', function() {
      ajax.patch('https://ui.toast.com', options);

      request = jasmine.Ajax.requests.mostRecent();
      expect(request.url).toBe('https://ui.toast.com');
      expect(request.method).toBe('PATCH');
      expect(request.requestHeaders['Content-Type']).toBe('text/plain; charset=UTF-8');
    });

    it('ajax.options() should send the request by OPTIONS', function() {
      ajax.options('https://ui.toast.com', options);

      request = jasmine.Ajax.requests.mostRecent();
      expect(request.url).toBe('https://ui.toast.com');
      expect(request.method).toBe('OPTIONS');
      expect(request.requestHeaders['Content-Type']).toBeUndefined();
    });

    it('ajax.head() should send the request by HEAD', function() {
      ajax.head('https://ui.toast.com', options);

      request = jasmine.Ajax.requests.mostRecent();
      expect(request.url).toBe('https://ui.toast.com');
      expect(request.method).toBe('HEAD');
      expect(request.requestHeaders['Content-Type']).toBeUndefined();
    });
  });

  // eslint-disable-next-line no-undef
  if (typeof Promise !== 'undefined') {
    describe('Promise', function() {
      var ajaxResult, success, error;

      beforeEach(function() {
        success = jasmine.createSpy('success');
        error = jasmine.createSpy('error');
      });

      it('should execute success() and resolve() when the request completed successfully', function() {
        ajaxResult = ajax({
          url: 'https://ui.toast.com',
          method: 'GET',
          success: success,
          error: error
        }).then(function() {
          expect(success).toHaveBeenCalled();
          expect(error).not.toHaveBeenCalled();
        });

        jasmine.Ajax.requests.mostRecent().respondWith({
          status: 200,
          contentType: 'text/plain',
          responseText: 'Test for the Ajax module'
        });

        // eslint-disable-next-line no-undef
        expect(ajaxResult).toEqual(jasmine.any(Promise));
      });

      it('should execute error() and reject() when the request failed', function() {
        ajaxResult = ajax({
          url: 'https://ui.toast.com',
          method: 'GET',
          success: success,
          error: error
        })['catch'](function() {
          expect(success).not.toHaveBeenCalled();
          expect(error).toHaveBeenCalled();
        });

        jasmine.Ajax.requests.mostRecent().respondWith({
          status: 500,
          statusText: 'Internal Server Error'
        });

        // eslint-disable-next-line no-undef
        expect(ajaxResult).toEqual(jasmine.any(Promise));
      });
    });
  }
});
