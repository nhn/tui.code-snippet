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
            var arr = ne.util.range(2, 5, 2);
            expect(arr.join(',')).toEqual('2,4');
            arr = ne.util.range(10, 0, -2);
            expect(arr.join(',')).toEqual('10,8,6,4,2');
        });
    });
});