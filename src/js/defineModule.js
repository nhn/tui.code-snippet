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
 * @memberof tui.util
 * @example
 *    var defineModule = require('tui-code-snippet').defineModule; // commonjs
 *    var deinfeModule = tui.util.defineModule; // script
 * 
 *    var myModule = tui.util.defineModule('modules.myModule', {
 *        name: 'john',
 *        message: '',
 *        initialize: function() {
 *            this.message = 'hello world';
 *        },
 *        getMessage: function() {
 *            return this.name + ': ' + this.message
 *        }
 *    });
 *
 *    console.log(myModule.getMessage());  // 'john: hello world';
 *    console.log(window.modules.myModule.getMessage());   // 'john: hello world';
 */
function defineModule(namespace, moduleDefinition) {
    var base = moduleDefinition || {};

    if (type.isFunction(base[INITIALIZATION_METHOD_NAME])) {
        base[INITIALIZATION_METHOD_NAME]();
    }

    return defineNamespace(namespace, base);
}

module.exports = defineModule;
