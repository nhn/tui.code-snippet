describe('CustomEvents', function() {
    describe('믹스인하여 사용', function() {
        var Animal;

        beforeEach(function() {
            Animal = function() {};

            ne.util.CustomEvents.mixin(Animal);
        });

        describe('on()', function() {
            var lion,
                spy;

            beforeEach(function() {
                lion = new Animal();
                spy = jasmine.createSpyObj('on', ['move', 'growl']);
            });

            describe('기본적인 사용 방법', function() {
                beforeEach(function() {
                    lion.on('move', spy.move);
                });

                it('커스텀 이벤트 핸들러를 등록할 수 있다', function() {
                    lion.fire('move');
                    expect(spy.move).toHaveBeenCalledWith();
                });

                it('타입을 제외한 나머지 인자를 그대로 리스너의 파라미터로 전달한다', function() {
                    var mockData = {
                        name: 'john'
                    };

                    lion.fire('move', mockData, true);

                    expect(spy.move).toHaveBeenCalledWith({ name: 'john' }, true);
                });

            });

            describe('type:handler 의 객체로 여러 핸들러를 동시에 등록할 수 있다', function() {
                beforeEach(function() {
                    lion.on({
                        'move': spy.move,
                        'growl': spy.growl
                    });
                });

                it('등록한 핸들러가 모두 수행되어야 한다', function() {
                    lion.fire('move');
                    lion.fire('growl', { level: 'loud' });

                    expect(spy.move).toHaveBeenCalledWith();
                    expect(spy.growl).toHaveBeenCalledWith({ level: 'loud' });
                });
            });
        });

        describe('off()', function() {
            var lion,
                spy;

            beforeEach(function() {
                lion = new Animal();
                spy = jasmine.createSpyObj('on', ['move', 'growl']);
            });

            describe('기본 사용법', function() {
                beforeEach(function() {
                    lion.on({
                        'move': spy.move,
                        'growl': spy.growl
                    });
                });

                it('아무 인자를 넘기지 않으면 등록된 모든 이벤트를 제거한다', function() {
                    lion.off();
                    lion.fire('move');
                    lion.fire('growl');

                    expect(spy.move).not.toHaveBeenCalled();
                    expect(spy.growl).not.toHaveBeenCalled();
                });

                it('이벤트명만 넘기면 해당 이벤트를 모두 제거한다.', function() {
                    lion.off('move');
                    lion.fire('move');
                    lion.fire('growl');

                    expect(spy.move).not.toHaveBeenCalled();
                    expect(spy.growl).toHaveBeenCalled();
                });

                it('type, handler를 넘겨 등록된 이벤트를 제거한다', function() {
                    lion.off('move', spy.move);
                    lion.fire('move');

                    expect(spy.move).not.toHaveBeenCalled();
                });

                it('type, handler객체를 넘겨 여러 이벤트를 한번에 해제할 수 있다', function() {
                    lion.off({
                        'move': spy.move,
                        'growl': spy.growl
                    });

                    lion.fire('move');
                    lion.fire('growl');

                    expect(spy.move).not.toHaveBeenCalled();
                    expect(spy.growl).not.toHaveBeenCalled();
                });

            });

        });

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
