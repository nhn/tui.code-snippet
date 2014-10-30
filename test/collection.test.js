describe('module:collection', function() {
    describe('forEach', function() {
        it('배열과 콜백펑션을 입력받아 배열의 내용을 순회할수있다.', function() {
            var aSum = 0;
            var arrayObj = [0, 1, 2, 3, 4, 5];

            ne.forEach(arrayObj, function(value) {
                aSum += value;
            });

            expect(aSum).toEqual(15);
        });

        it('객체와 콜백펑션을 입력받아 객체의 내용을 순회할수있다.', function() {
            var oSum = 0;
            var obj = {_0: 0, _1: 1, _2: 2, _3: 3, _4: 4, _5: 5};

            ne.forEach(obj, function(value) {
                oSum += value;
            });

            expect(oSum).toEqual(15);
        });
    });
});