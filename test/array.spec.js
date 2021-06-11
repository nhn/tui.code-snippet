'use strict';

var range = require('../array/range');
var zip = require('../array/zip');
var inArray = require('../array/inArray');

describe('module:array', function() {
  describe('range', function() {
    it('should generate an integer array from 0 to the parameter when passing only one number.', function() {
      var arr = range(5);
      expect(arr).toEqual([0, 1, 2, 3, 4]);
    });

    it('should generate an integer array from the first parameter to the second.', function() {
      var arr = range(1, 5);
      expect(arr).toEqual([1, 2, 3, 4]);
    });

    it('should generate an integer array from the first parameter to the second at intervals of the third.', function() {
      var arr = range(2, 10, 2);
      expect(arr).toEqual([2, 4, 6, 8]);
      arr = range(10, 2, -2);
      expect(arr).toEqual([10, 8, 6, 4]);
    });
  });

  describe('zip', function() {
    it('should zip together multiple lists into a single array.', function() {
      var result = zip([1, 2, 3], ['a', 'b', 'c'], [true, false, true]);
      expect(result).toEqual([
        [1, 'a', true],
        [2, 'b', false],
        [3, 'c', true]
      ]);
    });
  });

  describe('inArray', function() {
    it('should return the first index at which a given element can be found in the array', function() {
      var result = inArray(3, [1, 2, 3]);
      expect(result).toBe(2);
    });

    it('should return -1 if not found.', function() {
      var result = inArray(5, [1, 2, 3]);
      expect(result).toBe(-1);
    });
  });

  describe('inArray', function() {
    it('should return the first index at which a given element can be found in the array.', function() {
      var arr = ['java', 'javascript', 'c#', 'basic'];
      var result = inArray('javascript', arr);
      expect(result).toBe(1);
    });

    it('should return -1 if a given element is not found.', function() {
      var arr = ['java', 'javascript', 'c#', 'basic'];
      var result = inArray('php', arr);
      expect(result).toBe(-1);
    });

    it('should return -1 if a given element is not found from the fromIndex.', function() {
      var arr = ['one', 'two', 'three', 'four'];
      var result = inArray('one', arr, 3);

      expect(result).toBe(-1);
    });

    it('should return -1 when passing other objects except for the array.', function() {
      var dummyObj = {};
      var result = inArray('four', dummyObj);
      expect(result).toBe(-1);
    });

    it('should return -1 when fromIndex is greater than the length of the array.', function() {
      var arr = ['one', 'two', 'three', 'four'];
      var result = inArray('two', arr, 10);
      expect(result).toBe(-1);
    });
  });
});
