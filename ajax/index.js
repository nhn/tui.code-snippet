"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _forEachArray = _interopRequireDefault(require("../collection/forEachArray"));

var _forEachOwnProperties = _interopRequireDefault(require("../collection/forEachOwnProperties"));

var _extend = _interopRequireDefault(require("../object/extend"));

var _isArray = _interopRequireDefault(require("../type/isArray"));

var _isEmpty = _interopRequireDefault(require("../type/isEmpty"));

var _isFunction = _interopRequireDefault(require("../type/isFunction"));

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
 * @property {object} common - Common configs regardless of the type of request
 * @property {string} common.contentType - content-type for every requests
 * @property {object<string, string>} common.headers - headers for every requests
 * @property {object} POST - Common configs for the POST method
 * @property {string} POST.contentType - content-type for the POST method
 * @property {object<string, string>} POST.headers - headers for the POST method
 * @property {object} PUT - Common configs for the PUT method
 * @property {string} PUT.contentType - content-type for the PUT method
 * @property {object<string, string>} PUT.headers - headers for the PUT method
 * @property {object} PATCH - Common configs for the PATCH method
 * @property {string} PATCH.contentType - content-type for the PATCH method
 * @property {object<string, string>} PATCH.headers - headers for the PATCH method
 * @property {function} serializer - determine how to serialize the data
 * @property {function} beforeRequest - callback function executed before the request is sent
 * @property {function} success - callback function executed when the request is success
 * @property {function} error - callback function executed when the request is failed
 * @property {function} complete - callback function executed when the request is completed
 */


var defaultOptions = {
  baseURL: '',
  common: {
    contentType: '',
    headers: {}
  },
  POST: {
    contentType: '',
    headers: {}
  },
  PUT: {
    contentType: '',
    headers: {}
  },
  PATCH: {
    contentType: '',
    headers: {}
  },
  serializer: serialize
};
/**
 * Deep copy all enumerable own properties from a source objects to a target object.
 * @param {object} target - A target object
 * @param {object} source - A source object
 * @returns {object}
 * @private
 */

function deepAssign(target, source) {
  (0, _forEachOwnProperties["default"])(source, function (value, key) {
    if ((0, _isObject["default"])(value) && !(0, _isFunction["default"])(value)) {
      if (!target.hasOwnProperty(key)) {
        target[key] = {};
      }

      deepAssign(target[key], value);
    } else {
      target[key] = value || target[key];
    }
  });
  return target;
}

function merge(defaults, customs) {
  return deepAssign(deepAssign({}, defaults), customs);
}
/**
 * Combine an absolute URL string (baseURL) and a relative URL string (url).
 * @param {string} baseURL - An absolute URL string
 * @param {string} url - An relative URL string
 * @returns {string}
 * @private
 */


function combineURL(baseURL, url) {
  if (url.slice(0, 4) === 'http') {
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
 * @param {object} defaults - The default options
 * @param {object} customs - The custom options
 * @returns {object}
 */


function getComputedOptions(defaults, customs) {
  var options = merge(defaults, customs);
  var baseURL = options.baseURL,
      url = options.url,
      method = options.method,
      headers = options.headers,
      contentType = options.contentType,
      common = options.common;
  var methodOptions = options[method] || {};
  options.url = combineURL(baseURL, url);
  options.headers = (0, _extend["default"])(common.headers, methodOptions.headers, headers);
  options.contentType = contentType || methodOptions.contentType || common.contentType;
  return options;
}
/**
 * Ajax
 */


var ENCODED_SPACE_REGEXP = /%20/g;
var QS_DELIM_REGEXP = /\?/;

function supportPromise() {
  return typeof Promise !== 'undefined';
}

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

function parseData(data) {
  var result = '';

  try {
    result = JSON.parse(data);
  } catch (_) {
    result = data;
  }

  return result;
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

function handleReadyStateChange(xhr, options) {
  var readyState = xhr.readyState,
      status = xhr.status,
      statusText = xhr.statusText,
      responseText = xhr.responseText;
  var success = options.success,
      resolve = options.resolve,
      error = options.error,
      reject = options.reject,
      complete = options.complete;
  // eslint-disable-next-line eqeqeq

  if (readyState != XMLHttpRequest.DONE) {
    return;
  }

  if (validateStatus(status)) {
    executeCallback([success, resolve], {
      status: status,
      statusText: statusText,
      data: parseData(responseText),
      headers: parseHeaders(xhr.getAllResponseHeaders())
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
  } // overide MIME type (IE11+)


  if (mimeType) {
    xhr.overrideMimeType(mimeType);
  }

  (0, _forEachOwnProperties["default"])(headers, function (value, header) {
    xhr.setRequestHeader(header, value);
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
    body = contentType.indexOf('application/x-www-form-urlencoded') !== -1 ? serializer(params).replace(ENCODED_SPACE_REGEXP, '+') : JSON.stringify(params);
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

  if (supportPromise()) {
    return new Promise(function (resolve, reject) {
      request((0, _extend["default"])(options, {
        resolve: resolve,
        reject: reject
      }));
    });
  }

  return request(options);
}

ajax.defaults = deepAssign({}, defaultOptions);

ajax._reset = function () {
  ajax.defaults = deepAssign({}, defaultOptions);
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

ajax.get = function (url, options) {
  return ajax._request(url, 'GET', options);
};

ajax.post = function (url, options) {
  return ajax._request(url, 'POST', options);
};

ajax.put = function (url, options) {
  return ajax._request(url, 'PUT', options);
}; // eslint-disable-next-line dot-notation


ajax["delete"] = function (url, options) {
  return ajax._request(url, 'DELETE', options);
};

ajax.patch = function (url, options) {
  return ajax._request(url, 'PATCH', options);
};

ajax.options = function (url, options) {
  return ajax._request(url, 'OPTIONS', options);
};

ajax.head = function (url, options) {
  return ajax._request(url, 'HEAD', options);
};

var _default = ajax;
exports["default"] = _default;
module.exports = exports["default"];
