'use strict';

var defineModule = require('../src/defineModule');

describe('"defineModule" function', function() {
    it('should call initialize', function() {
        defineModule('foo.bar', {
            initialize: jasmine.createSpy()
        });

        expect(window.foo.bar.initialize).toHaveBeenCalled();
    });
});
