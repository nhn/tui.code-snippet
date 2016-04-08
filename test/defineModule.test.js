describe('"defineModule" function', function() {
    it('should call initialize', function() {
        tui.util.defineModule('foo.bar', {
            initialize: jasmine.createSpy()
        });

        expect(window.foo.bar.initialize).toHaveBeenCalled();
    });
});
