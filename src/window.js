/**
 * @fileoverview 팝업 윈도우 관리 모듈
 * @author FE개발팀
 * @dependency browser.js, type.js, object.js, collection.js, func.js, window.js
 */

(function(ne) {
    'use strict';
    if (!ne) {
        ne = window.ne = {};
    }
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    var popup_id = 0;

    /**
     * 팝업 컨트롤 클래스
     * @constructor
     * @memberof ne.util
     */
    function Popup() {

        /**
         * 팝업창 캐시용 객체 프로퍼티
         * @type {object}
         */
        this.openedPopup = {};

        /**
         * IE7 에서 부모창과 함께 팝업이 닫힐 지 여부를 가리는 closeWithParent프로퍼티를 Window객체에 추가하면
         * 오류가 발생하는 문제가 있어서, 이를 저장하기 위한 별개의 프로퍼티를 만듦.
         * @type {object}
         */
        this.closeWithParentPopup = {};

        /**
         * IE11 팝업 POST 데이터 브릿지
         * @type {string}
         */
        this.postDataBridgeUrl = '';
    }

    /**********
     * public methods
     **********/

    /**
     * 현재 윈도우가 관리하는 팝업 창 리스트를 반환합니다.
     * @param {String} [key] key에 해당하는 팝업을 반환한다
     * @returns {Object} popup window list object
     */
    Popup.prototype.getPopupList = function(key) {
        var target;
        if (ne.util.isExisty(key)) {
            target = this.openedPopup[key];
        } else {
            target = this.openedPopup;
        }
        return target;
    };

    /**
     * 팝업창을 여는 메서드
     *
     * IE11에서 POST를 사용해 팝업에 값을 전달할 땐 꼭 postDataBridgeUrl을 설정해야 한다
     *
     * 주의: 다른 도메인을 팝업으로 띄울 경우 보안 문제로 팝업 컨트롤 기능을 사용할 수 없다.
     *
     * @param {String} url 팝업 URL
     * @param {object} options
     *     @param {String} [options.popupName]
     *     팝업창의 key를 설정할 수 있습니다.
     *     이 key를 지정하면 같은 key로 팝업을 열려 할 때 이미 열려있는 경우에는 포커스를 주고, 없는 경우 같은 key로 팝업을 엽니다.
     *
     *     @param {String} [options.popupOptionStr=""]
     *     팝업 윈도우의 기능을 설정할 수 있습니다. window.open() 메서드의 세 번째 인자를 그대로 전달하면 됩니다.
     *     이 기능의 적용에는 브라우저마다 차이가 있습니다. http://www.w3schools.com/jsref/met_win_open.asp 를 참고하시기 바랍니다.
     *
     *     @param {Boolean} [options.closeWithParent=true]
     *     팝업 윈도우를 연 윈도우가 닫힐 때 같이 닫힐 지 여부를 설정할 수 있습니다.
     *
     *     @param {Boolean} [options.useReload=false]
     *     이미 열린 팝업 윈도우를 다시 열 때 새로고침 할 것인지를 설정할 수 있습니다. post 데이터를 전송하는 경우 일부 브라우저에서는 다시 전송 여
     *     부를 묻는 메시지가 출력될 수 있습니다.
     *
     *     @param {string} [options.postDataBridgeUrl='']
     *     IE11 에서 POST로 팝업에 데이터를 전송할 때 팝업이 아닌 새 탭으로 열리는 버그를 우회하기 위한 페이지의 url을 입력합니다.
     *     참고: http://wiki.nhnent.com/pages/viewpage.action?pageId=240562844
     *
     *     @param {String} [options.method=get]
     *     팝업 윈도우에 폼 데이터 자동 전송 기능 이용 시, 데이터 전달 방식을 지정할 수 있습니다.
     *
     *     @param {object} [options.param=null]
     *     팝업 윈도우에 폼 데이터 자동 전송 기능 이용 시, 전달할 데이터를 객체로 넘겨주시면 됩니다.
     */
    Popup.prototype.openPopup = function(url, options) {
        options = ne.util.extend({
            popupName: 'popup_' + popup_id + '_' + (+new Date()),
            popupOptionStr: '', // 팝업 옵션
            useReload: true, // 팝업이 열린 상태에서 다시 열려고 할 때 새로고침 하는지 여부
            closeWithParent: true, // 부모창 닫힐때 팝업 닫기 여부
            method: 'get',
            param: {}
        }, options || {});

        options.method = options.method.toUpperCase();

        this.postDataBridgeUrl = options.postDataBridgeUrl || this.postDataBridgeUrl;

        var popup,
            formElement,
            useIEPostBridge = options.method === 'POST' && options.param &&
                ne.util.browser.msie && ne.util.browser.version === 11;

        if (!ne.util.isExisty(url)) {
            throw new Error('Popup#open() 팝업 URL이 입력되지 않았습니다');
        }

        popup_id += 1;

        // 폼 전송 기능 이용 시 팝업 열기 전 폼을 생성하고 팝업이 열림과 동시에 폼을 전송한 후 폼을 제거한다.
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

        if (!ne.util.isExisty(popup)) {
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

        if (!popup || popup.closed || ne.util.isUndefined(popup.closed)) {
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

        window.onunload = ne.util.bind(this.closeAllPopup, this);
    };

    /**
     * 팝업 윈도우를 닫습니다.
     * @param {Boolean} [skipBeforeUnload]
     * @param {Window} [popup] 닫을 윈도우 객체. 생략하면 현재 윈도우를 닫습니다
     */
    Popup.prototype.close = function(skipBeforeUnload, popup) {
        skipBeforeUnload = ne.util.isExisty(skipBeforeUnload) ? skipBeforeUnload : false;

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
     * 이 창에서 열린 모든 팝업을 닫습니다.
     * @param {Boolean} closeWithParent true 면 openPopup 메서드 호출 시 부모창과 함께 닫기로 설정된 팝업들만 닫습니다.
     */
    Popup.prototype.closeAllPopup = function(closeWithParent) {
        var hasArg = ne.util.isExisty(closeWithParent);

        ne.util.forEachOwnProperties(this.openedPopup, function(popup, key) {
            if ((hasArg && this.closeWithParentPopup[key]) || !hasArg) {
                this.close(false, popup);
            }
        }, this);
    };

    /**
     * 해당 팝업 윈도우를 활성화 시킨다.
     * @param {String} popupName 활성화 시킬 팝업 윈도우 이름
     */
    Popup.prototype.focus = function(popupName) {
        this.getPopupList(popupName).focus();
    };

    /**
     * 브라우저의 query string을 파싱해 객체 형태로 반환
     * @return {object}
     * @private
     */
    Popup.prototype.parseQuery = function() {
        var search,
            pair,
            param = {};

        search = window.location.search.substr(1);
        ne.util.forEachArray(search.split('&'), function(part) {
            pair = part.split('=');
            param[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        });

        return param;
    };

    /**
     * 주어진 인자로 숨겨진 폼을 생성하여 문서에 추가하고 반환
     * @param {string} action 폼 전송 URL
     * @param {object} [data] 폼 전송 시 보내질 데이터
     * @param {string} [method]
     * @param {string} [target]
     * @param {HTMLElement} [container]
     * @returns {HTMLElement}
     */
    Popup.prototype.createForm = function(action, data, method, target, container) {
        var form = document.createElement('form'),
            input;

        container = container || document.body;

        form.method = method || 'POST';
        form.action = action || '';
        form.target = target || '';
        form.style.display = 'none';

        ne.util.forEachOwnProperties(data, function(value, key) {
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
     * 객체를 쿼리스트링 형태로 변환
     * @param {object} object
     * @returns {string}
     * @private
     */
    Popup.prototype._parameterize = function(object) {
        var query = [];

        ne.util.forEachOwnProperties(object, function(value, key) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        });

        return query.join('&');
    };

    /**
     * 실제 팝업을 여는 메서드
     * @param {Boolean} useIEPostBridge IE11에서 팝업에 포스트 데이터를 전달할 때 우회 기능 사용 여부
     * @param {object} param 팝업에 전달할 데이터
     * @param {String} url 팝업 URL
     * @param {String} popupName 팝업 이름
     * @param {String} optionStr 팝업 기능 설정용 value ex) 'width=640,height=320,scrollbars=yes'
     * @returns {Window}
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

    ne.util.popup = new Popup();

})(window.ne);
