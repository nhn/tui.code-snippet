describe('defineModule', function() {
    var defineModule = ne.util.defineModule;

    it('define', function() {
        defineModule('aaa.bbb.ccc');
        expect(aaa).toBeDefined();
        expect(aaa.bbb).toBeDefined();
        expect(aaa.bbb.ccc).toBeDefined();
    });

    it('not define', function() {
        defineModule('aaa.bbb');
        expect(aaa.bbb.ddd).not.toBeDefined();
    });

    it('with props', function() {
        var num = 0;
        defineModule('asdf', {
            exec: function() {
                num += 10;
            }
        });

        asdf.exec();
        expect(num).toBe(10);

    });

    it('function', function() {
        var num = 0;
        defineModule('fdsa', function() {
            num += 100;
        });

        fdsa();
        expect(num).toBe(100);

    });

    it('for class', function() {
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

    it('override', function() {
        defineModule('asdf.over');

        expect(asdf.over).toBeDefined();
        expect(asdf.over.exec).not.toBeDefined();

        defineModule('asdf.over', {
            exec: function() {

            }
        }, true);
        expect(asdf.over.exec).toBeDefined();

    });

    it('invalid props type', function() {
        defineModule('asdf.hello', 'hello world');
        expect(asdf.hello).toBeDefined();
        expect(ne.util.isString(asdf.hello)).toBeFalsy();
    });

});