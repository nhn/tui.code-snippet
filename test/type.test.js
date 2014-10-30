describe('type', function() {

    it('isDefined()', function() {
        var o1 = null,
            o2 = 3,
            o3 = 0,
            o4 = {};

        expect(ne.type.isDefined(o1)).toBeFalsy();
        expect(ne.type.isDefined(o2)).toBeTruthy();
        expect(ne.type.isDefined(o3)).toBeTruthy();
        expect(ne.type.isDefined(o3.test)).toBeFalsy();

    });

    it('isTruthy()', function() {
        var o1 = 0,
            o2 = false,
            o3 = '';

        expect(ne.type.isTruthy(o1)).toBeTruthy();
        expect(ne.type.isTruthy(o2)).toBeFalsy();
        expect(ne.type.isTruthy(o3)).toBeTruthy();

    });

    it('isArray()', function() {
        var o1 = new Array(3),
            o2 = [],
            o3 = 'array',
            o4 = 3;

        expect(ne.type.isArray(o1)).toBeTruthy();
        expect(ne.type.isArray(o2)).toBeTruthy();
        expect(ne.type.isArray(o3)).toBeFalsy();
        expect(ne.type.isArray(o4)).toBeFalsy();

    });

    it('isObject()', function() {
        var o1 = new Object(),
            o2 = {},
            o3 = { test: {} },
            o4 = 'a',
            o5 = function() {},
            o6 = new o5(),
            o7 = /xyz/g;

        expect(ne.type.isObject(o1)).toBeTruthy();
        expect(ne.type.isObject(o2)).toBeTruthy();
        expect(ne.type.isObject(o3.test)).toBeTruthy();
        expect(ne.type.isObject(o4)).toBeFalsy();
        expect(ne.type.isObject(o5)).toBeTruthy();
        expect(ne.type.isObject(o6)).toBeTruthy();
        expect(ne.type.isObject(o7)).toBeTruthy();
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
        expect(ne.type.isFunction(o1)).toBeTruthy();
        expect(ne.type.isFunction(o2)).toBeFalsy();
        expect(ne.type.isFunction(o3)).toBeFalsy();
        expect(ne.type.isFunction(o4)).toBeFalsy();
        expect(ne.type.isFunction(o5)).toBeFalsy();
        expect(ne.type.isFunction(o6)).toBeFalsy();
        expect(ne.type.isFunction(o7)).toBeFalsy();
        expect(ne.type.isFunction(o8)).toBeTruthy();
    });

    it('isNumber()', function() {
        var o1 = 1,
            o2 = new Number(2),
            o3 = { test: 1 },
            o4 = [],
            o5 = 'string',
            o6 = true,
            o7 = /xyz/g;
        expect(ne.type.isNumber(o1)).toBeTruthy();
        expect(ne.type.isNumber(o2)).toBeTruthy();
        expect(ne.type.isNumber(o3.test)).toBeTruthy();
        expect(ne.type.isNumber(o4)).toBeFalsy();
        expect(ne.type.isNumber(o5)).toBeFalsy();
        expect(ne.type.isNumber(o6)).toBeFalsy();
        expect(ne.type.isNumber(o7)).toBeFalsy();
    });

    it('isString()', function() {
        var o1 = {},
            o2 = new String('a'),
            o3 = 'string',
            o4 = [],
            o5 = '',
            o6 = true,
            o7 = /xyz/g;
        expect(ne.type.isString(o1)).toBeFalsy();
        expect(ne.type.isString(o2)).toBeTruthy();
        expect(ne.type.isString(o3)).toBeTruthy();
        expect(ne.type.isString(o4)).toBeFalsy();
        expect(ne.type.isString(o5)).toBeTruthy();
        expect(ne.type.isString(o6)).toBeFalsy();
        expect(ne.type.isString(o7)).toBeFalsy();
    });

    it('isBoolean()', function() {
        var o1 = {},
            o2 = new Boolean('true'),
            o3 = 1,
            o4 = true,
            o5 = false,
            o6 = undefined,
            o7 = null;

        expect(ne.type.isBoolean(o1)).toBeFalsy();
        expect(ne.type.isBoolean(o2)).toBeTruthy();
        expect(ne.type.isBoolean(o3)).toBeFalsy();
        expect(ne.type.isBoolean(o4)).toBeTruthy();
        expect(ne.type.isBoolean(o5)).toBeTruthy();
        expect(ne.type.isBoolean(o6)).toBeFalsy();
        expect(ne.type.isBoolean(o7)).toBeFalsy();
    });

});
