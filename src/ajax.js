/**
 * @fileoverview
 * @author FE개발팀
 */

(function(ne) {
    'use strict';
    if (!ne) {
        ne = window.ne = {};
    }
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    var ajax = {};

    /**
     * Ajax 요청 정보 저장 객체
     * @property _ajaxRequestData
     * @private
     * @type {DataObject}
     */
    ajax._ajaxRequestData = {};
    /**
     * 공통 Ajax 처리 함수
     * @method ajax
     * @param {String} api urlCode 페이지 코드 (pug.variables._url에 저장된 값) 혹은 API URL 직접 입력
     * @param {DataObject} options Ajax 요청 옵션 객체
     * 		@param {DataObject} [options.data] Ajax 요청 시 함께 전달할 파라미터 객체
     * 		@param {String} [options.type="post"] ajax 요청 형식
     * 		@param {String} [options.dataType="json"] ajax 응답받을 데이터 형식
     * 		@param {Funtion} [options.complete] 전송이 완료되었을 시 실행될 콜백함수
     * 		@param {Funtion} [options.success] 전송이 성공하였을 시 실행될 콜백함수
     * 		@param {Funtion} [options.error] 전송이 실패하였을 시 실행될 콜백함수
     * - $Ajax() 옵션 그대로 사용가능<br />
     * - 추가적인 옵션<br />
     *  bNotUseErrorAlert : Ajax 통신 중에, 에러가 발생하더라도, 얼럿을 띄우지 않도록 할 경우 true로 설정
     *  sResultType : 응답 포맷
     * @return {Object} $Ajax() 객체
     * @example
     * ne.util.ajax.request(url, {
     *	 "action" : "insertList",
     *	 "page" : 3
     *	 "success" : function(responseData, status, jqXHR){
     *		console.log("응답 데이터 : ", responseData.myData);
     *	 }
     * });
     */
    ajax.request = function(api, options) {
        // Ajax 요청을 할 API 설정
        var url = api;
        if (url) {
            // 랜덤 아이디 생성
            var randomId = ajax.util._getRandomId();

            // Ajax 요청용 파라미터 객체 설정
            options = options || {};
            options._complete = options.complete;
            options._success = options.success;
            options._error = options.error;
            options = $.extend(options, {
                url: url,
                data: options.data || {},
                type: options.type || 'post',
                dataType: options.dataType || 'json',
                complete: $.proxy(this._onAjaxComplete, this, randomId),
                success: $.proxy(this._onAjaxSuccess, this, randomId),
                error: $.proxy(this._onAjaxError, this, randomId)
            });

            // 중복된 요청일 경우 요청 중단
            var isMatchedURL,
                isExistJSON,
                x;
            for (x in this._ajaxRequestData) {
                isMatchedURL = options.url === this._ajaxRequestData[x].url;
                isExistJSON = ne.util.compareJSON(this._ajaxRequestData[x].data, options.data);
                if (isMatchedURL && isExistJSON) {
                    return false;
                }
            }

            // 요청 정보를 저장
            this._ajaxRequestData[randomId] = ajax.util.cloningObject(options);
            $.ajax(options);
        } else {
            alert('요청을 보낼 URL을 입력해 주시기 바랍니다.');
            return false;
        }
    };

    /**
     * ajax 전송이 완료되었을 때 실행되는 콜백함수
     * - Ajax 요청이 완료되었을 때 수행되며, HTTP 상태 코드와 서버에서의 응답 결과에 따라 공통된 처리를 수행한다.
     * - Ajax 요청 시, 사용자가 등록한 콜백이 있으면 실행한다.
     *
     * @method _onAjaxComplete
     * @param {String} requestKey Ajax 요청에 대한 고유 아이디
     * @param {jqXHR} jqXHR Ajax 응답 객체
     * @param {String} status Ajax 응답 status
     * @private
     */
    ajax._onAjaxComplete = function(requestKey, jqXHR, status) {
        var requestData = this._ajaxRequestData[requestKey];
        if (requestData) {
            if (requestData['_complete'] && $.isFunction(requestData['_complete'])) {
                requestData['_complete'](status, jqXHR);
            }
            delete this._ajaxRequestData[requestKey];
        } else {
            throw new Error('Ajax 요청 정보가 없습니다.');
        }
    };

    /**
     * ajax 전송이 성공하였을 때 실행되는 콜백함수
     * - 응답값의 result가 true일 때 실행된다
     * - Ajax 요청이 완료되었을 때 수행되며, HTTP 상태 코드와 서버에서의 응답 결과에 따라 공통된 처리를 수행한다.
     * - Ajax 요청 시, 사용자가 등록한 콜백이 있으면 실행한다.
     *
     * @method _onAjaxSuccess
     * @param {String} requestKey Ajax 요청에 대한 고유 아이디
     * @param {DataObject} responseData Ajax 응답받은 데이터
     * 		@param {Boolean} [responseData.result] 정상적인 응답결과인지 여부
     * 		@param {String} [responseData.data.message] 정의되어 있을 경우, 이 문자열로 시스템얼럿 발생
     * 		@param {String} [responseData.data.redirectUrl] 이동시킬 url, 있을 경우 리다이렉트 처리
     * 		@param {Boolean} [responseData.data.closeWindow] 창 닫을지 여부, true일 경우 현재창 닫음
     * @param {String} status Ajax 응답 status
     * @param {jqXHR} jqXHR Ajax 응답 객체
     * @private
     */
    ajax._onAjaxSuccess = function(requestKey, responseData, status, jqXHR) {
        var requestData = this._ajaxRequestData[requestKey];
        if (requestData) {
            var result = true;
            if (requestData['_success'] && $.isFunction(requestData['_success'])) {
                result = requestData['_success'](responseData, status, jqXHR);
            }
            if (result !== false && responseData && responseData.data) {
                if (responseData.data.message) {
                    alert(responseData.data.message);
                }

                if (responseData.data.redirectUrl) {
                    location.href = responseData.data.redirectUrl;
                }

                if (responseData.data.closeWindow) {
                    ajax.util.close(true);
                }
            }
        } else {
            throw new Error('Ajax 요청 정보가 없습니다.');
        }
    };

    /**
     * ajax 전송이 성공하였을 때 실행되는 콜백함수
     * - 응답값의 result가 false일 때 실행된다
     * - Ajax 요청이 완료되었을 때 수행되며, HTTP 상태 코드와 서버에서의 응답 결과에 따라 공통된 처리를 수행한다.
     * - Ajax 요청 시, 사용자가 등록한 콜백이 있으면 실행한다.
     *
     * @method _onAjaxError
     * @param {String} requestKey Ajax 요청에 대한 고유 아이디
     * @param {jqXHR} jqXHR Ajax 응답 객체
     * @param {String} status Ajax 응답 status
     * @param {String} errorMessage 서버로부터 전달받은 에러메세지
     * @private
     */
    ajax._onAjaxError = function(requestKey, jqXHR, status, errorMessage){
        var requestData = this._ajaxRequestData[requestKey];
        if (requestData) {
            var result = true;
            if (requestData['_error'] && $.isFunction(requestData['_error'])) {
                result = requestData['_error'](jqXHR, status, errorMessage);
            }
        } else {
            throw new Error('Ajax 요청 정보가 없습니다.');
        }
    };

    /**
     * @modules ne.util.ajax.util
     */

    ajax.util = {};
    /**
     * 객체를 복제하여 돌려준다.
     *
     * @param {*} sourceTarget 복제할 대상
     * @returns {*}
     */
    ajax.util.cloningObject = function(sourceTarget) {
        var constructor,
            destinationTarget,
            x, y;

        if (typeof sourceTarget === 'object' && (constructor = this.getConstructorName(sourceTarget))) {
            destinationTarget = eval('new ' + constructor + '()');

            if (sourceTarget.prototype) {
                for (x in sourceTarget.prototype) {
                    destinationTarget.prototype[x] = this.cloningObject(sourceTarget.prototype[x]);
                }
            }

            for (y in sourceTarget) {
                if (sourceTarget[y] instanceof RegExp) {
                    destinationTarget[y] = eval(sourceTarget[y].toString());
                } else {
                    destinationTarget[y] = this.cloningObject(sourceTarget[y]);
                }
            }
            return destinationTarget;
        }

        destinationTarget = sourceTarget;
        return destinationTarget;
    };

    /**
     * 클래스의 이름을 문자열로 가져온다.
     *
     * @param {*} target constructor를 체크 할 오브젝트
     * @returns {String|null}
     */
    ajax.util.getConstructorName = function(target) {
        if (target && target.constructor) {
            var code = target.constructor.toString();
            var match = code.match(/function ([^\(]*)/);
            return (match && match[1]) || null;
        }
        return null;
    };

    /**
     * 랜덤한 문자열을 생성하는 함수
     *
     * @private
     * @return {String} 랜덤값
     */
    ajax.util._getRandomId = function() {
        return String(parseInt(Math.random() * 10000000000, 10));
    };

    /**
     * 닫기를 실행, 대상이 엘리먼트이면 이벤트 제거만 수행
     *
     * @param {*} skipBeforeUnload
     * @param popup
     */
    ajax.util.close = function(skipBeforeUnload, popup) {
        var target = popup || window;

        if (ne.util.isTruthy(skipBeforeUnload)) {
            $(target).off('beforeunload');
        }

        if (!target.closed) {
            target.opener = window.location.href;
            target.close();
        }

    };

    ne.util.ajax = ajax;

})(window.ne);
