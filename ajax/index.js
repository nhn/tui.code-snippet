"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _forEachArray = _interopRequireDefault(require("../collection/forEachArray"));

var _forEachOwnProperties = _interopRequireDefault(require("../collection/forEachOwnProperties"));

var _extend = _interopRequireDefault(require("../object/extend"));

var _isArray = _interopRequireDefault(require("../type/isArray"));

var _isEmpty = _interopRequireDefault(require("../type/isEmpty"));

var _isNull = _interopRequireDefault(require("../type/isNull"));

var _isObject = _interopRequireDefault(require("../type/isObject"));

var _isUndefined = _interopRequireDefault(require("../type/isUndefined"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Serializer
 *
 * 1. Array format
 *
 * The default array format to serialize is 'bracket'.
 * However in case of nested array, only the deepest format follows the 'bracket', the rest follow 'indice' format.
 *
 * - basic
 *   { a: [1, 2, 3] } => a[]=1&a[]=2&a[]=3
 * - nested
 *   { a: [1, 2, [3]] } => a[]=1&a[]=2&a[2][]=3
 *
 * 2. Object format
 *
 * The default object format to serialize is 'bracket' notation and doesn't allow the 'dot' notation.
 *
 * - basic
 *   { a: { b: 1, c: 2 } } => a[b]=1&a[c]=2
 */
function encodePairs(key, value) {
  return encodeURIComponent(key) + "=" + encodeURIComponent((0, _isNull["default"])(value) || (0, _isUndefined["default"])(value) ? '' : value);
}

function serializeParams(key, value, serializedList) {
  if ((0, _isArray["default"])(value)) {
    (0, _forEachArray["default"])(value, function (arrVal, index) {
      serializeParams(key + "[" + ((0, _isObject["default"])(arrVal) ? index : '') + "]", arrVal, serializedList);
    });
  } else if ((0, _isObject["default"])(value)) {
    (0, _forEachOwnProperties["default"])(value, function (objValue, objKey) {
      serializeParams(key + "[" + objKey + "]", objValue, serializedList);
    });
  } else {
    serializedList.push(encodePairs(key, value));
  }
}

function serialize(params) {
  if (!params || (0, _isEmpty["default"])(params)) {
    return '';
  }

  var serializedList = [];
  (0, _forEachOwnProperties["default"])(params, function (value, key) {
    serializeParams(key, value, serializedList);
  });
  return serializedList.join('&');
}
/**
 * The default configurations
 * @namespace defaults
 * @property {string} baseURL - baseURL
 * @property {object} headers - request headers
 * @property {object<string,string>} headers.common - Common configs regardless of the type of request
 * @property {object<string,string>} headers.get - Common configs for the GET method
 * @property {object<string,string>} headers.post - Common configs for the POST method
 * @property {object<string,string>} headers.put - Common configs for the PUT method
 * @property {object<string,string>} headers.delete - Common configs for the DELETE method
 * @property {object<string,string>} headers.patch - Common configs for the PATCH method
 * @property {object<string,string>} headers.options - Common configs for the OPTIONS method
 * @property {object<string,string>} headers.head - Common configs for the HEAD method
 * @property {function} serializer - determine how to serialize the data
 * @property {function} beforeRequest - callback function executed before the request is sent
 * @property {function} success - callback function executed when the request is success
 * @property {function} error - callback function executed when the request is failed
 * @property {function} complete - callback function executed when the request is completed
 */


var getDefaultOptions = function getDefaultOptions() {
  return {
    baseURL: '',
    headers: {
      common: {},
      get: {},
      post: {},
      put: {},
      "delete": {},
      patch: {},
      options: {},
      head: {}
    },
    serializer: serialize
  };
};

var HTTP_PROTOCOL_REGEXP = /^(http|https):\/\//;
/**
 * Combine an absolute URL string (baseURL) and a relative URL string (url).
 * @param {string} baseURL - An absolute URL string
 * @param {string} url - An relative URL string
 * @returns {string}
 * @private
 */

function combineURL(baseURL, url) {
  if (HTTP_PROTOCOL_REGEXP.test(url.toLowerCase())) {
    return url;
  }

  if (baseURL.slice(-1) === '/' && url.slice(0, 1) === '/') {
    url = url.slice(1);
  }

  return baseURL + url;
}
/**
 * Get merged options by its priorities.
 * defaults.common < defaults[method] < custom options
 * @param {object} defaultOptions - The default options
 * @param {object} customOptions - The custom options
 * @returns {object}
 */


function getComputedOptions(defaultOptions, customOptions) {
  var baseURL = defaultOptions.baseURL;
  var url = customOptions.url,
      contentType = customOptions.contentType,
      method = customOptions.method,
      params = customOptions.params,
      withCredentials = customOptions.withCredentials,
      mimeType = customOptions.mimeType;
  var options = {
    url: combineURL(baseURL, url),
    method: method,
    params: params,
    headers: (0, _extend["default"])(defaultOptions.headers.common, defaultOptions.headers[method.toLowerCase()], customOptions.headers),
    serializer: customOptions.serializer || defaultOptions.serializer || serialize,
    beforeRequest: [defaultOptions.beforeRequest, customOptions.beforeRequest],
    success: [defaultOptions.success, customOptions.success],
    error: [defaultOptions.error, customOptions.error],
    complete: [defaultOptions.complete, customOptions.complete],
    withCredentials: withCredentials,
    mimeType: mimeType
  };
  options.contentType = contentType || options.headers['Content-Type'];
  delete options.headers['Content-Type'];
  return options;
}

var ENCODED_SPACE_REGEXP = /%20/g;
var QS_DELIM_REGEXP = /\?/;

function validateStatus(status) {
  return status >= 200 && status < 300;
}

function hasRequestBody(method) {
  return /^(?:POST|PUT|PATCH)$/.test(method.toUpperCase());
}

function executeCallback(callback, param) {
  if ((0, _isArray["default"])(callback)) {
    (0, _forEachArray["default"])(callback, function (fn) {
      return executeCallback(fn, param);
    });
  } else if (callback) {
    callback(param);
  }
}

function parseHeaders(text) {
  var headers = {};
  (0, _forEachArray["default"])(text.split('\r\n'), function (header) {
    var _header$split = header.split(': '),
        key = _header$split[0],
        value = _header$split[1];

    if (key !== '' && !(0, _isUndefined["default"])(value)) {
      headers[key] = value;
    }
  });
  return headers;
}

function parseJSONData(data) {
  var result = '';

  try {
    result = JSON.parse(data);
  } catch (_) {
    result = data;
  }

  return result;
}

function handleReadyStateChange(xhr, options) {
  var readyState = xhr.readyState,
      status = xhr.status,
      statusText = xhr.statusText,
      responseText = xhr.responseText;
  var success = options.success,
      resolve = options.resolve,
      error = options.error,
      reject = options.reject,
      complete = options.complete; // eslint-disable-next-line eqeqeq

  if (readyState != XMLHttpRequest.DONE) {
    return;
  }

  if (validateStatus(status)) {
    var headers = parseHeaders(xhr.getAllResponseHeaders());
    var contentType = headers['Content-Type'];
    var data = responseText;

    if (contentType && contentType.indexOf('application/json') > -1) {
      data = parseJSONData(data);
    }

    executeCallback([success, resolve], {
      status: status,
      statusText: statusText,
      data: data,
      headers: headers
    });
  } else {
    executeCallback([error, reject], {
      status: status,
      statusText: statusText
    });
  }

  executeCallback(complete);
}

function open(xhr, options) {
  var url = options.url,
      method = options.method,
      serializer = options.serializer,
      params = options.params;
  var requestUrl = url;

  if (!hasRequestBody(method) && params) {
    // serialize query string
    var qs = (QS_DELIM_REGEXP.test(url) ? '&' : '?') + serializer(params);
    requestUrl = "" + url + qs;
  }

  xhr.open(method, requestUrl);
}

function applyConfig(xhr, options) {
  var method = options.method,
      contentType = options.contentType,
      mimeType = options.mimeType,
      headers = options.headers,
      _options$withCredenti = options.withCredentials,
      withCredentials = _options$withCredenti === void 0 ? false : _options$withCredenti; // set withCredentials (IE10+)

  if (withCredentials) {
    xhr.withCredentials = withCredentials;
  } // override MIME type (IE11+)


  if (mimeType) {
    xhr.overrideMimeType(mimeType);
  }

  (0, _forEachOwnProperties["default"])(headers, function (value, header) {
    if (!(0, _isObject["default"])(value)) {
      xhr.setRequestHeader(header, value);
    }
  });

  if (hasRequestBody(method)) {
    xhr.setRequestHeader('Content-Type', contentType + "; charset=UTF-8");
  } // set 'x-requested-with' header to prevent CSRF in old browser


  xhr.setRequestHeader('x-requested-with', 'XMLHttpRequest');
}

function send(xhr, options) {
  var method = options.method,
      serializer = options.serializer,
      beforeRequest = options.beforeRequest,
      _options$params = options.params,
      params = _options$params === void 0 ? {} : _options$params,
      _options$contentType = options.contentType,
      contentType = _options$contentType === void 0 ? 'application/x-www-form-urlencoded' : _options$contentType;
  var body = null;

  if (hasRequestBody(method)) {
    // The space character '%20' is replaced to '+', because application/x-www-form-urlencoded follows rfc-1866
    body = contentType.indexOf('application/x-www-form-urlencoded') > -1 ? serializer(params).replace(ENCODED_SPACE_REGEXP, '+') : JSON.stringify(params);
  }

  xhr.onreadystatechange = function () {
    return handleReadyStateChange(xhr, options);
  };

  executeCallback(beforeRequest);
  xhr.send(body);
}
/**
 * A module for the Ajax request.
 * If the browser supports Promise, return the Promise object. If not, return nothing.
 * @param {object} options Options for the Ajax request
 * @returns {[Promise]}
 * @memberof module:ajax
 */


function ajax(options) {
  var xhr = new XMLHttpRequest();

  var request = function request(opts) {
    return (0, _forEachArray["default"])([open, applyConfig, send], function (fn) {
      return fn(xhr, opts);
    });
  };

  options = getComputedOptions(ajax.defaults, options);

  if (typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      request((0, _extend["default"])(options, {
        resolve: resolve,
        reject: reject
      }));
    });
  }

  request(options);
  return null;
}

ajax.defaults = getDefaultOptions();

ajax._reset = function () {
  ajax.defaults = getDefaultOptions();
};

ajax._request = function (url, method, options) {
  if (options === void 0) {
    options = {};
  }

  return ajax((0, _extend["default"])(options, {
    url: url,
    method: method
  }));
};

(0, _forEachArray["default"])(['get', 'post', 'put', 'delete', 'patch', 'options', 'head'], function (type) {
  ajax[type] = function (url, options) {
    return ajax._request(url, type.toUpperCase(), options);
  };
});
var _default = ajax;
exports["default"] = _default;
module.exports = exports["default"];
