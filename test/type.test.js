describe('type', function() {

    it('isDefined()', function() {
        var o1 = null,
            o2 = 3,
            o3 = 0,
            o4 = {},
            o5 = false,
            o6 = isNaN,
            o7;


        expect(ne.isDefined(o1)).toBe(false);
        expect(ne.isDefined(o2)).toBe(true);
        expect(ne.isDefined(o3)).toBe(true);
        expect(ne.isDefined(o4.test)).toBe(false);
        expect(ne.isDefined(o5)).toBe(true);
        expect(ne.isDefined(o6)).toBe(true);
        expect(ne.isDefined(o7)).toBe(false);
    });

    it('isTruthy()', function() {
        var o1 = 0,
            o2 = false,
            o3 = '',
            o4 = null,
            o5;

        expect(ne.isTruthy(o1)).toBe(true);
        expect(ne.isTruthy(o2)).toBe(false);
        expect(ne.isTruthy(o3)).toBe(true);
        expect(ne.isTruthy(o4)).toBe(false);
        expect(ne.isTruthy(o5)).toBe(false);
    });

    it('isFalsy()', function() {
        var o1 = 0,
            o2 = false,
            o3 = '',
            o4 = null,
            o5;

        expect(ne.isFalsy(o1)).toBe(false);
        expect(ne.isFalsy(o2)).toBe(true);
        expect(ne.isFalsy(o3)).toBe(false);
        expect(ne.isFalsy(o4)).toBe(true);
        expect(ne.isFalsy(o5)).toBe(true);
    });

    it('isArguments()', function() {
        var o1,
            o2 = [];

        (function() {
            o1 = arguments;
        })();

        expect(ne.isArguments(o1)).toBe(true);
        expect(ne.isArguments(o2)).toBe(false);
    });

    it('isArray()', function() {
        var o1 = new Array(3),
            o2 = [],
            o3 = 'array',
            o4 = 3,
            o5 = function() {},
            o6 = new Object(),
            o7 = {};

        expect(ne.isArray(o1)).toBe(true);
        expect(ne.isArray(o2)).toBe(true);
        expect(ne.isArray(o3)).toBe(false);
        expect(ne.isArray(o4)).toBe(false);
        expect(ne.isArray(o5)).toBe(false);
        expect(ne.isArray(o6)).toBe(false);
        expect(ne.isArray(o7)).toBe(false);
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

        expect(ne.isObject(o1)).toBe(true);
        expect(ne.isObject(o2)).toBe(true);
        expect(ne.isObject(o3.test)).toBe(true);
        expect(ne.isObject(o4)).toBe(false);
        expect(ne.isObject(o5)).toBe(true);
        expect(ne.isObject(o6)).toBe(true);
        expect(ne.isObject(o7)).toBe(true);
        expect(ne.isObject(o8)).toBe(true);
        expect(ne.isObject(o9)).toBe(true);
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

        expect(ne.isFunction(o1)).toBe(true);
        expect(ne.isFunction(o2)).toBe(false);
        expect(ne.isFunction(o3)).toBe(false);
        expect(ne.isFunction(o4)).toBe(false);
        expect(ne.isFunction(o5)).toBe(false);
        expect(ne.isFunction(o6)).toBe(false);
        expect(ne.isFunction(o7)).toBe(false);
        expect(ne.isFunction(o8)).toBe(true);
        expect(ne.isFunction(o9)).toBe(true);
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

        expect(ne.isNumber(o1)).toBe(true);
        expect(ne.isNumber(o2)).toBe(true);
        expect(ne.isNumber(o3.test)).toBe(true);
        expect(ne.isNumber(o3)).toBe(false);
        expect(ne.isNumber(o4)).toBe(false);
        expect(ne.isNumber(o5)).toBe(false);
        expect(ne.isNumber(o6)).toBe(false);
        expect(ne.isNumber(o7)).toBe(false);
        expect(ne.isNumber(o8)).toBe(true);
        expect(ne.isNumber(o9)).toBe(true);
        expect(ne.isNumber(o11)).toBe(true);

    });

    it('isString()', function() {
        var o1 = {},
            o2 = new String('a'),
            o3 = 'string',
            o4 = [],
            o5 = '',
            o6 = true,
            o7 = /xyz/g;

        expect(ne.isString(o1)).toBe(false);
        expect(ne.isString(o2)).toBe(true);
        expect(ne.isString(o3)).toBe(true);
        expect(ne.isString(o4)).toBe(false);
        expect(ne.isString(o5)).toBe(true);
        expect(ne.isString(o6)).toBe(false);
        expect(ne.isString(o7)).toBe(false);
    });

    it('isBoolean()', function() {
        var o1 = {},
            o2 = new Boolean('true'),
            o3 = 1,
            o4 = true,
            o5 = false,
            o6 = undefined,
            o7 = null;

        expect(ne.isBoolean(o1)).toBe(false);
        expect(ne.isBoolean(o2)).toBe(true);
        expect(ne.isBoolean(o3)).toBe(false);
        expect(ne.isBoolean(o4)).toBe(true);
        expect(ne.isBoolean(o5)).toBe(true);
        expect(ne.isBoolean(o6)).toBe(false);
        expect(ne.isBoolean(o7)).toBe(false);
    });

    it('isHTMLNode()', function() {

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

        expect(ne.isHTMLNode(el1)).toBe(true);
        expect(ne.isHTMLNode(el2)).toBe(true);
        expect(ne.isHTMLNode(el3)).toBe(true);
        expect(ne.isHTMLNode(el4)).toBe(true);
        expect(ne.isHTMLNode(el5)).toBe(true);
        expect(ne.isHTMLNode(el6)).toBe(true);
        expect(ne.isHTMLNode(el7)).toBe(true);
        expect(ne.isHTMLNode(text)).toBe(true);
        expect(ne.isHTMLNode(myObj)).toBe(false);
        expect(ne.isHTMLNode(testObj)).toBe(false);
    });

    it('isHTMLTag()', function() {
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

        expect(ne.isHTMLTag(el1)).toBe(true);
        expect(ne.isHTMLTag(el2)).toBe(true);
        expect(ne.isHTMLTag(el3)).toBe(true);
        expect(ne.isHTMLTag(el4)).toBe(true);
        expect(ne.isHTMLTag(el5)).toBe(true);
        expect(ne.isHTMLTag(el6)).toBe(true);
        expect(ne.isHTMLTag(el7)).toBe(true);

        expect(ne.isHTMLTag(text)).toBe(false);
        expect(ne.isHTMLTag(myObj)).toBe(false);
        expect(ne.isHTMLTag(testObj)).toBe(false);
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

        expect(ne.isEmpty(o1)).toBe(true);
        expect(ne.isEmpty(o2)).toBe(false);
        expect(ne.isEmpty(o3)).toBe(true);
        expect(ne.isEmpty(o4)).toBe(true);
        expect(ne.isEmpty(o5)).toBe(true);
        expect(ne.isEmpty(o6)).toBe(false);
        expect(ne.isEmpty(o7)).toBe(true);
        expect(ne.isEmpty(o8)).toBe(false);
        expect(ne.isEmpty(o9)).toBe(true);
        expect(ne.isEmpty(o10)).toBe(true);
        expect(ne.isEmpty(o11)).toBe(true);

    });

});
