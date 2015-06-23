/**
 * @fileoverview
 *  This module provides a function to make a constructor that can inherit from the other constructors like the CLASS easily.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
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
     * Help a constructor to be defined and to inherit from the other constructors
     * @param {*} [parent] Parent constructor
     * @param {Object} props Members of constructor
     *  @param {Function} props.init Initialization method
     *  @param {Object} [props.static] Static members of constructor
     * @returns {*} Constructor
     * @memberof ne.util
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
    ne.util.defineClass = function(parent, props) {
        var obj;

        if (!props) {
            props = parent;
            parent = null;
        }

        obj = props.init || function(){};

        if(parent) {
            ne.util.inherit(obj, parent);
        }

        if (props.hasOwnProperty('static')) {
            ne.util.extend(obj, props.static);
            delete props.static;
        }

        ne.util.extend(obj.prototype, props);

        return obj;
    };

})(window.ne);
