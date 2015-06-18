/**
 * @fileoverview Define module
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency object.js, type.js, defineNamespace.js
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
     * @example
     *     var myModule = ne.util.defineModule('modules.myModule', {
     *          name: 'john',
     *          message: '',
     *          initialize: function() {
     *              this.message = 'hello world';
     *          },
     *          getMessage: function() {
     *              return this.name + ': ' + this.message
     *          }
     *     });
     *
     *     console.log(myModule.getMessage());  // 'john: hello world';
     *     console.log(window.modules.myModule.getMessage());   // 'john: hello world';
     */
    function defineModule(namespace, moduleDefinition) {
        var base = util.extend({}, moduleDefinition);

        if (util.isFunction(base[INITIALIZATION_METHOD_NAME])) {
            base[INITIALIZATION_METHOD_NAME]();
            delete base[INITIALIZATION_METHOD_NAME];
        }

        return util.defineNamespace(namespace, base, true);
    }
    ne.util.defineModule = defineModule;
})(window.ne);
