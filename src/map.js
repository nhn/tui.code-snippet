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

    var _UNDEFINED_KEY = {};

    function Map(initData) {
        this._valuesForString = {};
        this._valuesForIndex = {};
        this._keys = [];

        if (initData) {
            this._setInitData(initData);
        }

        this.size = 0;
    }

    Map.prototype._setInitData = function(data) {
        if (ne.util.isArray(data)) {
            this._setArray(data);
        } else {
            this._setIterable(data);
        }
    };

    Map.prototype._setArray = function(array) {
        ne.util.forEachArray(array, function(pair) {
            this.set(pair[0], pair[1]);
        }, this);
    };

    Map.prototype._setIterable = function(data) {
        var row;
        do {
            row = data.next();
            this.set(row.value[0], row.value[1]);
        } while (!row.done);
    };

    Map.prototype._getKeyIndex = function(key) {
        var result = -1,
            value;

        if (typeof key === 'string') {
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

    Map.prototype._getOriginKey = function(key) {
        return (key === _UNDEFINED_KEY) ? undefined : key;
    };

    Map.prototype._getValueObject = function(key, keyIndex) {
        if (typeof key === 'string') {
            return this._valuesForString[key];
        } else {
            if (keyIndex === undefined) {
                keyIndex = this._getKeyIndex(key);
            }
            if (keyIndex >= 0) {
                return this._valuesForIndex[keyIndex];
            }
        }
    };

    Map.prototype._createValueObject = function(origin, keyIndex) {
        return {
            keyIndex : keyIndex,
            origin : origin
        };
    };

    Map.prototype._createIterator = function(valueGetter) {
        var index = -1,
            keys = this._keys,
            length = keys.length,
            iterator = {};

        iterator.next = function() {
            var data = {};

            do {
               index++;
           } while (keys[index] === undefined && index < length);

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

    Map.prototype.set = function(key, value) {
        var keyIndex,
            valueObject;

        if (key === undefined) {
            key = _UNDEFINED_KEY;
        }

        keyIndex = this._getKeyIndex(key);
        if (keyIndex < 0) {
            keyIndex = this._keys.push(key) - 1;
            this.size++;
        }
        valueObject = this._createValueObject(value, keyIndex);

        if (typeof key === 'string') {
            this._valuesForString[key] = valueObject;
        } else {
            this._valuesForIndex[keyIndex] = valueObject;
        }
    };

    Map.prototype.get = function(key) {
        if (key === undefined) {
            key = _UNDEFINED_KEY;
        }
        var value = this._getValueObject(key);
        return value && value.origin;
    };

    Map.prototype.keys = function() {
        var self = this;

        function valueGetter(key) {
            return self._getOriginKey(key);
        }
        return this._createIterator(valueGetter);
    };

    Map.prototype.values = function() {
        var self = this;

        function valueGetter(key, keyIndex) {
            return self._getValueObject(key, keyIndex).origin;
        }
        return this._createIterator(valueGetter);
    };

    Map.prototype.entries = function() {
        var self = this;

        function valueGetter(key, keyIndex) {
            var originKey = self._getOriginKey(key);
            return [originKey, self._getValueObject(key, keyIndex).origin];
        }
        return this._createIterator(valueGetter);
    };


    Map.prototype.has = function(key) {
        return !!this._getValueObject(key);
    };

    Map.prototype.delete = function(key) {
        var keyIndex;

        if (typeof key === 'string') {
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

    Map.prototype.forEach = function(iteratee, context) {
        context = context || this;
        ne.util.forEachArray(this._keys, function(key) {
            if (key !== undefined) {
                iteratee.call(context, this._getValueObject(key).origin, key, this);
            }
        }, this);
    };

    Map.prototype.clear = function() {
        Map.call(this);
    };

    ne.util.Map = Map;
})(window.ne);
