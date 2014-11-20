describe('object', function() {
    beforeEach(function() {
        ne.util._resetLastId();
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

    describe('keys', function() {
        it('객체를 전달받아 키만 따로 배열로 만들어 리턴해준다.', function() {
            var result = ne.util.keys({'key1': 1, 'key2': 2});

            expect(result.length).toEqual(2);
            expect(result[0]).toEqual('key1');
            expect(result[1]).toEqual('key2');
        });
    });
});
