/**
 * @fileoverview define module or a set of module with namespace
 * @author FE Development Team
 * @dependency inheritance.js, object.js
 */
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
     * define module
     * @param {string} name module name
     * @param {(object|function)} props a set of modules or one module
     * @param {boolean} isOverride flag what if module already define, override or not
     * @returns {(object|function)} return defined module
     * @example
     * var neComp = defineModule('ne.component');
     * neComp.listMenu = ne.util.defineClass({
     *      init: function() {
     *          // code
     *      }
     * });
     */
    var defineModule = function(name, props, isOverride) {
        var namespace,
            lastspace,
            result,
            module = getModule(name);

        if (!isOverride && isValidModule(module)) {
            return module;
        }

        namespace = name.split('.');
        lastspace = namespace.pop();
        namespace.unshift(window);

        result = ne.util.reduce(namespace, function(obj, name) {
            obj[name] = obj[name] || {};
            return obj[name];
        });

        result[lastspace] = isValidModule(props) ? props : {};

        return result[lastspace];

    };

    /**
     * get module in namespace
     * @param {string} name namespace
     * @returns {*}
     */
    var getModule = function(name) {
        var namespace,
            result;

        namespace = name.split('.');
        namespace.unshift(window);

        result = ne.util.reduce(namespace, function(obj, name) {
            return obj && obj[name];
        });
        return result;
    };

    /**
     * check valid module type
     * @param {*} module
     * @returns {boolean}
     */
    var isValidModule = function(module) {
        return (ne.util.isObject(module) || ne.util.isFunction(module));
    };

    ne.util.defineModule = defineModule;

})(window.ne);