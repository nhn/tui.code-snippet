describe('module:util', function() {
    afterEach(function() {
        ne.util.lastId = 0;
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

    it('bind()를 통해 함수를 커링할 수 있다', function() {
        var a = {
            word: 'hello'
        };

        var b = function() {
            return this.word;
        };

        var curried = ne.util.bind(b, a);

        expect(curried()).toBe('hello');
    });

    it('stamp() 메서드로 특정 객체에 unique 한 ID를 부여할 수 있다', function() {
        var myFn = function() {};

        var myObj = {};

        ne.util.stamp(myFn);
        ne.util.stamp(myObj);

        expect(myFn._t_id).toBeDefined();
        expect(myFn._t_id).toBe(1);
        expect(myObj._t_id).toBe(2);
    });

});