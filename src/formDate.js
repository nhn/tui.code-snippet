
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
            M: function(year, month) {
                return Number(month);
            },
            MM: function(year, month) {
                return (Number(month) < 10) ? '0' + month : month;
            },
            MMM: function(year, month) {
                return MONTH_STR[Number(month)].substr(0, 3);
            },
            MMMM: function(year, month) {
                return MONTH_STR[Number(month)];
            },
            D: function(year, month, dayInMonth) {
                return Number(dayInMonth);
            },
            d: function(year, month, dayInMonth) {
                return replaceMap.D(year, month, dayInMonth);
            },
            DD: function(year, month, dayInMonth) {
                return (Number(dayInMonth) < 10) ? '0' + dayInMonth : dayInMonth;
            },
            dd: function(year, month, dayInMonth) {
                return replaceMap.DD(year, month, dayInMonth);
            },
            YY: function(year) {
                return Number(year) % 100;
            },
            yy: function(year) {
                return replaceMap.YY(year);
            },
            YYYY: function(year) {
                var prefix = '20';
                if (year > 69 && year < 100) {
                    prefix = '19';
                }
                return (Number(year) < 100) ? prefix + String(year) : year;
            },
            yyyy: function(year) {
                return replaceMap.YYYY(year);
            },
            A: function(year, month, dayInMonth, hour, minute, meridian) {
                return meridian;
            },
            a: function(year, month, dayInMonth, hour, minute, meridian) {
                return meridian.toLowerCase();
            },
            hh: function(year, month, dayInMonth, hour) {
                return (Number(hour) < 10) ? '0' + hour : hour;
            },
            HH: function(year, month, dayInMonth, hour) {
                return replaceMap.hh(year, month, dayInMonth, hour);
            },
            h: function(year, month, dayInMonth, hour) {
                return String(Number(hour));
            },
            H: function(year, month, dayInMonth, hour) {
                return replaceMap.h(year, month, dayInMonth, hour);
            },
            m: function(year, month, dayInMonth, hour, minute) {
                return String(Number(minute));
            },
            mm: function(year, month, dayInMonth, hour, minute) {
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

        isValidYear = (year > 9 && year < 100) || (year > 1899) && (year < 3000);
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
    function formDate(form, date) {
        var year,
            month,
            dayInMonth,
            hour,
            minute,
            isDefined,
            meridian;

        if (isDate(date)) {
            year = date.getFullYear();
            month = date.getMonth() + 1;
            dayInMonth = date.getDate();
            hour = date.getHours();
            minute = date.getMinutes();
        } else {
            year = date.year;
            month = date.month;
            dayInMonth = date.date;
            hour = date.hour;
            minute = date.minute;
        }
        isDefined = !!(year && month && dayInMonth);

        if (/[^\\][aA]/g.test(form)) {
            meridian = (hour > 12) ? 'PM' : 'AM';
            hour %= 12;
        }

        return isDefined && isValidDate(year, month, dayInMonth) &&
            form.replace(tokens, function(key) {
                if (key.indexOf('\\') > -1) {
                    return key.replace(/\\/g, '');
                } else {
                    return replaceMap[key](year, month, dayInMonth, hour, minute, meridian) || '';
                }
            });
    }

    ne.util.isDate = isDate;
    ne.util.formDate = formDate;
})(window.ne);

