describe('CustomEvents module', function() {
    var CustomEvents = tui.util.CustomEvents,
        ce;

    beforeEach(function() {
        ce = new CustomEvents();
    });

    it('should transform array by omit callback.', function() {
        var arr = [1, 2, 3, 4, 5];

        ce._spliceArray(arr, function(num) {
            return num % 2 === 0;
        });

        expect(arr).toEqual([1, 3, 5]);
    });

    describe('should return AND conditions for all of handler\' result', function() {
        var inst,
            spy;

        function MockComponent() {}

        tui.util.CustomEvents.mixin(MockComponent);

        MockComponent.prototype.work = function() {
            if (this.invoke('beforeZoom')) {
                this.fire('zoom');
            }
        };

        beforeEach(function() {
            spy = jasmine.createSpy('handler');
            inst = new MockComponent();
            inst.on('zoom', spy);
        });

        describe('need return "false" explicitly for stop other event calls.', function() {
            it('empty string can\' stop event calls.', function() {
                inst.on('beforeZoom', function() { return ''; });
                inst.work();
                expect(spy).toHaveBeenCalled();
            });

            it('undefined can\'t stop event calls.', function() {
                inst.on('beforeZoom', function() { return void 0; });
                inst.work();
                expect(spy).toHaveBeenCalled();
            });

            it('null can\' stop event calls.', function() {
                inst.on('beforeZoom', function() { return null; });
                inst.work();
                expect(spy).toHaveBeenCalled();
            });
        });

        describe('return AND condition value for result of all handlers.', function() {
            it('at least one handler must return \'false\' to make invoke() return false.', function() {
                inst.on('beforeZoom', function() { return true; });
                inst.on('beforeZoom', function() { return false; });
                inst.on('beforeZoom', function() { return null; });

                inst.work();

                expect(spy).not.toHaveBeenCalled();
            });

            it('if not, invoke() will return true.', function() {
                inst.on('beforeZoom', function() { return true; });
                inst.on('beforeZoom', function() { return void 0; });
                inst.on('beforeZoom', function() {});

                inst.work();

                expect(spy).toHaveBeenCalled();
            });
        });

        it('return true when no handler binded.', function() {
            inst.work();
            expect(spy).toHaveBeenCalled();

            var falseFn = function() { return false };
            inst.on('beforeZoom', falseFn);
            inst.off('beforeZoom', falseFn);

            inst.work();

            expect(spy).toHaveBeenCalled();

        });
    });

    describe('fire()', function() {
        var component,
            spyObj;

        beforeEach(function() {
            component = new tui.util.CustomEvents();
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
    tui.util.CustomEvents.mixin(Animal);

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
                ce.on('test', handler);

                expect(ce.events['test'].length).toBe(1);
                expect(ce.events['test'][0]).toEqual({handler: handler});
            });

            it('이름, 핸들러 두번전달', function() {
                function handler2() {}
                ce.on('test', handler);
                ce.on('test', handler2);

                expect(ce.events['test'][0].handler).toBe(handler);
                expect(ce.events['test'][1].handler).toBe(handler2);
            });

            it('같은 이름, 같은 핸들러 두번 전달', function() {
                ce.on('test', handler);
                ce.on('test', handler);

                expect(ce.events['test'].length).toBe(2);
                expect(ce.events['test'][0].handler).toBe(handler);
                expect(ce.events['test'][1].handler).toBe(handler);
            });

            it('공백으로 여러 이름 전달', function() {
                ce.on('test test2', handler);

                expect(ce.events['test'].length).toBe(1);
                expect(ce.events['test'][0].handler).toBe(handler);
                expect(ce.events['test2'].length).toBe(1);
                expect(ce.events['test2'][0].handler).toBe(handler);
            });

            it('컨텍스트 전달', function() {
                var obj = {};
                ce.on('test', handler, obj);
                expect(ce.events['test'][0]).toEqual({
                    handler: handler,
                    context: obj
                });
            });

            it('이벤트명: 핸들러 객체 전달', function() {
                function handler2() {}

                ce.on({
                    'test': handler,
                    'test2': handler2
                });

                expect(ce.events).toEqual({
                    'test': jasmine.any(Array),
                    'test2':jasmine.any(Array)
                });
                expect(ce.events['test'][0]).toEqual({handler: handler});
                expect(ce.events['test2'][0]).toEqual({handler: handler2});
            });

            it('이벤트명: 핸들러 객체 두번 전달', function() {
                function handler2() {}

                ce.on({'test': handler});
                ce.on({'test': handler2});

                expect(ce.events['test'].length).toBe(2);
            });

            it('이벤트명(공백포함 2개): 핸들러 객체 전달', function() {
                ce.on({'test test2': handler});

                expect(ce.events['test'].length).toBe(1);
                expect(ce.events['test2'].length).toBe(1);
            });

            it('이벤트명: 핸들러, 컨텍스트 전달', function() {
                var obj = {};
                function handler2() {}

                ce.on({
                    'test': handler,
                    'test2': handler2
                }, obj);

                expect(ce.events).toEqual({
                    'test': [{handler: handler, context: obj}],
                    'test2': [{handler: handler2, context: obj}]
                });
            });

            it('이벤트명: 핸들러, 컨텍스트 두개이상 등록', function() {
                var obj = {};
                function handler2() {}

                ce.on({'test': handler}, obj);
                ce.on({'test': handler2}, obj);

                expect(ce.events).toEqual({
                    'test': [{
                        handler: handler,
                        context: obj
                    }, {
                        handler: handler2,
                        context: obj
                    }]
                });
            });

            it('이벤트명(공백포함 2개): 핸들러, 컨텍스트 등록', function() {
                var obj = {};

                ce.on({'test test2': handler}, obj);

                expect(ce.events).toEqual({
                    'test': [{handler: handler, context: obj}],
                    'test2': [{handler: handler, context: obj}]
                });
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

            it('shuold unbind custom event only context.', function() {
                ce.on('play', spy, obj);
                ce.off(obj);

                expect(ce.events).toEqual({'play': []});
            });

            it('should unbind custom event only event name.', function() {
                ce.on('play', spy, obj);
                ce.off('play');

                expect(ce.events).toEqual({'play': []});
            });

            it('should unbind custom event only handler function.', function() {
                ce.on('play', spy);
                ce.off(spy);

                expect(ce.events).toEqual({'play': []});
            });

            it('should unbind by event name and handler function.', function() {
                ce.on('play', spy);
                ce.on('pause', spy);
                ce.off('play', spy);

                expect(ce.events).toEqual({
                    'play': [],
                    'pause': [{handler: spy}]
                });
            });

            it('should unbind by context and handler.', function() {
                ce.on('play', spy, obj);
                ce.on('pause', spy, obj);
                ce.off(obj, spy);

                expect(ce.events).toEqual({
                    play: [],
                    pause: []
                });
            });

            it('should unbind by context and event name.', function() {
                ce.on('play', spy, obj);
                ce.on('play', spy, obj2);
                ce.on('pause', spy, obj);
                ce.off(obj, 'pause');

                expect(ce.events).toEqual({
                    play: [
                        {handler: spy, context: obj},
                        {handler: spy, context: obj2}
                    ],
                    pause: []
                });
            });

            it('should unbind by object with event name and handler pairs.', function() {
                ce.on('play', spy, obj);
                ce.on('pause', spy, obj);
                ce.on('play', spy2);
                ce.on('delay', spy2);

                ce.off({
                    'play': spy,
                    'pause': spy,
                    'delay': spy2
                });

                expect(ce.events).toEqual({
                    play: [{handler: spy2}],
                    pause: [],
                    delay: []
                });
            });

            it('should unbind all event with no arguments.', function() {
                ce.on('play', spy, obj);
                ce.on('pause', spy, obj);
                ce.on('play', spy2);
                ce.on('delay', spy2);

                ce.off();

                expect(ce.events).toEqual({});
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
                customEvent = new tui.util.CustomEvents();
            });

            it('이벤트를 등록하지 않았을 경우 0', function() {
                expect(customEvent.getListenerLength('pan')).toBe(0);
            });

            describe('컨텍스트 등록 후 해제시', function() {
                var myObj = {};
                beforeEach(function() {
                    spy = jasmine.createSpy('zoom');
                    customEvent.on('zoom', spy, myObj);
                    customEvent.off('zoom');
                });

                it('0이어야 한다', function() {
                    expect(customEvent.getListenerLength('pan')).toBe(0);
                });
            });

            describe('등록했다 해제할 경우', function() {
                var customEvent2;

                beforeEach(function() {
                    spy = jasmine.createSpy('zoom');
                    spyObj = jasmine.createSpyObj('test', ['zoom']);

                    customEvent.on('zoom', spyObj.zoom, thisObj);
                    customEvent.off('zoom', spyObj.zoom, thisObj);
                    customEvent2 = new tui.util.CustomEvents();
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
                customEvent = new tui.util.CustomEvents();
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
});
