'use strict';

var extend = require('../object/extend');
var pick = require('../object/pick');

describe('object', function() {
    describe('extend()', function() {
        it('extend the target object from other objects.', function() {
            var target = {
                firstName: 'MinHyeong',
                lastName: 'Kang'
            };

            var source = {
                lastName: 'Kim',
                middleName: '-',
                myprop: {
                    test: 'good',
                    testFunc: function(x) {
                        return x + 2;
                    }
                }
            };

            extend(target, source);

            expect(target.middleName).toEqual('-');
            expect(target.lastName).toEqual('Kim');
            expect(target.myprop.test).toEqual('good');
            expect(target.myprop.testFunc(3)).toEqual(5);
        });
    });

    describe('pick()', function() {
        it('retrieve a nested item from the given object.', function() {
            var obj = {
                'key1': 1,
                'key2': null,
                'nested': {
                    'key1': 11,
                    'key2': null,
                    'nested': {
                        'key1': 21
                    }
                }
            };

            expect(pick(obj, 'key1')).toBe(1);
            expect(pick(obj, 'key1', 'notFound')).toBeUndefined();

            expect(pick(obj, 'nested')).toEqual(obj.nested);
            expect(pick(obj, 'nested', 'key1')).toBe(11);
            expect(pick(obj, 'nested', 'nested')).toBe(obj.nested.nested);
            expect(pick(obj, 'nested', 'nested', 'key1')).toBe(21);

            expect(pick(obj, 'notFound')).toBeUndefined();
            expect(pick(obj, 'notFound', 'notFound')).toBeUndefined();

            expect(pick(obj, 'key2')).toBeNull();
            expect(pick(obj, 'key2', 'key2')).toBeUndefined();
            expect(pick(obj, 'key2', 'valueOf')).toBeUndefined();
            expect(pick(obj, 'nested', 'key2')).toBeNull();
        });

        it('retrieve a nested item from the given array.', function() {
            var arr = [1, [2], {'key1': 3}];

            expect(pick(arr, 0)).toBe(1);
            expect(pick(arr, 1)).toBe(arr[1]);
            expect(pick(arr, 1, 0)).toBe(2);
            expect(pick(arr, 2, 'key1')).toBe(3);

            expect(pick(arr, 5)).toBeUndefined();
        });
    });
});
