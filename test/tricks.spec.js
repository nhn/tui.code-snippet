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
            spyOn(window, 'setTimeout');
            spy = jasmine.createSpy('debounced?');
        });

        it('test debounced functions.', function() {
            var fn = debounce(spy, 50);
            fn();

            expect(window.setTimeout).toHaveBeenCalledWith(jasmine.any(Function), 50);
            window.setTimeout.calls.argsFor(0)[0]();
            expect(spy).toHaveBeenCalled();
        });

        it('debounced function can accept parameters', function() {
            var fn;

            window.setTimeout.and.callFake(function(func) {
                func();
            });

            fn = debounce(spy);
            fn('hello world!');

            expect(spy.calls.argsFor(0)).toEqual(['hello world!']);
        });
    });

    describe('throttle', function() {
        var spy;

        beforeEach(function() {
            spy = jasmine.createSpy('throttled?');
        });

        it('test throttled functions.', function() {
            var fn = tricks.throttle(spy, 7);

            fn();
            fn();
            fn();
            fn();
            fn();

            expect(spy.calls.count()).toBe(1);
        });

        it('debounced method must invoke with additional parameter', function() {
            var fn = throttle(spy, 7);

            fn('hello');
            fn('hello');
            fn('hello');
            fn('hello');
            fn('hello');

            expect(spy.calls.count()).toBe(1);
            expect(spy.calls.allArgs()).toEqual([['hello']]);
        });

        it('reset can remove slugs related with throttling.', function() {
            var fn = throttle(spy, 7);
            fn();
            expect(spy.calls.count()).toBe(1);

            fn.reset();
            fn();

            expect(spy.calls.count()).toBe(2);
        });

        it('throttled functions can accept parameters.', function() {
            var fn = throttle(spy);

            fn('hello world!');

            expect(spy.calls.argsFor(0)).toEqual(['hello world!']);
        });
    });
});
