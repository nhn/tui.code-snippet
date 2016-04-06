/**
 * @fileoverview Define module
 * @author NHN Ent.
 *         FE Development Team <dl_javscript@nhnent.com>
 * @dependency type.js, defineNamespace.js
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

    var util = tui.util,
        INITIALIZATION_METHOD_NAME = 'initialize';

    /**
     * Define module
     * @param {string} namespace - Namespace of module
     * @param {Object} moduleDefinition - Object literal for module
     * @returns {Object} Defined module
     * @memberof tui.util
     * @example
     *     var myModule = tui.util.defineModule('modules.myModule', {
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
        var base = moduleDefinition || {};

        if (util.isFunction(base[INITIALIZATION_METHOD_NAME])) {
            base[INITIALIZATION_METHOD_NAME]();
        }

        return util.defineNamespace(namespace, base);
    }
    tui.util.defineModule = defineModule;
})(window.tui);
