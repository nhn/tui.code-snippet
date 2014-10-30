describe('inheritance', function() {
    describe('#createObject()', function() {
        it('전달된 객체를 prototype으로 가지는 새 객체를 생성할 수 있다', function() {

            var obj = {
                say: function() {
                    alert('hello');
                },
                arr: [1, 2, 3]
            };

            var newObj = ne.createObject(obj);

            expect(newObj.say).toBeDefined();
        });

        it('prototype으로 사용하는 객체는 얇은 복사를 하기 때문에 주의해야 한다', function() {

            var obj = {
                arr: [1, 3, 4]
            };

            var newObj = ne.createObject(obj);

            obj.arr.push(5);

            expect(newObj.arr.length).toBe(4);
        });

    });

    describe('#inherit()', function() {

        it('기본적인 프로토타입 상속을 지원한다', function() {

            /* Animal */
            function Animal(leg) {
                this.leg = leg;
                this.position = 0;
            }

            Animal.prototype.move = function(to) {
                this.position = to;
            };

            /* Person */
            function Person(leg) {
                Animal.call(this, leg);
            }

            ne.inherit(Person, Animal);

            Person.prototype.say = function(word) {
                return '"' + word + '"';
            };

            var adam = new Person(2);

            adam.move(3);

            expect(adam.position).toBe(3);
            expect(adam.leg).toBe(2);
            expect(adam.say('good')).toBe('"good"');
        });

        it('상속관계라도 부모의 생성자를 자동 호출하지는 않는다', function() {
            /* Animal */
            function Animal(leg) {
                this.leg = leg;
                this.position = 0;
            }

            Animal.prototype.move = function(to) {
                this.position = to;
            };

            /* Person */
            function Person(leg) {
                //Animal.call(this, leg); 주석처리함
            }

            ne.inherit(Person, Animal);

            Person.prototype.say = function(word) {
                return '"' + word + '"';
            };

            var person = new Person(2);

            expect(person.leg).toBeUndefined();

        });

        it('2단계 이상 상속도 지원한다', function() {
            /* Animal */
            function Animal(leg) {
                this.leg = leg;
                this.position = 0;
            }

            Animal.prototype.move = function(to) {
                this.position = to;
            };

            /* Person */
            function Person(leg) {
                Animal.call(this, leg);
            }

            ne.inherit(Person, Animal);

            Person.prototype.say = function(word) {
                return '"' + word + '"';
            };

            /* Programmer */
            function Programmer(name) {
                Person.call(this, 2);
                this.name = name;
            }

            ne.inherit(Programmer, Person);

            Programmer.prototype.coding = function(language) {
                return this.name + ' coding with ' + language;
            };

            var resig = new Programmer('john resig');

            expect(resig.coding('JS')).toBe('john resig coding with JS');
            expect(resig.leg).toBe(2);
            expect(resig.say('good')).toBe('"good"');

        });

        it('당연한 이야기지만 상속관계더라도 인스턴스 프로퍼티는 공유하지 않는다', function() {
            /* Animal */
            function Animal(leg) {
                this.leg = leg;
                this.position = 0;
            }

            Animal.prototype.move = function(to) {
                this.position = to;
            };

            /* Person */
            function Person(leg) {
                Animal.call(this, leg);
            }

            ne.inherit(Person, Animal);

            Person.prototype.say = function(word) {
                return '"' + word + '"';
            };

            var ant = new Animal(6);
            ant.move(10);

            var person = new Person(2);
            ne.inherit(Person, Animal);

            expect(ant.leg).toBe(6);
            expect(person.leg).toBe(2);
            expect(ant.say).toBeUndefined();
            expect(person.say).toBeDefined();
            expect(person.say('good')).toBe('"good"');

        });
    });

});
