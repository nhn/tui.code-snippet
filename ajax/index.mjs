import forEachArray from '../collection/forEachArray';
import forEachOwnProperties from '../collection/forEachOwnProperties';
import extend from '../object/extend';
import isArray from '../type/isArray';
import isEmpty from '../type/isEmpty';
import isNull from '../type/isNull';
import isObject from '../type/isObject';
import isUndefined from '../type/isUndefined';

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
  return `${encodeURIComponent(key)}=${encodeURIComponent(
    isNull(value) || isUndefined(value) ? '' : value
  )}`;
}

function serializeParams(key, value, serializedList) {
  if (isArray(value)) {
    forEachArray(value, (arrVal, index) => {
      serializeParams(`${key}[${isObject(arrVal) ? index : ''}]`, arrVal, serializedList);
    });
  } else if (isObject(value)) {
    forEachOwnProperties(value, (objValue, objKey) => {
      serializeParams(`${key}[${objKey}]`, objValue, serializedList);
    });
  } else {
    serializedList.push(encodePairs(key, value));
  }
}

function serialize(params) {
  if (!params || isEmpty(params)) {
    return '';
  }
  const serializedList = [];
  forEachOwnProperties(params, (value, key) => {
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
const getDefaultOptions = () => ({
  baseURL: '',
  headers: {
    common: {},
    get: {},
    post: {},
    put: {},
    delete: {},
    patch: {},
    options: {},
    head: {}
  },
  serializer: serialize
});

const HTTP_PROTOCOL_REGEXP = /^(http|https):\/\//;

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
  const { baseURL } = defaultOptions;
  const { url, contentType, method, params, withCredentials, mimeType } = customOptions;

  const options = {
    url: combineURL(baseURL, url),
    method,
    params,
    headers: extend(
      defaultOptions.headers.common,
      defaultOptions.headers[method.toLowerCase()],
      customOptions.headers
    ),
    serializer: customOptions.serializer || defaultOptions.serializer || serialize,
    beforeRequest: [defaultOptions.beforeRequest, customOptions.beforeRequest],
    success: [defaultOptions.success, customOptions.success],
    error: [defaultOptions.error, customOptions.error],
    complete: [defaultOptions.complete, customOptions.complete],
    withCredentials,
    mimeType
  };

  options.contentType = contentType || options.headers['Content-Type'];
  delete options.headers['Content-Type'];

  return options;
}

const ENCODED_SPACE_REGEXP = /%20/g;
const QS_DELIM_REGEXP = /\?/;

function validateStatus(status) {
  return status >= 200 && status < 300;
}

function hasRequestBody(method) {
  return /^(?:POST|PUT|PATCH)$/.test(method.toUpperCase());
}

function executeCallback(callback, param) {
  if (isArray(callback)) {
    forEachArray(callback, fn => executeCallback(fn, param));
  } else if (callback) {
    callback(param);
  }
}

function parseHeaders(text) {
  const headers = {};

  forEachArray(text.split('\r\n'), header => {
    const [key, value] = header.split(': ');

    if (key !== '' && !isUndefined(value)) {
      headers[key] = value;
    }
  });

  return headers;
}

function parseJSONData(data) {
  let result = '';
  try {
    result = JSON.parse(data);
  } catch (_) {
    result = data;
  }

  return result;
}

function handleReadyStateChange(xhr, options) {
  const { readyState, status, statusText, responseText } = xhr;
  const { success, resolve, error, reject, complete } = options;

  // eslint-disable-next-line eqeqeq
  if (readyState != XMLHttpRequest.DONE) {
    return;
  }

  if (validateStatus(status)) {
    const headers = parseHeaders(xhr.getAllResponseHeaders());
    const contentType = headers['Content-Type'];
    let data = responseText;

    if (contentType && contentType.indexOf('application/json') > -1) {
      data = parseJSONData(data);
    }

    executeCallback([success, resolve], { status, statusText, data, headers });
  } else {
    executeCallback([error, reject], { status, statusText });
  }

  executeCallback(complete);
}

function open(xhr, options) {
  const { url, method, serializer, params } = options;

  let requestUrl = url;

  if (!hasRequestBody(method) && params) {
    // serialize query string
    const qs = (QS_DELIM_REGEXP.test(url) ? '&' : '?') + serializer(params);
    requestUrl = `${url}${qs}`;
  }

  xhr.open(method, requestUrl);
}

function applyConfig(xhr, options) {
  const { method, contentType, mimeType, headers, withCredentials = false } = options;

  // set withCredentials (IE10+)
  if (withCredentials) {
    xhr.withCredentials = withCredentials;
  }

  // override MIME type (IE11+)
  if (mimeType) {
    xhr.overrideMimeType(mimeType);
  }

  forEachOwnProperties(headers, (value, header) => {
    if (!isObject(value)) {
      xhr.setRequestHeader(header, value);
    }
  });

  if (hasRequestBody(method)) {
    xhr.setRequestHeader('Content-Type', `${contentType}; charset=UTF-8`);
  }

  // set 'x-requested-with' header to prevent CSRF in old browser
  xhr.setRequestHeader('x-requested-with', 'XMLHttpRequest');
}

function send(xhr, options) {
  const {
    method,
    serializer,
    beforeRequest,
    params = {},
    contentType = 'application/x-www-form-urlencoded'
  } = options;

  let body = null;

  if (hasRequestBody(method)) {
    // The space character '%20' is replaced to '+', because application/x-www-form-urlencoded follows rfc-1866
    body =
      contentType.indexOf('application/x-www-form-urlencoded') > -1
        ? serializer(params).replace(ENCODED_SPACE_REGEXP, '+')
        : JSON.stringify(params);
  }

  xhr.onreadystatechange = () => handleReadyStateChange(xhr, options);

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
  const xhr = new XMLHttpRequest();
  const request = opts => forEachArray([open, applyConfig, send], fn => fn(xhr, opts));

  options = getComputedOptions(ajax.defaults, options);

  if (typeof Promise !== 'undefined') {
    return new Promise((resolve, reject) => {
      request(extend(options, { resolve, reject }));
    });
  }

  request(options);

  return null;
}

ajax.defaults = getDefaultOptions();

ajax._reset = function() {
  ajax.defaults = getDefaultOptions();
};

ajax._request = function(url, method, options = {}) {
  return ajax(extend(options, { url, method }));
};

forEachArray(['get', 'post', 'put', 'delete', 'patch', 'options', 'head'], type => {
  ajax[type] = (url, options) => ajax._request(url, type.toUpperCase(), options);
});

export default ajax;
