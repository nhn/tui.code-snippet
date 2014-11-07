describe('module:collection', function() {
    var objDummy,
        arrayDummy;

    beforeEach(function() {
        arrayDummy = [0, 1, 2, 3, 4, 5];
        objDummy = {_0: 0, _1: 1, _2: 2, _3: 3, _4: 4, _5: 5};
    });

    describe('forEachOwnProperties', function() {

        it('객체와 콜백펑션을 입력받아 객체의 내용을 순회할수있다.', function() {
            var oSum = 0;

            ne.forEachOwnProperties(objDummy, function(value) {
                oSum += value;
            });

            expect(oSum).toEqual(15);
        });

    });

    describe('forEach', function() {
        it('배열과 콜백펑션을 입력받아 배열의 내용을 순회할수있다.', function() {
            var aSum = 0;

            ne.forEach(arrayDummy, function(value) {
                aSum += value;
            });

            expect(aSum).toEqual(15);
        });

        it('객체와 콜백펑션을 입력받아 객체의 내용을 순회할수있다.', function() {
            var oSum = 0;

            ne.forEach(objDummy, function(value) {
                oSum += value;
            });

            expect(oSum).toEqual(15);
        });

    });
    describe('map', function() {
        it('배열을 입력받아 콜백을 통해 새로운 배열을 생성한다.', function() {
            var aSum = 1,
                resultArray;

            resultArray = ne.map(arrayDummy, function(value) {
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

            resultArray = ne.map(objDummy, function(value) {
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

            result = ne.reduce(arrayDummy, function(stored, value) {
                return stored + value;
            });

            expect(result).toEqual(15);
        });

        it('객체를 순회하여 콜백의 실행결과를 다음 콜백에 전달해 연산한다.', function() {
            var result;

            result = ne.reduce(objDummy, function(stored, value) {
                return stored + value;
            });

            expect(result).toEqual(15);
        });
    });
});