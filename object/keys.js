/**
 * @fileoverview Return a key-list(array) of a given object.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

/**
 * Return a key-list(array) of a given object.
 * @param {object} obj - Object from which a key-list will be extracted
 * @returns {Array} A key-list(array)
 * @memberof tui.util
 */
function keys(obj) {
    var keyArray = [];
    var key;

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            keyArray.push(key);
        }
    }

    return keyArray;
}

module.exports = keys;
