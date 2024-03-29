/**
 * @fileoverview Provide a simple inheritance in prototype-oriented.
 */

'use strict';

var createObject = require('./createObject');

/**
 * Provide a simple inheritance in prototype-oriented.
 * Caution :
 *  Don't overwrite the prototype of child constructor.
 *
 * @param {function} subType Child constructor
 * @param {function} superType Parent constructor
 * @memberof module:inheritance
 * @example
 * // ES6
 * import inherit from 'tui-code-snippet/inheritance/inherit';
 * 
 * // CommonJS
 * const inherit = require('tui-code-snippet/inheritance/inherit');
 *
 * // Parent constructor
 * function Animal(leg) {
 *   this.leg = leg;
 * }
 * Animal.prototype.growl = function() {
 *   // ...
 * };
 *
 * // Child constructor
 * function Person(name) {
 *   this.name = name;
 * }
 *
 * // Inheritance
 * inherit(Person, Animal);
 *
 * // After this inheritance, please use only the extending of property.
 * // Do not overwrite prototype.
 * Person.prototype.walk = function(direction) {
 *   // ...
 * };
 */
function inherit(subType, superType) {
  var prototype = createObject(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

module.exports = inherit;
