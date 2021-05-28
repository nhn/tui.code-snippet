/**
 * @fileoverview
 * This module provides a function to make a constructor
 * that can inherit from the other constructors like the CLASS easily.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var inherit = require('../inheritance/inherit');
var extend = require('../object/extend');

/**
 * @module defineClass
 */

/**
 * Help a constructor to be defined and to inherit from the other constructors
 * @param {*} [parent] Parent constructor
 * @param {Object} props Members of constructor
 *  @param {Function} props.init Initialization method
 *  @param {Object} [props.static] Static members of constructor
 * @returns {*} Constructor
 * @memberof module:defineClass
 * @example
 * // ES6
 * import defineClass from 'tui-code-snippet/defineClass/defineClass'; 
 * 
 * // CommonJS
 * const defineClass = require('tui-code-snippet/defineClass/defineClass'); 
 *
 * //-- #2. Use property --//
 * const Parent = defineClass({
 *   init: function() { // constuructor
 *     this.name = 'made by def';
 *   },
 *   method: function() {
 *     // ...
 *   },
 *   static: {
 *     staticMethod: function() {
 *       // ...
 *     }
 *   }
 * });
 *
 * const Child = defineClass(Parent, {
 *   childMethod: function() {}
 * });
 *
 * Parent.staticMethod();
 *
 * const parentInstance = new Parent();
 * console.log(parentInstance.name); //made by def
 * parentInstance.staticMethod(); // Error
 *
 * const childInstance = new Child();
 * childInstance.method();
 * childInstance.childMethod();
 */
function defineClass(parent, props) {
  var obj;

  if (!props) {
    props = parent;
    parent = null;
  }

  obj = props.init || function() {};

  if (parent) {
    inherit(obj, parent);
  }

  if (props.hasOwnProperty('static')) {
    extend(obj, props['static']);
    delete props['static'];
  }

  extend(obj.prototype, props);

  return obj;
}

module.exports = defineClass;
