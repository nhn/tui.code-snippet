import isObject from '../type/isObject';
import isUndefined from '../type/isUndefined';
import isNull from '../type/isNull';
import isEmpty from '../type/isEmpty';

/**
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
  if (Array.isArray(value)) {
    value.forEach((arrVal, index) => {
      serializeParams(`${key}[${isObject(arrVal) ? index : ''}]`, arrVal, serializedList);
    });
  } else if (isObject(value)) {
    Object.keys(value).forEach(objKey => {
      serializeParams(`${key}[${objKey}]`, value[objKey], serializedList);
    });
  } else {
    serializedList.push(encodePairs(key, value));
  }
}

export function serialize(params) {
  if (!params || isEmpty(params)) {
    return '';
  }
  const serializedList = [];
  Object.keys(params).forEach(key => {
    serializeParams(key, params[key], serializedList);
  });

  return serializedList.join('&');
}
