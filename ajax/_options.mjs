import forEachOwnProperties from '../collection/forEachOwnProperties';
import isFunction from '../type/isFunction';
import isObject from '../type/isObject';

import { serialize } from './_serializer';

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
export const defaultOptions = {
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
  forEachOwnProperties(source, (value, key) => {
    if (isObject(value) && !isFunction(value)) {
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
export function getComputedOptions(defaults, customs) {
  const options = merge(defaults, customs);
  const { baseURL, url, method, headers, contentType, common } = options;
  const methodOptions = options[method] || {};

  options.url = combineURL(baseURL, url);
  options.headers = Object.assign(common.headers, methodOptions.headers, headers);
  options.contentType = contentType || methodOptions.contentType || common.contentType;

  return options;
}
