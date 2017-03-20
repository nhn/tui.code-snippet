/**
 * @fileoverview collections of some technic methods.
 * @author NHN Ent. FE Development Team <e0242.nhnent.com>
 */

(function(tui) {
    'use strict';
    var aps = Array.prototype.slice;

    /* istanbul ignore if */
    if (!tui) {
        tui = window.tui = {};
    }
    /* istanbul ignore if */
    if (!tui.util) {
        tui.util = window.tui.util = {};
    }

    /**
     * Creates a debounced function that delays invoking fn until after delay milliseconds has elapsed
     * since the last time the debouced function was invoked.
     * @param {function} fn The function to debounce.
     * @param {number} [delay=0] The number of milliseconds to delay
     * @memberof tui.util
     * @returns {function} debounced function.
     * @example
     *
     * function someMethodToInvokeDebounced() {}
     *
     * var debounced = tui.util.debounce(someMethodToInvokeDebounced, 300);
     *
     * // invoke repeatedly
     * debounced();
     * debounced();
     * debounced();
     * debounced();
     * debounced();
     * debounced();    // last invoke of debounced()
     *
     * // invoke someMethodToInvokeDebounced() after 300 milliseconds.
     */
    function debounce(fn, delay) {
        var timer,
            args;

        /* istanbul ignore next */
        delay = delay || 0;

        function debounced() {
            args = aps.call(arguments);

            window.clearTimeout(timer);
            timer = window.setTimeout(function() {
                fn.apply(null, args);
            }, delay);
        }

        return debounced;
    }

    /**
     * return timestamp
     * @memberof tui.util
     * @returns {number} The number of milliseconds from Jan. 1970 00:00:00 (GMT)
     */
    function timestamp() {
        return +(new Date());
    }

    /**
     * Creates a throttled function that only invokes fn at most once per every interval milliseconds.
     *
     * You can use this throttle short time repeatedly invoking functions. (e.g MouseMove, Resize ...)
     *
     * if you need reuse throttled method. you must remove slugs (e.g. flag variable) related with throttling.
     * @param {function} fn function to throttle
     * @param {number} [interval=0] the number of milliseconds to throttle invocations to.
     * @memberof tui.util
     * @returns {function} throttled function
     * @example
     *
     * function someMethodToInvokeThrottled() {}
     *
     * var throttled = tui.util.throttle(someMethodToInvokeThrottled, 300);
     *
     * // invoke repeatedly
     * throttled();    // invoke (leading)
     * throttled();
     * throttled();    // invoke (near 300 milliseconds)
     * throttled();
     * throttled();
     * throttled();    // invoke (near 600 milliseconds)
     * // ...
     * // invoke (trailing)
     *
     * // if you need reuse throttled method. then invoke reset()
     * throttled.reset();
     */
    function throttle(fn, interval) {
        var base,
            _timestamp = tui.util.timestamp,
            debounced,
            isLeading = true,
            stamp,
            args,
            tick = function(_args) {
                fn.apply(null, _args);
                base = null;
            };

        /* istanbul ignore next */
        interval = interval || 0;

        debounced = tui.util.debounce(tick, interval);

        function throttled() {
            args = aps.call(arguments);

            if (isLeading) {
                tick(args);
                isLeading = false;
                return;
            }

            stamp = _timestamp();

            base = base || stamp;

            // pass array directly because `debounce()`, `tick()` are already use
            // `apply()` method to invoke developer's `fn` handler.
            //
            // also, this `debounced` line invoked every time for implements
            // `trailing` features.
            debounced(args);

            if ((stamp - base) >= interval) {
                tick(args);
            }
        }

        function reset() {
            isLeading = true;
            base = null;
        }

        throttled.reset = reset;
        return throttled;
    }

    tui.util.timestamp = timestamp;
    tui.util.debounce = debounce;
    tui.util.throttle = throttle;
})(window.tui);
