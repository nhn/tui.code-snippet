/**
 * @fileoverview Map
 * @author FE개발팀
 * @dependency type, collection.js
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

    function Map() {
        this.clear();
    }

    Map.prototype._getIndexOfObjectKey = function(key) {
        var result = -1;

        ne.util.forEachArray(this._keyObjects, function(keyObject, index) {
            if (key === keyObject) {
                result = index;
                return false;
            }
        }, this);

        return result;
    };

    Map.prototype._getValueObject = function(key) {
        var indexKey;

        if (typeof key === 'string') {
            return this._values[key];
        } else {
            indexKey = this._getIndexOfObjectKey(key);
            if (indexKey >= 0) {
                return this._valuesForIndex[indexKey];
            }
        }
    };

    Map.prototype._createValueObject = function(value) {
        return {_origin : value};
    };

    Map.prototype._getOriginValue = function(value) {
        return value._origin;
    };

    Map.prototype.set = function(key, value) {
        var indexKey,
            added = false;

        if (typeof key === 'string') {
            this._values[key] = this._createValueObject(value);
            added = true;
        } else {
            indexKey = this._getIndexOfObjectKey(key);
            if (indexKey < 0) {
                indexKey = this._keyObjects.push(key) - 1;
                added = true;
            }
            this._valuesForIndex[indexKey] = this._createValueObject(value);
        }

        if (added) {
            this.size++;
        }
    };

    Map.prototype.get = function(key) {
        var value = this._getValueObject(key);
        return value && this._getOriginValue(value);
    };

    Map.prototype.has = function(key) {
        return !!this._getValueObject(key);
    };

    Map.prototype.delete = function(key) {
        var indexKey,
            deleted = false;

        if (typeof key === 'string') {
            if (this._values[key]) {
                delete this._values[key];
                deleted = true;
            }
        } else {
            indexKey = this._getIndexOfObjectKey(key);
            if (indexKey >= 0) {
                delete this._valuesForIndex[indexKey];
                // undefined will be duplicated if delete array element
                this._keyObjects[indexKey] = {};
                deleted = true;
            }
        }

        if (deleted) {
            this.size--;
        }
    };

    Map.prototype.forEach = function() {

    };

    Map.prototype.clear = function() {
        this._values = {};
        this._valuesForIndex = {};
        this._keyObjects = [];

        this.size = 0;
    };

    ne.util.Map = Map;
})(window.ne);
