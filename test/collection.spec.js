'use strict';

var forEachArray = require('../collection/forEachArray');
var forEachOwnProperties = require('../collection/forEachOwnProperties');
var forEach = require('../collection/forEach');
var toArray = require('../collection/toArray');
var pluck = require('../collection/pluck');

describe('module:collection', function() {
    var objDummy,
        arrayDummy;

    beforeEach(function() {
        arrayDummy = [0, 1, 2, 3, 4, 5];
        objDummy = {_0: 0,
            _1: 1,
            _2: 2,
            _3: 3,
            _4: 4,
            _5: 5};
    });

    describe('forEachArray', function() {
        it('should traverse array or array-like object, and execute callback function in each element.', function() {
            var oSum = 0;

            forEachArray(arrayDummy, function(value) {
                oSum += value;
            });

            expect(oSum).toEqual(15);
        });

        it('should end traversing, when callback returns false', function() {
            var oSum = 0;

            forEachArray(arrayDummy, function(value) {
                oSum += value;

                if (oSum === 3) {
                    return false;
                }

                return true;
            });

            expect(oSum).toEqual(3);
        });
    });

    describe('forEachOwnProperties', function() {
        it('should traverse each element by sending collection object and callback function.', function() {
            var oSum = 0;

            forEachOwnProperties(objDummy, function(value) {
                oSum += value;
            });

            expect(oSum).toEqual(15);
        });

        it('should end traversing, when callback returns false', function() {
            var oSum = 0;

            forEachOwnProperties(objDummy, function(value) {
                oSum += value;

                if (oSum === 3) {
                    return false;
                }

                return true;
            });

            expect(oSum).toEqual(3);
        });
    });

    describe('forEach', function() {
        it('should execute a callback function for each array element.', function() {
            var aSum = 0;

            forEach(arrayDummy, function(value) {
                aSum += value;
            });

            expect(aSum).toEqual(15);
        });

        it('should execute a callback function for each pair of the object.', function() {
            var oSum = 0;

            forEach(objDummy, function(value) {
                oSum += value;
            });

            expect(oSum).toEqual(15);
        });
    });

    describe('toArray', function() {
        it('should convert the array-like object to array.', function() {
            var result,
                arrayLike = {
                    0: 'one',
                    1: 'two',
                    2: 'three',
                    3: 'four',
                    length: 4
                };
            result = toArray(arrayLike);
            expect(arrayLike instanceof Array).toBe(false);
            expect(result instanceof Array).toBe(true);

            result = toArray(arguments);
            expect(arguments instanceof Array).toBe(false);
            expect(result instanceof Array).toBe(true);
        });

        it('should return an array which of length is equal to the length of the parameter.', function() {
            var result,
                arrayLike = {
                    0: 'one',
                    1: 'two',
                    2: 'three',
                    3: 'four',
                    length: 2
                };
            result = toArray(arrayLike);
            expect(result instanceof Array).toBe(true);
            expect(result.length).toBe(2);

            result = toArray('abcde');
            expect(result instanceof Array).toBe(true);
            expect(result.length).toBe(5);

            result = toArray(1);
            expect(result instanceof Array).toBe(true);
            expect(result.length).toBe(0);
        });
    });

    describe('pluck', function() {
        var objArr = [
                {'abc': 1,
                    'def': 2,
                    'ghi': 3},
                {'abc': 4,
                    'def': 5,
                    'ghi': 6},
                {'abc': 7,
                    'def': 8,
                    'ghi': 9}
            ],
            arr2d = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ];

        it('should extract an array from objects by a property.', function() {
            var result = pluck(objArr, 'abc');
            expect(result).toEqual([1, 4, 7]);
        });

        it('should extract an array from arrays by an index.', function() {
            var result = pluck(arr2d, 2);
            expect(result).toEqual([3, 6, 9]);
        });
    });
});
