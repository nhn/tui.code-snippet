describe('type', function() {

    it('isDefined()', function() {
        var o1 = null,
            o2 = 3,
            o3 = 0,
            o4 = {};

        expect(ne.isDefined(o1)).toBeFalsy();
        expect(ne.isDefined(o2)).toBeTruthy();
        expect(ne.isDefined(o3)).toBeTruthy();
        expect(ne.isDefined(o3.test)).toBeFalsy();

    });

    it('isTruthy()', function() {
        var o1 = 0,
            o2 = false,
            o3 = '';

        expect(ne.isTruthy(o1)).toBeTruthy();
        expect(ne.isTruthy(o2)).toBeFalsy();
        expect(ne.isTruthy(o3)).toBeTruthy();

    });

    it('isArray()', function() {
        var o1 = new Array(3),
            o2 = [],
            o3 = 'array',
            o4 = 3;

        expect(ne.isArray(o1)).toBeTruthy();
        expect(ne.isArray(o2)).toBeTruthy();
        expect(ne.isArray(o3)).toBeFalsy();
        expect(ne.isArray(o4)).toBeFalsy();

    });

    it('isObject()', function() {
        var o1 = new Object(),
            o2 = {},
            o3 = { test: {} },
            o4 = 'a',
            o5 = function() {},
            o6 = new o5(),
            o7 = /xyz/g;

        expect(ne.isObject(o1)).toBeTruthy();
        expect(ne.isObject(o2)).toBeTruthy();
        expect(ne.isObject(o3.test)).toBeTruthy();
        expect(ne.isObject(o4)).toBeFalsy();
        expect(ne.isObject(o5)).toBeTruthy();
        expect(ne.isObject(o6)).toBeTruthy();
        expect(ne.isObject(o7)).toBeTruthy();
    });

    it('isFunction()', function() {
        var o1 = function() {},
            o2 = {},
            o3 = '',
            o4 = [],
            o5 = 1,
            o6 = true,
            o7 = /xyz/g,
            o8 = new Function;
        expect(ne.isFunction(o1)).toBeTruthy();
        expect(ne.isFunction(o2)).toBeFalsy();
        expect(ne.isFunction(o3)).toBeFalsy();
        expect(ne.isFunction(o4)).toBeFalsy();
        expect(ne.isFunction(o5)).toBeFalsy();
        expect(ne.isFunction(o6)).toBeFalsy();
        expect(ne.isFunction(o7)).toBeFalsy();
        expect(ne.isFunction(o8)).toBeTruthy();
    });

    it('isNumber()', function() {
        var o1 = 1,
            o2 = new Number(2),
            o3 = { test: 1 },
            o4 = [],
            o5 = 'string',
            o6 = true,
            o7 = /xyz/g;
        expect(ne.isNumber(o1)).toBeTruthy();
        expect(ne.isNumber(o2)).toBeTruthy();
        expect(ne.isNumber(o3.test)).toBeTruthy();
        expect(ne.isNumber(o4)).toBeFalsy();
        expect(ne.isNumber(o5)).toBeFalsy();
        expect(ne.isNumber(o6)).toBeFalsy();
        expect(ne.isNumber(o7)).toBeFalsy();
    });

    it('isString()', function() {
        var o1 = {},
            o2 = new String('a'),
            o3 = 'string',
            o4 = [],
            o5 = '',
            o6 = true,
            o7 = /xyz/g;
        expect(ne.isString(o1)).toBeFalsy();
        expect(ne.isString(o2)).toBeTruthy();
        expect(ne.isString(o3)).toBeTruthy();
        expect(ne.isString(o4)).toBeFalsy();
        expect(ne.isString(o5)).toBeTruthy();
        expect(ne.isString(o6)).toBeFalsy();
        expect(ne.isString(o7)).toBeFalsy();
    });

    it('isBoolean()', function() {
        var o1 = {},
            o2 = new Boolean('true'),
            o3 = 1,
            o4 = true,
            o5 = false,
            o6 = undefined,
            o7 = null;

        expect(ne.isBoolean(o1)).toBeFalsy();
        expect(ne.isBoolean(o2)).toBeTruthy();
        expect(ne.isBoolean(o3)).toBeFalsy();
        expect(ne.isBoolean(o4)).toBeTruthy();
        expect(ne.isBoolean(o5)).toBeTruthy();
        expect(ne.isBoolean(o6)).toBeFalsy();
        expect(ne.isBoolean(o7)).toBeFalsy();
    });

    it('isEmpty()', function() {
        var o1 = {},
            o2 = false,
            o3 = undefined,
            o4 = null,
            o5 = '',
            o6 = [],
            o7 = new Boolean('true'),
            o8 = 1,
            o9 = true,
            o10 = [1, 2],
            o11 = {a: ''};

        expect(ne.isEmpty(o1)).toBeTruthy();
        expect(ne.isEmpty(o2)).toBeTruthy();
        expect(ne.isEmpty(o3)).toBeTruthy();
        expect(ne.isEmpty(o4)).toBeTruthy();
        expect(ne.isEmpty(o5)).toBeTruthy();
        expect(ne.isEmpty(o6)).toBeTruthy();
        expect(ne.isEmpty(o7)).toBeTruthy();
        expect(ne.isEmpty(o8)).toBeFalsy();
        expect(ne.isEmpty(o9)).toBeFalsy();
        expect(ne.isEmpty(o10)).toBeFalsy();
        expect(ne.isEmpty(o11)).toBeFalsy();
    });

    it('isNotEmpty()', function() {
        var o1 = {},
            o2 = false,
            o3 = undefined,
            o4 = null,
            o5 = '',
            o6 = [],
            o7 = new Boolean('true'),
            o8 = 1,
            o9 = true,
            o10 = [1, 2],
            o11 = {a: ''};

        expect(ne.isNotEmpty(o1)).toBeFalsy();
        expect(ne.isNotEmpty(o2)).toBeFalsy();
        expect(ne.isNotEmpty(o3)).toBeFalsy();
        expect(ne.isNotEmpty(o4)).toBeFalsy();
        expect(ne.isNotEmpty(o5)).toBeFalsy();
        expect(ne.isNotEmpty(o6)).toBeFalsy();
        expect(ne.isNotEmpty(o7)).toBeFalsy();
        expect(ne.isNotEmpty(o8)).toBeTruthy();
        expect(ne.isNotEmpty(o9)).toBeTruthy();
        expect(ne.isNotEmpty(o10)).toBeTruthy();
        expect(ne.isNotEmpty(o11)).toBeTruthy();
    });

});
