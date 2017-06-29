'use strict';

/**
 * @fileoverview
 * @author NHN Ent.
 *         FE Development Lab <dl_javascript@nhnent.com>
 * @namespace tui.util
 */
var util;
var object = require('./object');
var extend = object.extend;

extend(tui, object);
extend(tui, require('./array'));
extend(util, require('./collection'));
extend(util, require('./func'));
extend(util, require('./inheritance'));
extend(util, require('./string'));
extend(util, require('./tricks'));
extend(util, require('./type'));

util.browser = require('./browser');
util.popup = require('./window');
util.formatDate = require('./formatDate');
util.defineClass = require('./defineClass');
util.defineModule = require('./defineModule');
util.defineNamespace = require('./defineNamespace');
util.CustomEvents = require('./customEvent');
util.Enum = require('./enum');
util.ExMap = require('./exMap');
util.HashMap = require('./hashMap');
util.Map = require('./map');

module.exports = tui;
