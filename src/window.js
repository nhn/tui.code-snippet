/**
 * @fileoverview This module has some methods for handling popup-window
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency browser.js, type.js, object.js, collection.js, func.js, window.js
 */

(function(tui) {
    'use strict';
    if (!tui) {
        tui = window.tui = {};
    }
    if (!tui.util) {
        tui.util = window.tui.util = {};
    }

    var popup_id = 0;

    /**
     * Popup management class
     * @constructor
     * @memberof tui.util
     */
    function Popup() {

        /**
         * Caching the window-contexts of opened popups
         * @type {Object}
         */
        this.openedPopup = {};

        /**
         * In IE7, an error occurs when the closeWithParent property attaches to window object.<br>
         * So, It is for saving the value of closeWithParent instead of attaching to window object.
         * @type {Object}
         */
        this.closeWithParentPopup = {};

        /**
         * Post data bridge for IE11 popup
         * @type {string}
         */
        this.postDataBridgeUrl = '';
    }

    /**********
     * public methods
     **********/

    /**
     * Returns a popup-list administered by current window.
     * @param {string} [key] The key of popup.
     * @returns {Object} popup window list object
     */
    Popup.prototype.getPopupList = function(key) {
        var target;
        if (tui.util.isExisty(key)) {
            target = this.openedPopup[key];
        } else {
            target = this.openedPopup;
        }
        return target;
    };

    /**
     * Open popup
     * Caution:
     *  In IE11, when transfer data to popup by POST, must set the postDataBridgeUrl.
     *
     * @param {string} url - popup url
     * @param {Object} options
     *     @param {string} [options.popupName] - Key of popup window.<br>
     *      If the key is set, when you try to open by this key, the popup of this key is focused.<br>
     *      Or else a new popup window having this key is opened.
     *
     *     @param {string} [options.popupOptionStr=""] - Option string of popup window<br>
     *      It is same with the third parameter of window.open() method.<br>
     *      See {@link http://www.w3schools.com/jsref/met_win_open.asp}
     *
     *     @param {boolean} [options.closeWithParent=true] - Is closed when parent window closed?
     *
     *     @param {boolean} [options.useReload=false] - This property indicates whether reload the popup or not.<br>
     *      If true, the popup will be reloaded when you try to re-open the popup that has been opened.<br>
     *      When transmit the POST-data, some browsers alert a message for confirming whether retransmit or not.
     *
     *     @param {string} [options.postDataBridgeUrl=''] - Use this url to avoid a certain bug occuring when transmitting POST data to the popup in IE11.<br>
     *      This specific buggy situation is known to happen because IE11 tries to open the requested url not in a new popup window as intended, but in a new tab.<br>
     *      See {@link http://wiki.nhnent.com/pages/viewpage.action?pageId=240562844}
     *
     *     @param {string} [options.method=get] - The method of transmission when the form-data is transmitted to popup-window.
     *
     *     @param {Object} [options.param=null] - Using as parameters for transmission when the form-data is transmitted to popup-window.
     */
    Popup.prototype.openPopup = function(url, options) {
        options = tui.util.extend({
            popupName: 'popup_' + popup_id + '_' + (+new Date()),
            popupOptionStr: '',
            useReload: true,
            closeWithParent: true,
            method: 'get',
            param: {}
        }, options || {});

        options.method = options.method.toUpperCase();

        this.postDataBridgeUrl = options.postDataBridgeUrl || this.postDataBridgeUrl;

        var popup,
            formElement,
            useIEPostBridge = options.method === 'POST' && options.param &&
                tui.util.browser.msie && tui.util.browser.version === 11;

        if (!tui.util.isExisty(url)) {
            throw new Error('Popup#open() 팝업 URL이 입력되지 않았습니다');
        }

        popup_id += 1;

        /*
         * In form-data transmission
         * 1. Create a form before opening a popup.
         * 2. Transmit the form-data.
         * 3. Remove the form after transmission.
         */
        if (options.param) {
            if (options.method === 'GET') {
                url = url + (/\?/.test(url) ? '&' : '?') + this._parameterize(options.param);
            } else if (options.method === 'POST') {
                if (!useIEPostBridge) {
                    formElement = this.createForm(url, options.param, options.method, options.popupName);
                    url = 'about:blank';
                }
            }
        }

        popup = this.openedPopup[options.popupName];

        if (!tui.util.isExisty(popup)) {
            this.openedPopup[options.popupName] = popup = this._open(useIEPostBridge, options.param,
                url, options.popupName, options.popupOptionStr);

        } else {
            if (popup.closed) {
                this.openedPopup[options.popupName] = popup = this._open(useIEPostBridge, options.param,
                    url, options.popupName, options.popupOptionStr);

            } else {
                if (options.useReload) {
                    popup.location.replace(url);
                }
                popup.focus();
            }
        }

        this.closeWithParentPopup[options.popupName] = options.closeWithParent;

        if (!popup || popup.closed || tui.util.isUndefined(popup.closed)) {
            alert('브라우저에 팝업을 막는 기능이 활성화 상태이기 때문에 서비스 이용에 문제가 있을 수 있습니다. 해당 기능을 비활성화 해 주세요');
        }

        if (options.param && options.method === 'POST' && !useIEPostBridge) {
            if (popup) {
                formElement.submit();
            }
            if (formElement.parentNode) {
                formElement.parentNode.removeChild(formElement);
            }
        }

        window.onunload = tui.util.bind(this.closeAllPopup, this);
    };

    /**
     * Close the popup
     * @param {boolean} [skipBeforeUnload] - If true, the 'window.onunload' will be null and skip unload event.
     * @param {Window} [popup] - Window-context of popup for closing. If omit this, current window-context will be closed.
     */
    Popup.prototype.close = function(skipBeforeUnload, popup) {
        skipBeforeUnload = tui.util.isExisty(skipBeforeUnload) ? skipBeforeUnload : false;

        var target = popup || window;

        if (skipBeforeUnload) {
            window.onunload = null;
        }

        if (!target.closed) {
            target.opener = window.location.href;
            target.close();
        }
    };

    /**
     * Close all the popups in current window.
     * @param {boolean} closeWithParent - If true, popups having the closeWithParentPopup property as true will be closed.
     */
    Popup.prototype.closeAllPopup = function(closeWithParent) {
        var hasArg = tui.util.isExisty(closeWithParent);

        tui.util.forEachOwnProperties(this.openedPopup, function(popup, key) {
            if ((hasArg && this.closeWithParentPopup[key]) || !hasArg) {
                this.close(false, popup);
            }
        }, this);
    };

    /**
     * Activate(or focus) the popup of the given name.
     * @param {string} popupName - Name of popup for activation
     */
    Popup.prototype.focus = function(popupName) {
        this.getPopupList(popupName).focus();
    };

    /**
     * Return an object made of parsing the query string.
     * @return {Object} An object having some information of the query string.
     * @private
     */
    Popup.prototype.parseQuery = function() {
        var search,
            pair,
            param = {};

        search = window.location.search.substr(1);
        tui.util.forEachArray(search.split('&'), function(part) {
            pair = part.split('=');
            param[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        });

        return param;
    };

    /**
     * Create a hidden form from the given arguments and return this form.
     * @param {string} action - URL for form transmission
     * @param {Object} [data] - Data for form transmission
     * @param {string} [method] - Method of transmission
     * @param {string} [target] - Target of transmission
     * @param {HTMLElement} [container] - Container element of form.
     * @returns {HTMLElement} Form element
     */
    Popup.prototype.createForm = function(action, data, method, target, container) {
        var form = document.createElement('form'),
            input;

        container = container || document.body;

        form.method = method || 'POST';
        form.action = action || '';
        form.target = target || '';
        form.style.display = 'none';

        tui.util.forEachOwnProperties(data, function(value, key) {
            input = document.createElement('input');
            input.name = key;
            input.type = 'hidden';
            input.value = value;
            form.appendChild(input);
        });

        container.appendChild(form);

        return form;
    };

    /**********
     * private methods
     **********/

    /**
     * Return an query string made by parsing the given object
     * @param {Object} object - An object that has information for query string
     * @returns {string} - Query string
     * @private
     */
    Popup.prototype._parameterize = function(object) {
        var query = [];

        tui.util.forEachOwnProperties(object, function(value, key) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        });

        return query.join('&');
    };

    /**
     * Open popup
     * @param {boolean} useIEPostBridge - A switch option whether to use alternative of tossing POST data to the popup window in IE11
     * @param {Object} param - A data for tossing to popup
     * @param {string} url - Popup url
     * @param {string} popupName - Popup name
     * @param {string} optionStr - Setting for popup, ex) 'width=640,height=320,scrollbars=yes'
     * @returns {Window} Window context of popup
     * @private
     */
    Popup.prototype._open = function(useIEPostBridge, param, url, popupName, optionStr) {
        var popup;

        if (useIEPostBridge) {
            url = this.postDataBridgeUrl + '?storageKey=' + encodeURIComponent(popupName) +
            '&redirectUrl=' + encodeURIComponent(url);
            if (!window.localStorage) {
                alert('IE11브라우저의 문제로 인해 이 기능은 브라우저의 LocalStorage 기능을 활성화 하셔야 이용하실 수 있습니다');
            } else {
                localStorage.removeItem(popupName);
                localStorage.setItem(popupName, JSON.stringify(param));

                popup = window.open(url, popupName, optionStr);
            }
        } else {
            popup = window.open(url, popupName, optionStr);
        }

        return popup;
    };

    tui.util.popup = new Popup();

})(window.tui);
