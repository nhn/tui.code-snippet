/**
 * @fileoverview 모듈 전체에서 사용하는 browser detection module
 * @author minhyeong.kim@nhnent.com
 */

define(function() {
    'use strict';

    /**
     * 다음의 브라우저에 한하여 종류와 버전을 제공하는 모듈
     * 
     * - ie7 ~ ie11
     * - chrome
     * - firefox
     * - safari
     * @exports browser
     */
    var browser = {
        chrome: undefined,
        firefox: undefined,
        safari: undefined,
        msie: undefined,
        others: undefined,
        version: undefined
    };

    var nav = window.navigator,
        appName = nav.appName.replace(/\s/g, '_'),
        userAgent = nav.userAgent;

    var rIE = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})'),
        rIE11 = /Trident.*rv\:11\./,
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
                // ie11
                browser.msie = true;
                browser.version = 11;
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
            
            // 브라우저 검출 실패 시 others로 표기
            if (!detected) {
                browser.others = true;
            }
        }
    };

    browser.detect = function() {
        for (key in browser) { if (browser.hasOwnProperty(key)) {
            if (key === 'detect') {
                continue;
            }
            browser[key] = undefined;
        }}
        detector[appName]();
    };

    browser.detect();

    return browser;

});
