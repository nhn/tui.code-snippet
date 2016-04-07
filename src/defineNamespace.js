/**
 * @fileoverview Define namespace
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency inheritance.js, object.js, collection.js
 */
(function(tui) {

    'use strict';
    /* istanbul ignore if */
    if (!tui) {
        tui = window.tui = {};
    }
    /* istanbul ignore if */
    if (!tui.util) {
        tui.util = window.tui.util = {};
    }

    var util = tui.util;

    /**
     * Define namespace
     * @param {string} namespace - Namespace (ex- 'foo.bar.baz')
     * @param {(object|function)} props - A set of modules or one module
     * @param {boolean} [isOverride] - Override the props to the namespace.<br>
     *                                  (It removes previous properties of this namespace)
     * @returns {(object|function)} Defined namespace
     * @memberof tui.util
     * @example
     * var neComp = tui.util.defineNamespace('ne.component');
     * neComp.listMenu = tui.util.defineClass({
     *      init: function() {
     *          // code
     *      }
     * });
     */
    tui.util.defineNamespace = function(namespace, props, isOverride) {
        var names, result, prevLast, last;

        names = namespace.split('.');
        names.unshift(window);

        result = util.reduce(names, function(obj, name) {
            obj[name] = obj[name] || {};
            return obj[name];
        });

        if (isOverride) { // if (isOverride || tui.util.isFunction(props)) {
            last = names.pop();
            prevLast = util.pick.apply(null, names);
            result = prevLast[last] = props;
        } else {
            util.extend(result, props);
        }

        return result;
    };
})(window.tui);
