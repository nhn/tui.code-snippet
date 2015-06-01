
/**
 * @fileoverview 타입체크 모듈
 * @author FE개발팀
 * @dependency type.js
 */

(function(ne) {
    'use strict';

    var tokens = /[\\]*YYYY|[\\]*YY|[\\]*MMMM|[\\]*MMM|[\\]*MM|[\\]*M|[\\]*DD|[\\]*D|[\\]*HH|[\\]*H|[\\]*A/gi,
        MONTH_STR = ["Invalid month", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        MONTH_DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        replaceMap = {
            M: function(date) {
                return Number(date.month);
            },
            MM: function(date) {
                var month = date.month;
                return (Number(month) < 10) ? '0' + month : month;
            },
            MMM: function(date) {
                return MONTH_STR[Number(date.month)].substr(0, 3);
            },
            MMMM: function(date) {
                return MONTH_STR[Number(date.month)];
            },
            D: function(date) {
                return Number(date.date);
            },
            d: function(date) {
                return replaceMap.D(date);
            },
            DD: function(date) {
                var dayInMonth = date.date;
                return (Number(dayInMonth) < 10) ? '0' + dayInMonth : dayInMonth;
            },
            dd: function(date) {
                return replaceMap.DD(date);
            },
            YY: function(date) {
                return Number(date.year) % 100;
            },
            yy: function(date) {
                return replaceMap.YY(date);
            },
            YYYY: function(date) {
                var prefix = '20',
                    year = date.year;
                if (year > 69 && year < 100) {
                    prefix = '19';
                }
                return (Number(year) < 100) ? prefix + String(year) : year;
            },
            yyyy: function(date) {
                return replaceMap.YYYY(date);
            },
            A: function(date) {
                return date.meridian;
            },
            a: function(date) {
                return date.meridian.toLowerCase();
            },
            hh: function(date) {
                var hour = date.hour;
                return (Number(hour) < 10) ? '0' + hour : hour;
            },
            HH: function(date) {
                return replaceMap.hh(date);
            },
            h: function(date) {
                return String(Number(date.hour));
            },
            H: function(date) {
                return replaceMap.h(date);
            },
            m: function(date) {
                return String(Number(date.minute));
            },
            mm: function(date) {
                var minute = date.minute;
                return (Number(minute) < 10) ? '0' + minute : minute;
            }
        },
        toString = Object.prototype.toString;

    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    /* istanbul ignore if */
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * 인자가 Date 객체인지 확인
     * @param {*} obj  평가할 대상
     * @returns {boolean} 결과
     * @memberOf ne.util
     */
    function isDate(obj) {
        return toString.call(obj) === '[object Date]';
    }

    /**
     * year, month, date가 유효한지 확인
     * @param {number} year  년도
     * @param {number} month 월
     * @param {number} date 일
     * @returns {boolean} 결과
     */
    function isValidDate(year, month, date) {
        var isValidYear,
            isValidMonth,
            isValid,
            lastDayInMonth;

        year = Number(year);
        month = Number(month);
        date = Number(date);

        isValidYear = (year > -1 && year < 100) || (year > 1969) && (year < 2070);
        isValidMonth = (month > 0) && (month < 13);

        if (!isValidYear || !isValidMonth) {
            return false;
        }

        lastDayInMonth = MONTH_DAYS[month];
        if (month === 2 && year % 4 === 0) {
            if (year % 100 !== 0 || year % 400 === 0) {
                lastDayInMonth = 29;
            }
        }

        isValid = (date > 0) && (date <= lastDayInMonth);
        return isValid;
    }

    /**
     * 해당 form 형식으로 날짜 문자열을 만들어서 반환
     * @param {string} form 날짜 형식 문자열
     * @param {Date|Object} date 날짜 객체
     * @returns {boolean|string} 결과, false 또는 문자열
     * @memberOf ne.util
     * @example
     *      key         | Shorthand
     *      ------------|-----------------------
     *      years       | YY / YYYY / yy / yyyy
     *      months(n)   | M / MM
     *      months(str) | MMM / MMMM
     *      days        | D / DD / d / dd
     *      hours       | H / HH / h / hh
     *      minutes     | m / mm
     *      AM/PM       | A / a
     */
    function formatDate(form, date) {
        var meridian,
            nDate,
            resultStr;

        if (isDate(date)) {
            nDate = {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                date: date.getDate(),
                hour: date.getHours(),
                minute: date.getMinutes()
            };
        } else {
            nDate = {
                year: date.year,
                month: date.month,
                date: date.date,
                hour: date.hour,
                minute: date.minute
            };
        }

        if (!isValidDate(nDate.year, nDate.month, nDate.date)) {
            return false;
        }

        nDate.meridian = '';
        if (/[^\\][aA]\b/g.test(form)) {
            meridian = (nDate.hour > 12) ? 'PM' : 'AM';
            nDate.hour %= 12;
            nDate.meridian = meridian;
        }

        resultStr = form.replace(tokens, function(key) {
            if (key.indexOf('\\') > -1) {
                return key.replace(/\\/g, '');
            } else {
                return replaceMap[key](nDate) || '';
            }
        });
        return resultStr;
    }

    ne.util.isDate = isDate;
    ne.util.formatDate = formatDate;
})(window.ne);

