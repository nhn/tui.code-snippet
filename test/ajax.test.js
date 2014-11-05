describe('ne.ajax', function() {


    beforeEach(function () {
        jasmine.Ajax.install();
    });

    afterEach(function () {
        jasmine.Ajax.uninstall();
    });

    describe('ajax 테스트 시작 ', function() {

        it('요청성공시 성공콜백이 동작하는지', function() {

            var successFn = jasmine.createSpy('success');

            ne.ajax.request('data/success', {
                type: 'GET',
                dataType: 'text',
                success: function(args) {
                    if (this.readyState == this.DONE) {
                        successFn(this.responseText);
                    }
                }
            });
            jasmine.Ajax.requests.mostRecent().response({
                'status': 200,
                'contentType': 'text/plain',
                'responseText': 'text'
            });
            expect(jasmine.Ajax.requests.mostRecent().url).toBe('data/success');
            expect(successFn).toHaveBeenCalled();


        });


        it('에러시 에러코드가 제대로 불려지는지', function() {

            var errorFn = jasmine.createSpy('error');

            ne.ajax.request('data/error', {
                type: 'GET',
                dataType: 'text',
                error: function(args) {
                    if (this.readyState == this.DONE) {
                        errorFn(this.responseText);
                    }
                }
            });

            jasmine.Ajax.requests.mostRecent().response({
                'readyState': 1,
                'status': 300
            });

            expect(jasmine.Ajax.requests.mostRecent().url).toBe('data/error');
            expect(errorFn).toHaveBeenCalled();

        });


        it('요청완료시 완료콜백이 동작하는지', function() {

            var completeFn = jasmine.createSpy('complete');

            ne.ajax.request('data/complete', {
                type: 'GET',
                dataType: 'text',
                complete: function(args) {
                    if (this.readyState == this.DONE) {
                        completeFn(this.responseText);
                    }
                }
            });
            jasmine.Ajax.requests.mostRecent().response({
                'readyState': 4,
                'status': 200
            });
            expect(jasmine.Ajax.requests.mostRecent().url).toBe('data/complete');
            expect(completeFn).toHaveBeenCalled();

        });
    });


    it('요청성공시 데이터가 제대로 넘어가고 응답하는지 get', function() {

        var successFn = jasmine.createSpy('success'),
            id, name;

        ne.ajax.request('data/datatest', {
            type: 'GET',
            options : {
                id: 'codesnippet_id',
                name: 'nodesnippet_name'
            },
            success: function(args) {
                id = this.options.id;
                name = this.options.name;
                if (this.readyState == this.DONE) {
                    successFn(args);
                }
            }
        });

        jasmine.Ajax.requests.mostRecent().response({
            'status': 200,
            'statusText': 'ok',
            'contentType': 'application/json',
            'responseText': '{"msg":"ok"}'
        });

        // 요청에 사용된 파라미터
        expect(id).toBe('codesnippet_id');
        expect(name).toBe('nodesnippet_name');
        // 응답테스트
        expect(jasmine.Ajax.requests.mostRecent().method).toBe('GET');
        expect(jasmine.Ajax.requests.mostRecent().url).toBe('data/datatest');
        expect(jasmine.Ajax.requests.mostRecent().statusText).toBe('ok');
        expect(jasmine.Ajax.requests.mostRecent().status).toBe(200);
        expect(jasmine.Ajax.requests.mostRecent().responseHeaders['Content-Type']).toBe('application/json');
        expect(successFn).toHaveBeenCalled();
        expect(successFn).toHaveBeenCalledWith({msg: 'ok'});

    });

    it('요청성공시 데이터가 제대로 들어오는지 post', function() {

        var successFn = jasmine.createSpy('success');

        ne.ajax.request('data/datatest', {
            type: 'POST',
            dataType: 'text',
            success: function(args) {
                if (this.readyState == this.DONE) {
                    successFn(args);
                }
            }
        });
        jasmine.Ajax.requests.mostRecent().response({
            'status': 200,
            'contentType': 'text/plain',
            'responseText': 'text'
        });
        expect(jasmine.Ajax.requests.mostRecent().method).toBe('POST');
        expect(jasmine.Ajax.requests.mostRecent().url).toBe('data/datatest');
        expect(jasmine.Ajax.requests.mostRecent().statusText).toBe('');
        expect(jasmine.Ajax.requests.mostRecent().status).toBe(200);
        expect(jasmine.Ajax.requests.mostRecent().responseHeaders['Content-Type']).toBe('text/plain');
        expect(successFn).toHaveBeenCalled();
        expect(successFn).toHaveBeenCalledWith('text');


    });



});
