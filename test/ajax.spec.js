'use strict';

var forEachArray = require('../collection/forEachArray');
var forEachOwnProperties = require('../collection/forEachOwnProperties');

var ajax = require('../ajax/index.js'); // Test for transpiled file
// var ajax = require('../ajax')['default']; // Test for ES6 Module

var mock = {
  open: jest.fn(),
  send: jest.fn().mockImplementation(function() {
    this.readyState = 4;
    this.onreadystatechange();
  }),
  setRequestHeader: jest.fn(),
  getResponseHeader: jest.fn().mockImplementation(function(key) {
    return this.responseHeaders && this.responseHeaders[key];
  }),
  getAllResponseHeaders: jest.fn().mockImplementation(function() {
    var result, i, keys;

    if (this.responseHeaders) {
      result = '';
      keys = Object.keys(this.responseHeaders);

      for (i = 0; i < keys.length; i += 1) {
        result += keys[i] + ': ' + this.responseHeaders[keys[i]] + '\r\n';
      }
    }

    return result;
  }),
  setResponse: function(options) {
    this.xhr.status = options.status;
    this.xhr.statusText = options.statusText;
    this.xhr.responseText = options.responseText || '\r\n';
    this.xhr.responseHeaders = options.responseHeaders || '\r\n';
  },
  install: function() {
    var xhr;
    this.xhr = xhr = {
      open: this.open,
      send: this.send,
      setRequestHeader: this.setRequestHeader,
      getResponseHeader: this.getResponseHeader,
      getAllResponseHeaders: this.getAllResponseHeaders,
      status: 200
    };

    this.originalXHR = window.XMLHttpRequest;
    window.XMLHttpRequest = function() {
      return xhr;
    };
  },
  uninstall: function() {
    window.XMLHttpRequest = this.originalXHR;
  }
};

describe('Ajax', function() {
  beforeEach(function() {
    mock.install();
    ajax._reset();
  });

  afterEach(function() {
    mock.uninstall();
  });

  describe('Request', function() {
    it('should be sent correctly by using GET', function() {
      ajax({
        url: 'https://ui.toast.com/',
        method: 'GET',
        params: {
          q: 'query'
        },
        headers: {'X-Custom-Header': 'CUSTOM'}
      });

      expect(mock.open).toHaveBeenCalledWith('GET', 'https://ui.toast.com/?q=query');
      expect(mock.setRequestHeader).toHaveBeenCalledWith('X-Custom-Header', 'CUSTOM');
    });
  });

  describe('Default serializer', function() {
    describe('query strings', function() {
      it('should serialize query strings properly', function() {
        ajax.get('https://ui.toast.com/', {
          params: {
            q: 'query',
            name: 'toast-ui',
            space: 's p a c e'
          }
        });

        expect(mock.open).toHaveBeenCalledWith('GET', 'https://ui.toast.com/?q=query&name=toast-ui&space=s%20p%20a%20c%20e');
      });

      it('should serialize array parameters by brackets', function() {
        ajax.head('https://ui.toast.com/', {
          params: {
            qs: ['toast-ui', 'code', 'snippet']
          }
        });

        expect(mock.open).toHaveBeenCalledWith('HEAD', 'https://ui.toast.com/?qs%5B%5D=toast-ui&qs%5B%5D=code&qs%5B%5D=snippet');
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

        expect(mock.open).toHaveBeenCalledWith('HEAD', 'https://ui.toast.com/?qs%5Bname%5D=toast-ui&qs%5Bproduct%5D=code-snippet');
      });
    });

    describe('request body', function() {
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

        expect(mock.send).toHaveBeenCalledWith('q=query&qs%5B%5D=toast-ui&qs%5B%5D=code&qs%5B%5D=snippet&product%5Bcode%5D=snippet&space=s+p+a+c+e');
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

        expect(mock.send).toHaveBeenLastCalledWith(JSON.stringify({
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
    var beforeRequestMock, successMock, errorMock, completeMock;

    beforeEach(function() {
      beforeRequestMock = jest.fn();
      successMock = jest.fn();
      errorMock = jest.fn();
      completeMock = jest.fn();

      beforeRequest = function() {
        var args = Array.prototype.slice.call(arguments);
        beforeRequestMock.apply(null, args);
      };
      success = function() {
        successMock();
      };
      error = function() {
        errorMock();
      };
      complete = function() {
        completeMock();
      };
    });

    describe('beforeRequest', function() {
      it('should be called before receiving the response', function() {
        ajax({
          url: 'https://ui.toast.com/',
          method: 'GET',
          beforeRequest: beforeRequest,
          success: success,
          error: error,
          complete: complete
        });

        expect(beforeRequestMock).toHaveBeenCalled();
        expect(successMock).not.toHaveBeenCalled();
        expect(errorMock).not.toHaveBeenCalled();
        expect(completeMock).not.toHaveBeenCalled();
      });

      it('should be called with a XMLHttpRequest object', function() {
        ajax({
          url: 'https://ui.toast.com/',
          method: 'POST',
          beforeRequest: beforeRequest
        });

        expect(beforeRequestMock).toHaveBeenCalledWith(mock.xhr);
      });
    });

    describe('success', function() {
      it('should be executed when the request completed successfully and before executing complete function', function() {
        mock.setResponse({
          status: 200
        });

        ajax({
          url: 'https://ui.toast.com/',
          method: 'POST',
          beforeRequest: beforeRequest,
          success: success,
          error: error,
          complete: complete
        });

        expect(successMock).toHaveBeenCalled();
        expect(errorMock).not.toHaveBeenCalled();
        expect(completeMock).toHaveBeenCalled();
        expect(successMock).toHaveBeenCalledBefore(completeMock);
      });

      describe('response wrapper', function() {
        it('should have status, statusText, data, and headers', function() {
          var response;

          mock.setResponse({
            status: 201,
            statusText: 'Created',
            responseText: '{"name":"tui-code-snippet","description":"TOAST UI Utility: CodeSnippet","author":"NHN. FE Development Lab <dl_javascript@nhn.com>"}',
            responseHeaders: {
              'Content-Type': 'application/json',
              date: 'Fri, 17 Jan 2020 11:38:17 GMT',
              'x-custom-header': 'CUSTOM'
            }
          });

          ajax({
            url: '//ui.toast.com/',
            method: 'GET',
            success: function(res) {
              response = res;
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

          mock.setResponse({
            status: 201,
            responseText: 'tui-code-snippet',
            responseHeaders: {
              'Content-Type': 'text/plain'
            }
          });

          ajax({
            url: 'https://ui.toast.com/',
            method: 'GET',
            success: function(res) {
              response = res;
            }
          });

          expect(response.data).toBe('tui-code-snippet');
        });
      });
    });

    describe('error', function() {
      it('should executed when the request failed and before executing complete function', function() {
        mock.setResponse(404, 'Page Not Found');

        ajax({
          url: 'https://ui.toast.com/',
          method: 'PUT',
          success: success,
          error: error,
          complete: complete
        });

        expect(successMock).not.toHaveBeenCalled();
        expect(errorMock).toHaveBeenCalled();
        expect(completeMock).toHaveBeenCalled();
        expect(errorMock).toHaveBeenCalledBefore(completeMock);
      });

      describe('error response wrapper', function() {
        it('should have status and statusText', function() {
          var errorResponse;

          mock.setResponse({
            status: 502,
            statusText: 'Bad Gateway'
          });

          ajax({
            url: 'https://ui.toast.com/',
            method: 'GET',
            error: function(err) {
              errorResponse = err;
            }
          });

          expect(errorResponse.status).toBe(502);
          expect(errorResponse.statusText).toBe('Bad Gateway');
        });
      });
    });

    describe('complete', function() {
      it('should be called with a complete response wrapper consisting of status and statusText', function() {
        var completeResponse;

        mock.setResponse({
          status: 201,
          statusText: 'Created'
        });

        ajax({
          url: 'https://ui.toast.com/',
          method: 'POST',
          complete: function(res) {
            completeResponse = res;
          }
        });

        expect(completeResponse.status).toBe(201);
        expect(completeResponse.statusText).toBe('Created');
      });
    });
  });

  describe('default options', function() {
    afterEach(function() {
      ajax._reset();
    });

    it('should set a baseURL', function() {
      ajax.defaults.baseURL = 'https://nhn.github.io/';

      ajax({
        url: '/tui-code-snippet',
        method: 'GET'
      });

      expect(mock.open).toHaveBeenCalledWith('GET', 'https://nhn.github.io/tui-code-snippet');
      mock.open.mockClear();

      ajax({
        // If a url starts with 'http', baseURL is not applied
        url: 'https://ui.toast.com',
        method: 'POST'
      });

      expect(mock.open).toHaveBeenCalledWith('POST', 'https://ui.toast.com');
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

      expect(mock.setRequestHeader).toHaveBeenCalledWith('Content-Type', 'application/json; charset=UTF-8');
      expect(mock.setRequestHeader).toHaveBeenCalledWith('X-Common-Header', 'COMMON');
      expect(mock.setRequestHeader).toHaveBeenCalledWith('X-Custom-Header', 'CUSTOM-COMMON');
      mock.setRequestHeader.mockClear();

      ajax.defaults.headers.post = {
        'X-Custom-Header': 'CUSTOM-POST',
        'Content-Type': 'text/plain'
      };

      ajax({
        url: 'https://ui.toast.com',
        method: 'POST'
      });

      expect(mock.setRequestHeader).toHaveBeenCalledWith('Content-Type', 'text/plain; charset=UTF-8');
      expect(mock.setRequestHeader).toHaveBeenCalledWith('X-Common-Header', 'COMMON');
      expect(mock.setRequestHeader).toHaveBeenCalledWith('X-Custom-Header', 'CUSTOM-POST');
      mock.setRequestHeader.mockClear();

      ajax({
        url: 'https://ui.toast.com',
        method: 'POST',
        headers: {
          'X-Custom-Header': 'CUSTOM-AJAX-OPTION'
        }
      });

      expect(mock.setRequestHeader).toHaveBeenCalledWith('Content-Type', 'text/plain; charset=UTF-8');
      expect(mock.setRequestHeader).toHaveBeenCalledWith('X-Common-Header', 'COMMON');
      expect(mock.setRequestHeader).toHaveBeenCalledWith('X-Custom-Header', 'CUSTOM-AJAX-OPTION');
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

      expect(mock.open).toHaveBeenCalledWith('GET', 'https://ui.toast.com?param-first=1&param-second=2&param-third=3');
    });

    it('should set event handlers and they should be called in order depending on the priority (defaults -> ajax option)', function() {
      var successMock = jest.fn();
      var completeMock = jest.fn();
      var defaultSuccessMock = jest.fn();
      var defaultCompleteMock = jest.fn();

      var success = function() {
        successMock();
      };
      var complete = function() {
        completeMock();
      };
      var defaultSuccess = function() {
        defaultSuccessMock();
      };
      var defaultComplete = function() {
        defaultCompleteMock();
      };

      ajax.defaults.success = defaultSuccess;
      ajax.defaults.complete = defaultComplete;

      mock.setResponse({
        status: 201,
        responseText: 'tui-code-snippet'
      });

      ajax({
        url: 'https://ui.toast.com',
        method: 'GET',
        success: success,
        complete: complete
      });

      expect(successMock).toHaveBeenCalled();
      expect(completeMock).toHaveBeenCalled();
      expect(defaultSuccessMock).toHaveBeenCalled();
      expect(defaultCompleteMock).toHaveBeenCalled();
      expect(defaultSuccessMock).toHaveBeenCalledBefore(successMock);
      expect(defaultCompleteMock).toHaveBeenCalledBefore(completeMock);
    });
  });

  describe('request methods (static method)', function() {
    var url = 'https://ui.toast.com';
    var options = {contentType: 'text/plain'};

    function hasRequestBody(method) {
      return /^(?:POST|PUT|PATCH)$/.test(method.toUpperCase());
    }

    afterEach(function() {
      ajax._reset();
    });

    forEachArray(['get', 'post', 'put', 'delete', 'patch', 'options', 'head'], function(method) {
      it('ajax.' + method + '() should send the request by ' + method.toUpperCase(), function() {
        ajax[method](url, options);

        expect(mock.open).toHaveBeenCalledWith(method.toUpperCase(), url);
        if (hasRequestBody(method)) {
          expect(mock.setRequestHeader).toHaveBeenCalledWith('Content-Type', 'text/plain; charset=UTF-8');
        } else {
          expect(mock.setRequestHeader).not.toHaveBeenCalledWith('Content-Type', 'text/plain; charset=UTF-8');
        }
      });
    });
  });

  // eslint-disable-next-line no-undef
  if (typeof Promise !== 'undefined') {
    describe('Promise', function() {
      var ajaxResult, successMock, errorMock, success, error;

      beforeEach(function() {
        successMock = jest.fn();
        errorMock = jest.fn();

        success = function() {
          successMock();
        };
        error = function() {
          errorMock();
        };
      });

      it('should execute success() and resolve() when the request completed successfully', function() {
        mock.setResponse({
          status: 200,
          contentType: 'text/plain',
          responseText: 'Test for the Ajax module'
        });

        ajaxResult = ajax({
          url: 'https://ui.toast.com',
          method: 'GET',
          success: success,
          error: error
        }).then(function() {
          expect(successMock).toHaveBeenCalled();
          expect(errorMock).not.toHaveBeenCalled();
        });

        // eslint-disable-next-line no-undef
        expect(ajaxResult).toEqual(expect.any(Promise));
      });

      it('should execute error() and reject() when the request failed', function() {
        mock.setResponse({
          status: 500,
          statusText: 'Internal Server Error'
        });

        ajaxResult = ajax({
          url: 'https://ui.toast.com',
          method: 'GET',
          success: success,
          error: error
        })['catch'](function() {
          expect(successMock).not.toHaveBeenCalled();
          expect(errorMock).toHaveBeenCalled();
        });

        // eslint-disable-next-line no-undef
        expect(ajaxResult).toEqual(expect.any(Promise));
      });
    });
  }
});
