/**
 * @fileoverview This module detects the kind of well-known browser and version.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @namespace tui.util
 */

(function(tui) {
    'use strict';
    /* istanbul ignore if */
    if (!tui) {
        tui = window.tui = {};
    }
    /* istanbul ignore if */
    if (!tui.util) {
        tui.util = window.tui.util = {};
    }

    /**
     * This object has an information that indicate the kind of browser.<br>
     * The list below is a detectable browser list.
     *  - ie7 ~ ie11
     *  - chrome
     *  - firefox
     *  - safari
     *  - edge
     * @memberof tui.util
     * @example
     *  tui.util.browser.chrome === true;    // chrome
     *  tui.util.browser.firefox === true;    // firefox
     *  tui.util.browser.safari === true;    // safari
     *  tui.util.browser.msie === true;    // IE
     *  tui.util.browser.edge === true;     // edge
     *  tui.util.browser.other === true;    // other browser
     *  tui.util.browser.version;    // browser version
     */
    var browser = {
        chrome: false,
        firefox: false,
        safari: false,
        msie: false,
        edge: false,
        others: false,
        version: 0
    };

    var nav = window.navigator,
        appName = nav.appName.replace(/\s/g, '_'),
        userAgent = nav.userAgent;

    var rIE = /MSIE\s([0-9]+[.0-9]*)/,
        rIE11 = /Trident.*rv:11\./,
        rEdge = /Edge\/(\d+)\./,
        versionRegex = {
            'firefox': /Firefox\/(\d+)\./,
            'chrome': /Chrome\/(\d+)\./,
            'safari': /Version\/([\d\.]+)\sSafari\/(\d+)/
        };

    var key, tmp;

    var detector = {
        'Microsoft_Internet_Explorer': function() {
            // ie8 ~ ie10
            browser.msie = true;
            browser.version = parseFloat(userAgent.match(rIE)[1]);
        },
        'Netscape': function() {
            var detected = false;

            if (rIE11.exec(userAgent)) {
                browser.msie = true;
                browser.version = 11;
                detected = true;
            } else if (rEdge.exec(userAgent)) {
                browser.edge = true;
                browser.version = userAgent.match(rEdge)[1];
                detected = true;
            } else {
                for (key in versionRegex) {
                    if (versionRegex.hasOwnProperty(key)) {
                        tmp = userAgent.match(versionRegex[key]);
                        if (tmp && tmp.length > 1) {
                            browser[key] = detected = true;
                            browser.version = parseFloat(tmp[1] || 0);
                            break;
                        }
                    }
                }
            }
            if (!detected) {
                browser.others = true;
            }
        }
    };

    var fn = detector[appName];

    if (fn) {
        detector[appName]();
    }

    tui.util.browser = browser;
})(window.tui);
