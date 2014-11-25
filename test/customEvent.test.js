describe('customEvent', function() {

    it('on() 메서드로 이벤트를 구독할 수 있다', function() {
        function Animal(leg) {
            this.leg = leg;
            this.position = 0;
        }

        ne.util.CustomEvents.mixin(Animal); // 커스텀 이벤트 기능 부여

        Animal.prototype.move = function(to) {
            this.position = to;
            this.fire('move');
        };

        var lion = new Animal(4);

        var deer = new Animal(4);

        // 사자가 움직이면 사슴은 도망감
        lion.on('move', function() {
            this.position = 100;
        }, deer);

        lion.move(50); // 사자가 움직인다.

        expect(deer.position).toBe(100);
    });

    it('on() 메서드는 첫 번째 인자에 객체를 넘겨 다중 이벤트를 한번에 설정할수도 있다', function() {
        function Animal(leg) {
            this.leg = leg;
            this.position = 0;
        }
        ne.util.CustomEvents.mixin(Animal); // 커스텀 이벤트 기능 부여

        Animal.prototype.move = function(to) {
            this.position = to;
            this.fire('move');
        };
        Animal.prototype.growl = function() {
            this.fire('growl');
        };

        var lion = new Animal(4);
        var deer = new Animal(4);

        lion.on({
            // 사자가 움직이면 사슴은 도망간다
            'move': function() {
                this.position = 100;
            },
            // 사자가 울부짖으면 사슴은 더 멀리 도망간다
            'growl': function() {
                this.position = 1000;
            }
        }, deer);

        lion.move(10);
        lion.growl();

        expect(deer.position).toBe(1000);
    });

    it('on() 메서드는 context를 제공하지 않으면 옵저버를 배열에 등록하여 사용한다', function() {

        function Animal(leg) {
            this.leg = leg;
            this.position = 0;
        }

        ne.util.CustomEvents.mixin(Animal); // 커스텀 이벤트 기능 부여

        Animal.prototype.move = function(to) {
            this.position = to;
            this.fire('move');
        };

        var lion = new Animal(4),
            growlFn = ne.util.bind(function() {
                this.position = 0;
            }, lion);

        lion.on('move', growlFn);

        expect(ne.util.isArray(lion._events['move'])).toBeTruthy();
    });

    it('on() 메서드는 context를 제공할 경우 옵저버 패턴을 객체를 이용한다', function() {
        function Animal(leg) {
            this.leg = leg;
            this.position = 0;
        }

        ne.util.CustomEvents.mixin(Animal); // 커스텀 이벤트 기능 부여

        Animal.prototype.move = function(to) {
            this.position = to;
            this.fire('move');
        };

        var lion = new Animal(4),
            onMove = function() {
                this.moved = true;
            };

        var myObj = {};

        lion.on('move', onMove, myObj);

        lion.move(10);

        ne.util.stamp(onMove);

        expect(myObj.moved).toBeTruthy();
        expect(lion._events['move_len']).toBe(1);

    });

    it('off() 메서드로 구독했던 이벤트 관계를 해제할 수 있다', function() {
        function Animal(leg) {
            this.leg = leg;
            this.position = 0;
        }

        ne.util.CustomEvents.mixin(Animal); // 커스텀 이벤트 기능 부여

        Animal.prototype.move = function(to) {
            this.position = to;
            this.fire('move');
        };

        var lion = new Animal(4),
            deer = new Animal(4),
            runAwayFn = function() {
                this.position = 1000;
            };

        // 사자가 움직이면 사슴은 도망감
        lion.on('move', runAwayFn, deer);

        // 사슴은 더 이상 도망가지 않음
        lion.off('move', runAwayFn, deer);

        lion.move(100);

        expect(deer.position).toBe(0);
    });

    it('off() 는 이벤트명:함수를 넘겨 동시에 여러 이벤트를 구독 해제할 수 있다', function() {
        function Animal(leg) {
            this.leg = leg;
            this.position = 0;
        }

        ne.util.CustomEvents.mixin(Animal); // 커스텀 이벤트 기능 부여

        Animal.prototype.move = function(to) {
            this.position = to;
            this.fire('move');
        };
        Animal.prototype.growl = function() {
            this.fire('growl');
        };

        var lion = new Animal(4);
        var deer = new Animal(4);

        var runAwayFn = function() {
            this.position = 1000;
        };

        lion.on({
            // 사자가 움직이면 사슴은 도망간다
            'move': runAwayFn,
            // 사자가 울부짖으면 사슴은 더 멀리 도망간다
            'growl': runAwayFn
        }, deer);

        lion.off({
            'move': runAwayFn,
            'growl': runAwayFn
        }, deer);

        lion.move(10);
        lion.growl();

        expect(deer.position).toBe(0);
    });

    it('off() 는 아무 인자도 넘기지 않으면 모든 구독을 해제한다', function() {
        function Animal(leg) {
            this.leg = leg;
            this.position = 0;
        }

        ne.util.CustomEvents.mixin(Animal); // 커스텀 이벤트 기능 부여

        Animal.prototype.move = function(to) {
            this.position = to;
            this.fire('move');
        };
        Animal.prototype.growl = function() {
            this.fire('growl');
        };

        var lion = new Animal(4);
        var deer = new Animal(4);

        var runAwayFn = function() {
            this.position = 1000;
        };

        lion.on({
            // 사자가 움직이면 사슴은 도망간다
            'move': runAwayFn,
            // 사자가 울부짖으면 사슴은 더 멀리 도망간다
            'growl': runAwayFn
        }, deer);

        lion.off();

        lion.move(10);
        lion.growl();

        expect(deer.position).toBe(0);
    });

    it('once() 메서드로 단발성 커스텀 이벤트를 등록할 수 있다', function() {
        function Animal(leg) {
            this.leg = leg;
            this.position = 0;
        }

        ne.util.CustomEvents.mixin(Animal); // 커스텀 이벤트 기능 부여

        Animal.prototype.move = function(to) {
            this.position = to;
            this.fire('move');
        };

        var lion = new Animal(4);

        lion.moveDistance = 0;

        lion.once('move', function() {
            this.moveDistance += this.position;
        }, lion);

        lion.move(10);
        lion.move(10);

        expect(lion.moveDistance).toBe(10);
    });

    it('once() 도 마찬가지로 첫 번째 인자에 이벤트명:핸들러 객체로 한번헤 구독할 수 있다', function() {
        function Animal(leg) {
            this.leg = leg;
            this.position = 0;
        }

        ne.util.CustomEvents.mixin(Animal); // 커스텀 이벤트 기능 부여

        Animal.prototype.move = function(to) {
            this.position = to;
            this.fire('move');
        };
        Animal.prototype.back = function(distance) {
            this.fire('back', { distance: distance });
            this.position = -distance;
        };

        var lion = new Animal(4);

        lion.moveDistance = 0;

        lion.once({
            'move': function() {
                this.moveDistance += this.position;
            },
            'back': function(backEvent) {
                this.moveDistance -= backEvent.distance;
            }
        }, lion);

        lion.move(10);
        lion.move(10);
        lion.back(10);

        expect(lion.moveDistance).toBe(0);
    });

    describe('off 예외 테스트', function() {
        var customEvent;

        beforeEach(function() {
            customEvent = new ne.util.CustomEvents();
        });

        it('아무 이벤트도 등록하지 않았을 때 off를 호출해도 문제 없다', function() {
            expect(function() {
                customEvent.off();
            }).not.toThrow();
        });

    });

    describe('인스턴스로 사용하는 방법', function() {

        it('CustomEventss 자체를 인스턴스로 생성하여 사용할 수도 있다', function() {
            var spy = jasmine.createSpy('spy');

            var inst = new ne.util.CustomEvents();

            inst.on('move', spy);

            inst.fire('move', { test: 'a' });

            expect(spy).toHaveBeenCalledWith({ test: 'a', type: 'move', target: inst });
        });

    });

    describe('getListenerLength', function() {
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

        describe('리스너의 실행 결과 반환', function() {
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
                beforeEach(function() {
                    component.on('zoom', spy);
                });

                it('리스너 중 하나라도 명시적 false이면 false를 반환', function() {
                    component.on('beforeZoom', function() { return true; });
                    component.on('beforeZoom', function() { return false; });
                    component.on('beforeZoom', function() { return null; });

                    component.work();

                    expect(spy).not.toHaveBeenCalled();
                });

                it('그렇지 않으면 true반환', function() {
                    component.on('beforeZoom', function() { return true; });
                    component.on('beforeZoom', function() { return void 0; });
                    component.on('beforeZoom', function() { });

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

        it('fire()는 체이닝을 지원한다', function() {
            component.fire('foo').fire('bar');

            expect(spyObj.foo).toHaveBeenCalled();
            expect(spyObj.bar).toHaveBeenCalled();
        });
    });
});
