/**
 * @fileoverview Define module
 * @author FE Development Team
 * @dependency defineNamespace.js, func.js, collection.js, type.js
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

    var util = ne.util,
        INITIALIZATION_METHOD_NAME = 'initialize';

    /**
     * Define module
     * @param {string} namespace - Namespace of module
     * @param {Object} moduleDefinition - Object literal for module
     * @returns {Object} Defined module
     */
    function defineModule(namespace, moduleDefinition) {
        var target = util.defineNamespace(namespace),
            base = util.extend({}, moduleDefinition);

        if (util.isFunction(base[INITIALIZATION_METHOD_NAME])) {
            base[INITIALIZATION_METHOD_NAME]();
            target['__' + INITIALIZATION_METHOD_NAME] = base[INITIALIZATION_METHOD_NAME];
        }

        util.forEach(base, function(item, key) {
            if (/^[^_]\w+$/.test(key)) {
                // public
                if (util.isFunction(item)) {
                    target[key] = util.bind(item, base); // method
                } else {
                    target[key] = item;  // property
                }
            }
        });

        return target
    }

    ne.util.defineModule = defineModule;
})(window.ne);

