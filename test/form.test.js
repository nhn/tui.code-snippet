describe('form', function() {
    var $form;
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/';
        loadFixtures('test/fixtures/form.html');
    });



    describe('getFormElement()', function() {
        beforeEach(function() {
            $form = $('#test_form');
        });

        it('name 에 해당하는 input 이 존재하지 않는 경우 길이가 0 인 배열을 반환한다.', function() {
            var $element = ne.getFormElement($form, 'not_found_delivery_number');
            expect($element.length).toEqual(0);
        });
        it('$form 이 존재하지 않는 경우 길이가 0 인 배열을 반환한다.', function() {
            var $element = ne.getFormElement('', 'delivery_number');
            expect($element.length).toEqual(0);
        });
        it('name 에 해당하는 input 요소들을 배열 형태로 반환한다.', function() {
            expect(ne.getFormElement($form, 'delivery_number').length).toEqual(1);
            expect(ne.getFormElement($form, 'user_name').length).toEqual(1);
            expect(ne.getFormElement($form, 'weather').length).toEqual(1);
            expect(ne.getFormElement($form, 'gender').length).toEqual(2);
            expect(ne.getFormElement($form, 'hobby').length).toEqual(4);
        });
    });
    describe('getFormData()', function() {
        describe('Form 에 설정된 데이터를 object 형태로 반환한다.', function() {
            beforeEach(function() {
                $form = $('#test_form_empty');
                $form.html('');
            });
            it('text input 의 데이터를 가져올 수 있다.', function() {
                var htmlText = '<input type="text" name="user_name" value="defaultText"/>',
                    formData,
                    expectResult = 'defaultText';
                $form.append(htmlText);

                formData = ne.getFormData($form);
                expect(formData['user_name']).toEqual(expectResult);
            });
            it('select 의 데이터를 가져올 수 있다.', function() {
                var htmlText = '<select name="weather">' +
                                '<option value="spring">봄</option>' +
                                '<option value="summer" selected>여름</option>' +
                                '<option value="fall">가을</option>' +
                                '<option value="winter">겨울</option>' +
                                '</select>',
                    expectResult = 'summer',
                    formData;
                $form.append(htmlText);
                formData = ne.getFormData($form);
                expect(formData['weather']).toEqual(expectResult);
            });
            it('radio input 의 데이터를 가져올 수 있다.', function() {
                var htmlText = '<input type="radio" name="gender" value="male"/>남' +
                        '<input type="radio" name="gender" value="female" checked/>여',
                    expectResult = 'female',
                    formData;

                $form.append(htmlText);

                formData = ne.getFormData($form);
                expect(formData['gender']).toEqual(expectResult);
            });
            it('checkbox input 의 데이터를 가져올 수 있다.', function() {
                var htmlText = '<input type="checkbox" name="hobby" value="sport"/>스포츠' +
                                '<input type="checkbox" name="hobby" value="sewing" checked/>재봉틀' +
                                '<input type="checkbox" name="hobby" value="drinking" checked/>음주' +
                                '<input type="checkbox" name="hobby" value="dancing"/>가무',
                    expectResult = ['sewing', 'drinking'],
                    formData;

                $form.append(htmlText);

                formData = ne.getFormData($form);
                expect(formData['hobby']).toEqual(expectResult);
            });
        });
    });
    describe('setFormElementValue()', function() {
        describe('form 의 각 인풋 요소에 값을 설정할 수 있다.', function() {
            beforeEach(function() {
                $form = $('#test_form_empty');
                $form.html('');
            });
            it('text input 에 값을 설정할 수 있다.', function() {
                var htmlText = '<input type="text" name="user_name"/>',
                    formData,
                    expectResult = 'defaultText';

                $form.append(htmlText);
                ne.setFormElementValue($form, 'user_name', expectResult);

                formData = ne.getFormData($form);
                expect(formData['user_name']).toEqual(expectResult);
            });
            it('select 요소의 값을 설정할 수 있다.', function() {
                var htmlText = '<select name="weather">' +
                        '<option value="spring">봄</option>' +
                        '<option value="summer">여름</option>' +
                        '<option value="fall">가을</option>' +
                        '<option value="winter">겨울</option>' +
                        '</select>',
                    expectResult = 'winter',
                    formData;

                $form.append(htmlText);
                ne.setFormElementValue($form, 'weather', expectResult);
                formData = ne.getFormData($form);
                expect(formData['weather']).toEqual(expectResult);
            });
            it('radio input 의 값을 설정할 수 있다.', function() {
                var htmlText = '<input type="radio" name="gender" value="male"/>남' +
                        '<input type="radio" name="gender" value="female"/>여',
                    expectResult = 'male',
                    formData;

                $form.append(htmlText);
                ne.setFormElementValue($form, 'gender', expectResult);

                formData = ne.getFormData($form);
                expect(formData['gender']).toEqual(expectResult);
            });
            it('checkbox input 의 값을 설정할 수 있다.', function() {
                var htmlText = '<input type="checkbox" name="hobby" value="sport"/>스포츠' +
                        '<input type="checkbox" name="hobby" value="sewing"/>재봉틀' +
                        '<input type="checkbox" name="hobby" value="drinking"/>음주' +
                        '<input type="checkbox" name="hobby" value="dancing"/>가무',
                    expectResult = ['sewing', 'drinking', 'sport', 'dancing'],
                    formData;

                $form.append(htmlText);
                ne.setFormElementValue($form, 'hobby', expectResult);

                formData = ne.getFormData($form);
                expect(formData['hobby'].sort()).toEqual(expectResult.sort());
            });
        });

    });
    describe('setFormData()', function() {
        var sampleFormData;
        beforeEach(function() {
            sampleFormData = {
                'delivery_number': 1000,
                'user_name': 'john',
                'weather': 'summer',
                'gender': 'male',
                'hobby': ['sport', 'dancing']
            };
            $form = $('#test_form');
        });
        it('Object 형태의 데이터를 전달하여 form 엘리먼트들의 data 들을 설정할 수 있다.', function() {
            ne.setFormData($form, sampleFormData);
            sampleFormData.delivery_number = String(sampleFormData.delivery_number);
            var formData = ne.getFormData($form);
            expect(formData).toEqual(sampleFormData);
        });
    });
});
