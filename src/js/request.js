/**
 * @fileoverview This module has some functions for handling object as collection.
 * @author NHN Ent.
 *         FE Development Lab <dl_javascript@nhnent.com>
 */
'use strict';

var object = require('./object');
var collection = require('./collection');

/**
 * Request image ping.
 * @param {String} url url for ping request
 * @param {Object} trackingInfo infos for make query string
 * @param {?String} className image class name
 * @returns {HTMLElement}
 * @memberof tui.util
 * @example
 * //-- #1. Get Module --//
 * var util = require('tui-code-snippet'); // node, commonjs
 * var util = tui.util; // distribution file
 *
 * //-- #2. Use property --//
 * util.imagePing('https://www.google-analytics.com/collect', {
 *     v: 1,
 *     t: 'event',
 *     tid: 'trackingid',
 *     cid: 'cid',
 *     dp: 'dp',
 *     dh: 'dh'
 * }, 'ga-trackng');
 */
function imagePing(url, trackingInfo, className) {
    var queryString = collection.map(object.keys(trackingInfo), function(key, index) {
        var startWith = index === 0 ? '' : '&';

        return startWith + key + '=' + trackingInfo[key];
    }).join('');
    var trackingElement = document.createElement('img');

    trackingElement.src = url + '?' + queryString;
    if (className) {
        trackingElement.className = className;
    }

    trackingElement.style.display = 'none';
    document.body.appendChild(trackingElement);

    return trackingElement;
}

module.exports = {
    imagePing: imagePing
};
