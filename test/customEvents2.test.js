

describe('CustomEvents2', function() {
    var CustomEvents = ne.util.CustomEvents,
        ce;

    beforeEach(function() {
        ce = new CustomEvents();
    });

    describe('이벤트 등록', function() {
        var handler;

        beforeEach(function() {
            handler = jasmine.createSpy('handler');
        });

        it('이름, 핸들러 전달', function() {
            ce.on('myE', handler);
            expect(ce._events['myE'][0]).toEqual({ fn: handler });
            expect(ce._events['myE'][0].fn).toBe(handler);
        });

        it('이름, 핸들러 두번전달', function() {
            function handler2() {}
            ce.on('myE', handler);
            ce.on('myE', handler2);

            expect(ce._events['myE'][0].fn).toBe(handler);
            expect(ce._events['myE'][1].fn).toBe(handler2);
        });

        it('컨텍스트 전달', function() {
            var myObj = {
                name: 'good'
            };

            ce.on('myE', handler, myObj);

            var ctxId = myObj.__fe_id,
                handlerId = handler.__fe_id,
                id = handlerId + '_' + ctxId;

            var expectObj = {};
            expectObj[id] = { fn: handler, ctx: myObj };

            expect(ce._events['__myE_idx']).toEqual(expectObj);
        });

        it('이벤트명: 핸들러 객체 전달', function() {
            function handler2() {}

            ce.on({
                'myE': handler,
                'myE2': handler2
            });

            expect(ce._events['myE'][0]).toEqual({ fn: handler });
            expect(ce._events['myE2'][0]).toEqual({ fn: handler2 });
        });

        it('이벤트명: 핸들러 객체 두번 전달', function() {
            function handler2() {}

            ce.on({ 'myE': handler });
            ce.on({ 'myE': handler2 });

            expect(ce._events['myE'].length).toBe(2);
        });

        it('이벤트명: 핸들러, 컨텍스트 전달', function() {
            var myObj = {
                name: 'good'
            };
            function handler2() {}

            ce.on({
                'myE': handler,
                'myE2': handler2
            }, myObj);

            var ctxId = myObj.__fe_id,
                handlerId = handler.__fe_id;

            var expectedMyE = {};
            expectedMyE[handlerId + '_' + ctxId] = { fn: handler, ctx: myObj };

            expect(ce._events['__myE_idx']).toEqual(expectedMyE);
        });

        it('이벤트명: 핸들러, 컨텍스트 두개이상 등록', function() {
            var myObj = {
                name: 'good'
            };
            function handler2() {}

            ce.on({ 'myE': handler }, myObj);
            ce.on({ 'myE': handler2 }, myObj);

            expect(ce._events['__myE_len']).toBe(2);
        });

    });

    describe('이벤트 해제')

});
