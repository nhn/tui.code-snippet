'use strict';

describe('date format', function() {
    function forEachArray(arr, iteratee, context) {
        var index = 0,
            len = arr.length;

        context = context || null;

        for (; index < len; index += 1) {
            if (iteratee.call(context, arr[index], index, arr) === false) {
                break;
            }
        }
    }

    it('date format function is defined', function() {
        expect(ne.util.formDate).toBeDefined();
    });

    describe('test various inputs', function() {
        var formDate = ne.util.formDate,
            validInputs = [
                {year: 1999, month: 9, date: 9, hour: 0, minute: 2},
                {year: 2010, month: 12, date: 13, hour: 10, minute: 0},
                {year: 12, month: 1, date: 29, hour: 23, minute: 40}
            ],
            forms = [
                'yyyy-MM-dd',
                'yy-MM-dd',
                'yy-MM-DD',
                'yyyy년 M월 dd일',
                'yy, M-dd',
                'yyyy년 M/d',
                'yyyy-MM-d',
                '\\a, yyyy-MM-d',
                'MMM DD YYYY HH:mm',
                'MMMM DD YYYY H:m A'
            ],
            expectedResults = [
                [
                    '1999-09-09',
                    '99-09-09',
                    '99-09-09',
                    '1999년 9월 09일',
                    '99, 9-09',
                    '1999년 9/9',
                    '1999-09-9',
                    'a, 1999-09-9',
                    'Sep 09 1999 00:02',
                    'September 09 1999 0:2 AM'
                ], [
                    '2010-12-13',
                    '10-12-13',
                    '10-12-13',
                    '2010년 12월 13일',
                    '10, 12-13',
                    '2010년 12/13',
                    '2010-12-13',
                    'a, 2010-12-13',
                    'Dec 13 2010 10:00',
                    'December 13 2010 10:0 AM'
                ], [
                    '2012-01-29',
                    '12-01-29',
                    '12-01-29',
                    '2012년 1월 29일',
                    '12, 1-29',
                    '2012년 1/29',
                    '2012-01-29',
                    'a, 2012-01-29',
                    'Jan 29 2012 23:40',
                    'January 29 2012 11:40 PM'
                ]
            ];

        //기본
        forEachArray(validInputs, function(date, inputIndex) {
            forEachArray(forms, function(form, formIndex) {
                it(inputIndex + ': plain object {' + date.year + ',' + date.month + ',' + date.date +
                ',' + date.hour + ',' + date.minute + '} -> ' + form, function() {
                    var result = formDate(form, date);

                    expect(result).toEqual(expectedResults[inputIndex][formIndex]);
                });
            });
        });

        forEachArray(validInputs, function(date, inputIndex) {
            forEachArray(forms, function(form, formIndex) {
                it(inputIndex + ': Date object {' + date.year + ',' + date.month + ',' + date.date +
                ',' + date.hour + ',' + date.minute + '} -> ' + form, function() {
                    var nYear = (date.year) < 100 ? date.year + 2000 : date.year,
                        nMonth = date.month - 1,
                        nDate = date.date;

                    var dt = new Date(nYear, nMonth, nDate, date.hour, date.minute),
                        result = formDate(form, dt);

                    expect(result).toEqual(expectedResults[inputIndex][formIndex]);
                });
            });
        });
    });
});