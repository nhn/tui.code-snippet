/**
 * @fileoverview This module provides a bind() function for context binding.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 */

(function(ne) {
    'use strict';

    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * Create a new function that, when called, has its this keyword set to the provided value.
     * @param {function} fn A original function before binding
     * @param {*} obj context of function in arguments[0]
     * @return {function()} A new bound function with context that is in arguments[1]
     * @memberof ne.util
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

    ne.util.bind = bind;

})(window.ne);
