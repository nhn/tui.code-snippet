import forEachOwnProperties from '../collection/forEachOwnProperties';

import { defaultOptions, getComputedOptions } from './_options';

/**
 * @module ajax
 */

const ENCODED_SPACE_REGEXP = /%20/g;
const QS_DELIM_REGEXP = /\?/;

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
  if (Array.isArray(callback)) {
    callback.forEach(fn => executeCallback(fn, param));
  } else if (callback) {
    callback(param);
  }
}

function parseData(data) {
  let result = '';
  try {
    result = JSON.parse(data);
  } catch (_) {
    result = data;
  }

  return result;
}

function parseHeaders(text) {
  return text.split('\r\n').reduce((acc, current) => {
    if (current.length > 0) {
      const [header, value] = current.split(': ');
      acc[header] = value;
    }

    return acc;
  }, {});
}

function handleReadyStateChange(xhr, options) {
  const { readyState, status, statusText, responseText } = xhr;
  const { success, resolve, error, reject, complete } = options;

  // TODO: check whether XMLHttpRequest.DONE(=4) works well in IE8
  // eslint-disable-next-line eqeqeq
  if (readyState != XMLHttpRequest.DONE) {
    return;
  }

  if (validateStatus(status)) {
    executeCallback([success, resolve], {
      status,
      statusText,
      data: parseData(responseText),
      headers: parseHeaders(xhr.getAllResponseHeaders())
    });
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

  // overide MIME type (IE11+)
  if (mimeType) {
    xhr.overrideMimeType(mimeType);
  }

  forEachOwnProperties(headers, (value, header) => {
    xhr.setRequestHeader(header, value);
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
      contentType.indexOf('application/x-www-form-urlencoded') !== -1
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
  const request = opts => [open, applyConfig, send].forEach(fn => fn(xhr, opts));

  options = getComputedOptions(ajax.defaults, options);

  if (supportPromise()) {
    return new Promise((resolve, reject) => {
      request(Object.assign(options, { resolve, reject }));
    });
  }

  return request(options);
}

ajax.defaults = defaultOptions;

export default ajax;
