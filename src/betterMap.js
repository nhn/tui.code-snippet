/**
 * @fileoverview
 * Implements the BetterMap object.
 * @author FE Development Team
 * @dependency inheritance.js, Map.js, collection.js
 */

(function(ne) {
    'use strict';

    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    // Caching ne.util for performance enhancing
    var util = ne.util;

    /**
     * The BetterMap object is inherited from the ne.util.Map oabject,
     * and added some useful feature to make it easy to manage the Map object.
     * @param {Array} initData - Array of key-value pairs (2-element Arrays).
     *      Each key-value pair will be added to the new Map
     */
    function BetterMap(initData) {
        util.Map.call(this, initData);
    }

    util.inherit(BetterMap, util.Map);

    /**
     * Sets all of the key-value pairs in the specified object to the Map object.
     * @param  {Object} object - Plain object that has a key-value pair
     */
    BetterMap.prototype.setObject = function(object) {
        util.forEachOwnProperties(object, function(value, key) {
            this.set(key, value);
        }, this);
    };

    /**
     * Removes the elements associated with keys in the specified array.
     * @param  {Array} keys - Array that contains keys of the element to remove
     */
    BetterMap.prototype.deleteByKeys = function(keys) {
        util.forEachArray(keys, function(key) {
            this['delete'](key);
        }, this);
    };

    /**
     * Sets all of the key-value pairs in the specified Map object to this Map object.
     * @param  {Map} map - Map object to be merged into this Map object
     */
    BetterMap.prototype.merge = function(map) {
        map.forEach(function(value, key) {
            this.set(key, value);
        }, this);
    };

    /**
     * Looks through each key-value pair in the map and returns the new BetterMap object of
     * all key-value pairs that pass a truth test implemented by the provided function.
     * @param  {function} predicate - Function to test each key-value pair of the Map object.
     *      Invoked with arguments (value, key). Return true to keep the element, false otherwise.
     * @return {BetterMap} A new BetterMap object
     */
    BetterMap.prototype.filter = function(predicate) {
        var filtered = new BetterMap();

        this.forEach(function(value, key) {
            if (predicate(value, key)) {
                filtered.set(key, value);
            }
        });

        return filtered;
    };

    util.BetterMap = BetterMap;
})(window.ne);
