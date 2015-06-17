
describe('`defineModule` function', function() {

    it('should be defined', function() {
        var defineModule = ne.util.defineModule;

        expect(defineModule).toBeDefined();
        expect(defineModule).toEqual(jasmine.any(Function));
    });

    it('should set namespace', function() {
        var definedModule = ne.util.defineModule('foo.bar', {});

        expect(window.foo).toEqual(jasmine.any(Object));
        expect(window.foo.bar).toEqual(jasmine.any(Object));
        expect(window.foo.bar).toBe(definedModule);
    });

    describe('return a object', function() {
        var messagesForVerifying = {
                privateData: "I'm private data",
                publicData: "I'm public data",
                privateMethod: "I'm private method",
                publicMethod: "I'm public method",
                initializeMethod: "initialized!!"
            },
            baseModule = {
                _privateData: messagesForVerifying.privateData,
                publicData: messagesForVerifying.publicData,
                initializationMessage: null,

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
                }
            },
            definedModule;

        beforeEach(function() {
            definedModule = ne.util.defineModule('foo.bar', baseModule);
        });

        it('that should not be equal to `baseModule` object', function() {
            expect(definedModule).not.toEqual(baseModule);
        });

        it('that should have public properties', function() {
            expect(definedModule.publicData).toBeDefined();
            expect(definedModule.publicData).toEqual(messagesForVerifying.publicData);

            expect(definedModule.publicMethod).toEqual(jasmine.any(Function));
            expect(definedModule.publicMethod()).toEqual(messagesForVerifying.publicMethod);
        });

        it('that should be initialized', function() {
            expect(definedModule.initializationMessage).toEqual(messagesForVerifying.initializeMethod);
        });

        it('that should not have private properties', function() {
            expect(definedModule._privateData).not.toBeDefined();
            expect(definedModule._privateMethod).not.toBeDefined();
        });

        it('that should have access to private properties by public properties', function() {
            expect(definedModule.getPrivateData()).toEqual(messagesForVerifying.privateData);
            expect(definedModule.callPrivateMethod()).toEqual(messagesForVerifying.privateMethod)
        });

        it('that should have `__initialize` method', function() {
            if (baseModule.initialize) {
                expect(definedModule.__initialize).toBeDefined();
                expect(definedModule.__initialize).toEqual(jasmine.any(Function));
            }
        });
    });
});

