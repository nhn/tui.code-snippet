/**
 * @fileoverview
 * @author FE개발팀
 * @dependency jquery.js
 */

(function(ne) {
    'use strict';
    if (!ne) {
        ne = window.ne = {};
    }

    /**
     * 배열의 값들을 전부 String 타입으로 변환한다.
     * @private
     * @param {Array}  arr 변환할 배열
     * @return {Array} 변환된 배열 결과 값
     */
    function _changeToStringInArray(arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i] = String(arr[i]);
        }
        return arr;
    }


    /**
     * $form 에 정의된 인풋 엘리먼트들의 값을 모아서 DataObject 로 구성하여 반환한다.
     * @param {jQuery} $form jQuery()로 감싼 폼엘리먼트
     * @return {object} form 내의 데이터들을 key:value 형태의 DataObject 로 반환한다.
     **/
    function getFormData($form) {
        var result = {};
        var valueList = $form.serializeArray();

        $.each(valueList, function() {
            if (result[this.name] !== undefined) {
                if (!result[this.name].push) {
                    result[this.name] = [result[this.name]];
                }
                result[this.name].push(this.value || '');
            } else {
                result[this.name] = this.value || '';
            }
        });
        return result;
    }
    /**
     * 폼 안에 있는 모든 인풋 엘리먼트를 배열로 리턴하거나, elementName에 해당하는 인풋 엘리먼트를 리턴한다.
     * @method getFormElement
     * @param {jquery} $form jQuery()로 감싼 폼엘리먼트
     * @param {String} [elementName] 특정 이름의 인풋 엘리먼트만 가져오고 싶은 경우 전달하며, 생략할 경우 모든 인풋 엘리먼트를 배열 형태로 리턴한다.
     * @return {jQuery}  jQuery 로 감싼 엘리먼트를 반환한다.
     */
    function getFormElement($form, elementName) {
        var formElement;
        if ($form && $form.length) {
            if (elementName) {
                formElement = $form.prop('elements')[elementName + ''];
            } else {
                formElement = $form.prop('elements');
            }
        }
        return $(formElement);
    }
    /**
     * 파라미터로 받은 데이터 객체를 이용하여 폼내에 해당하는 input 요소들의 값을 설정한다.
     *
     * @method setFormData
     * @param {jQuery} $form jQuery()로 감싼 폼엘리먼트
     * @param {Object} formData 폼에 설정할 폼 데이터 객체
     **/
    function setFormData($form, formData) {
        for (var x in formData) {
            if (formData.hasOwnProperty(x)) {
                setFormElementValue($form, x, formData[x]);
            }
        }
    }
    /**
     * elementName에 해당하는 인풋 엘리먼트에 formValue 값을 설정한다.
     * -인풋 엘리먼트의 이름을 기준으로 하기에 라디오나 체크박스 엘리먼트에 대해서도 쉽게 값을 설정할 수 있다.
     * @param {jQuery} $form jQuery()로 감싼 폼엘리먼트
     * @param {String}  elementName 값을 설정할 인풋 엘리먼트의 이름
     * @param {String|Array} formValue 인풋 엘리먼트에 설정할 값으로 체크박스나 멀티플 셀렉트박스인 경우에는 배열로 설정할 수 있다.
     **/
    function setFormElementValue($form, elementName, formValue) {
        var i, j, index, targetOption;
        var elementList = getFormElement($form, elementName, true);
        if (!elementList) {
            return;
        }
        elementList = elementList.nodeType == 1 ? [elementList] : elementList;

        for (var i = 0, targetElement; i < elementList.length; i++) {
            targetElement = elementList[i];
            switch (targetElement.type) {
                case 'radio':
                    targetElement.checked = (targetElement.value == formValue);
                    break;
                case 'checkbox':
                    if ($.isArray(formValue)) {
                        targetElement.checked = $.inArray(targetElement.value, _changeToStringInArray(formValue)) !== -1;
                    }else {
                        targetElement.checked = (targetElement.value == formValue);
                    }
                    break;
                case 'select-one':
                    index = -1;
                    for (j = 0; j < targetElement.options.length; j++) {
                        targetOption = targetElement.options[j];
                        if (targetOption.value == formValue || targetOption.text == formValue) {
                            index = j;
                        }
                    }
                    targetElement.selectedIndex = index;
                    break;
                case 'select-multiple':
                    if ($.isArray(formValue)) {
                        formValue = _changeToStringInArray(formValue);
                        for (j = 0; j < targetElement.options.length; j++) {
                            targetOption = targetElement.options[j];
                            targetOption.selected = $.inArray(targetOption.value, formValue) !== -1 ||
                                $.inArray(targetOption.text, formValue) !== -1;
                        }
                    }else {
                        index = -1;
                        for (j = 0; j < targetElement.options.length; j++) {
                            targetOption = targetElement.options[j];
                            if (targetOption.value == formValue || targetOption.text == formValue) {
                                index = j;
                            }
                        }
                        targetElement.selectedIndex = index;
                    }
                    break;
                default:
                    targetElement.value = formValue;
            }
        }
    }

    ne.getFormElement = getFormElement;
    ne.getFormData = getFormData;
    ne.setFormData = setFormData;
    ne.setFormElementValue = setFormElementValue;
})(window.ne);