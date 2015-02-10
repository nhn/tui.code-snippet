describe('CustomEvents2', function() {
    var CustomEvents = ne.util.CustomEvents,
        ce;

    beforeEach(function() {
        ce = new CustomEvents();
    });

    describe('_forEachArraySplice()', function() {
        var arr,
            result,
            count;

        beforeEach(function() {
            arr = [1, 2, 3, 4, 5];
            result = [];
            count = 0;
        });

        it('forEach와 같지만 전체 순회 수를 감소시키는 메서드를 제공한다', function() {
            ce._forEachArraySplice(arr, function(num, index, arr, decrease) {
                if (num % 2 === 0) {
                    decrease();
                }
                count += 1;
            });

            expect(arr).toEqual([1, 3, 5]);
            expect(count).toBe(5);
        });

        it('decrease를 사용하면 전체 순회 수를 감소시킨다', function() {
            var arr = ['mike', 'jane', 'mike', 'foo', 'bar'];

            ce._forEachArraySplice(arr, function(name, i, arr, decrease) {
                if (name === 'mike') {
                    decrease();
                }
            });

            expect(arr).toEqual(['jane', 'foo', 'bar']);
        });
    });

    describe('_eachCtxEventByHandler()', function() {
        var myObj,
            myObj2,
            handler,
            handler2,
            spy;

        beforeEach(function() {
            myObj = { name: 'good' };
            myObj2 = { name: 'cony' };
            handler = function() { return this.name; };
            handler2 = function() {};

            ce.on('play', handler, myObj);
            ce.on('play', handler2, myObj);
            ce.on('play', handler2);

            // 일반 이벤트도 등록해본다
            ce.on('play', function() {});
            ce.on('play', handler2, myObj2);

            spy = jasmine.createSpy('playHandler');
        });

        it('컨텍스트 핸들러를 순회한다', function() {
            ce._eachCtxEventByHandler(handler2, spy);

            expect(spy.calls.count()).toBe(2);
            expect(spy.calls.argsFor(0)).toEqual([
                { fn: handler2, ctx: myObj },
                ce._getHandlerKey(handler2, myObj),
                ce._ctxEvents['play_idx'],
                'play_idx'
            ]);
            expect(spy.calls.argsFor(1)).toEqual([
                { fn: handler2, ctx: myObj2 },
                ce._getHandlerKey(handler2, myObj2),
                ce._ctxEvents['play_idx'],
                'play_idx'
            ]);
        });
    });

    describe('_eachCtxEventByContext()', function() {
        var handler,
            handler2,
            myObj,
            myObj2,
            spy;

        beforeEach(function() {
            handler = function() { return this.name; };
            handler2 = function() {};
            myObj = { name: 'cony' };
            myObj2 = { name: 'good' };

            ce.on('play', handler, myObj);
            ce.on('play', handler2, myObj);
            ce.on('play', handler, myObj2);

            spy = jasmine.createSpy('play');
        });

        it('컨텍스트를 기준으로 핸들러를 순회', function() {
            ce._eachCtxEventByContext(myObj, spy);

            expect(spy.calls.count()).toBe(2);
            expect(spy.calls.argsFor(0)).toEqual([
                { fn: handler, ctx: myObj },
                ce._getHandlerKey(handler, myObj),
                ce._ctxEvents['play_idx'],
                'play_idx'
            ]);
            expect(spy.calls.argsFor(1)).toEqual([
                { fn: handler2, ctx: myObj },
                ce._getHandlerKey(handler2, myObj),
                ce._ctxEvents['play_idx'],
                'play_idx'
            ]);
        });
    });

    describe('_eachCtxEventByEventName()', function() {
        var handler,
            handler2,
            myObj,
            myObj2,
            spy;

        beforeEach(function() {
            handler = function() { return this.name; };
            handler2 = function() {};
            myObj = { name: 'cony' };
            myObj2 = { name: 'good' };

            ce.on('play', handler, myObj);
            ce.on('play', handler2, myObj);
            ce.on('play', handler, myObj2);
            ce.on('pause', handler);

            spy = jasmine.createSpy('play');
        });

        it('이벤트명 기준으로 핸들러를 순회', function() {
            ce._eachCtxEventByEventName('play', spy);

            expect(spy.calls.count()).toBe(3);
            expect(spy.calls.argsFor(0)).toEqual([
                { fn: handler, ctx: myObj },
                ce._getHandlerKey(handler, myObj),
                ce._ctxEvents['play_idx'],
                'play_idx'
            ]);
            expect(spy.calls.argsFor(1)).toEqual([
                { fn: handler2, ctx: myObj },
                ce._getHandlerKey(handler2, myObj),
                ce._ctxEvents['play_idx'],
                'play_idx'
            ]);
            expect(spy.calls.argsFor(2)).toEqual([
                { fn: handler, ctx: myObj2 },
                ce._getHandlerKey(handler, myObj2),
                ce._ctxEvents['play_idx'],
                'play_idx'
            ]);
        });
    });

    describe('_eachEventByHandler()', function() {
        var myObj,
            myObj2,
            handler,
            handler2,
            spy;

        beforeEach(function() {
            myObj = { name: 'good' };
            myObj2 = { name: 'cony' };
            handler = function() { return this.name; };
            handler2 = function() {};

            ce.on('play', handler, myObj);
            ce.on('play', handler2, myObj);
            ce.on('play', handler2);

            // 일반 이벤트도 등록해본다
            ce.on('play', handler);

            spy = jasmine.createSpy('playHandler');
        });

        it('일반 이벤트 핸들러를 순회한다', function() {
            ce._eachEventByHandler(handler, spy);

            expect(spy.calls.count()).toBe(1);
            expect(spy.calls.argsFor(0)).toEqual([
                { fn: handler },
                0,
                ce._events['play'],
                'play',
                spy.calls.argsFor(0)[4]
            ]);
        });
    });

    describe('_eachEventByEventName()', function() {
        var handler,
            handler2,
            myObj,
            spy;

        beforeEach(function() {
            handler = function() {};
            handler2 = function() {};
            myObj = {};

            ce.on('play', handler);
            ce.on('play', handler2);
            ce.on('play', function() {}, myObj);

            spy = jasmine.createSpy('play');
        });

        it('이벤트명으로 일반 이벤트를 순회하며 반복자를 수행한다', function() {
            ce._eachEventByEventName('play', spy);

            expect(spy.calls.count()).toBe(2);
            expect(spy.calls.argsFor(0)).toEqual([
                { fn: handler },
                0,
                ce._events['play'],
                spy.calls.argsFor(0)[3]
            ]);
            expect(spy.calls.argsFor(1)).toEqual([
                { fn: handler2 },
                1,
                ce._events['play'],
                spy.calls.argsFor(1)[3]
            ]);
        });


    });

    describe('_offByHandler()', function() {
        var handler,
            handler2,
            myObj;

        beforeEach(function() {
            handler = function() { return this.name; };
            handler2 = function() {};
            myObj = { name: 'cony' };

            ce.on('play', handler, myObj);
            ce.on('pause', handler2);
            ce.on('play', handler2, myObj);
            ce.on('play', handler);
        });

        it('핸들러 함수를 넘겨 이벤트를 해제할 수 있음', function() {
            ce._offByHandler(handler2);

            expect(ce._events['pause'].length).toBe(0);
            expect(ce._events['play'].length).toBe(1);
            expect(ce._ctxEvents['play_len']).toBe(1);
        });

        it('전부 제거', function() {
            ce._offByHandler(handler2);
            ce._offByHandler(handler);

            expect(ce._events['pause'].length).toBe(0);
            expect(ce._events['play'].length).toBe(0);
            expect(ce._ctxEvents['play_len']).toBe(0);
        });
    });

    describe('_offByContext()', function() {
        var handler,
            handler2,
            myObj,
            myObj2;

        beforeEach(function() {
            handler = function() {};
            handler2 = function() {};
            myObj = {};
            myObj2 = {};

            ce.on('play', handler, myObj);
            ce.on('play', handler2, myObj);
            ce.on('play', handler);
            ce.on('pause', handler2, myObj2);
            ce.on('play', handler, myObj2);
            ce.on('pause', handler, myObj);
        });

        it('컨텍스트로 이벤트를 해제할 수 있다', function() {
            ce._offByContext(myObj);

            // 남은 이벤트
            expect(ce._events['play'].length).toBe(1);
            expect(ce._ctxEvents['play_len']).toBe(1);
            expect(ce._ctxEvents['pause_len']).toBe(1);

            // 제거된 이벤트
            expect(ce._ctxEvents['play_idx'][ce._getHandlerKey(handler2, myObj)]).toBeUndefined();
            expect(ce._ctxEvents['play_idx'][ce._getHandlerKey(handler, myObj)]).toBeUndefined();
            expect(ce._ctxEvents['pause_idx'][ce._getHandlerKey(handler, myObj)]).toBeUndefined();
        });

        it('이벤트 명을 추가로 전달해 해당하는 이벤트만 해제 가능', function() {
            ce._offByContext(myObj, 'play');

            // 남은 이벤트
            expect(ce._events['play'].length).toBe(1);
            expect(ce._ctxEvents['play_len']).toBe(1);
            expect(ce._ctxEvents['pause_len']).toBe(2);

            // 제거된 이벤트
            expect(ce._ctxEvents['play_idx'][ce._getHandlerKey(handler, myObj)]).toBeUndefined();
            expect(ce._ctxEvents['play_idx'][ce._getHandlerKey(handler2, myObj)]).toBeUndefined();
        });

        it('핸들러 함수를 추가로 전달해 해당하는 이벤트만 제거 가능', function() {
            ce._offByContext(myObj2, handler2);

            // 남은 이벤트
            expect(ce._events['play'].length).toBe(1);
            expect(ce._ctxEvents['play_len']).toBe(3);
            expect(ce._ctxEvents['pause_len']).toBe(1);

            // 제거된 이벤트
            expect(ce._ctxEvents['pause_idx'][ce._getHandlerKey(handler2, myObj2)]).toBeUndefined();
        });
    });
    
    describe('_offByEventName()', function() {
        var handler,
            handler2,
            myObj,
            myObj2;

        beforeEach(function() {
            handler = function() {};
            handler2 = function() {};
            myObj = {};
            myObj2 = {};

            ce.on('play', handler, myObj);
            ce.on('play', handler2, myObj);
            ce.on('play', handler);
            ce.on('pause', handler2, myObj2);
            ce.on('play', handler, myObj2);
            ce.on('pause', handler, myObj);
        });

        it('이벤트명으로 이벤트를 제거한다', function() {
            ce.off('play');

            // 남은 이벤트
            expect(ce._ctxEvents['pause_len']).toBe(2);

            // 제거된 이벤트
            expect(ce._events['play'].length).toBe(0);
            expect(ce._ctxEvents['play_len']).toBe(0);
        });

        it('핸들러를 전달해 해당하는 이벤트만 제거 가능', function() {
            ce.off('play', handler);
            ce.off('pause', handler2);

            // 남은 이벤트
            expect(ce._ctxEvents['pause_len']).toBe(1);
            expect(ce._ctxEvents['play_len']).toBe(1);

            // 제거된 이벤트
            expect(ce._ctxEvents['play_idx'][ce._getHandlerKey(handler, myObj)]).toBeUndefined();
            expect(ce._events['play'].length).toBe(0);
        });

    });

    describe('invoke()', function() {
        var component,
            spy;

        function MockComponent() {}

        ne.util.CustomEvents.mixin(MockComponent);

        MockComponent.prototype.work = function() {
            if (this.invoke('beforeZoom')) {
                this.fire('zoom');
            }
        };

        describe('리스너의 실행결과를 AND연산하여 반환', function() {
            beforeEach(function() {
                component = new MockComponent();
                spy = jasmine.createSpy('handler');
            });

            describe('명시적으로 false를 반환하지 않으면 모두 true로 간주한다', function() {
                beforeEach(function() {
                    component.on('zoom', spy);
                });

                it('빈 문자열 반환은 true로 간주', function() {
                    component.on('beforeZoom', function() { return ''; });

                    component.work();

                    expect(spy).toHaveBeenCalled();
                });

                it('undefined도 true로 간주', function() {
                    component.on('beforeZoom', function() { return void 0; });

                    component.work();

                    expect(spy).toHaveBeenCalled();
                });

                it('null도 true로 간주', function() {
                    component.on('beforeZoom', function() { return null; });

                    component.work();

                    expect(spy).toHaveBeenCalled();
                });
            });

            describe('리스너의 실행결과를 AND연산하여 반환한다', function() {
                var cnt;
                beforeEach(function() {
                    component.on('zoom', spy);
                    cnt = 0;
                });

                it('리스너 중 하나라도 명시적 false이면 false를 반환', function() {
                    component.on('beforeZoom', function() { cnt += 1; return true; });
                    component.on('beforeZoom', function() { cnt += 1; return false; });
                    component.on('beforeZoom', function() { cnt += 1; return null; });

                    component.work();

                    expect(spy).not.toHaveBeenCalled();
                    expect(cnt).toBe(3);
                });

                it('그렇지 않으면 true반환', function() {
                    component.on('beforeZoom', function() { cnt += 1; return true; });
                    component.on('beforeZoom', function() { cnt += 1; return void 0; });
                    component.on('beforeZoom', function() { cnt += 1; });

                    component.work();

                    expect(spy).toHaveBeenCalled();
                    expect(cnt).toBe(3);
                });

            });

            describe('리스너를 등록하지 않으면 true', function() {
                beforeEach(function() {
                    component.on('zoom', spy);
                });

                it('하나도 등록하지 않았으므로 true', function() {
                    component.work();

                    expect(spy).toHaveBeenCalled();
                });

                it('등록했다가 제거해도 true', function() {
                    var falseFn = function() { return false };
                    component.on('beforeZoom', falseFn);
                    component.off('beforeZoom', falseFn);

                    component.work();

                    expect(spy).toHaveBeenCalled();
                });

            });

        });

    });

    describe('fire()', function() {
        var component,
            spyObj;

        beforeEach(function() {
            component = new ne.util.CustomEvents();
            spyObj = jasmine.createSpyObj('handler', ['foo', 'bar']);
            component.on({
                'foo': spyObj.foo,
                'bar': spyObj.bar
            });
        });

        it('체이닝을 지원한다', function() {
            component.fire('foo').fire('bar');

            expect(spyObj.foo).toHaveBeenCalled();
            expect(spyObj.bar).toHaveBeenCalled();
        });

        it('호출 시 타입을 제외한 파라미터를 리스너에 전부 전달한다', function() {
            component.fire('foo', { say: 'hello' }, false, 12 / 6);

            expect(spyObj.foo).toHaveBeenCalledWith({ say: 'hello' }, false, 2);
        });

        it('호출 시 타입을 제외한 파라미터를 리스너에 전부 전달한다2', function() {
            component.fire('foo', [1, 2, 3]);

            expect(spyObj.foo).not.toHaveBeenCalledWith({ say: 'hello' }, false, 2);
        });

        describe('등록 해제 반복후 동작 확인', function() {
            describe('컨텍스트를 넘기지 않을 때', function() {
                beforeEach(function() {
                    component.off('foo', spyObj.foo);
                    component.on('foo', spyObj.foo);
                    component.fire('foo');
                });
                it('한번만 호출되어야 한다', function() {
                    expect(spyObj.foo.calls.count()).toBe(1);
                });
            });
            describe('컨텍스트를 넘길 때', function() {
                var myObj = {};
                beforeEach(function() {
                    component.off('foo');
                    component.on('foo', spyObj.foo, myObj);
                    component.off('foo');
                    component.on('foo', spyObj.foo, myObj);
                    component.fire('foo');
                });
                it('한 번만 호출되어야 한다', function() {
                    expect(spyObj.foo.calls.count()).toBe(1);
                });
            });
        });
    });

    var Animal = function() {};
    ne.util.CustomEvents.mixin(Animal);

    describe('once()', function() {
        var lion,
            spy;

        beforeEach(function() {
            lion = new Animal();
            spy = jasmine.createSpyObj('on', ['move', 'growl']);
        });

        describe('단발성 이벤트 등록이 가능하다', function() {
            beforeEach(function() {
                lion.once('move', spy.move);
                lion.fire('move');
                lion.fire('move');
            });

            it('한 번만 실행되어야 한다', function() {
                expect(spy.move.calls.count()).toBe(1);
            });

        });

        describe('여러 단발성 이벤트를 한번에 등록할 수 있다', function() {
            beforeEach(function() {
                lion.once({
                    'move': spy.move,
                    'growl': spy.growl
                });
                lion.fire('move');
                lion.fire('move');
                lion.fire('growl');
                lion.fire('growl');
            });

            it('한 번씩만 실행되어야 한다', function() {
                expect(spy.move.calls.count()).toBe(1);
                expect(spy.growl.calls.count()).toBe(1);
            });
        });

        describe('중첩하여 적용해도 문제없이 동작한다', function() {
            beforeEach(function() {
                lion.once('move', spy.move);
                lion.fire('move');
                lion.once('move', spy.move);
                lion.fire('move');
            });
            it('두번 등록해서 사용해도 문제없다', function() {
                expect(spy.move.calls.count()).toBe(2);
            });
        });

        describe('컨텍스트가 제공되도 문제없이 동작한다', function() {
            beforeEach(function() {
                lion.once({
                    'move': spy.move
                }, this);
                lion.fire('move');
                lion.once({
                    'move': spy.move
                }, this);
                lion.fire('move');
            });
            it('두 번 호출되어도 문제가 없다', function() {
                expect(spy.move.calls.count()).toBe(2);
            });
            
        });

    });

    describe('on(), off()', function() {

        describe('on()', function() {
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

            it('공백으로 여러 이름 전달', function() {
                ce.on('myE myE2', handler);

                expect(ce._events['myE'].length).toBe(1);
                expect(ce._events['myE2'].length).toBe(1);
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

                expect(ce._ctxEvents['myE_idx']).toEqual(expectObj);
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

            it('이벤트명(공백포함 2개): 핸들러 객체 전달', function() {
                ce.on({ 'myE myE2': handler });

                expect(ce._events['myE'].length).toBe(1);
                expect(ce._events['myE2'].length).toBe(1);
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

                expect(ce._ctxEvents['myE_idx']).toEqual(expectedMyE);
            });

            it('이벤트명: 핸들러, 컨텍스트 두개이상 등록', function() {
                var myObj = {
                    name: 'good'
                };
                function handler2() {}

                ce.on({ 'myE': handler }, myObj);
                ce.on({ 'myE': handler2 }, myObj);

                expect(ce._ctxEvents['myE_len']).toBe(2);
            });

            it('이벤트명(공백포함 2개): 핸들러, 컨텍스트 등록', function() {
                var myObj = {
                    name: 'good'
                };

                ce.on({ 'myE myE2': handler }, myObj);

                expect(ne.util.keys(ce._ctxEvents['myE_idx']).length).toBe(1);
                expect(ce._ctxEvents['myE_len']).toBe(1);
                expect(ne.util.keys(ce._ctxEvents['myE2_idx']).length).toBe(1);
                expect(ce._ctxEvents['myE2_len']).toBe(1);
            });

        });

        describe('off()', function() {
            var spy,
                spy2,
                obj,
                obj2,
                ce;

            beforeEach(function() {
                spy = jasmine.createSpy('off');
                spy2 = jasmine.createSpy('last');
                ce = new CustomEvents();
                obj = {};
                obj2 = {};
            });

            it('컨텍스트 전달하여 해제 가능', function() {
                ce.on('play', spy, obj);
                ce.off(obj);
                ce.fire('play');

                expect(spy).not.toHaveBeenCalled();
            });

            it('이벤트명을 넘겨 해제 가능', function() {
                ce.on('play', spy);
                ce.off('play');
                ce.fire('play');

                expect(spy).not.toHaveBeenCalled();
            });

            it('핸들러만 전달하여 해제 가능', function() {
                ce.on('play', spy);
                ce.off(spy);
                ce.fire('play');

                expect(spy).not.toHaveBeenCalled();
            });

            it('이벤트명, 핸들러를 전달하여 해제 가능', function() {
                ce.on('play', spy);
                ce.on('pause', spy);
                ce.off('play', spy);

                ce.fire('play');
                ce.fire('pause');

                expect(spy.calls.count()).toBe(1);
            });

            it('컨텍스트, 핸들러 전달하여 해제 가능', function() {
                ce.on('play', spy, obj);
                ce.on('pause', spy, obj);
                ce.off(obj, spy);

                ce.fire('play');
                ce.fire('pause');

                expect(spy).not.toHaveBeenCalled();
            });

            it('컨텍스트, 이벤트명 전달하여 해제 가능', function() {
                ce.on('play', spy, obj);
                ce.on('play', spy, obj2);
                ce.on('pause', spy, obj);
                ce.off(obj, 'pause');

                ce.fire('play');
                ce.fire('pause');

                expect(spy.calls.count()).toBe(2);
            });

            it('이벤트명: 핸들러 객체를 전달하여 해제 가능', function() {
                ce.on('play', spy, obj);
                ce.on('pause', spy, obj);
                ce.on('play', spy2);
                ce.on('delay', spy2);

                ce.off({
                    'play': spy,
                    'pause': spy,
                    'delay': spy2
                });

                ce.fire('play');
                ce.fire('pause');

                expect(spy).not.toHaveBeenCalled();
                expect(spy2).toHaveBeenCalled();
                expect(spy2.calls.count()).toBe(1);
            });

            it('인자 없이 몽땅 해제가능', function() {
                ce.on('play', spy, obj);
                ce.on('pause', spy, obj);
                ce.on('play', spy2);
                ce.on('delay', spy2);

                ce.off();

                ce.fire('play');
                ce.fire('pause');

                expect(spy).not.toHaveBeenCalled();
                expect(spy2).not.toHaveBeenCalled();
            });

        });

        describe('통합 테스트', function() {
            var spy,
                obj;

            beforeEach(function() {
                spy = jasmine.createSpy('integration');
                obj = {};
            });

            it('이벤트 걸었다 지웠다 걸었다 실행', function() {
                ce.on('play', spy);
                ce.off('play');
                ce.on('play', spy);
                ce.fire('play');

                expect(spy.calls.count()).toBe(1);
            });

            it('일반 이벤트', function() {
                ce.on('play', spy);
                ce.off('play', spy);
                ce.on('play', spy);
                ce.fire('play');

                expect(spy.calls.count()).toBe(1);
            });

            it('일반 이벤트2', function() {
                ce.on('play', spy);
                ce.off(spy);
                ce.on('play', spy);
                ce.fire('play');

                expect(spy.calls.count()).toBe(1);
            });

            it('컨텍스트 이벤트', function() {
                ce.on('play', spy, obj);
                ce.off('play');
                ce.on('play', spy, obj);
                ce.fire('play');

                expect(spy.calls.count()).toBe(1);
            });

            it('컨텍스트 이벤트2', function() {
                ce.on('play', spy, obj);
                ce.off(obj);
                ce.on('play', spy, obj);
                ce.fire('play');

                expect(spy.calls.count()).toBe(1);
            });

            it('컨텍스트 이벤트3', function() {
                ce.on('play', spy, obj);
                ce.off(obj, 'play');
                ce.on('play', spy, obj);
                ce.fire('play');

                expect(spy.calls.count()).toBe(1);
            });

        })

    });

    describe('hasListener()', function() {
        var lion,
            spy;

        beforeEach(function() {
            lion = new Animal();
            spy = jasmine.createSpyObj('on', ['move', 'growl']);
            lion.on('move', spy.move);
        });

        it('특정 type에 해당하는 이벤트가 등록되어있는지 여부를 확인할 수 있다', function() {
            expect(lion.hasListener('move')).toBe(true);
        });
    });

    describe('getListenerLength()', function() {
        var customEvent,
            thisObj,
            spy,
            spyObj;

        describe('예외 테스트', function() {
            beforeEach(function() {
                customEvent = new ne.util.CustomEvents();
            });

            it('이벤트를 등록하지 않았을 경우 0', function() {
                expect(customEvent.getListenerLength('pan')).toBe(0);
            });

            describe('등록했다 해제할 경우', function() {
                var customEvent2;

                beforeEach(function() {
                    spy = jasmine.createSpy('zoom');
                    spyObj = jasmine.createSpyObj('test', ['zoom']);

                    customEvent.on('zoom', spyObj.zoom, thisObj);
                    customEvent.off('zoom', spyObj.zoom, thisObj);
                    customEvent2 = new ne.util.CustomEvents();
                    customEvent2.on('zoom', spy);
                    customEvent2.off('zoom', spy);
                });

                it('context 제공 시', function() {
                    expect(customEvent.getListenerLength('zoom')).toBe(0);
                });

                it('context 비 제공 시', function() {
                    expect(customEvent2.getListenerLength('zoom')).toBe(0);
                });
            });
        });

        describe('갯수 테스트', function() {
            beforeEach(function() {
                customEvent = new ne.util.CustomEvents();
                spy = jasmine.createSpy('zoom');
                spyObj = jasmine.createSpyObj('spy', ['pan', 'zoom']);

                thisObj = {};

                customEvent.on({
                    'pan': spyObj.pan,
                    'zoom': spyObj.zoom
                }, thisObj);

                customEvent.on('zoom', spy);
            });

            it('할당된 이벤트의 갯수를 알 수 있다', function() {
                expect(customEvent.getListenerLength('zoom')).toBe(2);
                expect(customEvent.getListenerLength('pan')).toBe(1);
            });

            it('이벤트가 해제되어도 갯수가 반영된다', function() {
                customEvent.off('zoom', spyObj.zoom, thisObj);

                expect(customEvent.getListenerLength('zoom')).toBe(1);
            });

            it('이벤트가 해제되면 갯수가 반영된다', function() {
                customEvent.off('zoom', spy);

                expect(customEvent.getListenerLength('zoom')).toBe(1);
            });

            it('이벤트를 모두 삭제하면 0', function() {
                customEvent.off();

                expect(customEvent.getListenerLength('zoom')).toBe(0);
            });
        });

    });

    describe('인스턴스 자체로 사용', function() {
        var Animal;

        beforeEach(function() {
            Animal = function() {
                this.events = new ne.util.CustomEvents();
            };

            Animal.prototype.fire = function(type, data) {
                this.events.fire(type, data);
            };
        });

        describe('명시적으로 context를 넘기지 않으면 이벤트 객체가 context가 된다', function() {
            var lion,
                spy;

            beforeEach(function() {
                // 컨텍스트를 넘기지 않는 이벤트 사용 코드
                Animal.prototype.on = function(type, handler) {
                    this.events.on(type, handler);
                };

                spy = jasmine.createSpy('test');

                lion = new Animal();
                lion.on('growl', spy);
                lion.fire('growl');
            });

            it('this는 CustomEvents객체', function() {
                expect(spy.calls.all()[0].object).not.toBe(lion);
                expect(spy.calls.all()[0].object).toBe(lion.events);
            });
        });

        describe('명시적으로 context를 넘기도록 개발해야 한다', function() {
            var lion,
                spy;

            beforeEach(function() {
                // 컨텍스트를 넘기지 않는 이벤트 사용 코드
                Animal.prototype.on = function(type, handler) {
                    this.events.on(type, handler, this);
                };

                spy = jasmine.createSpy('test');

                lion = new Animal();
                lion.on('growl', spy);
                lion.fire('growl');
            });

            it('this는 lion', function() {
                expect(spy.calls.all()[0].object).not.toBe(lion.events);
                expect(spy.calls.all()[0].object).toBe(lion);
            });
        });
    });

});
