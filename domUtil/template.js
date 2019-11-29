/**
 * @fileoverview Convert text by binding expressions with context.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

'use strict';

var inArray = require('../array/inArray');
var forEach = require('../collection/forEach');
var isArray = require('../type/isArray');
var isString = require('../type/isString');
var extend = require('../object/extend');

var EXPRESSION_REGEXP = /{{\s?(\/?[a-zA-Z0-9_.@[\] ]+)\s?}}/g;
var BRACKET_REGEXP = /^([a-zA-Z0-9_@]+)\[([a-zA-Z0-9_@]+)\]$/;
var NUMBER_REGEXP = /^-?\d+\.?\d*$/;

var EXPRESSION_INTERVAL = 2;

var BLOCK_HELPERS = {
  'if': handleIf,
  'each': handleEach,
  'with': handleWith
};

/**
 * Find value in the context by an expression.
 * @param {string} exp - an expression
 * @param {object} context - context
 * @returns {*}
 * @private
 */
function getValueFromContext(exp, context) {
  var bracketExps;
  var value = context[exp];

  if (exp === 'true') {
    value = true;
  } else if (exp === 'false') {
    value = false;
  } else if (BRACKET_REGEXP.test(exp)) {
    bracketExps = exp.split(BRACKET_REGEXP);
    value = getValueFromContext(bracketExps[1], context)[getValueFromContext(bracketExps[2], context)];
  } else if (NUMBER_REGEXP.test(exp)) {
    value = parseFloat(exp);
  }

  return value;
}

/**
 * Extract elseif and else expressions.
 * @param {Array.<string>} ifExps - args of if expression
 * @param {Array.<string>} sourcesInsideBlock - sources inside if block
 * @returns {object} - exps: expressions of if, elseif, and else / sourcesInsideIf: sources inside if, elseif, and else block.
 * @private
 */
function extractElseif(ifExps, sourcesInsideBlock) {
  var exps = [ifExps];
  var sourcesInsideIf = [];

  var start = 0;
  var i, len, source;

  for (i = 0, len = sourcesInsideBlock.length; i < len; i += 1) {
    source = sourcesInsideBlock[i];

    if (source.indexOf('elseif') > -1 || source === 'else') {
      exps.push(source === 'else' ? ['true'] : source.split(' ').slice(1));
      sourcesInsideIf.push(sourcesInsideBlock.slice(start, i));
      start = i + 1;
    }
  }
  sourcesInsideIf.push(sourcesInsideBlock.slice(start));

  return {
    exps: exps,
    sourcesInsideIf: sourcesInsideIf
  };
}

/**
 * Helper function for "if". 
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the if block
 * @param {object} context - context
 * @returns {string}
 * @private
 */
function handleIf(exps, sourcesInsideBlock, context) {
  var analyzed = extractElseif(exps, sourcesInsideBlock);
  var result = false;
  var compiledSource = '';

  forEach(analyzed.exps, function(exp, index) {
    result = handleExpression(exp, context);
    if (result) {
      compiledSource = compile(analyzed.sourcesInsideIf[index], context);
    }

    return !result;
  });

  return compiledSource;
}

/**
 * Helper function for "each".
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the each block
 * @param {object} context - context
 * @returns {string}
 * @private
 */
function handleEach(exps, sourcesInsideBlock, context) {
  var collection = handleExpression(exps, context);
  var additionalKey = isArray(collection) ? '@index' : '@key';
  var additionalContext = {};
  var result = '';

  forEach(collection, function(item, key) {
    additionalContext[additionalKey] = key;
    additionalContext['@this'] = item;
    extend(additionalContext, context);

    result += compile(sourcesInsideBlock.slice(), additionalContext);
  });

  return result;
}

/**
 * Helper function for "with ... as"
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the with block
 * @param {object} context - context
 * @returns {string}
 * @private
 */
function handleWith(exps, sourcesInsideBlock, context) {
  var asIndex = inArray('as', exps);
  var alias = exps[asIndex + 1];
  var result = handleExpression(exps.slice(0, asIndex), context);

  var additionalContext = {};
  additionalContext[alias] = result;

  return compile(sourcesInsideBlock, extend(additionalContext, context)) || '';
}

/**
 * Extract sources inside block in place.
 * @param {Array.<string>} sources - array of sources
 * @param {number} start - index of start block
 * @param {number} end - index of end block
 * @returns {Array.<string>}
 * @private
 */
function extractSourcesInsideBlock(sources, start, end) {
  var sourcesInsideBlock = sources.splice(start + 1, end - start);
  sourcesInsideBlock.pop();

  return sourcesInsideBlock;
}

/**
 * Concatenate the strings between previous and next of the base string in place. 
 * @param {Array.<string>} sources - array of sources
 * @param {number} index - index of base string
 * @private
 */
function concatPrevAndNextString(source, index) {
  var start = Math.max(index - 1, 0);
  var end = Math.min(index + 1, source.length - 1);
  var deletedCount = end - start + 1;
  var result = source.splice(start, deletedCount).join('');

  if (deletedCount < 3) {
    source.splice(start, 0, '', result);
  } else {
    source.splice(start, 0, result);
  }
}

/**
 * Handle block helper function
 * @param {string} helperKeyword - helper keyword (ex. if, each, with)
 * @param {Array.<string>} sourcesToEnd - array of sources after the starting block
 * @param {object} context - context
 * @returns {Array.<string>}
 * @private
 */
function handleBlockHelper(helperKeyword, sourcesToEnd, context) {
  var executeBlockHelper = BLOCK_HELPERS[helperKeyword];
  var startBlockIndices = [];
  var helperCount = 0;
  var index = 0;
  var expression = sourcesToEnd[index];
  var startBlockIndex;

  do {
    if (expression.indexOf(helperKeyword) === 0) {
      helperCount += 1;
      startBlockIndices.push(index);
    } else if (expression.indexOf('/' + helperKeyword) === 0) {
      helperCount -= 1;
      startBlockIndex = startBlockIndices.pop();

      sourcesToEnd[startBlockIndex] = executeBlockHelper(
        sourcesToEnd[startBlockIndex].split(' ').slice(1),
        extractSourcesInsideBlock(sourcesToEnd, startBlockIndex, index),
        context
      );
      concatPrevAndNextString(sourcesToEnd, startBlockIndex);
      index = startBlockIndex - EXPRESSION_INTERVAL;
    }

    index += EXPRESSION_INTERVAL;
    expression = sourcesToEnd[index];
  } while (helperCount && isString(expression));

  if (helperCount) {
    throw Error(helperKeyword + ' needs {{/' + helperKeyword + '}} expression.');
  }

  return sourcesToEnd;
}

/**
 * Helper function for "custom helper".
 * If helper is not a function, return helper itself.
 * @param {Array.<string>} exps - array of expressions split by spaces (first element: helper)
 * @param {object} context - context
 * @returns {string}
 * @private
 */
function handleExpression(exps, context) {
  var result = getValueFromContext(exps[0], context);

  if (result instanceof Function) {
    return executeFunction(result, exps.slice(1), context);
  }

  return result;
}

/**
 * Execute a helper function.
 * @param {Function} helper - helper function
 * @param {Array.<string>} argExps - expressions of arguments
 * @param {object} context - context
 * @returns {string} - result of executing the function with arguments
 * @private
 */
function executeFunction(helper, argExps, context) {
  var args = [];
  forEach(argExps, function(exp) {
    args.push(getValueFromContext(exp, context));
  });

  return helper.apply(null, args);
}

/**
 * Get a result of compiling an expression with the context.
 * @param {Array.<string>} sources - array of sources split by regexp of expression.
 * @param {object} context - context
 * @returns {Array.<string>} - array of sources that bind with its context
 * @private
 */
function compile(sources, context) {
  var index = 1;
  var expression = sources[index];
  var exps, firstExp, result;

  while (isString(expression)) {
    exps = expression.split(' ');
    firstExp = exps[0];

    if (BLOCK_HELPERS[firstExp]) {
      result = handleBlockHelper(firstExp, sources.splice(index, sources.length - index), context);
      sources = sources.concat(result);
    } else {
      sources[index] = handleExpression(exps, context);
    }

    index += EXPRESSION_INTERVAL;
    expression = sources[index];
  }

  return sources.join('');
}

/**
 * Convert text by binding expressions with context.
 * <br>
 * If expression exists in the context, it will be replaced.
 * ex) '{{title}}' with context {title: 'Hello!'} is converted to 'Hello!'.
 * <br>
 * If replaced expression is a function, next expressions will be arguments of the function.
 * ex) '{{add 1 2}}' with context {add: function(a, b) {return a + b;}} is converted to '3'.
 * <br>
 * It has 3 predefined block helpers '{{helper ...}} ... {{/helper}}': 'if', 'each', 'with ... as ...'.
 * 1) 'if' evaluates conditional statements. It can use with 'elseif' and 'else'.
 * 2) 'each' iterates an array or object. It provides '@index'(array), '@key'(object), and '@this'(current element).
 * 3) 'with ... as ...' provides an alias.
 * @param {string} text - text with expressions
 * @param {object} context - context
 * @returns {string} - text that bind with its context
 * @memberof module:domUtil
 * @example
 * var template = require('tui-code-snippet/domUtil/template');
 * 
 * var source = 
 *     '<h1>'
 *   +   '{{if isValidNumber title}}'
 *   +     '{{title}}th'
 *   +   '{{elseif isValidDate title}}'
 *   +     'Date: {{title}}'
 *   +   '{{/if}}'
 *   + '</h1>'
 *   + '{{each list}}'
 *   +   '{{with addOne @index as idx}}'
 *   +     '<p>{{idx}}: {{@this}}</p>'
 *   +   '{{/with}}'
 *   + '{{/each}}';
 * 
 * var context = {
 *   isValidDate: function(text) {
 *     return /^\d{4}-(0|1)\d-(0|1|2|3)\d$/.test(text);
 *   },
 *   isValidNumber: function(text) {
 *     return /^\d+$/.test(text);
 *   }
 *   title: '2019-11-25',
 *   list: ['Clean the room', 'Wash the dishes'],
 *   addOne: function(num) {
 *     return num + 1;
 *   }
 * };
 * 
 * var result = template(source, context);
 * console.log(result); // <h1>Date: 2019-11-25</h1><p>1: Clean the room</p><p>2: Wash the dishes</p>
 */
function template(text, context) {
  text = text.replace(/\n\s*/g, '');

  return compile(text.split(EXPRESSION_REGEXP), context);
}

module.exports = template;
