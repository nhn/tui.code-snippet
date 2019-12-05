'use strict';

var template = require('../domUtil/template');

describe('{{expression}}', function() {
  it('should bind expressions with the context.', function() {
    var source = '<div class="{{className}}"><p>{{content}}</p></div>';
    var context = {
      className: 'container',
      content: 'Hello, world!'
    };
    expect(template(source, context)).toBe('<div class="container"><p>Hello, world!</p></div>');

    source = '<span>{{ content }}</span>';
    expect(template(source, context)).toBe('<span>Hello, world!</span>');

    source = '<h3>{{title}}</h3>';
    expect(template(source, context)).toBe('<h3></h3>');
  });

  it('should bind with number if value is a number.', function() {
    expect(template('<p>{{ 3 }}</p>', {})).toBe('<p>3</p>');
    expect(template('<p>{{123.4567}}</p>', {})).toBe('<p>123.4567</p>');
    expect(template('<p>{{-1}}</p>', {})).toBe('<p>-1</p>');
    expect(template('<p>{{-0}}</p>', {})).toBe('<p>0</p>');
    expect(template('<p>{{-123.4567}}</p>', {})).toBe('<p>-123.4567</p>');
  });

  it('should access the value with brackets if value is an object or array.', function() {
    expect(template('<p>{{ arr[2] }}</p>', {arr: [0, 1, 2]})).toBe('<p>2</p>');
    expect(template('<p>{{obj["key"]}}</p>', {obj: {key: 'value'}})).toBe('<p>value</p>');
    expect(template('<p>{{obj[name]}}</p>', {
      obj: {key: 'value'},
      name: 'key'
    })).toBe('<p>value</p>');
    expect(template('{{each nums}}{{nums[@index]}}{{/each}}', {nums: [1, 2, 3]})).toBe('123');
  });

  it('should access the value with dots if value is an object.', function() {
    expect(template('<p>{{obj.key}}</p>', {obj: {key: 'value'}})).toBe('<p>value</p>');
  });

  it('should bind with boolean if value is "true" or "false".', function() {
    expect(template('<p>{{ false }}</p>', {})).toBe('<p>false</p>');
    expect(template('<p>{{true}}</p>', {})).toBe('<p>true</p>');
  });

  it('should bind with string if value is string with quotes.', function() {
    var context = {
      sayHello: function(name) {
        return 'Hello, ' + name;
      }
    };
    expect(template('<p>{{ sayHello "CodeSnippet" }}</p>', context)).toBe('<p>Hello, CodeSnippet</p>');
    expect(template('<p>{{sayHello \'world\'}}</p>', context)).toBe('<p>Hello, world</p>');
  });
});

describe('{{helper arg1 arg2}}', function() {
  it('should execute a custom helper function with arguments.', function() {
    var source = '<div class="{{getClassNamesByStatus disabled prefix}}"></div><div class="{{getClassNamesByStatus enabled}}"></div>';
    var context = {
      disabled: true,
      enabled: false,
      prefix: 'item-',
      getClassNamesByStatus: function(disabled, prefix) {
        return disabled ? prefix + 'disabled' : '';
      }
    };
    expect(template(source, context)).toBe('<div class="item-disabled"></div><div class=""></div>');

    source = '<p>{{getZero}}</p>';
    context = {
      getZero: function() {
        return '0';
      }
    };
    expect(template(source, context)).toBe('<p>0</p>');
  });

  it('should bind with the first expression if passed helper is not a function.', function() {
    var source = '<h1>{{notFunction notArg1 notArg2}}</h1>';
    var context = {
      notFunction: 'it is not a function',
      notArg1: 'it is not an argument1'
    };
    expect(template(source, context)).toBe('<h1>it is not a function</h1>');

    source = '<h2>{{notFunction notArg1 notArg2}}</h2>';
    context = {};
    expect(template(source, context)).toBe('<h2></h2>');
  });
});

describe('block helper', function() {
  it('should throw an error when endblock is missing.', function() {
    expect(function() {
      return template('{{if 1}}', {});
    }).toThrowError('if needs {{/if}} expression.');

    expect(function() {
      return template('{{each arr}}', {});
    }).toThrowError('each needs {{/each}} expression.');
    expect(function() {
      return template('{{with 1 as one}}', {});
    }).toThrowError('with needs {{/with}} expression.');
  });
});

describe('{{if ...}} {{elseif ...}} {{else}} ... {{/if}}', function() {
  it('should use if expression as a helper function.', function() {
    var source = '<div>{{if content}}<p>{{content}}</p>{{/if}}</div>';
    expect(template(source, {content: 'Hello, world!'})).toBe('<div><p>Hello, world!</p></div>');
    expect(template(source, {content: ''})).toBe('<div></div>');
    expect(template(source, {})).toBe('<div></div>');

    source = '{{if content}}<p>Hello, world!</p>{{/if}}';
    expect(template(source, {content: true})).toBe('<p>Hello, world!</p>');
    expect(template(source, {})).toBe('');

    source = '{{if equals two 2}}<p>Hello, world!</p>{{/if}}';
    expect(template(source, {
      two: 2,
      equals: function(a, b) {
        return a === b;
      }
    })).toBe('<p>Hello, world!</p>');
  });

  it('should use elseif, else expression.', function() {
    var source = '<p>{{if equals n 1}}one{{else}}other{{/if}}</p>';
    var context = {
      equals: function(a, b) {
        return a === b;
      }
    };
    context.n = 0;
    expect(template(source, context)).toBe('<p>other</p>');
    context.n = 1;
    expect(template(source, context)).toBe('<p>one</p>');

    source = '<p>{{if equals n 1}}{{n}} is one{{ elseif equals n 2 }}{{n}} is two{{else}}{{n}} is other{{/if}}</p>';
    context.n = 1;
    expect(template(source, context)).toBe('<p>1 is one</p>');
    context.n = 4;
    expect(template(source, context)).toBe('<p>4 is other</p>');
    context.n = 2;
    expect(template(source, context)).toBe('<p>2 is two</p>');
  });

  it('should use each expression in the if expression.', function() {
    var source = '<p>{{if isNumber arr[0]}}Number: {{each arr}}{{@this}}{{/each}}{{elseif isString arr[0]}}String: {{each arr}}{{@this}}{{/each}}{{else}}Nothing{{/if}}</p>';
    var context = {
      isNumber: function(n) {
        return typeof n === 'number';
      },
      isString: function(c) {
        return typeof c === 'string';
      }
    };
    context.arr = [1, 2, 3];
    expect(template(source, context)).toBe('<p>Number: 123</p>');
    context.arr = ['a', 'b', 'c'];
    expect(template(source, context)).toBe('<p>String: abc</p>');
    context.arr = [];
    expect(template(source, context)).toBe('<p>Nothing</p>');
  });

  it('should use if expressions in the if expression.', function() {
    var source = '{{if true}}It is {{if false}}False{{else}}True{{/if}}{{/if}}';
    var context = {};
    expect(template(source, context)).toBe('It is True');

    source = 'It is {{if smaller n 5}}smaller than 5 and {{if equals n 2 }}same as 2 {{else}}not same as 2 and {{if equals n 3}}same as 3 {{/if}}{{/if}}{{else}}bigger than 5 and {{if equals n 5}}same as 5 {{else}}not same as 5 {{/if}}{{/if}}';
    context = {
      smaller: function(a, b) {
        return a < b;
      },
      equals: function(a, b) {
        return a === b;
      },
      n: 3
    };
    expect(template(source, context)).toBe('It is smaller than 5 and not same as 2 and same as 3 ');
  });
});

describe('{{each ...}} @this @index @key {{/each}}', function() {
  it('should use each expression as a helper function.', function() {
    var source = '{{each alphabets}}<p>{{content}}</p>{{/each}}';
    expect(template(source, {
      alphabets: ['A', 'B', 'C'],
      content: 'Paragraph'
    })).toBe('<p>Paragraph</p><p>Paragraph</p><p>Paragraph</p>');

    source = '{{each alphabets}}<p>{{@index}}</p>{{/each}}';
    expect(template(source, {
      alphabets: ['A', 'B', 'C']
    })).toBe('<p>0</p><p>1</p><p>2</p>');

    source = '{{each alphabets}}<p>{{@this}}</p>{{/each}}';
    expect(template(source, {
      alphabets: ['A', 'B', 'C']
    })).toBe('<p>A</p><p>B</p><p>C</p>');

    source = '{{each alphabets}}<p>{{@key}}: {{@this}}</p>{{/each}}';
    expect(template(source, {
      alphabets: {
        'A': '1st',
        'B': '2nd',
        'C': '3rd'
      }
    })).toBe('<p>A: 1st</p><p>B: 2nd</p><p>C: 3rd</p>');

    source = '{{each getPositiveNumbersSmallerThanFive 3}}<p>{{@this}}</p>{{/each}}';
    expect(template(source, {
      getPositiveNumbersSmallerThanFive: function(n) {
        return [1, 2, 3, 4, 5].slice(0, n);
      }
    })).toBe('<p>1</p><p>2</p><p>3</p>');
  });

  it('should use if expression in the each expression.', function() {
    var source = '{{each numbers}}<p>{{@this}}{{if equals @this 2}} is even{{elseif equals @this 0}} is zero{{else}} is odd{{/if}}</p>{{/each}}';
    expect(template(source, {
      numbers: [1, 2, 0],
      equals: function(a, b) {
        return parseInt(a, 10) === parseInt(b, 10);
      }
    })).toBe('<p>1 is odd</p><p>2 is even</p><p>0 is zero</p>');
  });

  it('should use each expressions in the each expression.', function() {
    var source = '{{each first}}{{each second}}{{@this}}{{/each}}{{/each}}';
    var context = {
      first: [1, 2, 3],
      second: [4, 5, 6]
    };
    expect(template(source, context)).toBe('456456456');

    source = '{{each doubleArr}}{{each @this}}{{@this}}{{/each}}{{/each}}';
    context = {
      doubleArr: [[1, 2, 3], [4, 5, 6]]
    };
    expect(template(source, context)).toBe('123456');
  });
});

describe('{{with ... as ...}} ... {{/with}}', function() {
  it('should be make an alias.', function() {
    var source = '{{with content as c}}<p>{{c}}</p>{{/with}}';
    expect(template(source, {
      content: 'Hello, world!'
    })).toBe('<p>Hello, world!</p>');

    source = '{{with getNumberInEnglish 1 as n}}<p>{{n}}</p>{{/with}}';
    expect(template(source, {
      getNumberInEnglish: function(num) {
        switch (num) {
          case 1:
            return 'one';
          default:
            return 'bigger than one';
        }
      }
    })).toBe('<p>one</p>');
  });
});
