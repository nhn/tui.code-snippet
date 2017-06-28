/**
 * @fileoverview
 *  This module provides a function to make a constructor
 * that can inherit from the other constructors like the CLASS easily.
 * @author NHN Ent.
 *         FE Development Lab <dl_javascript@nhnent.com>
 * @dependencies inheritance.js, object.js
 */

'use strict';

var inherit = require('./inheritance').inherit;
var extend = require('./object').extend;

/**
 * Help a constructor to be defined and to inherit from the other constructors
 * @name defineClass
 * @param {*} [parent] Parent constructor
 * @param {Object} props Members of constructor
 *  @param {Function} props.init Initialization method
 *  @param {Object} [props.static] Static members of constructor
 * @returns {*} Constructor
 * @memberof tui.util
 * @example
 *  var Parent = defineClass({
 *      init: function() {
 *          this.name = 'made by def';
 *      },
 *      method: function() {
 *          //..can do something with this
 *      },
 *      static: {
 *          staticMethod: function() {
 *               //..do something
 *          }
 *      }
 *  });
 *
 *  var Child = defineClass(Parent, {
 *      method2: function() {}
 *  });
 *
 *  Parent.staticMethod();
 *
 *  var parentInstance = new Parent();
 *  console.log(parentInstance.name); //made by def
 *  parentInstance.staticMethod(); // Error
 *
 *  var childInstance = new Child();
 *  childInstance.method();
 *  childInstance.method2();
 */
module.exports = function(parent, props) {
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
};
