describe('object', function() {
    beforeEach(function() {
        ne._resetLastId();
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

        ne.extend(target, source);

        expect(target.middleName).toEqual('-');
        expect(target.lastName).toEqual('Kim');
        expect(target.myprop.test).toEqual('good');
        expect(target.myprop.testFunc(3)).toEqual(5);

    });

    it('stamp() 메서드로 특정 객체에 unique 한 ID를 부여할 수 있다', function() {
        var myFn = function() {};

        var myObj = {};

        ne.stamp(myFn);
        ne.stamp(myObj);

        expect(ne.stamp(myFn)).toBeDefined();
        expect(ne.stamp(myFn)).toBe(1);
        expect(ne.stamp(myObj)).toBe(2);
    });

});
