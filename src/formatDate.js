/**
 * @fileoverview This module has a function for date format.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency type.js, object.js
 */

(function(tui) {
    'use strict';

    var tokens = /[\\]*YYYY|[\\]*YY|[\\]*MMMM|[\\]*MMM|[\\]*MM|[\\]*M|[\\]*DD|[\\]*D|[\\]*HH|[\\]*H|[\\]*A/gi;
    var MONTH_STR = ["Invalid month", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var MONTH_DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var replaceMap = {
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
            return date.meridiem;
        },
        a: function(date) {
            return date.meridiem;
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
    };

    /* istanbul ignore if */
    if (!tui) {
        tui = window.tui = {};
    }
    /* istanbul ignore if */
    if (!tui.util) {
        tui.util = window.tui.util = {};
    }

    /**
     * Check whether the given variables are valid date or not.
     * @param {number} year - Year
     * @param {number} month - Month
     * @param {number} date - Day in month.
     * @returns {boolean} Is valid?
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
     * Return a string that transformed from the given form and date.
     * @param {string} form - Date form
     * @param {Date|Object} date - Date object
     * @param {{meridiemSet: {AM: string, PM: string}}} option - Option
     * @returns {boolean|string} A transformed string or false.
     * @memberOf tui.util
     * @example
     *  // key             | Shorthand
     *  // --------------- |-----------------------
     *  // years           | YY / YYYY / yy / yyyy
     *  // months(n)       | M / MM
     *  // months(str)     | MMM / MMMM
     *  // days            | D / DD / d / dd
     *  // hours           | H / HH / h / hh
     *  // minutes         | m / mm
     *  // meridiem(AM,PM) | A / a
     *
     *  var dateStr1 = formatDate('yyyy-MM-dd', {
     *      year: 2014,
     *      month: 12,
     *      date: 12
     *  });
     *  alert(dateStr1); // '2014-12-12'
     *
     *  var dateStr2 = formatDate('MMM DD YYYY HH:mm', {
     *      year: 1999,
     *      month: 9,
     *      date: 9,
     *      hour: 0,
     *      minute: 2
     *  })
     *  alert(dateStr2); // 'Sep 09 1999 00:02'
     *
     *  var dt = new Date(2010, 2, 13),
     *      dateStr3 = formatDate('yyyy년 M월 dd일', dt);
     *
     *  alert(dateStr3); // '2010년 3월 13일'
     *
     *  var option4 = {
     *      meridiemSet: {
     *          AM: '오전',
     *          PM: '오후'
     *      }
     *  };
     *  var date4 = {year: 1999, month: 9, date: 9, hour: 13, minute: 2};
     *  var dateStr4 = formatDate('yyyy-MM-dd A hh:mm', date4, option4));
     *
     *  alert(dateStr4); // '1999-09-09 오후 01:02'
     */
    function formatDate(form, date, option) {
        var meridiem, nDate, resultStr;

        if (tui.util.isDate(date)) {
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

        nDate.meridiem = '';
        if (/([^\\]|^)[aA]\b/.test(form)) {
            meridiem = (nDate.hour > 11) ?
                tui.util.pick(option, 'meridiemSet', 'PM') || 'PM'
                : tui.util.pick(option, 'meridiemSet', 'AM') || 'AM';
            if (nDate.hour > 12) { //See the clock system: https://en.wikipedia.org/wiki/12-hour_clock
                nDate.hour %= 12;
            }
            if (nDate.hour === 0) {
                nDate.hour = 12;
            }
            nDate.meridiem = meridiem;
        }

        resultStr = form.replace(tokens, function(key) {
            if (key.indexOf('\\') > -1) { // escape character
                return key.replace(/\\/, '');
            }
            return replaceMap[key](nDate) || '';
        });
        return resultStr;
    }

    tui.util.formatDate = formatDate;
})(window.tui);
