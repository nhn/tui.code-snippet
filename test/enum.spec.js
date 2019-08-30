'use strict';

var Enum = require('../enum/enum');

describe('module:Enum', function() {
    var isModernBrowser = (function() {
        try {
            Object.defineProperty({}, 'x', {});

            return true;
        } catch (e) {
            return false;
        }
    })();
    var enumO;

    beforeEach(function() {
        enumO = new Enum();
    });

    describe('.set()', function() {
        it('should create the constants by its name.', function() {
            enumO.set('CONST1', 'CONST2');

            expect(enumO.CONST1).toBeDefined();
            expect(enumO.CONST2).toBeDefined();
        });

        it('should create the constants by an array.', function() {
            enumO.set(['CONST3', 'CONST4']);

            expect(enumO.CONST3).toBeDefined();
            expect(enumO.CONST4).toBeDefined();
        });

        it('should have different values between the constants.', function() {
            enumO.set('CONST1', 'CONST2');

            expect(enumO.CONST1).not.toEqual(enumO.CONST2);
        });

        it('should not declare the same constant twice.', function() {
            var originalValue;

            enumO.set('CONST1', 'CONST2');
            originalValue = enumO.CONST1;
            enumO.set('CONST1');

            expect(enumO.CONST1).toEqual(originalValue);
        });
    });

    describe('.getName()', function() {
        it('should get the constant\'s name by the value.', function() {
            var result;

            enumO.set('CONST1', 'CONST2');
            result = enumO.getName(enumO.CONST1);

            expect(result).toEqual('CONST1');
        });
    });

    describe('should use a constructor', function() {
        it('when creating the constants.', function() {
            var enumO2 = new Enum('CONST1', 'CONST2');

            expect(enumO2.CONST1).toBeDefined();
            expect(enumO2.CONST2).toBeDefined();
        });

        it('when creating the constants by an array.', function() {
            var enumO2 = new Enum(['CONST1', 'CONST2']);

            expect(enumO2.CONST1).toBeDefined();
            expect(enumO2.CONST2).toBeDefined();
        });
    });

    if (isModernBrowser) {
        describe('in the modern browser', function() {
            beforeEach(function() {
                enumO.set('CONST1', 'CONST2');
            });

            it('should not change the declared constants.', function() {
                var desc = Object.getOwnPropertyDescriptor(enumO, 'CONST1');

                expect(desc.writable).toEqual(false);
                expect(desc.configurable).toEqual(false);
            });
        });
    }
});
