describe('defineModule', function() {
    var defineModule = ne.util.defineModule;

    it('defineModule', function() {
        defineModule('aaa.bbb.ccc');
        expect(aaa).toBeDefined();
        expect(aaa.bbb).toBeDefined();
        expect(aaa.bbb.ccc).toBeDefined();
    });

    it('defineModule not define', function() {
        defineModule('aaa.bbb');
        expect(aaa.bbb.ddd).not.toBeDefined();
    });

    it('defineModule with props', function() {
        var num = 0;
        defineModule('asdf', {
            exec: function() {
                num += 10;
            }
        });

        asdf.exec();
        expect(num).toBe(10);

    });

    it('defineModule function', function() {
        var num = 0;
        defineModule('asdf', function() {
            num += 100;
        });

        asdf();
        expect(num).toBe(100);

    });

    it('defineModule for class', function() {
        var name = 'nhnent';
        defineModule('asdf.nhnent', function() {
            this.name = name;
            this.getName = function() {
                return this.name;
            }
        });

        var mInstance = new asdf.nhnent();
        expect(mInstance.getName()).toBe(name);

    });

    it('defineModule override', function() {
        defineModule('asdf.over');

        expect(asdf.over).toBeDefined();
        expect(asdf.over.exec).not.toBeDefined();

        defineModule('asdf.over', {
            exec: function() {

            }
        });
        expect(asdf.over.exec).toBeDefined();

    });

});