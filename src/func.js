/**
 * @fileoverview This module provides a bind() function for context binding.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 */

(function(tui) {
    'use strict';

    /* istanbul ignore if */
    if (!tui) {
        tui = window.tui = {};
    }
    if (!tui.util) {
        tui.util = window.tui.util = {};
    }

    /**
     * Create a new function that, when called, has its this keyword set to the provided value.
     * @param {function} fn A original function before binding
     * @param {*} obj context of function in arguments[0]
     * @return {function()} A new bound function with context that is in arguments[1]
     * @memberof tui.util
     */
    function bind(fn, obj) {
        var slice = Array.prototype.slice;

        if (fn.bind) {
            return fn.bind.apply(fn, slice.call(arguments, 1));
        }

        /* istanbul ignore next */
        var args = slice.call(arguments, 2);

        /* istanbul ignore next */
        return function() {
            /* istanbul ignore next */
            return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
        };
    }

    tui.util.bind = bind;

})(window.tui);
