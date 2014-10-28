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

});
