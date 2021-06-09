'use strict';

var on = require('../domEvent/on');
var once = require('../domEvent/once');
var off = require('../domEvent/off');
var getMousePosition = require('../domEvent/getMousePosition');
var getTarget = require('../domEvent/getTarget');

describe('The domevent module', function() {
  var btn, spy;

  beforeEach(function() {
    document.body.innerHTML = '<button id="test">test</button><div id="abs" style="position:absolute;left:10px;top:10px;">a</div>';

    btn = document.querySelector('#test');
    spy = jest.fn();
  });

  afterEach(function() {
    document.body.innerHTML = '';
  });

  it('on() should bind DOM event.', function() {
    on(btn, 'click', spy);

    expect(btn._feEventKey.click.length).toBe(1);
    expect(btn._feEventKey.click[0].handler).toEqual(spy);
  });

  it('once() should bind DOM event and unbind after invoke.', function() {
    once(btn, 'click', spy);
    btn.click();

    expect(btn._feEventKey.click.length).toBe(0);
  });

  it('off() should unbind DOM event.', function() {
    on(btn, 'click', spy);
    off(btn, 'click', spy);

    expect(btn._feEventKey.click.length).toBe(0);
  });

  it('off() should unbind an event for same type name and handler.', function() {
    var spy2 = jest.fn();

    on(btn, 'click', spy);
    on(btn, 'click', spy);
    on(btn, 'click', spy2);

    expect(btn._feEventKey.click.length).toBe(2);
    expect(btn._feEventKey.click[0].handler).toEqual(spy);
    expect(btn._feEventKey.click[1].handler).toEqual(spy2);
    expect(btn._feEventKey.click[0].wrappedHandler).toEqual(expect.any(Function));

    off(btn, 'click', spy);

    expect(btn._feEventKey.click.length).toBe(1);
    // spy2 must not unbind at this moment.
    expect(btn._feEventKey.click[0].handler).toEqual(spy2);
    expect(btn._feEventKey.click[0].wrappedHandler).toEqual(expect.any(Function));
  });

  it('off() should unbind all events of the type if a handler is not passed.', function() {
    var spy2 = jest.fn();

    on(btn, 'click', spy);
    on(btn, 'click', spy2);
    off(btn, 'click');

    expect(btn._feEventKey.click.length).toBe(0);
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
