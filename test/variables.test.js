describe('variable', function() {

    beforeEach(function() {
        ne.variable.reset({});
    });

    it('저장된 전역 변수를 안전하게 참조할 수 있다', function() {
        ne.variable.reset({
            a: 1,
            b: 2,
            c: 'stop',
            d: {
                a: '2'
            }
        });

        expect(ne.variable.get('a')).toBe(1);
        expect(ne.variable.get('d.a')).toBe('2');
        expect(ne.variable.get('cc')).toBeUndefined();
        expect(ne.variable.get('woeijrwoijr.we.qwem1;123;')).toBeUndefined();
    });

    it('저장되는 변수는 참조형이기 때문에 주의를 요한다', function() {
        var arr = [1, 2],
            obj = {};

        ne.variable.set('mydata.arr', arr);

        arr.push(3);

        expect(ne.variable.get('mydata.arr').length).toBe(3);

        ne.variable.set('mydata.obj', obj);

        // 참조형이므로 직접 수정도 가능하다
        obj.test = '123';

        expect(ne.variable.get('mydata.obj.test')).toBe('123');
    });

    it('get() 메서드를 인자 없이 사용할 경우 undefined를 반환한다', function() {
        ne.variable.set('myval', '123');

        expect(ne.variable.get()).toBe(undefined);
    });

    it('전역변수를 한 곳에 안전하게 저장할 수 있다', function() {
        ne.variable.set('msg.loginerror', '로그인 중 문제가 발생했습니다. 잠시 후 다시 시도하세요');

        expect(ne.variable.get('msg.loginerror')).toBe('로그인 중 문제가 발생했습니다. 잠시 후 다시 시도하세요');
    });

    it('전역변수를 설정할 때 key:value의 객체 배열을 넘겨 한번에 여러 변수를 설정할 수 있다', function() {
        ne.variable.set('msg.error', '오류가 발생했습니다. 잠시 후 다시 시도하세요');

        ne.variable.set({
            'msg.error': '오류 발생',
            'msg.test': '메시지 테스트'
        });

        expect(ne.variable.get('msg.error')).toBe('오류 발생');
        expect(ne.variable.get('msg.test')).toBe('메시지 테스트');
    });

    it('이미 있는 전역변수를 다시 설정하면 덮어쓴다', function() {
        ne.variable.set('myval', 'test');

        expect(ne.variable.get('myval')).toBe('test');

        ne.variable.set('myval', 'good');

        expect(ne.variable.get('myval')).not.toBe('test');
    });

    it('null의 저장은 값이 있는 것으로 본다 (undefined만이 값이 없는 것으로 본다)', function() {
        ne.variable.set('msg.myval', null);

        ne.variable.set('msg.myval2', undefined);

        expect(ne.variable.get('msg.myval')).toBe(null);
        expect(ne.variable.get('msg.myval2')).toBeUndefined();
        expect(ne.variable.get('msg.myval2') === ne.variable.get('msg.ewrewrer')).toBe(true);
    });

    it('set으로 undefined를 할당하는 행위는 무시된다', function() {
        ne.variable.set('msg.test', undefined);

        expect(ne.variable.get('msg.test')).toBe(undefined);
    });

    it('전역변수가 복잡하더라도 변수를 정확히 설정한다', function() {

        ne.variable.reset({
            msg: {
                error: '오류가 발생했습니다. 잠시 후 다시 시도하세요',
                loginerror: '로그인 중 문제가 발생했습니다. 잠시 후 다시 시도하세요',
                common: {
                    user: {
                        need: '을(를) 다시 입력하세요'
                    },
                    admin: {
                        need: '을(를) 다시 입력해 주세요'
                    }
                }
            },
            url: {
                'login_url': 'http://www.naver.com',
                'detail_url': {
                    'product': 'http://www.naver.com/product/test'
                }
            }
        });

        ne.variable.set('msg.common.user.no_need', '을(를) 다시 입력할 필요가 없습니다');

        ne.variable.set({
            'url.detail_url.product': 'http://www.google.com',
            'msg.common.admin': '이보게 젊은이'
        });

        expect(ne.variable.get('msg.common.admin')).toBe('이보게 젊은이');
        expect(ne.variable.get('msg.common.user.no_need', '을(를) 다시 입력할 필요가 없습니다'));
        expect(ne.variable.get('url.detail_url.product')).toBe('http://www.google.com');
        expect(ne.variable.get('msg.common.fire')).toBeUndefined();
        // msg.common.admin 항목은 덮어써진다.
        expect(ne.variable.get('msg.common.admin.need')).toBe(undefined);
    });

    it('reset() 메서드를 통해 전역변수 공간을 한번에 덮어쓸 수 있다', function() {

        expect(function() {
            ne.variable.reset(3);
        }).toThrowError('variable: 전역변수 공간은 object 형태의 데이터로만 설정이 가능합니다.');

        expect(function() {
            ne.variable.reset(function() {});
        }).toThrowError('variable: 전역변수 공간은 object 형태의 데이터로만 설정이 가능합니다.');

        expect(function() {
            ne.variable.reset([]);
        }).toThrowError('variable: 전역변수 공간은 object 형태의 데이터로만 설정이 가능합니다.');

        var mySetting = {
            a: '123',
            b: '456',
            c: ['a', 'b']
        };

        ne.variable.reset(mySetting);

        expect(ne.variable.get('a')).toBe('123');
        expect(ne.variable.get('b')).toBe('456');
        expect(ne.variable.get('c').length).toBe(2);
    });

});
