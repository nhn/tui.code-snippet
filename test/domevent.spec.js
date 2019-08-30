'use strict';

var on = require('../domevent/on');
var once = require('../domevent/once');
var off = require('../domevent/off');
var getMousePosition = require('../domevent/getMousePosition');
var getTarget = require('../domevent/getTarget');

describe('The domevent module', function() {
    var btn, spy;

    beforeEach(function() {
        fixture.set('<button id="test">test</button>' +
                    '<div id="abs" style="position:absolute;left:10px:top:10px">a</div>');

        btn = document.querySelector('#test');
        spy = jasmine.createSpy('on');
    });

    afterEach(function() {
        fixture.cleanup();
    });

    it('on() should bind DOM event.', function() {
        on(btn, 'click', spy);

        expect(btn._feEventKey.click.has(spy)).toBe(true);
        expect(btn._feEventKey.click.size).toBe(1);
    });

    it('once() should bind DOM event and unbind after invoke.', function() {
        once(btn, 'click', spy);
        btn.click();

        expect(btn._feEventKey.click.has(spy)).toBe(false);
        expect(btn._feEventKey.click.size).toBe(0);
    });

    it('off() should unbind DOM event.', function() {
        on(btn, 'click', spy);
        off(btn, 'click', spy);

        expect(btn._feEventKey.click.has(spy)).toBe(false);
        expect(btn._feEventKey.click.size).toBe(0);
    });

    it('off() should unbind all event for same type name and handler.', function() {
        var spy2 = jasmine.createSpy('spy2');

        on(btn, 'click', spy);
        on(btn, 'click', spy);
        on(btn, 'click', spy2);

        expect(btn._feEventKey.click.has(spy)).toBe(true);
        expect(btn._feEventKey.click.size).toBe(2);
        expect(btn._feEventKey.click.get(spy)).toEqual([
            jasmine.any(Function),
            jasmine.any(Function)
        ]);

        off(btn, 'click', spy);

        expect(btn._feEventKey.click.has(spy)).toBe(false);
        expect(btn._feEventKey.click.size).toBe(1);

        // spy2 must not unbind at this moment.
        expect(btn._feEventKey.click.get(spy2)).toEqual([
            jasmine.any(Function)
        ]);
    });

    it('getMousePosition() should calculate mouse cursor position relative by other element.', function() {
        var relativeElement = document.querySelector('#abs');
        var pos = relativeElement.getBoundingClientRect();
        var mouseEvent = {
            clientY: 30,
            clientX: 30
        };

        expect(getMousePosition(mouseEvent, relativeElement))
            .toEqual([30 - pos.left, 30 - pos.top]);
    });

    it('getTarget() should return a target element of the event.', function() {
        var target;
        on(btn, 'click', function(e) {
            target = getTarget(e);
        });
        btn.click();

        expect(target).toEqual(btn);
    });
});
