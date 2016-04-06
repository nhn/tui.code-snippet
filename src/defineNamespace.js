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
     * @param {string} name - Module name
     * @param {(object|function)} props - A set of modules or one module
     * @returns {(object|function)} Defined namespace
     * @memberof tui.util
     * @example
     * var neComp = defineNamespace('ne.component');
     * neComp.listMenu = tui.util.defineClass({
     *      init: function() {
     *          // code
     *      }
     * });
     */
    tui.util.defineNamespace = function(name, props) {
        var namespace, result, prevLast, last;

        namespace = name.split('.');
        namespace.unshift(window);

        result = util.reduce(namespace, function(obj, name) {
            obj[name] = obj[name] || {};
            return obj[name];
        });

        if (util.isFunction(props)) {
            last = namespace.pop();
            prevLast = util.pick.apply(null, namespace);
            result = prevLast[last] = props;
        } else {
            util.extend(result, props);
        }

        return result;
    };;

})(window.tui);
