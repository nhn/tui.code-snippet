/**
 * @fileoverview collections of some technic methods.
 * @author NHN Ent. FE Development Team <e0242.nhnent.com>
 */

/** @namespace ne */
/** @namespace ne.util */

(function(ne) {
    'use strict';
    var aps = Array.prototype.slice;

    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    /* istanbul ignore if */
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * Creates a debounced function that delays invoking fn until after delay milliseconds has elapsed
     * since the last time the debouced function was invoked.
     * @param {function} fn The function to debounce.
     * @param {number} [delay=0] The number of milliseconds to delay
     * @memberof ne.util
     * @returns {function} debounced function.
     * @example
     *
     * function someMethodToInvokeDebounced() {}
     *
     * var debounced = ne.util.debounce(someMethodToInvokeDebounced, 300);
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
            args = arguments;

            window.clearTimeout(timer);
            timer = window.setTimeout(function() {
                fn.apply(null, args);
            }, delay);
        }

        return debounced;
    }

    /**
     * return timestamp
     * @memberof ne.util
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
     * @memberof ne.util
     * @returns {function} throttled function
     * @example
     *
     * function someMethodToInvokeThrottled() {}
     *
     * var throttled = ne.util.throttle(someMethodToInvokeThrottled, 300);
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
            _timestamp = ne.util.timestamp,
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

        debounced = ne.util.debounce(tick, interval);

        function throttled() {
            args = aps.call(arguments);

            if (isLeading) {
                tick(args);
                isLeading = false;
                return;
            }

            stamp = _timestamp();

            base = base || stamp;

            debounced();

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

    ne.util.timestamp = timestamp;
    ne.util.debounce = debounce;
    ne.util.throttle = throttle;
})(window.ne);

