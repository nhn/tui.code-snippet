describe('type', function() {

    it('isExisty() 값이 존재하는지 확인', function() {
        // null과 undefined이 아닐경우 값이 존재한다고 판단한다.
        var o1 = null,
            o2 = 3,
            o3 = 0,
            o4 = {},
            o5 = false,
            o6 = isNaN,
            o7;


        expect(ne.util.isExisty(o1)).toBe(false);
        expect(ne.util.isExisty(o2)).toBe(true);
        expect(ne.util.isExisty(o3)).toBe(true);
        expect(ne.util.isExisty(o4.test)).toBe(false);
        expect(ne.util.isExisty(o5)).toBe(true);
        expect(ne.util.isExisty(o6)).toBe(true);
        expect(ne.util.isExisty(o7)).toBe(false);
    });

    it('isExisty() second params 객체의 내부에 값이 존재하는지 확인', function() {
        var o1 = { a: 10 },
            o2 = { a: { b: '10' }};

        expect(ne.util.isExisty(o1, 'a')).toBe(true);
        expect(ne.util.isExisty(o2, 'a.b')).toBe(true);
        expect(ne.util.isExisty(o2, ['a','b'])).toBe(true);
        expect(ne.util.isExisty(o2, 'a.c')).toBe(false);
        expect(ne.util.isExisty()).toBeFalsy(false);

    });

    it('isUndefined() 값이 undefined인지 확인', function() {
        var o1 = 0,
            o2 = false,
            o3 = '',
            o4 = null,
            o5;
        expect(ne.util.isUndefined(o1)).toBe(false);
        expect(ne.util.isUndefined(o2)).toBe(false);
        expect(ne.util.isUndefined(o3)).toBe(false);
        expect(ne.util.isUndefined(o4)).toBe(false);
        expect(ne.util.isUndefined(o5)).toBe(true);
    });

    it('isNull() 값이 null인지 확인', function() {
        var o1 = 0,
            o2 = false,
            o3 = '',
            o4 = null,
            o5;
        expect(ne.util.isNull(o1)).toBe(false);
        expect(ne.util.isNull(o2)).toBe(false);
        expect(ne.util.isNull(o3)).toBe(false);
        expect(ne.util.isNull(o4)).toBe(true);
        expect(ne.util.isNull(o5)).toBe(false);
    });

    it('isTruthy() undefined, null, false가 아닌 값인지 확인', function() {
        var o1 = 0,
            o2 = false,
            o3 = '',
            o4 = null,
            o5;

        expect(ne.util.isTruthy(o1)).toBe(true);
        expect(ne.util.isTruthy(o2)).toBe(false);
        expect(ne.util.isTruthy(o3)).toBe(true);
        expect(ne.util.isTruthy(o4)).toBe(false);
        expect(ne.util.isTruthy(o5)).toBe(false);
    });

    it('isFalsy() isTruthy에 해당하지 않는 값인지 확인', function() {
        var o1 = 0,
            o2 = false,
            o3 = '',
            o4 = null,
            o5;

        expect(ne.util.isFalsy(o1)).toBe(false);
        expect(ne.util.isFalsy(o2)).toBe(true);
        expect(ne.util.isFalsy(o3)).toBe(false);
        expect(ne.util.isFalsy(o4)).toBe(true);
        expect(ne.util.isFalsy(o5)).toBe(true);
    });

    it('isArguments()', function() {
        var o1,
            o2 = [];

        (function() {
            o1 = arguments;
        })();

        expect(ne.util.isArguments(o1)).toBe(true);
        expect(ne.util.isArguments(o2)).toBe(false);
    });

    it('isArray()', function() {
        var o1 = new Array(3),
            o2 = [],
            o3 = 'array',
            o4 = 3,
            o5 = function() {},
            o6 = new Object(),
            o7 = {};

        expect(ne.util.isArray(o1)).toBe(true);
        expect(ne.util.isArray(o2)).toBe(true);
        expect(ne.util.isArray(o3)).toBe(false);
        expect(ne.util.isArray(o4)).toBe(false);
        expect(ne.util.isArray(o5)).toBe(false);
        expect(ne.util.isArray(o6)).toBe(false);
        expect(ne.util.isArray(o7)).toBe(false);
    });

    it('isObject()', function() {
        var o1 = new Object(),
            o2 = {},
            o3 = { test: {} },
            o4 = 'a',
            o5 = function() {},
            o6 = new o5(),
            o7 = /xyz/g,
            o8 = new Date(),
            o9 = new Function('x', 'y', 'return x + y');

        expect(ne.util.isObject(o1)).toBe(true);
        expect(ne.util.isObject(o2)).toBe(true);
        expect(ne.util.isObject(o3.test)).toBe(true);
        expect(ne.util.isObject(o4)).toBe(false);
        expect(ne.util.isObject(o5)).toBe(true);
        expect(ne.util.isObject(o6)).toBe(true);
        expect(ne.util.isObject(o7)).toBe(true);
        expect(ne.util.isObject(o8)).toBe(true);
        expect(ne.util.isObject(o9)).toBe(true);
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
            o9 = function test() {};

        expect(ne.util.isFunction(o1)).toBe(true);
        expect(ne.util.isFunction(o2)).toBe(false);
        expect(ne.util.isFunction(o3)).toBe(false);
        expect(ne.util.isFunction(o4)).toBe(false);
        expect(ne.util.isFunction(o5)).toBe(false);
        expect(ne.util.isFunction(o6)).toBe(false);
        expect(ne.util.isFunction(o7)).toBe(false);
        expect(ne.util.isFunction(o8)).toBe(true);
        expect(ne.util.isFunction(o9)).toBe(true);
    });

    it('isNumber()', function() {
        var o1 = 1,
            o2 = new Number(2),
            o3 = { test: 1 },
            o4 = [],
            o5 = 'string',
            o6 = true,
            o7 = /xyz/g,
            o8 = 4 + 5,
            o9 = parseFloat('12.5'),
            o10 = 0x15,
            o11 = parseInt('00101', 2);

        expect(ne.util.isNumber(o1)).toBe(true);
        expect(ne.util.isNumber(o2)).toBe(true);
        expect(ne.util.isNumber(o3.test)).toBe(true);
        expect(ne.util.isNumber(o3)).toBe(false);
        expect(ne.util.isNumber(o4)).toBe(false);
        expect(ne.util.isNumber(o5)).toBe(false);
        expect(ne.util.isNumber(o6)).toBe(false);
        expect(ne.util.isNumber(o7)).toBe(false);
        expect(ne.util.isNumber(o8)).toBe(true);
        expect(ne.util.isNumber(o9)).toBe(true);
        expect(ne.util.isNumber(o11)).toBe(true);

    });

    it('isString()', function() {
        var o1 = {},
            o2 = new String('a'),
            o3 = 'string',
            o4 = [],
            o5 = '',
            o6 = true,
            o7 = /xyz/g;

        expect(ne.util.isString(o1)).toBe(false);
        expect(ne.util.isString(o2)).toBe(true);
        expect(ne.util.isString(o3)).toBe(true);
        expect(ne.util.isString(o4)).toBe(false);
        expect(ne.util.isString(o5)).toBe(true);
        expect(ne.util.isString(o6)).toBe(false);
        expect(ne.util.isString(o7)).toBe(false);
    });

    it('isBoolean()', function() {
        var o1 = {},
            o2 = new Boolean('true'),
            o3 = 1,
            o4 = true,
            o5 = false,
            o6 = undefined,
            o7 = null;

        expect(ne.util.isBoolean(o1)).toBe(false);
        expect(ne.util.isBoolean(o2)).toBe(true);
        expect(ne.util.isBoolean(o3)).toBe(false);
        expect(ne.util.isBoolean(o4)).toBe(true);
        expect(ne.util.isBoolean(o5)).toBe(true);
        expect(ne.util.isBoolean(o6)).toBe(false);
        expect(ne.util.isBoolean(o7)).toBe(false);
    });

    it('isHTMLNode() DOM인지 확인', function() {

        var text = document.createTextNode("Hello World"),
            el1 = document.createElement("H1"),
            el2 = document.createElement("A"),
            el3 = document.createElement("SPAN"),
            el4 = document.createElement("P"),
            el5 = document.createElement("PRE"),
            el6 = document.createElement("DIV"),
            el7 = document.createElement("INPUT"),
            myObj = 3,
            testObj = {};

        expect(ne.util.isHTMLNode(el1)).toBe(true);
        expect(ne.util.isHTMLNode(el2)).toBe(true);
        expect(ne.util.isHTMLNode(el3)).toBe(true);
        expect(ne.util.isHTMLNode(el4)).toBe(true);
        expect(ne.util.isHTMLNode(el5)).toBe(true);
        expect(ne.util.isHTMLNode(el6)).toBe(true);
        expect(ne.util.isHTMLNode(el7)).toBe(true);
        expect(ne.util.isHTMLNode(text)).toBe(true);
        expect(ne.util.isHTMLNode(myObj)).toBe(false);
        expect(ne.util.isHTMLNode(testObj)).toBe(false);
    });

    it('isHTMLTag() HTML element 인지 확인', function() {
        var text = document.createTextNode("Hello World"),
            el1 = document.createElement("H1"),
            el2 = document.createElement("A"),
            el3 = document.createElement("SPAN"),
            el4 = document.createElement("P"),
            el5 = document.createElement("PRE"),
            el6 = document.createElement("DIV"),
            el7 = document.createElement("INPUT"),
            myObj = 3,
            testObj = {};

        expect(ne.util.isHTMLTag(el1)).toBe(true);
        expect(ne.util.isHTMLTag(el2)).toBe(true);
        expect(ne.util.isHTMLTag(el3)).toBe(true);
        expect(ne.util.isHTMLTag(el4)).toBe(true);
        expect(ne.util.isHTMLTag(el5)).toBe(true);
        expect(ne.util.isHTMLTag(el6)).toBe(true);
        expect(ne.util.isHTMLTag(el7)).toBe(true);

        expect(ne.util.isHTMLTag(text)).toBe(false);
        expect(ne.util.isHTMLTag(myObj)).toBe(false);
        expect(ne.util.isHTMLTag(testObj)).toBe(false);
    });

    it('isEmpty()', function() {
        var o1 = {},
            o2 = { test: 1},
            o3 = new Object(),
            o4 = [],
            o5 = new Array(),
            o6 = [1, 3],
            o7 = function() {},
            o8,
            o9 = void 0,
            o10 = null,
            o11;

        (function() {
            o8 = arguments;
        })(2, 4);

        (function() {
            o11 = arguments;
        })();

        expect(ne.util.isEmpty(o1)).toBe(true);
        expect(ne.util.isEmpty(o2)).toBe(false);
        expect(ne.util.isEmpty(o3)).toBe(true);
        expect(ne.util.isEmpty(o4)).toBe(true);
        expect(ne.util.isEmpty(o5)).toBe(true);
        expect(ne.util.isEmpty(o6)).toBe(false);
        expect(ne.util.isEmpty(o7)).toBe(true);
        expect(ne.util.isEmpty(o8)).toBe(false);
        expect(ne.util.isEmpty(o9)).toBe(true);
        expect(ne.util.isEmpty(o10)).toBe(true);
        expect(ne.util.isEmpty(o11)).toBe(true);

    });

});
