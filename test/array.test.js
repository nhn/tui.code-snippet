describe('module:array', function() {

    describe('range', function() {
        it('only stop', function() {
            var arr = ne.util.range(5);
            expect(arr.join(',')).toEqual('0,1,2,3,4');
        });

        it('start and stop', function() {
            var arr = ne.util.range(1, 5);
            expect(arr.join(',')).toEqual('1,2,3,4');
        });

        it('start, stop, step', function() {
            var arr = ne.util.range(2, 10, 2);
            expect(arr.join(',')).toEqual('2,4,6,8');
            arr = ne.util.range(10, 2, -2);
            expect(arr.join(',')).toEqual('10,8,6,4');
        });
    });

    describe('zip', function() {
        it('', function() {
            var result = ne.util.zip([1, 2, 3], ['a', 'b','c'], [true, false, true]);
            expect(result[0].join(',')).toEqual('1,a,true');
            expect(result[1].join(',')).toEqual('2,b,false');
            expect(result[2].join(',')).toEqual('3,c,true');
        });
    });
});