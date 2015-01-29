describe('object', function() {
    beforeEach(function() {
        ne.util._resetLastId();
    });

    it('compareJSON()은 json객체가 같은지 비교한다.', function() {
        var obj1 = {url: "http://119.205.249.132/ac", st: 1, r_lt: 1, r_enc: "UTF-8", q_enc: "UTF-8"},
            obj2 = {url: "http://119.205.249.132/ac", st: 1, r_lt: 1, r_enc: "UTF-8", q_enc: "UTF-8"},
            obj3 = {url: "http://119.205.249.132/ac", st: 1, r_lt: 1, r_enc: "UTF-8", q_enc: "UTF-8"},
            obj4 = {url: "http://119.205.249.132/ac", st: 1, r_lt: 1, r_enc: "UTF-8", q_enc: "UTF-8"};

        expect(ne.util.compareJSON(obj1, obj2, obj3, obj4)).toBe(true);

        var objA = {url: "http://119.205.249.132/ac", st: 1, r_lt: 1, r_enc: "UTF-8", q_enc: "UTF-8"},
            objB = {url: "http://120.120.266.1/", st: 11, r_lt: 2, r_enc: "UTF-8", q_enc: "UTF-8"};

        expect(ne.util.compareJSON(objA, objB)).toBe(false);

        var objC = {a: 100, b: [1,2,3], dt: {age: 12}},
            objD = {a: 100, b: [1,2,3], dt: {age: 1222}},
            objE = {a: 100, b: [1,2,3], dt: {age: 12}};

        expect(ne.util.compareJSON(objC, objD)).toBe(false);
        expect(ne.util.compareJSON(objC, objE)).toBe(true);
    });


    it('extend()는 객체를 확장한다', function() {

        var target = {
            firstName: 'MinHyeong',
            lastName: 'Kang'
        };

        var source = {
            lastName: 'Kim',
            middleName: '-',
            myprop: {
                test: 'good',
                testFunc: function(x) {
                    return x + 2;
                }
            }
        };

        ne.util.extend(target, source);

        expect(target.middleName).toEqual('-');
        expect(target.lastName).toEqual('Kim');
        expect(target.myprop.test).toEqual('good');
        expect(target.myprop.testFunc(3)).toEqual(5);

    });

    it('stamp() 메서드로 특정 객체에 unique 한 ID를 부여할 수 있다', function() {
        var myFn = function() {};

        var myObj = {};

        ne.util.stamp(myFn);
        ne.util.stamp(myObj);

        expect(ne.util.stamp(myFn)).toBeDefined();
        expect(ne.util.stamp(myFn)).toBe(1);
        expect(ne.util.stamp(myObj)).toBe(2);
    });

    it('hasStamp() 는 stamp()로 ID부여 여부를 확인가능', function() {
        var myFn = function() {};

        expect(ne.util.hasStamp(myFn)).not.toBe(true);

        ne.util.stamp(myFn);

        expect(ne.util.hasStamp(myFn)).toBe(true);
    });

    describe('keys', function() {
        it('객체를 전달받아 키만 따로 배열로 만들어 리턴해준다.', function() {
            var result = ne.util.keys({'key1': 1, 'key2': 2});

            expect(result.length).toEqual(2);
            expect(result[0]).toEqual('key1');
            expect(result[1]).toEqual('key2');
        });
    });
});
