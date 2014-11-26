describe('module:collection', function() {
    var objDummy,
        arrayDummy;

    beforeEach(function() {
        arrayDummy = [0, 1, 2, 3, 4, 5];
        objDummy = {_0: 0, _1: 1, _2: 2, _3: 3, _4: 4, _5: 5};
    });

    describe('forEachArray', function() {

        it('어레이나 유사어레이와 콜백펑션을 입력받아 객체의 내용을 순회할수있다.', function() {
            var oSum = 0;

            ne.util.forEachArray(arrayDummy, function(value) {
                oSum += value;
            });

            expect(oSum).toEqual(15);
        });


        it('콜백펑션이 false를 리턴하면 순회를 종료한다.', function() {
            var oSum = 0;

            ne.util.forEachArray(arrayDummy, function(value) {
                oSum += value;

                if(oSum === 3){
                    return false;
                }
            });

            expect(oSum).toEqual(3);
        });

    });

    describe('forEachOwnProperties', function() {

        it('객체와 콜백펑션을 입력받아 객체의 내용을 순회할수있다.', function() {
            var oSum = 0;

            ne.util.forEachOwnProperties(objDummy, function(value) {
                oSum += value;
            });

            expect(oSum).toEqual(15);
        });

        it('콜백펑션이 false를 리턴하면 순회를 종료한다.', function() {
            var oSum = 0;

            ne.util.forEachOwnProperties(objDummy, function(value) {
                oSum += value;

                if(oSum === 3){
                    return false;
                }
            });

            expect(oSum).toEqual(3);
        });

    });

    describe('forEach', function() {
        it('배열과 콜백펑션을 입력받아 배열의 내용을 순회할수있다.', function() {
            var aSum = 0;

            ne.util.forEach(arrayDummy, function(value) {
                aSum += value;
            });

            expect(aSum).toEqual(15);
        });

        it('객체와 콜백펑션을 입력받아 객체의 내용을 순회할수있다.', function() {
            var oSum = 0;

            ne.util.forEach(objDummy, function(value) {
                oSum += value;
            });

            expect(oSum).toEqual(15);
        });
    });
    describe('map', function() {
        it('배열을 입력받아 콜백을 통해 새로운 배열을 생성한다.', function() {
            var aSum = 1,
                resultArray;

            resultArray = ne.util.map(arrayDummy, function(value) {
                return value + aSum;
            });

            expect(resultArray[0]).toEqual(1);
            expect(resultArray[1]).toEqual(2);
            expect(resultArray[2]).toEqual(3);
            expect(resultArray[3]).toEqual(4);
            expect(resultArray[4]).toEqual(5);
            expect(resultArray[5]).toEqual(6);
        });

        it('객체를 입력받아 콜백을 통해 새로운 배열을 생성한다.', function() {
            var aSum = 1,
                resultArray;

            resultArray = ne.util.map(objDummy, function(value) {
                return value + aSum;
            });

            expect(resultArray[0]).toEqual(1);
            expect(resultArray[1]).toEqual(2);
            expect(resultArray[2]).toEqual(3);
            expect(resultArray[3]).toEqual(4);
            expect(resultArray[4]).toEqual(5);
            expect(resultArray[5]).toEqual(6);
        });
    });
    describe('reduce', function() {
        it('배열을 순회하여 콜백의 실행결과를 다음 콜백에 전달해 연산한다.', function() {
            var result;

            result = ne.util.reduce(arrayDummy, function(stored, value) {
                return stored + value;
            });

            expect(result).toEqual(15);
        });

        it('객체를 순회하여 콜백의 실행결과를 다음 콜백에 전달해 연산한다.', function() {
            var result;

            result = ne.util.reduce(objDummy, function(stored, value) {
                return stored + value;
            });

            expect(result).toEqual(15);
        });
    })
    describe('toArray', function() {
        it('유사 배열 객체를 배열로 변환한다.', function() {
            var result,
                arrayLike = {
                    0: 'one',
                    1: 'two',
                    2: 'three',
                    3: 'four',
                    length: 4
                };
            result = ne.util.toArray(arrayLike);
            expect(arrayLike instanceof Array).toBe(false);
            expect(result instanceof Array).toBe(true);

            result = ne.util.toArray(arguments);
            expect(arguments instanceof Array).toBe(false);
            expect(result instanceof Array).toBe(true);


        });
        it('인자의 length 프로퍼티 숫자 크기만큼 순회하며, length 가 없을 경우 빈 배열을 반환한다.', function() {
            var result,
                arrayLike = {
                    0: 'one',
                    1: 'two',
                    2: 'three',
                    3: 'four',
                    length: 2
                };
            result = ne.util.toArray(arrayLike);
            expect(result instanceof Array).toBe(true);
            expect(result.length).toBe(2);

            result = ne.util.toArray('abcde');
            expect(result instanceof Array).toBe(true);
            expect(result.length).toBe(5);

            result = ne.util.toArray(1);
            expect(result instanceof Array).toBe(true);
            expect(result.length).toBe(0);
        });

    });

    describe('filter', function() {
        it('배열을 순회하여, 콜백 실행 결과가 참인 새로울 배열을 만들어 리턴한다.', function() {
            var result;

            result = ne.util.filter(arrayDummy, function(value) {
                return (value % 2) === 0;
            });

            expect(result).toEqual([0, 2, 4]);
        });
        it('객체를 순회하여 콜백 실행 결과가 참인 새로운 객체를 만들어 리턴한다.', function() {
            var result;

            result = ne.util.filter(objDummy, function(value) {
                return (value % 2) === 0;
            });
            expect(result).toEqual({_0: 0, _2: 2, _4: 4});
        });
    });
});