'use strict';

var css = require('../domutil/css');
var getClass = require('../domutil/getClass');
var hasClass = require('../domutil/hasClass');
var addClass = require('../domutil/addClass');
var toggleClass = require('../domutil/toggleClass');
var removeClass = require('../domutil/removeClass');
var setData = require('../domutil/setData');
var getData = require('../domutil/getData');
var removeData = require('../domutil/removeData');
var removeElement = require('../domutil/removeElement');
var matches = require('../domutil/matches');
var closest = require('../domutil/closest');
var disableTextSelection = require('../domutil/disableTextSelection');
var enableTextSelection = require('../domutil/enableTextSelection');

var browser = require('../browser/browser');
var NO_SVG = browser.msie && browser.version < 9;

function $(selector) {
    return document.querySelector(selector);
}

describe('domutil', function() {
    beforeEach(function() {
        fixture.set(
            '<style>html, body {margin:0; padding:0;}</style>' +
            '<div id="test"></div>' +
            '<div id="test2" class="test-class"></div>' +
            '<div id="test3" style="position:absolute;z-index:1;top:10px;' +
                'left:20px;width:100px;height:50px;border:1px solid #ccc;"></div>' +
            '<div id="test4" class="test-class test-class2"></div>' +
            '<svg width="300" height="300">' +
                '<rect class="origin" id="rect" x="10" y="10" width="50" height="50"></rect>' +
            '</svg>'
        );
    });

    afterEach(function() {
        fixture.cleanup();
    });

    it('css() should change element\'s style values.', function() {
        var el = $('#test');
        css(el, 'color', 'red');
        expect(el.style.color).toBe('red');

        css(el, {
            marginLeft: '10px',
            marginRight: '5px'
        });

        expect(el.style.marginLeft).toBe('10px');
        expect(el.style.marginRight).toBe('5px');
    });

    it('getClass() should detect element\' classnames.', function() {
        expect(getClass($('#test2'))).toBe('test-class');

        if (!NO_SVG) {
            expect(getClass($('#rect'))).toBe('origin');
        }
    });

    it('addClass() should change element\'s classname.', function() {
        var el = $('#test2');
        var svgRect;

        addClass(el, 'test-class');
        expect(el.getAttribute('class')).toBe('test-class');

        addClass(el, 'good', 'good2');
        expect(el.getAttribute('class')).toBe('test-class good good2');

        if (!NO_SVG) {
            svgRect = $('#rect');
            addClass(svgRect, 'test-class');
            expect(svgRect.className.baseVal).toBe('origin test-class');
        }
    });

    it('removeClass() should remove element\'s classname.', function() {
        var svgRect;

        removeClass($('#test4'), 'test-class');
        expect($('#test4').getAttribute('class')).toBe('test-class2');

        $('#test').setAttribute('class', 'a a b c');

        removeClass($('#test'), 'a', 'c');
        expect($('#test').getAttribute('class')).toBe('b');

        if (!NO_SVG) {
            svgRect = $('#rect');
            removeClass(svgRect, 'origin');
            expect(svgRect.className.baseVal).toBe('');
        }
    });

    it('hasClass() check element has specific css class names.', function() {
        expect(hasClass($('#test'), 'test-class')).toBe(false);
        expect(hasClass($('#test2'), 'test-class')).toBe(true);
    });

    it('getData() can manipulate element custom data', function() {
        var el, el2, el3;

        fixture.set('<div id="_test" data-test="good"></div>' +
            '<span id="_test2" data-user-id="123"></span>' +
            '<div id="_test3" data-user-name="hong"></div>');

        el = $('#_test');
        expect(getData(el, 'test')).toBe('good');
        expect(getData(el, 'noexist')).toBeFalsy();

        setData(el, 'hello', 'world');
        expect(getData(el, 'hello')).toBe('world');

        removeData(el, 'test');
        expect(getData(el, 'test')).toBeFalsy();

        el2 = $('#_test2');
        expect(getData(el2, 'userId')).toBe('123');

        removeData(el2, 'userId');
        expect(getData(el2, 'userId')).toBeFalsy();

        el3 = $('#_test3');
        expect(getData(el3, 'userName')).toBe('hong');
    });

    it('matches() should check element is matched supplied selector.', function() {
        expect(matches($('#test'), '#test')).toBe(true);
        expect(matches($('#test'), '.nomatch')).toBe(false);
    });

    describe('closest method', function() {
        beforeEach(function() {
            fixture.set('<div id="parent">' +
                        '<ul id="test">' +
                        '<li id="list-item">test</li>' +
                        '</ul>' +
                        '</div>');
        });

        afterEach(function() {
            fixture.cleanup();
        });

        it('should return matched parent node recursively until meet document.', function() {
            var li = document.getElementById('list-item');
            expect(closest(li, '#list-item')).toBe(li);

            li = document.getElementById('list-item');
            expect(closest(li, '#parent')).toBe(document.getElementById('parent'));
        });

        it('should reutrn null when no closest parent node.', function() {
            var li = document.getElementById('list-item');
            expect(closest(li, '#notexist')).toBe(null);
        });

        it('should work with no rendered element.', function() {
            var div = document.createElement('div');
            var li;

            div.setAttribute('id', 'good');
            div.innerHTML = '<ul><li id="testtest">123</li></ul>';

            li = div.querySelector('#testtest');

            expect(closest(li, '#good')).toBe(div);
        });

        it('should return itself when no parent node.', function() {
            var div = document.createElement('div');
            expect(closest(div, '#good')).toBe(null);
        });
    });

    it('should disable text selection without throw error.', function() {
        fixture.set('<div id="prevent-selection"></div>');

        expect(function() {
            disableTextSelection($('#prevent-selection'));
            enableTextSelection($('#prevent-selection'));
            disableTextSelection();
            enableTextSelection();
        }).not.toThrowError();
    });

    it('toggleClass() should toggle specific class names.', function() {
        var div, div2, div3;

        fixture.set('<div id="target" class="alpha beta gamma"></div>' +
                    '<div id="target2" class="alpha"></div>' +
                    '<div id="target3"></div>');

        div = document.getElementById('target');
        toggleClass(div, 'beta', 'zeta');
        expect(div.getAttribute('class')).toBe('alpha gamma zeta');

        div2 = document.getElementById('target2');
        toggleClass(div2, 'alpha');
        expect(div2.getAttribute('class')).toBe('');

        div3 = document.getElementById('target3');
        toggleClass(div3, 'beta');
        expect(div3.getAttribute('class')).toBe('beta');
    });

    it('removeElement() should element from parent node.', function() {
        var parent, child;

        fixture.set('<div id="parent">' +
                    '<p id="child"></p>' +
                    '</div>');

        parent = document.getElementById('parent');
        child = document.getElementById('child');
        removeElement(child);
        expect(parent.children.length).toBe(0);
    });
});
