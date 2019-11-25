/* eslint-disable no-undef-init */
/* eslint-disable no-undefined */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-new-func */
/* eslint-disable no-new-object */

'use strict';

var isExisty = require('../type/isExisty');
var isUndefined = require('../type/isUndefined');
var isNull = require('../type/isNull');
var isTruthy = require('../type/isTruthy');
var isFalsy = require('../type/isFalsy');
var isArguments = require('../type/isArguments');
var isArray = require('../type/isArray');
var isObject = require('../type/isObject');
var isFunction = require('../type/isFunction');
var isNumber = require('../type/isNumber');
var isString = require('../type/isString');
var isBoolean = require('../type/isBoolean');
var isArraySafe = require('../type/isArraySafe');
var isFunctionSafe = require('../type/isFunctionSafe');
var isNumberSafe = require('../type/isNumberSafe');
var isStringSafe = require('../type/isStringSafe');
var isBooleanSafe = require('../type/isBooleanSafe');
var isHTMLNode = require('../type/isHTMLNode');
var isHTMLTag = require('../type/isHTMLTag');
var isEmpty = require('../type/isEmpty');
var isNotEmpty = require('../type/isNotEmpty');
var isDate = require('../type/isDate');
var isDateSafe = require('../type/isDateSafe');

describe('type', function() {
  it('isExisty()', function() {
    var o1 = null,
      o2 = 3,
      o3 = 0,
      o4 = {},
      o5 = false,
      o6 = isNaN,
      o7,
      o8 = '';

    expect(isExisty(o1)).toBe(false);
    expect(isExisty(o2)).toBe(true);
    expect(isExisty(o3)).toBe(true);
    expect(isExisty(o4.test)).toBe(false);
    expect(isExisty(o5)).toBe(true);
    expect(isExisty(o6)).toBe(true);
    expect(isExisty(o7)).toBe(false);
    expect(isExisty(o8)).toBe(true);
  });

  it('isUndefined()', function() {
    var o1 = 0,
      o2 = false,
      o3 = '',
      o4 = null,
      o5;
    expect(isUndefined(o1)).toBe(false);
    expect(isUndefined(o2)).toBe(false);
    expect(isUndefined(o3)).toBe(false);
    expect(isUndefined(o4)).toBe(false);
    expect(isUndefined(o5)).toBe(true);
  });

  it('isNull()', function() {
    var o1 = 0,
      o2 = false,
      o3 = '',
      o4 = null,
      o5;
    expect(isNull(o1)).toBe(false);
    expect(isNull(o2)).toBe(false);
    expect(isNull(o3)).toBe(false);
    expect(isNull(o4)).toBe(true);
    expect(isNull(o5)).toBe(false);
  });

  it('isTruthy()', function() {
    var o1 = 0,
      o2 = false,
      o3 = '',
      o4 = null,
      o5;

    expect(isTruthy(o1)).toBe(true);
    expect(isTruthy(o2)).toBe(false);
    expect(isTruthy(o3)).toBe(true);
    expect(isTruthy(o4)).toBe(false);
    expect(isTruthy(o5)).toBe(false);
  });

  it('isFalsy()', function() {
    var o1 = 0,
      o2 = false,
      o3 = '',
      o4 = null,
      o5;

    expect(isFalsy(o1)).toBe(false);
    expect(isFalsy(o2)).toBe(true);
    expect(isFalsy(o3)).toBe(false);
    expect(isFalsy(o4)).toBe(true);
    expect(isFalsy(o5)).toBe(true);
  });

  it('isArguments()', function() {
    var o1 = arguments,
      o2 = [];

    expect(isArguments(o1)).toBe(true);
    expect(isArguments(o2)).toBe(false);
  });

  it('isArray()', function() {
    var o1 = new Array(3),
      o2 = [],
      o3 = 'array',
      o4 = 3,
      o5 = function() {},
      o6 = new Object(),
      o7 = {};

    expect(isArray(o1)).toBe(true);
    expect(isArray(o2)).toBe(true);
    expect(isArray(o3)).toBe(false);
    expect(isArray(o4)).toBe(false);
    expect(isArray(o5)).toBe(false);
    expect(isArray(o6)).toBe(false);
    expect(isArray(o7)).toBe(false);
  });

  it('isObject()', function() {
    var o1 = new Object(),
      o2 = {},
      o3 = {test: {}},
      o4 = 'a',
      O5 = function() {},
      o6 = new O5(),
      o7 = /xyz/g,
      o8 = new Date(),
      o9 = new Function('x', 'y', 'return x + y');

    expect(isObject(o1)).toBe(true);
    expect(isObject(o2)).toBe(true);
    expect(isObject(o3.test)).toBe(true);
    expect(isObject(o4)).toBe(false);
    expect(isObject(O5)).toBe(true);
    expect(isObject(o6)).toBe(true);
    expect(isObject(o7)).toBe(true);
    expect(isObject(o8)).toBe(true);
    expect(isObject(o9)).toBe(true);
  });

  it('isFunction()', function() {
    var o1 = function() {},
      o2 = {},
      o3 = '',
      o4 = [],
      o5 = 1,
      o6 = true,
      o7 = /xyz/g,
      o8 = new Function(),
      o9 = function o9() {};

    expect(isFunction(o1)).toBe(true);
    expect(isFunction(o2)).toBe(false);
    expect(isFunction(o3)).toBe(false);
    expect(isFunction(o4)).toBe(false);
    expect(isFunction(o5)).toBe(false);
    expect(isFunction(o6)).toBe(false);
    expect(isFunction(o7)).toBe(false);
    expect(isFunction(o8)).toBe(true);
    expect(isFunction(o9)).toBe(true);
  });

  it('isNumber()', function() {
    var o1 = 1,
      o2 = new Number(2),
      o3 = {test: 1},
      o4 = [],
      o5 = 'string',
      o6 = true,
      o7 = /xyz/g,
      o8 = 4 + 5,
      o9 = parseFloat('12.5'),
      o10 = 0x15,
      o11 = parseInt('00101', 2);

    expect(isNumber(o1)).toBe(true);
    expect(isNumber(o2)).toBe(true);
    expect(isNumber(o3.test)).toBe(true);
    expect(isNumber(o3)).toBe(false);
    expect(isNumber(o4)).toBe(false);
    expect(isNumber(o5)).toBe(false);
    expect(isNumber(o6)).toBe(false);
    expect(isNumber(o7)).toBe(false);
    expect(isNumber(o8)).toBe(true);
    expect(isNumber(o9)).toBe(true);
    expect(isNumber(o10)).toBe(true);
    expect(isNumber(o11)).toBe(true);
  });

  it('isString()', function() {
    var o1 = {},
      o2 = new String('a'),
      o3 = 'string',
      o4 = [],
      o5 = '',
      o6 = true,
      o7 = /xyz/g;

    expect(isString(o1)).toBe(false);
    expect(isString(o2)).toBe(true);
    expect(isString(o3)).toBe(true);
    expect(isString(o4)).toBe(false);
    expect(isString(o5)).toBe(true);
    expect(isString(o6)).toBe(false);
    expect(isString(o7)).toBe(false);
  });

  it('isBoolean()', function() {
    var o1 = {},
      o2 = new Boolean('true'),
      o3 = 1,
      o4 = true,
      o5 = false,
      o6 = undefined,
      o7 = null;

    expect(isBoolean(o1)).toBe(false);
    expect(isBoolean(o2)).toBe(true);
    expect(isBoolean(o3)).toBe(false);
    expect(isBoolean(o4)).toBe(true);
    expect(isBoolean(o5)).toBe(true);
    expect(isBoolean(o6)).toBe(false);
    expect(isBoolean(o7)).toBe(false);
  });

  it('isArraySafe()', function() {
    var o1 = new Array(3),
      o2 = [],
      o3 = 'array',
      o4 = 3,
      o5 = function() {},
      o6 = new Object(),
      o7 = {};

    expect(isArraySafe(o1)).toBe(true);
    expect(isArraySafe(o2)).toBe(true);
    expect(isArraySafe(o3)).toBe(false);
    expect(isArraySafe(o4)).toBe(false);
    expect(isArraySafe(o5)).toBe(false);
    expect(isArraySafe(o6)).toBe(false);
    expect(isArraySafe(o7)).toBe(false);
  });

  it('isFunctionSafe()', function() {
    var o1 = function() {},
      o2 = {},
      o3 = '',
      o4 = [],
      o5 = 1,
      o6 = true,
      o7 = /xyz/g,
      o8 = new Function(),
      o9 = function o9() {};

    expect(isFunctionSafe(o1)).toBe(true);
    expect(isFunctionSafe(o2)).toBe(false);
    expect(isFunctionSafe(o3)).toBe(false);
    expect(isFunctionSafe(o4)).toBe(false);
    expect(isFunctionSafe(o5)).toBe(false);
    expect(isFunctionSafe(o6)).toBe(false);
    expect(isFunctionSafe(o7)).toBe(false);
    expect(isFunctionSafe(o8)).toBe(true);
    expect(isFunctionSafe(o9)).toBe(true);
  });

  it('isNumberSafe()', function() {
    var o1 = 1,
      o2 = new Number(2),
      o3 = {test: 1},
      o4 = [],
      o5 = 'string',
      o6 = true,
      o7 = /xyz/g,
      o8 = 4 + 5,
      o9 = parseFloat('12.5'),
      o10 = 0x15,
      o11 = parseInt('00101', 2);

    expect(isNumberSafe(o1)).toBe(true);
    expect(isNumberSafe(o2)).toBe(true);
    expect(isNumberSafe(o3.test)).toBe(true);
    expect(isNumberSafe(o3)).toBe(false);
    expect(isNumberSafe(o4)).toBe(false);
    expect(isNumberSafe(o5)).toBe(false);
    expect(isNumberSafe(o6)).toBe(false);
    expect(isNumberSafe(o7)).toBe(false);
    expect(isNumberSafe(o8)).toBe(true);
    expect(isNumberSafe(o9)).toBe(true);
    expect(isNumberSafe(o10)).toBe(true);
    expect(isNumberSafe(o11)).toBe(true);
  });

  it('isStringSafe()', function() {
    var o1 = {},
      o2 = new String('a'),
      o3 = 'string',
      o4 = [],
      o5 = '',
      o6 = true,
      o7 = /xyz/g;

    expect(isStringSafe(o1)).toBe(false);
    expect(isStringSafe(o2)).toBe(true);
    expect(isStringSafe(o3)).toBe(true);
    expect(isStringSafe(o4)).toBe(false);
    expect(isStringSafe(o5)).toBe(true);
    expect(isStringSafe(o6)).toBe(false);
    expect(isStringSafe(o7)).toBe(false);
  });

  it('isBooleanSafe()', function() {
    var o1 = {},
      o2 = new Boolean('true'),
      o3 = 1,
      o4 = true,
      o5 = false,
      o6 = undefined,
      o7 = null;

    expect(isBooleanSafe(o1)).toBe(false);
    expect(isBooleanSafe(o2)).toBe(true);
    expect(isBooleanSafe(o3)).toBe(false);
    expect(isBooleanSafe(o4)).toBe(true);
    expect(isBooleanSafe(o5)).toBe(true);
    expect(isBooleanSafe(o6)).toBe(false);
    expect(isBooleanSafe(o7)).toBe(false);
  });

  it('isHTMLNode() DOM인지 확인', function() {
    var text = document.createTextNode('Hello World'),
      el1 = document.createElement('H1'),
      el2 = document.createElement('A'),
      el3 = document.createElement('SPAN'),
      el4 = document.createElement('P'),
      el5 = document.createElement('PRE'),
      el6 = document.createElement('DIV'),
      el7 = document.createElement('INPUT'),
      myObj = 3,
      testObj = {};

    expect(isHTMLNode(el1)).toBe(true);
    expect(isHTMLNode(el2)).toBe(true);
    expect(isHTMLNode(el3)).toBe(true);
    expect(isHTMLNode(el4)).toBe(true);
    expect(isHTMLNode(el5)).toBe(true);
    expect(isHTMLNode(el6)).toBe(true);
    expect(isHTMLNode(el7)).toBe(true);
    expect(isHTMLNode(text)).toBe(true);
    expect(isHTMLNode(myObj)).toBe(false);
    expect(isHTMLNode(testObj)).toBe(false);
  });

  it('isHTMLTag() HTML element 인지 확인', function() {
    var text = document.createTextNode('Hello World'),
      el1 = document.createElement('H1'),
      el2 = document.createElement('A'),
      el3 = document.createElement('SPAN'),
      el4 = document.createElement('P'),
      el5 = document.createElement('PRE'),
      el6 = document.createElement('DIV'),
      el7 = document.createElement('INPUT'),
      myObj = 3,
      testObj = {};

    expect(isHTMLTag(el1)).toBe(true);
    expect(isHTMLTag(el2)).toBe(true);
    expect(isHTMLTag(el3)).toBe(true);
    expect(isHTMLTag(el4)).toBe(true);
    expect(isHTMLTag(el5)).toBe(true);
    expect(isHTMLTag(el6)).toBe(true);
    expect(isHTMLTag(el7)).toBe(true);

    expect(isHTMLTag(text)).toBe(false);
    expect(isHTMLTag(myObj)).toBe(false);
    expect(isHTMLTag(testObj)).toBe(false);
  });

  it('isEmpty()', function() {
    var o1 = {},
      o2 = {test: 1},
      o3 = new Object(),
      o4 = [],
      o5 = new Array(),
      o6 = [1, 3],
      o7 = function() {},
      o8,
      o9 = undefined,
      o10 = null,
      o11;

    (function() {
      o8 = arguments;
    })(2, 4);

    (function() {
      o11 = arguments;
    })();

    expect(isEmpty(o1)).toBe(true);
    expect(isEmpty(o2)).toBe(false);
    expect(isEmpty(o3)).toBe(true);
    expect(isEmpty(o4)).toBe(true);
    expect(isEmpty(o5)).toBe(true);
    expect(isEmpty(o6)).toBe(false);
    expect(isEmpty(o7)).toBe(true);
    expect(isEmpty(o8)).toBe(false);
    expect(isEmpty(o9)).toBe(true);
    expect(isEmpty(o10)).toBe(true);
    expect(isEmpty(o11)).toBe(true);
  });

  it('isNotEmpty()', function() {
    var o1 = {},
      o2 = {test: 1},
      o3 = new Object(),
      o4 = [],
      o5 = new Array(),
      o6 = [1, 3],
      o7 = function() {},
      o8,
      o9 = undefined,
      o10 = null,
      o11;

    (function() {
      o8 = arguments;
    })(2, 4);

    (function() {
      o11 = arguments;
    })();

    expect(isNotEmpty(o1)).toBe(false);
    expect(isNotEmpty(o2)).toBe(true);
    expect(isNotEmpty(o3)).toBe(false);
    expect(isNotEmpty(o4)).toBe(false);
    expect(isNotEmpty(o5)).toBe(false);
    expect(isNotEmpty(o6)).toBe(true);
    expect(isNotEmpty(o7)).toBe(false);
    expect(isNotEmpty(o8)).toBe(true);
    expect(isNotEmpty(o9)).toBe(false);
    expect(isNotEmpty(o10)).toBe(false);
    expect(isNotEmpty(o11)).toBe(false);
  });

  it('isDate()', function() {
    var o1 = 20190830,
      o2 = '2019-08-30',
      o3 = new Date(),
      o4 = new Date(2019, 8, 30),
      o5 = {};

    expect(isDate(o1)).toBe(false);
    expect(isDate(o2)).toBe(false);
    expect(isDate(o3)).toBe(true);
    expect(isDate(o4)).toBe(true);
    expect(isDate(o5)).toBe(false);
  });

  it('isDateSafe()', function() {
    var o1 = 20190830,
      o2 = '2019-08-30',
      o3 = new Date(),
      o4 = new Date(2019, 8, 30),
      o5 = {};

    expect(isDateSafe(o1)).toBe(false);
    expect(isDateSafe(o2)).toBe(false);
    expect(isDateSafe(o3)).toBe(true);
    expect(isDateSafe(o4)).toBe(true);
    expect(isDateSafe(o5)).toBe(false);
  });
});
