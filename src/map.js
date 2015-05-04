/**
 * @fileoverview This object implements the ES6 Map specification.
 * @author FE개발팀
 * @dependency type.js, collection.js
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

    /**
     * Using undefined for a key can be ambiguous if there's deleted item in the array,
     * which is also undefined when accessed by index.
     * So use this unique object as an undefined key to distinguish it from deleted keys.
     * @private
     * @constant
     */
    var _UNDEFINED_KEY = {};

    /**
     * Constructor
     * @constructor
     * @param  {Array} initData - Array of key-value pairs (2-element Arrays).
     *      Each key-value pair will be added to the new Map
     */
    function Map(initData) {
        this._valuesForString = {};
        this._valuesForIndex = {};
        this._keys = [];

        if (initData && ne.util.isArray(initData)) {
            this._setInitData(initData);
        }

        this.size = 0;
    }

    /**
     * Add all elements in the initData to the Map object.
     * @private
     * @param  {Array} inidData - Array of key-value pairs to add to the Map object
     */
    Map.prototype._setInitData = function(initData) {
        ne.util.forEachArray(initData, function(pair) {
            this.set(pair[0], pair[1]);
        }, this);
    };

    /**
     * Returns the index of the specified key.
     * @private
     * @param  {*} key - key object to search for.
     * @return {number} Index of specified key
     */
    Map.prototype._getKeyIndex = function(key) {
        var result = -1,
            value;

        if (ne.util.isString(key)) {
            value = this._valuesForString[key];
            if (value) {
                result = value.keyIndex;
            }
        } else {
            ne.util.forEachArray(this._keys, function(keyObject, index) {
                if (key === keyObject) {
                    result = index;
                    return false;
                }
            }, this);
        }
        return result;
    };

    /**
     * Returns the original key of the specified key.
     * @private
     * @param  {*} key
     * @return {*} original key
     */
    Map.prototype._getOriginKey = function(key) {
        return key === _UNDEFINED_KEY ? undefined : key;
    };

    /**
     * Returns the unique key of the specified key.
     * @private
     * @param  {*} key
     * @return {*} unique key
     */
    Map.prototype._getUniqueKey = function(key) {
        return ne.util.isUndefined(key) ? _UNDEFINED_KEY : key;
    };


    /**
     * Returns the value object of specified key.
     * @private
     * @param  {*} key - The key of the value object to be returned
     * @param  {number} keyIndex - Index of the key
     * @return {{keyIndex: number, origin: *}} value object
     */
    Map.prototype._getValueObject = function(key, keyIndex) {
        if (ne.util.isString(key)) {
            return this._valuesForString[key];
        } else {
            if (ne.util.isUndefined(keyIndex)) {
                keyIndex = this._getKeyIndex(key);
            }
            if (keyIndex >= 0) {
                return this._valuesForIndex[keyIndex];
            }
        }
    };

    /**
     * Creates the wrapper object of original value that contains a key index
     * and returns it.
     * @private
     * @param  {type} origin - Original value
     * @param  {type} keyIndex - Index of the key
     * @return {{keyIndex: number, origin: *}} value object
     */
    Map.prototype._createValueObject = function(origin, keyIndex) {
        return {
            keyIndex : keyIndex,
            origin : origin
        };
    };

    /**
     * Creates Iterator object and returns it.
     * @private
     * @param  {function} valueGetter - Function that takes the key and the keyIndex
     *      as arguments and returns the value.
     * @return {Iterator}
     */
    Map.prototype._createIterator = function(valueGetter) {
        var index = -1,
            keys = this._keys,
            length = keys.length,
            iterator = {};

        iterator.next = function() {
            var data = {};

            do {
               index++;
           } while (ne.util.isUndefined(keys[index]) && index < length);

            if (index >= length) {
               data.done = true;
            } else {
               data.done = false;
               data.value = valueGetter(keys[index], index);
            }

            return data;
       };
       return iterator;
    };

    /**
     * Sets the value for the key in the Map object.
     * @param  {*} key - The key of the element to add to the Map object
     * @param  {*} value - The value of the element to add to the Map object
     * @return {Map} The Map object
     */
    Map.prototype.set = function(key, value) {
        var uniqueKey = this._getUniqueKey(key),
            keyIndex = this._getKeyIndex(uniqueKey),
            valueObject;

        if (keyIndex < 0) {
            keyIndex = this._keys.push(uniqueKey) - 1;
            this.size++;
        }
        valueObject = this._createValueObject(value, keyIndex);

        if (ne.util.isString(key)) {
            this._valuesForString[key] = valueObject;
        } else {
            this._valuesForIndex[keyIndex] = valueObject;
        }
        return this;
    };


    /**
     * Returns the value associated to the key, or undefined if there is none.
     * @param  {*} key - The key of the element to return
     * @return {*} element associated with the specified key
     */
    Map.prototype.get = function(key) {
        var uniqueKey = this._getUniqueKey(key),
            value = this._getValueObject(uniqueKey);

        return value && value.origin;
    };


    /**
     * Returns a new Iterator object that contains the keys for each element
     * in the Map object in insertion order.
     * return {Iterator}
     */
    Map.prototype.keys = function() {
        var self = this;

        function valueGetter(key) {
            return self._getOriginKey(key);
        }
        return this._createIterator(valueGetter);
    };


    /**
     * Returns a new Iterator object that contains the values for each element
     * in the Map object in insertion order.
     * @return {Iterator}
     */
    Map.prototype.values = function() {
        var self = this;

        function valueGetter(key, keyIndex) {
            return self._getValueObject(key, keyIndex).origin;
        }
        return this._createIterator(valueGetter);
    };

    /*
     * Returns a new Iterator object that contains the [key, value] pairs
     * for each element in the Map object in insertion order.
     * @return {Iterator}
     */
    Map.prototype.entries = function() {
        var self = this;

        function valueGetter(key, keyIndex) {
            var originKey = self._getOriginKey(key);
            return [originKey, self._getValueObject(key, keyIndex).origin];
        }
        return this._createIterator(valueGetter);
    };

    /**
     * Returns a boolean asserting whether a value has been associated to the key
     * in the Map object or not.
     * @param  {*} key - The key of the element to test for presence
     * @return {boolean} true if an element with the specified key exists;
     *          otherwise false
     */
    Map.prototype.has = function(key) {
        return !!this._getValueObject(key);
    };

    /**
     * Removes the specified element from a Map object.
     * @param {*} key The key of the element to remove
     */
     // cannot use reserved keyword as a property name in IE8 and under.
    Map.prototype['delete'] = function(key) {
        var keyIndex;

        if (ne.util.isString(key)) {
            if (this._valuesForString[key]) {
                keyIndex = this._valuesForString[key].keyIndex;
                delete this._valuesForString[key];
            }
        } else {
            keyIndex = this._getKeyIndex(key);
            if (keyIndex >= 0) {
                delete this._valuesForIndex[keyIndex];
            }
        }

        if (keyIndex >= 0) {
            delete this._keys[keyIndex];
            this.size--;
        }
    };

    /**
     * Executes a provided function once per each key/value pair in the Map object,
     * in insertion order.
     * @param  {function} callback Function to execute for each element
     * @param  {thisArg} thisArg Value to use as this when executing callback
     */
    Map.prototype.forEach = function(callback, thisArg) {
        thisArg = thisArg || this;
        ne.util.forEachArray(this._keys, function(key) {
            if (!ne.util.isUndefined(key)) {
                callback.call(thisArg, this._getValueObject(key).origin, key, this);
            }
        }, this);
    };

    /**
     * Removes all elements from a Map object.
     */
    Map.prototype.clear = function() {
        Map.call(this);
    };

    // Use native Map object if exists.
    // But only latest versions of Chrome and Firefox support full implementation.
    if (window.Map && (ne.util.browser.chrome || ne.util.browser.firefox)) {
        Map = window.Map;
    }

    ne.util.Map = Map;
})(window.ne);
