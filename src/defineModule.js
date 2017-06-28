/**
 * @fileoverview Define module
 * @author NHN Ent.
 *         FE Development Lab <dl_javscript@nhnent.com>
 * @dependency type.js, defineNamespace.js
 */
'use strict';

var defineNamespace = require('./defineNamespace');
var type = require('./type');

var INITIALIZATION_METHOD_NAME = 'initialize';

/**
 * Define module
 * @param {string} namespace - Namespace of module
 * @param {Object} moduleDefinition - Object literal for module
 * @returns {Object} Defined module
 * @member tui.util
 * @example
 *     var myModule = defineModule('modules.myModule', {
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
module.exports = function(namespace, moduleDefinition) {
    var base = moduleDefinition || {};

    if (type.isFunction(base[INITIALIZATION_METHOD_NAME])) {
        base[INITIALIZATION_METHOD_NAME]();
    }

    return defineNamespace(namespace, base);
};
