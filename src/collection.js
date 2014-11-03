/**
 * @fileoverview
 * @author FE개발팀
 */

(function(ne) {
    'use strict';
    if (!ne) {
        ne = window.ne = {};
    }

    var forEach = function(obj, iteratee, context) {
        var key, t;

        if (!ne.isDefined(obj)) {
            return obj;
        }

        if (obj.length === +obj.length) {
            for (key = 0, t = obj.length; key < t; key++) {
                iteratee.call(context || null, obj[key], key, obj);
            }
        } else {
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    iteratee.call(context || null, obj[key], key, obj);
                }
            }
        }
    };

    ne.forEach = forEach;

})(window.ne);
