describe('module:Enum', function() {
    'use strict';

    var Enums = ne.util.Enums,
        enums;

    beforeEach(function() {
        enums = new Enums();
    });

    describe('.set()', function() {
        it('상수명을 입력받을수있다.', function() {
            enums.set('CONST1', 'CONST2');

            expect(enums.CONST1).toBeDefined();
            expect(enums.CONST2).toBeDefined();
        });

        it('배열로 상수를 지정할수있다', function() {
            enums.set(['CONST3', 'CONST4']);

            expect(enums.CONST3).toBeDefined();
            expect(enums.CONST4).toBeDefined();
        });

        it('상수들은 서로다른 값을 갖는다', function() {
            enums.set('CONST1', 'CONST2');

            expect(enums.CONST1).not.toEqual(enums.CONST2);
        });

        it('한번정의된 상수는 재정의 될수없다', function() {
            var originalValue;

            enums.set('CONST1', 'CONST2');
            originalValue = enums.CONST1;
            enums.set('CONST1');

            expect(enums.CONST1).toEqual(originalValue);
        });
    });

    describe('.getName()', function() {
        it('값을 입력해 상수명을 얻어올수있다', function() {
            var result;

            enums.set('CONST1', 'CONST2');
            result = enums.getName(enums.CONST1);

            expect(result).toEqual('CONST1');
        });
    });

    describe('생성자 옵션으로 상수들을 지정할수있다', function() {
        it('상수들이 정상적으로 생성되었다', function() {
            var enum2 = new Enums('CONST1', 'CONST2');

            expect(enum2.CONST1).toBeDefined();
            expect(enum2.CONST2).toBeDefined();
        });

        it('배열로 상수들이 정상적으로 생성되었다', function() {
            var enum2 = new Enums(['CONST1', 'CONST2']);

            expect(enum2.CONST1).toBeDefined();
            expect(enum2.CONST2).toBeDefined();
        });
    });

    if (Object.defineProperty) {
        describe('Modern Browser: 정의된 값은 변경할수없다', function() {
            beforeEach(function() {
                enums.set('CONST1', 'CONST2');
            });

            it('상수의 값이 변경되지 않는다', function() {
                var desc = Object.getOwnPropertyDescriptor(enums, 'CONST1');

                expect(desc.writable).toEqual(false);
                expect(desc.configurable).toEqual(false);
            });
        });
    }
});
