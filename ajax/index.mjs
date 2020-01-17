import forEachOwnProperties from '../collection/forEachOwnProperties';
import isFunction from '../type/isFunction';

import { serialize } from './_serializer';

/**
 * @module ajax
 */

const ENCODED_SPACE_REGEXP = /%20/g;
const QS_DELIM_REGEXP = /\?/;

function validateStatus(status) {
  return status >= 200 && status < 300;
}

function hasRequestBody(method) {
  return /^(?:POST|PUT|PATCH)$/.test(method.toUpperCase());
}

function getSerialized(params, serializer) {
  return isFunction(serializer) ? serializer(params) : serialize(params);
}

function handleReadyStateChange(xhr, options) {
  const { success, error, complete } = options;

  // TODO: check whether XMLHttpRequest.DONE(=4) works well in IE8
  // eslint-disable-next-line eqeqeq
  if (xhr.readyState != XMLHttpRequest.DONE) {
    return;
  }

  if (validateStatus(xhr.status)) {
    // TODO: response wrapper
    // success(xhr.responseText);
  } else {
    // error(xhr.statusText);
  }
  // complete();
}

function open(xhr, options) {
  const { url, method, serializer, params = {} } = options;

  let requestUrl = url;

  if (!hasRequestBody(method)) {
    // serialize query string
    const qs = (QS_DELIM_REGEXP.test(url) ? '&' : '?') + getSerialized(params, serializer);
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

  // set user defined request headers
  forEachOwnProperties(headers, (value, header) => {
    xhr.setRequestHeader(header, value);
  });

  // set 'Content-Type' when request has body
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
        ? getSerialized(params, serializer).replace(ENCODED_SPACE_REGEXP, '+')
        : JSON.stringify(params);
  }

  xhr.onreadystatechange = () => handleReadyStateChange(xhr, options);

  // beforeRequest();
  xhr.send(body);
}

/**
 * A module for the Ajax request
 * @param {object} options Options for the Ajax request
 * @memberof module:ajax
 */
export default function ajax(options) {
  const xhr = new XMLHttpRequest();
  const request = opts => [open, applyConfig, send].forEach(fn => fn(xhr, opts));

  return request(options);
}
