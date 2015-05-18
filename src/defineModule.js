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
     */
    var defineModule = function(name, props, isOverride) {

        var namespace,
            lastspace,
            result;

        if (isExistModule(name) && !isOverride) {
            throw new Error('Already defined module');
        }

        namespace = name.split('.');
        lastspace = namespace.pop();
        result = window;

        ne.util.forEach(namespace, function(name) {
            result[name] = result[name] || {};
            result = result[name];
        });

        result[lastspace] = props || {};
        modules[name] = result[lastspace];

    };

    /**
     * check module already defined
     * @param name
     * @returns {boolean}
     */
    var isExistModule = function(name) {
        if (modules[name] && (ne.util.isObject(name) || ne.util.isFunction(name))) {
            return true;
        }
    };

    ne.util.defineModule = defineModule;

})(window.ne);