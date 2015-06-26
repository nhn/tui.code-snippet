/**
 * @fileoverview collections of some technic methods.
 * @author NHN Ent. FE Development Team <e0242.nhnent.com>
 */

/** @namespace ne */
/** @namespace ne.util */

(function(ne) {
    'use strict';
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
     * @returns {number} The number of milliseconds from Jan. 1970 00:00:00
     */
    function timestamp() {
        return +(new Date());
    }

    /**
     * Creates a throttled function that only invokes fn at most once per every interval milliseconds.
     *
     * You can use this throttle short time repeatedly invoking functions. (e.g MouseMove, Resize ...)
     *
     * **This method not support leading (0ms) and trailing throttled method. Take care to use.**
     * @param {function} fn function to throttle
     * @param {number} [interval=0] the number of milliseconds to throttle invocations to.
     * @returns {function} throttled function
     * @example
     *
     * function someMethodToInvokeThrottled() {}
     *
     * var throttled = ne.util.throttle(someMethodToInvokeThrottled, 300);
     *
     * // invoke repeatedly
     * throttled();
     * throttled();
     * throttled();    // invoke (near 300 milliseconds)
     * throttled();
     * throttled();
     * throttled();    // invoke (near 600 milliseconds)
     * // ...
     */
    function throttle(fn, interval) {
        var base,
            _timestamp = ne.util.timestamp,
            stamp;

        /* istanbul ignore next */
        interval = interval || 0;

        function throttled() {
            stamp = _timestamp();

            base = base || stamp;

            if ((stamp - base) >= interval) {
                fn.apply(null, arguments);
                base = null;
            }
        }

        return throttled;
    }

    ne.util.timestamp = timestamp;
    ne.util.debounce = debounce;
    ne.util.throttle = throttle;
})(window.ne);

