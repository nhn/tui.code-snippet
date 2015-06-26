/*eslint-disable*/
describe('tricks', function() {
    describe('debounce', function() {
        var spy;

        beforeEach(function() {
            spyOn(window, 'setTimeout');
            spy = jasmine.createSpy('debounced?');
        });

        it('test debounced functions.', function() {
            var fn;

            fn = ne.util.debounce(spy, 50);
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

            fn = ne.util.debounce(spy);
            fn('hello world!');

            expect(spy.calls.argsFor(0)).toEqual(['hello world!']);
        });
    });

    describe('throttle', function() {
        var spy;

        /**
         * util method for ne.util.timestamp spying.
         *
         * get an array and return each element at every invokes.
         */
        function reload(arr) {
            var i = 0,
                bullet;

            function fire() {
                bullet = arr[i];
                i += 1;
                return bullet;
            }

            return fire;
        }

        beforeEach(function() {
            spy = jasmine.createSpy('throttled?');
        });

        it('test throttled functions.', function() {
            var magazine = [1, 3, 6, 8, 9],
                fireGun = reload(magazine),
                fn;

            spyOn(ne.util, 'timestamp').and.callFake(function() {
                return fireGun();
            });

            fn = ne.util.throttle(spy, 7);

            fn();
            fn();
            fn();
            fn();
            fn();

            expect(spy.calls.count()).toBe(1);
        });

        it('throttled functions can accept parameters.', function() {
            var fn;

            fn = ne.util.throttle(spy);

            fn('hello world!');

            expect(spy.calls.argsFor(0)).toEqual(['hello world!']);
        });
    });
});

