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

    beforeEach(function() {
      jest.useFakeTimers();
      spy = jest.fn();
    });

    afterEach(function() {
      jest.useRealTimers();
    });

    it('test debounced functions.', function() {
      var fn = debounce(spy, 50);
      fn();
      jest.advanceTimersToNextTimer();

      expect(spy).toHaveBeenCalled();
    });

    it('debounced function can accept parameters', function() {
      var fn;

      fn = debounce(spy);
      fn('hello world!');
      jest.advanceTimersToNextTimer();

      expect(spy).toHaveBeenCalledWith('hello world!');
    });
  });

  describe('throttle', function() {
    var spy;

    beforeEach(function() {
      spy = jest.fn();
    });

    it('test throttled functions.', function() {
      var fn = tricks.throttle(spy, 7);

      fn();
      fn();
      fn();
      fn();
      fn();

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('debounced method must invoke with additional parameter', function() {
      var fn = throttle(spy, 7);

      fn('hello');
      fn('hello');
      fn('hello');
      fn('hello');
      fn('hello');

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith('hello');
    });

    it('reset can remove slugs related with throttling.', function() {
      var fn = throttle(spy, 7);
      fn();

      expect(spy).toHaveBeenCalledTimes(1);

      fn.reset();
      fn();

      expect(spy).toHaveBeenCalledTimes(2);
    });

    it('throttled functions can accept parameters.', function() {
      var fn = throttle(spy);

      fn('hello world!');

      expect(spy).toHaveBeenCalledWith('hello world!');
    });
  });
});
