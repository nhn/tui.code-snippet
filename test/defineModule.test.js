describe('`defineModule` function', function() {
    fit('should call initialize', function() {
        tui.util.defineModule('foo.bar', {
            initialize: jasmine.createSpy()
        });
        
        expect(foo.bar.initialize).toHaveBeenCalled();
    });
});
