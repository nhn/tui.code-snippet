describe('ne.ajax.util', function() {

    it('ne.ajax.util.cloningObject', function() {
        var array1 = [1, 2, 3],
            array2 = ne.ajax.util.cloningObject(array1);
        expect(array2).toBeDefined();
        expect(array2).toEqual(array1);
        expect(array2.constructor).toBe(Array);
        expect(array2[1]).toBe(array1[1]);
        expect(array2.length).toBe(array1.length);
    });

    it('ne.ajax.util.getConstructorName', function() {
        var array = [],
            object = {},
            a = new (function A(){}),
            num = 1,
            bool = true,
            string = 'string',
            notsure = undefined;
        expect(ne.ajax.util.getConstructorName(array)).toBe('Array');
        expect(ne.ajax.util.getConstructorName(object)).toBe('Object');
        expect(ne.ajax.util.getConstructorName(a)).toBe('A');
        expect(ne.ajax.util.getConstructorName(num)).toBe('Number');
        expect(ne.ajax.util.getConstructorName(bool)).toBe('Boolean');
        expect(ne.ajax.util.getConstructorName(string)).toBe('String');
        expect(ne.ajax.util.getConstructorName(notsure)).toBe(null);
    });

    it('ne.ajax.util._getRandomId', function() {
        var num1 = ne.ajax.util._getRandomId(),
            num2 = ne.ajax.util._getRandomId(),
            num3 = ne.ajax.util._getRandomId(),
            num4 = ne.ajax.util._getRandomId(),
            num5 = ne.ajax.util._getRandomId();
        // 숫자타입의 난수이고, 10 자리 이하수인가
        function valid(num) {
            return typeof num === 'string' && num1.toString().length <= 10;
        }
        expect(valid(num1)).toBeTruthy();
        expect(valid(num2)).toBeTruthy();
        expect(valid(num3)).toBeTruthy();
        expect(valid(num4)).toBeTruthy();
        expect(valid(num5)).toBeTruthy();
    });

    it('ne.ajax.util.close', function() {

        var tempunload = false;
        // close내부에서 off 시키는 beforeunload 에 이벤트 바인딩
        jQuery(window).on('beforeunload', function() {
            tempunload = true;
        });

        // 실행후 이벤트 발생확인
        jQuery(window).trigger('beforeunload');
        expect(tempunload).toBeTruthy();

        // ne.ajax.util.close 실행 후 이벤트가 제거 되었는지 확인
        ne.ajax.util.close(true, window);
        // 이벤트가 실행되지 않는것을 확인하기 위해 다시 false 할당
        tempunload = false;
        jQuery(window).trigger('beforeunload');
        expect(tempunload).toBeFalsy();
    });
});