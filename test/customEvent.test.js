describe('customEvent() 메서드를 이용해 인스턴스가 커스텀 이벤트를 발생하거나 받을 수 있게 할 수 있다', function() {

    it('on() 메서드로 이벤트를 구독할 수 있다', function() {
        function Animal(leg) {
            this.leg = leg;
            this.position = 0;
        }

        ne.customEvent(Animal); // 커스텀 이벤트 기능 부여

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
        ne.customEvent(Animal); // 커스텀 이벤트 기능 부여

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

        ne.customEvent(Animal); // 커스텀 이벤트 기능 부여

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

        ne.customEvent(Animal); // 커스텀 이벤트 기능 부여

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

        ne.customEvent(Animal); // 커스텀 이벤트 기능 부여

        Animal.prototype.move = function (to) {
            this.position = to;
            this.fire('move');
        };

        var lion = new Animal(4),
            deer = new Animal(4),
            runAwayFn = function () {
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

        ne.customEvent(Animal); // 커스텀 이벤트 기능 부여

        Animal.prototype.move = function (to) {
            this.position = to;
            this.fire('move');
        };
        Animal.prototype.growl = function () {
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

        ne.customEvent(Animal); // 커스텀 이벤트 기능 부여

        Animal.prototype.move = function (to) {
            this.position = to;
            this.fire('move');
        };
        Animal.prototype.growl = function () {
            this.fire('growl');
        };

        var lion = new Animal(4);
        var deer = new Animal(4);

        var runAwayFn = function () {
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

        ne.customEvent(Animal); // 커스텀 이벤트 기능 부여

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

        ne.customEvent(Animal); // 커스텀 이벤트 기능 부여

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
});
