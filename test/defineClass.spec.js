'use strict';

var defineClass = require('../defineClass/defineClass');

describe('module:def', function() {
  describe('def()', function() {
    var props1,
      propsWithinit,
      propsWithinit2,
      propsWithStatic;

    props1 = {
      var1: 1,
      method1: function() {}
    };

    propsWithinit = {
      var3: 3,
      init: function() {
        this.instanceVar = 3;
      },
      method3: function() {}
    };

    propsWithinit2 = {
      var4: 4,
      init: function() {
        this.instanceVar = 4;
      },
      method4: function() {}
    };

    propsWithStatic = {
      var2: 2,
      method2: function() {},
      static: {
        staticMethod1: function() {},
        staticMethod2: function() {}
      }
    };

    describe('should create a constructor', function() {
      var MyObject;

      beforeEach(function() {
        MyObject = defineClass(props1);
      });

      it('and its prototype should have the methods passed by the parameter.', function() {
        expect(MyObject.prototype.method1).toBeDefined();
        expect(MyObject.prototype.method1).toBe(props1.method1);
      });

      it('and its prototype should have the variables passed by the parameter.', function() {
        expect(MyObject.prototype.var1).toBeDefined();
        expect(MyObject.prototype.var1).toEqual(props1.var1);
      });

      it('and an instance should refer to the prototype\'s method and variable.', function() {
        var instance = new MyObject();

        expect(instance.var1).toBeDefined();
        expect(instance.var1).toBe(MyObject.prototype.var1);
        expect(instance.method1).toBeDefined();
        expect(instance.method1).toBe(MyObject.prototype.method1);
      });
    });

    describe('should set a constructor by passing init', function() {
      var MyObject;

      beforeEach(function() {
        MyObject = defineClass(propsWithinit);
      });

      it('and its prototype should have the methods passed by the parameter.', function() {
        expect(MyObject.prototype.method3).toBeDefined();
        expect(MyObject.prototype.method3).toBe(propsWithinit.method3);
      });

      it('and its prototype should have the variables passed by the parameter.', function() {
        expect(MyObject.prototype.var3).toBeDefined();
        expect(MyObject.prototype.var3).toEqual(propsWithinit.var3);
      });

      it('and an instance should refer to the prototype\'s method and variable.', function() {
        var instance = new MyObject();

        expect(instance.var3).toBeDefined();
        expect(instance.var3).toBe(MyObject.prototype.var3);
        expect(instance.method3).toBeDefined();
        expect(instance.method3).toBe(MyObject.prototype.method3);
      });

      it('and an instance should have instance variables.', function() {
        var instance = new MyObject();

        expect(instance.instanceVar).toBeDefined();
        expect(instance.instanceVar).toEqual(3);
      });
    });

    describe('should assign static variables by a static property', function() {
      var MyObject;

      beforeEach(function() {
        MyObject = defineClass(propsWithStatic);
      });

      it('and it should have static members.', function() {
        expect(MyObject.staticMethod1).toBeDefined();
        expect(MyObject.staticMethod2).toBeDefined();
        expect(propsWithStatic['static']).not.toBeDefined();
      });
    });

    describe('should create a new constructor by inheriting other constructor', function() {
      var Parent,
        Child;

      beforeEach(function() {
        Parent = defineClass(propsWithinit);
        Child = defineClass(Parent, propsWithinit2);
      });

      it('and child\'s prototype should have parent\'s methods.', function() {
        expect(Child.prototype.method4).toBeDefined();
        expect(Child.prototype.method4).toBe(propsWithinit2.method4);
      });

      it('and child\'s prototype should have parent\'s variables.', function() {
        expect(Child.prototype.var4).toBeDefined();
        expect(Child.prototype.var4).toEqual(propsWithinit2.var4);
      });

      it('and child\'s instance should refer to its prototype\'s members.', function() {
        var instance = new Child();

        expect(instance.var4).toBeDefined();
        expect(instance.var4).toBe(Child.prototype.var4);
        expect(instance.method4).toBeDefined();
        expect(instance.method4).toBe(Child.prototype.method4);
      });

      it('and child\'s instance should refer to parent\'s prototype\'s members.', function() {
        var instance = new Child();

        expect(instance.var3).toBeDefined();
        expect(instance.var3).toBe(Parent.prototype.var3);
        expect(instance.method3).toBeDefined();
        expect(instance.method3).toBe(Parent.prototype.method3);
      });

      it('and child\'s instance should refer to its instance members.', function() {
        var instance = new Child();

        expect(instance.instanceVar).toBeDefined();
        expect(instance.instanceVar).toEqual(4);
      });
    });

    describe('should use a constructor in the init function', function() {
      var Parent,
        Child;

      beforeEach(function() {
        Parent = defineClass(propsWithinit);
        Child = defineClass(Parent, {
          init: function() {
            Parent.call(this);
          }
        });
      });

      it('and child\'s instance should refer the members inherited by parent.', function() {
        var instance = new Child();

        expect(instance.var3).toBeDefined();
        expect(instance.var3).toBe(Parent.prototype.var3);
        expect(instance.method3).toBeDefined();
        expect(instance.method3).toBe(Parent.prototype.method3);
      });

      it('and child\'s instance should refer the instance members.', function() {
        var instance = new Child();

        expect(instance.instanceVar).toBeDefined();
        expect(instance.instanceVar).toEqual(3);
      });
    });
  });
});
