describe('namespace', function() {
    var namespace = ne.util.namespace;

    it('define', function() {
        namespace('aaa.bbb.ccc');
        expect(aaa).toBeDefined();
        expect(aaa.bbb).toBeDefined();
        expect(aaa.bbb.ccc).toBeDefined();
    });

    it('not define', function() {
        namespace('aaa.bbb');
        expect(aaa.bbb.ddd).not.toBeDefined();
    });

    it('with props', function() {
        var num = 0;
        namespace('asdf', {
            exec: function() {
                num += 10;
            }
        });

        asdf.exec();
        expect(num).toBe(10);

    });

    it('function', function() {
        var num = 0;
        namespace('fdsa', function() {
            num += 100;
        });

        fdsa();
        expect(num).toBe(100);

    });

    it('for class', function() {
        var name = 'nhnent';
        namespace('asdf.nhnent', function() {
            this.name = name;
            this.getName = function() {
                return this.name;
            }
        });

        var mInstance = new asdf.nhnent();
        expect(mInstance.getName()).toBe(name);

    });

    it('override', function() {
        namespace('asdf.over');

        expect(asdf.over).toBeDefined();
        expect(asdf.over.exec).not.toBeDefined();

        namespace('asdf.over', {
            exec: function() {

            }
        }, true);
        expect(asdf.over.exec).toBeDefined();

    });

    it('invalid props type', function() {
        namespace('asdf.hello', 'hello world');
        expect(asdf.hello).toBeDefined();
        expect(ne.util.isString(asdf.hello)).toBeFalsy();
    });

    it('define double', function() {
        var feCom = namespace('fe.component'),
            feDouble = namespace('fe.component');

        expect(feCom).toBe(feDouble);
    });

    it('define double other depth', function() {
        var feCom = namespace('fe.comp');
        namespace('fe.comp.team');

        expect(feCom).toBe(fe.comp);
        expect(feCom.team).toBe(fe.comp.team);
    });

});