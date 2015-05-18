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

    var modules = {};

    /**
     * define module
     * @param {string} name module name
     * @param {(object|function)} props a set of modules or one module
     * @param {boolean} isOverride flag what if module already define, override or not
     * @returns {(object|function)} return defined module
     */
    var defineModule = function(name, props, isOverride) {

        var namespace,
            lastspace,
            result;

        if (isExistModule(name) && !isOverride) {
            return modules[name];
        }

        namespace = name.split('.');
        lastspace = namespace.pop();
        namespace.unshift(window);

        result = ne.util.reduce(namespace, function(obj, name) {
            obj[name] = obj[name] || {};
            return obj[name];
        });

        result[lastspace] = isValidModule(props) ? props : {};
        modules[name] = result[lastspace];

        return modules[name];

    };

    /**
     * check module already defined
     * @param name
     * @returns {boolean}
     */
    var isExistModule = function(name) {
        if (modules[name] && isValidModule(modules[name])) {
            return true;
        }
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