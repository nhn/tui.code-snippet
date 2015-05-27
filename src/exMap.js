/**
 * @fileoverview
 * Implements the ExMap (Extended Map) object.
 * @author NHN Ent. FE Development Team
 * @dependency Map.js, collection.js
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
    var util = ne.util,
        mapAPIsForRead = ['get', 'has', 'forEach', 'keys', 'values', 'entries'],
        mapAPIsForDelete = ['delete', 'clear'];

    /**
     * The ExMap object is Extended Version of the ne.util.Map object.
     * and added some useful feature to make it easy to manage the Map object.
     * @constructor
     * @param {Array} initData - Array of key-value pairs (2-element Arrays).
     *      Each key-value pair will be added to the new Map
     * @memberof ne.util
     */
    function ExMap(initData) {
        this._map = new util.Map(initData);
        this.size = this._map.size;
    }

    util.forEachArray(mapAPIsForRead, function(name) {
        ExMap.prototype[name] = function() {
            return this._map[name].apply(this._map, arguments);
        };
    });

    util.forEachArray(mapAPIsForDelete, function(name) {
        ExMap.prototype[name] = function() {
            var result = this._map[name].apply(this._map, arguments);
            this.size = this._map.size;
            return result;
        };
    });

    ExMap.prototype.set = function() {
        this._map.set.apply(this._map, arguments);
        this.size = this._map.size;
        return this;
    };

    /**
     * Sets all of the key-value pairs in the specified object to the Map object.
     * @param  {Object} object - Plain object that has a key-value pair
     */
    ExMap.prototype.setObject = function(object) {
        util.forEachOwnProperties(object, function(value, key) {
            this.set(key, value);
        }, this);
    };

    /**
     * Removes the elements associated with keys in the specified array.
     * @param  {Array} keys - Array that contains keys of the element to remove
     */
    ExMap.prototype.deleteByKeys = function(keys) {
        util.forEachArray(keys, function(key) {
            this['delete'](key);
        }, this);
    };

    /**
     * Sets all of the key-value pairs in the specified Map object to this Map object.
     * @param  {Map} map - Map object to be merged into this Map object
     */
    ExMap.prototype.merge = function(map) {
        map.forEach(function(value, key) {
            this.set(key, value);
        }, this);
    };

    /**
     * Looks through each key-value pair in the map and returns the new ExMap object of
     * all key-value pairs that pass a truth test implemented by the provided function.
     * @param  {function} predicate - Function to test each key-value pair of the Map object.
     *      Invoked with arguments (value, key). Return true to keep the element, false otherwise.
     * @return {ExMap} A new ExMap object
     */
    ExMap.prototype.filter = function(predicate) {
        var filtered = new ExMap();

        this.forEach(function(value, key) {
            if (predicate(value, key)) {
                filtered.set(key, value);
            }
        });

        return filtered;
    };

    util.ExMap = ExMap;
})(window.ne);
