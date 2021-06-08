'use strict';

var debounce = require('../tricks/debounce');
var throttle = require('../tricks/throttle');
var tricks = {
  debounce: debounce,
  throttle: throttle
};

describe('tricks', function() {
  describe('debounce', function() {
    var spy;
    var setTimeout = window.setTimeout;

    beforeEach(function() {
      jest.spyOn(window, 'setTimeout');
      spy = jest.fn();
    });

    afterEach(function() {
      window.setTimeout = setTimeout;
      jest.clearAllMocks();
    });

    it('test debounced functions.', function() {
      var fn = debounce(spy, 50);
      fn();

      expect(window.setTimeout).toHaveBeenCalledWith(expect.any(Function), 50);
      window.setTimeout.mock.calls[0][0]();
      expect(spy).toHaveBeenCalled();
    });

    it('debounced function can accept parameters', function() {
      var fn;

      window.setTimeout.mockImplementation(function(func) {
        func();
      });

      fn = debounce(spy);
      fn('hello world!');

      expect(spy).toHaveBeenCalledWith('hello world!');
    });
  });

  describe('throttle', function() {
    var spy, mockFunc;

    beforeEach(function() {
      mockFunc = jest.fn();

      spy = function() {
        var args = Array.prototype.slice.call(arguments);
        mockFunc.apply(null, args);
      };
    });

    afterEach(function() {
      jest.clearAllMocks();
    });

    it('test throttled functions.', function() {
      var fn = tricks.throttle(spy, 7);

      fn();
      fn();
      fn();
      fn();
      fn();

      expect(mockFunc).toHaveBeenCalledTimes(1);
    });

    it('debounced method must invoke with additional parameter', function() {
      var fn = throttle(spy, 7);

      fn('hello');
      fn('hello');
      fn('hello');
      fn('hello');
      fn('hello');

      expect(mockFunc).toHaveBeenCalledTimes(1);
      expect(mockFunc).toHaveBeenCalledWith('hello');
    });

    it('reset can remove slugs related with throttling.', function() {
      var fn = throttle(spy, 7);
      fn();

      expect(mockFunc).toHaveBeenCalledTimes(1);

      fn.reset();
      fn();

      expect(mockFunc).toHaveBeenCalledTimes(2);
    });

    it('throttled functions can accept parameters.', function() {
      var fn = throttle(spy);

      fn('hello world!');

      expect(mockFunc).toHaveBeenCalledWith('hello world!');
    });
  });
});
