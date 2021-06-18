'use strict';

var createObject = require('../inheritance/createObject');
var inherit = require('../inheritance/inherit');

describe('inheritance', function() {
  describe('#createObject()', function() {
    it('should create a new object and its prototype is the object passed by a parameter.', function() {
      var obj = {
        say: function() {
          alert('hello');
        },
        arr: [1, 2, 3]
      };

      var newObj = createObject(obj);

      expect(newObj.say).toBeDefined();
    });

    it('should be cautious due to the shallow copy of the prototype.', function() {
      var obj = {
        arr: [1, 3, 4]
      };

      var newObj = createObject(obj);

      obj.arr.push(5);

      expect(newObj.arr).toBe(obj.arr);
    });
  });

  describe('#inherit()', function() {
    it('should provide the basic prototype inheritance.', function() {
      var adam;
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

      inherit(Person, Animal);

      Person.prototype.say = function(word) {
        return '"' + word + '"';
      };

      adam = new Person(2);

      adam.move(3);

      expect(adam.position).toBe(3);
      expect(adam.leg).toBe(2);
      expect(adam.say('good')).toBe('"good"');
    });

    it('should not automatically call a parent\'s constructor even if a child is inherited by a parent.', function() {
      var person;
      /* Animal */
      function Animal(leg) {
        this.leg = leg;
        this.position = 0;
      }

      Animal.prototype.move = function(to) {
        this.position = to;
      };

      /* Person */
      function Person(leg) { // eslint-disable-line no-unused-vars
        // Animal.call(this, leg); 주석처리함
      }

      inherit(Person, Animal);

      Person.prototype.say = function(word) {
        return '"' + word + '"';
      };

      person = new Person(2);

      expect(person.leg).toBeUndefined();
    });

    it('should provide deep inheritance more than two-depth.', function() {
      var resig;

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

      inherit(Person, Animal);

      Person.prototype.say = function(word) {
        return '"' + word + '"';
      };

      /* Programmer */
      function Programmer(name) {
        Person.call(this, 2);
        this.name = name;
      }

      inherit(Programmer, Person);

      Programmer.prototype.coding = function(language) {
        return this.name + ' coding with ' + language;
      };

      resig = new Programmer('john resig');

      expect(resig.coding('JS')).toBe('john resig coding with JS');
      expect(resig.leg).toBe(2);
      expect(resig.say('good')).toBe('"good"');
    });

    it('should not share instance properties even if they are in the inheritance relationship.', function() {
      var ant, person;

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

      inherit(Person, Animal);

      Person.prototype.say = function(word) {
        return '"' + word + '"';
      };

      ant = new Animal(6);
      ant.move(10);

      person = new Person(2);
      inherit(Person, Animal);

      expect(ant.leg).toBe(6);
      expect(person.leg).toBe(2);
      expect(ant.say).toBeUndefined();
      expect(person.say).toBeDefined();
      expect(person.say('good')).toBe('"good"');
    });
  });
});
