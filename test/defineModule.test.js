describe('`defineModule` function', function() {

    var definedModule;

    it('should set namespace and override', function() {
        definedModule = ne.util.defineModule('foo.bar', {a: 'a'});
        expect(window.foo.bar).toBe(definedModule);

        definedModule = ne.util.defineModule('foo.bar', {b: 'b'});
        expect(window.foo.bar).toBe(definedModule);
        expect(window.foo.bar.a).not.toBeDefined();
        expect(window.foo.bar.b).toBeDefined();
    });

    describe('return a object', function() {
        var messagesForVerifying = {
                privateData: "I'm private data",
                publicData: "I'm public data",
                privateMethod: "I'm private method",
                publicMethod: "I'm public method",
                initializeMethod: "initialized!!"
            },
            base = {
                _privateData: messagesForVerifying.privateData,
                publicData: messagesForVerifying.publicData,
                initializationMessage: '',

                _privateMethod: function() {
                    return messagesForVerifying.privateMethod;
                },

                initialize: function() {
                    this.initializationMessage = messagesForVerifying.initializeMethod;
                },

                publicMethod: function() {
                    return messagesForVerifying.publicMethod;
                },

                getPrivateData: function() {
                    return this._privateData;
                },
                callPrivateMethod: function() {
                    return this._privateMethod();
                },

                changePublicData: function(data) {
                    this.publicData = data;
                }
            };

        beforeEach(function() {
            definedModule = ne.util.defineModule('foo.bar', base);
        });

        it('that should not be equal to `base` object', function() {
            expect(definedModule).not.toEqual(base);
        });

        it('that should be initialized', function() {
            expect(definedModule.initializationMessage).toEqual(messagesForVerifying.initializeMethod);
        });

        it('that should not have `initialize` method', function() {
            expect(definedModule.initialize).not.toBeDefined();
        });

        it('that should have public data', function() {
            expect(definedModule.publicData).toEqual(messagesForVerifying.publicData);
        });

        it('that should work normally', function() {
            expect(definedModule.publicMethod()).toEqual(messagesForVerifying.publicMethod);
            expect(definedModule.getPrivateData()).toEqual(messagesForVerifying.privateData);
            expect(definedModule.callPrivateMethod()).toEqual(messagesForVerifying.privateMethod)

            definedModule.changePublicData('foo');
            expect(definedModule.publicData).toEqual('foo');
        });

    });
});
