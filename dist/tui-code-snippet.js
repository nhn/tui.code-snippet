/*!
 * tui-code-snippet.js
 * @version 1.2.7
 * @author NHNEnt FE Development Lab <dl_javascript@nhnent.com>
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["util"] = factory();
	else
		root["tui"] = root["tui"] || {}, root["tui"]["util"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';/**
	 * @fileoverview
	 * @author NHN Ent.
	 *         FE Development Lab <dl_javascript@nhnent.com>
	 * @namespace tui.util
	 * @example
	 * // node, commonjs
	 * var util = require('tui-code-snippet');
	 * @example
	 * // distribution file, script
	 * <script src='path-to/tui-code-snippt.js'></script>
	 * <script>
	 * var util = tui.util;
	 * <script>
	 */var cov_1cdlqy9061=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/index.js',hash='ab6e3c21b1ac94f26fab5542a8165e2ae3636354',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/index.js',statementMap:{'0':{start:{line:18,column:11},end:{line:18,column:13}},'1':{start:{line:19,column:13},end:{line:19,column:32}},'2':{start:{line:20,column:13},end:{line:20,column:26}},'3':{start:{line:22,column:0},end:{line:22,column:21}},'4':{start:{line:23,column:0},end:{line:23,column:33}},'5':{start:{line:24,column:0},end:{line:24,column:32}},'6':{start:{line:25,column:0},end:{line:25,column:38}},'7':{start:{line:26,column:0},end:{line:26,column:32}},'8':{start:{line:27,column:0},end:{line:27,column:39}},'9':{start:{line:28,column:0},end:{line:28,column:34}},'10':{start:{line:29,column:0},end:{line:29,column:34}},'11':{start:{line:31,column:0},end:{line:31,column:36}},'12':{start:{line:32,column:0},end:{line:32,column:33}},'13':{start:{line:33,column:0},end:{line:33,column:42}},'14':{start:{line:34,column:0},end:{line:34,column:44}},'15':{start:{line:35,column:0},end:{line:35,column:46}},'16':{start:{line:36,column:0},end:{line:36,column:52}},'17':{start:{line:37,column:0},end:{line:37,column:45}},'18':{start:{line:38,column:0},end:{line:38,column:30}},'19':{start:{line:39,column:0},end:{line:39,column:32}},'20':{start:{line:40,column:0},end:{line:40,column:36}},'21':{start:{line:41,column:0},end:{line:41,column:28}},'22':{start:{line:43,column:0},end:{line:43,column:22}}},fnMap:{},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0},f:{},b:{},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var util=(cov_1cdlqy9061.s[0]++,{});var object=(cov_1cdlqy9061.s[1]++,__webpack_require__(1));var extend=(cov_1cdlqy9061.s[2]++,object.extend);cov_1cdlqy9061.s[3]++;extend(util,object);cov_1cdlqy9061.s[4]++;extend(util,__webpack_require__(3));cov_1cdlqy9061.s[5]++;extend(util,__webpack_require__(2));cov_1cdlqy9061.s[6]++;extend(util,__webpack_require__(4));cov_1cdlqy9061.s[7]++;extend(util,__webpack_require__(5));cov_1cdlqy9061.s[8]++;extend(util,__webpack_require__(6));cov_1cdlqy9061.s[9]++;extend(util,__webpack_require__(7));cov_1cdlqy9061.s[10]++;extend(util,__webpack_require__(8));cov_1cdlqy9061.s[11]++;util.browser=__webpack_require__(9);cov_1cdlqy9061.s[12]++;util.popup=__webpack_require__(10);cov_1cdlqy9061.s[13]++;util.formatDate=__webpack_require__(11);cov_1cdlqy9061.s[14]++;util.defineClass=__webpack_require__(12);cov_1cdlqy9061.s[15]++;util.defineModule=__webpack_require__(13);cov_1cdlqy9061.s[16]++;util.defineNamespace=__webpack_require__(14);cov_1cdlqy9061.s[17]++;util.CustomEvents=__webpack_require__(15);cov_1cdlqy9061.s[18]++;util.Enum=__webpack_require__(16);cov_1cdlqy9061.s[19]++;util.ExMap=__webpack_require__(17);cov_1cdlqy9061.s[20]++;util.HashMap=__webpack_require__(19);cov_1cdlqy9061.s[21]++;util.Map=__webpack_require__(18);cov_1cdlqy9061.s[22]++;module.exports=util;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview This module has some functions for handling a plain object, json.
	 * @author NHN Ent.
	 *         FE Development Lab <dl_javascript@nhnent.com>
	 */'use strict';var cov_ljz9oonet=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/object.js',hash='78ddbd115bd8bb059f90c362a0102c88415f9ff1',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/object.js',statementMap:{'0':{start:{line:9,column:11},end:{line:9,column:28}},'1':{start:{line:10,column:12},end:{line:10,column:30}},'2':{start:{line:17,column:13},end:{line:17,column:14}},'3':{start:{line:27,column:21},end:{line:27,column:52}},'4':{start:{line:30,column:4},end:{line:37,column:5}},'5':{start:{line:31,column:8},end:{line:31,column:30}},'6':{start:{line:32,column:8},end:{line:36,column:9}},'7':{start:{line:33,column:12},end:{line:35,column:13}},'8':{start:{line:34,column:16},end:{line:34,column:44}},'9':{start:{line:39,column:4},end:{line:39,column:18}},'10':{start:{line:49,column:4},end:{line:52,column:5}},'11':{start:{line:50,column:8},end:{line:50,column:20}},'12':{start:{line:51,column:8},end:{line:51,column:29}},'13':{start:{line:54,column:4},end:{line:54,column:23}},'14':{start:{line:64,column:4},end:{line:64,column:47}},'15':{start:{line:72,column:4},end:{line:72,column:15}},'16':{start:{line:82,column:19},end:{line:82,column:21}},'17':{start:{line:85,column:4},end:{line:89,column:5}},'18':{start:{line:86,column:8},end:{line:88,column:9}},'19':{start:{line:87,column:12},end:{line:87,column:31}},'20':{start:{line:91,column:4},end:{line:91,column:20}},'21':{start:{line:116,column:18},end:{line:116,column:34}},'22':{start:{line:117,column:12},end:{line:117,column:13}},'23':{start:{line:119,column:4},end:{line:121,column:5}},'24':{start:{line:120,column:8},end:{line:120,column:20}},'25':{start:{line:123,column:4},end:{line:127,column:5}},'26':{start:{line:124,column:8},end:{line:126,column:9}},'27':{start:{line:125,column:12},end:{line:125,column:25}},'28':{start:{line:129,column:4},end:{line:129,column:16}},'29':{start:{line:139,column:20},end:{line:139,column:22}},'30':{start:{line:140,column:21},end:{line:140,column:23}},'31':{start:{line:145,column:4},end:{line:150,column:5}},'32':{start:{line:149,column:8},end:{line:149,column:20}},'33':{start:{line:155,column:4},end:{line:157,column:5}},'34':{start:{line:156,column:8},end:{line:156,column:20}},'35':{start:{line:162,column:4},end:{line:168,column:5}},'36':{start:{line:167,column:8},end:{line:167,column:45}},'37':{start:{line:171,column:4},end:{line:173,column:5}},'38':{start:{line:172,column:8},end:{line:172,column:21}},'39':{start:{line:175,column:4},end:{line:180,column:5}},'40':{start:{line:179,column:8},end:{line:179,column:21}},'41':{start:{line:183,column:4},end:{line:186,column:5}},'42':{start:{line:185,column:8},end:{line:185,column:21}},'43':{start:{line:189,column:4},end:{line:195,column:5}},'44':{start:{line:190,column:8},end:{line:194,column:9}},'45':{start:{line:191,column:12},end:{line:191,column:25}},'46':{start:{line:192,column:15},end:{line:194,column:9}},'47':{start:{line:193,column:12},end:{line:193,column:25}},'48':{start:{line:199,column:4},end:{line:219,column:5}},'49':{start:{line:200,column:8},end:{line:204,column:9}},'50':{start:{line:201,column:12},end:{line:201,column:25}},'51':{start:{line:202,column:15},end:{line:204,column:9}},'52':{start:{line:203,column:12},end:{line:203,column:25}},'53':{start:{line:206,column:8},end:{line:218,column:9}},'54':{start:{line:207,column:12},end:{line:207,column:30}},'55':{start:{line:208,column:12},end:{line:208,column:31}},'56':{start:{line:210,column:12},end:{line:212,column:13}},'57':{start:{line:211,column:16},end:{line:211,column:29}},'58':{start:{line:214,column:12},end:{line:214,column:28}},'59':{start:{line:215,column:12},end:{line:215,column:29}},'60':{start:{line:216,column:15},end:{line:218,column:9}},'61':{start:{line:217,column:12},end:{line:217,column:25}},'62':{start:{line:221,column:4},end:{line:221,column:16}},'63':{start:{line:253,column:15},end:{line:253,column:24}},'64':{start:{line:254,column:17},end:{line:254,column:24}},'65':{start:{line:255,column:17},end:{line:255,column:28}},'66':{start:{line:257,column:4},end:{line:265,column:5}},'67':{start:{line:258,column:8},end:{line:260,column:9}},'68':{start:{line:259,column:12},end:{line:259,column:37}},'69':{start:{line:262,column:8},end:{line:262,column:22}},'70':{start:{line:264,column:8},end:{line:264,column:15}},'71':{start:{line:268,column:0},end:{line:276,column:2}}},fnMap:{'0':{name:'extend',decl:{start:{line:26,column:9},end:{line:26,column:15}},loc:{start:{line:26,column:33},end:{line:40,column:1}},line:26},'1':{name:'stamp',decl:{start:{line:48,column:9},end:{line:48,column:14}},loc:{start:{line:48,column:20},end:{line:55,column:1}},line:48},'2':{name:'hasStamp',decl:{start:{line:63,column:9},end:{line:63,column:17}},loc:{start:{line:63,column:23},end:{line:65,column:1}},line:63},'3':{name:'resetLastId',decl:{start:{line:71,column:9},end:{line:71,column:20}},loc:{start:{line:71,column:23},end:{line:73,column:1}},line:71},'4':{name:'keys',decl:{start:{line:81,column:9},end:{line:81,column:13}},loc:{start:{line:81,column:19},end:{line:92,column:1}},line:81},'5':{name:'compareJSON',decl:{start:{line:115,column:9},end:{line:115,column:20}},loc:{start:{line:115,column:29},end:{line:130,column:1}},line:115},'6':{name:'isSameObject',decl:{start:{line:138,column:9},end:{line:138,column:21}},loc:{start:{line:138,column:28},end:{line:222,column:1}},line:138},'7':{name:'pick',decl:{start:{line:252,column:9},end:{line:252,column:13}},loc:{start:{line:252,column:26},end:{line:266,column:1}},line:252}},branchMap:{'0':{loc:{start:{line:33,column:12},end:{line:35,column:13}},type:'if',locations:[{start:{line:33,column:12},end:{line:35,column:13}},{start:{line:33,column:12},end:{line:35,column:13}}],line:33},'1':{loc:{start:{line:49,column:4},end:{line:52,column:5}},type:'if',locations:[{start:{line:49,column:4},end:{line:52,column:5}},{start:{line:49,column:4},end:{line:52,column:5}}],line:49},'2':{loc:{start:{line:86,column:8},end:{line:88,column:9}},type:'if',locations:[{start:{line:86,column:8},end:{line:88,column:9}},{start:{line:86,column:8},end:{line:88,column:9}}],line:86},'3':{loc:{start:{line:119,column:4},end:{line:121,column:5}},type:'if',locations:[{start:{line:119,column:4},end:{line:121,column:5}},{start:{line:119,column:4},end:{line:121,column:5}}],line:119},'4':{loc:{start:{line:124,column:8},end:{line:126,column:9}},type:'if',locations:[{start:{line:124,column:8},end:{line:126,column:9}},{start:{line:124,column:8},end:{line:126,column:9}}],line:124},'5':{loc:{start:{line:145,column:4},end:{line:150,column:5}},type:'if',locations:[{start:{line:145,column:4},end:{line:150,column:5}},{start:{line:145,column:4},end:{line:150,column:5}}],line:145},'6':{loc:{start:{line:145,column:8},end:{line:148,column:24}},type:'binary-expr',locations:[{start:{line:145,column:8},end:{line:145,column:16}},{start:{line:146,column:8},end:{line:146,column:16}},{start:{line:147,column:8},end:{line:147,column:24}},{start:{line:148,column:8},end:{line:148,column:24}}],line:145},'7':{loc:{start:{line:155,column:4},end:{line:157,column:5}},type:'if',locations:[{start:{line:155,column:4},end:{line:157,column:5}},{start:{line:155,column:4},end:{line:157,column:5}}],line:155},'8':{loc:{start:{line:162,column:4},end:{line:168,column:5}},type:'if',locations:[{start:{line:162,column:4},end:{line:168,column:5}},{start:{line:162,column:4},end:{line:168,column:5}}],line:162},'9':{loc:{start:{line:162,column:8},end:{line:166,column:52}},type:'binary-expr',locations:[{start:{line:162,column:9},end:{line:162,column:27}},{start:{line:162,column:31},end:{line:162,column:49}},{start:{line:163,column:9},end:{line:163,column:26}},{start:{line:163,column:30},end:{line:163,column:47}},{start:{line:164,column:9},end:{line:164,column:28}},{start:{line:164,column:32},end:{line:164,column:51}},{start:{line:165,column:9},end:{line:165,column:28}},{start:{line:165,column:32},end:{line:165,column:51}},{start:{line:166,column:9},end:{line:166,column:28}},{start:{line:166,column:32},end:{line:166,column:51}}],line:162},'10':{loc:{start:{line:171,column:4},end:{line:173,column:5}},type:'if',locations:[{start:{line:171,column:4},end:{line:173,column:5}},{start:{line:171,column:4},end:{line:173,column:5}}],line:171},'11':{loc:{start:{line:171,column:10},end:{line:171,column:52}},type:'binary-expr',locations:[{start:{line:171,column:10},end:{line:171,column:29}},{start:{line:171,column:33},end:{line:171,column:52}}],line:171},'12':{loc:{start:{line:175,column:4},end:{line:180,column:5}},type:'if',locations:[{start:{line:175,column:4},end:{line:180,column:5}},{start:{line:175,column:4},end:{line:180,column:5}}],line:175},'13':{loc:{start:{line:175,column:8},end:{line:178,column:35}},type:'binary-expr',locations:[{start:{line:175,column:8},end:{line:175,column:26}},{start:{line:176,column:8},end:{line:176,column:26}},{start:{line:177,column:8},end:{line:177,column:39}},{start:{line:178,column:8},end:{line:178,column:35}}],line:175},'14':{loc:{start:{line:183,column:4},end:{line:186,column:5}},type:'if',locations:[{start:{line:183,column:4},end:{line:186,column:5}},{start:{line:183,column:4},end:{line:186,column:5}}],line:183},'15':{loc:{start:{line:183,column:8},end:{line:184,column:41}},type:'binary-expr',locations:[{start:{line:183,column:8},end:{line:183,column:40}},{start:{line:184,column:8},end:{line:184,column:41}}],line:183},'16':{loc:{start:{line:190,column:8},end:{line:194,column:9}},type:'if',locations:[{start:{line:190,column:8},end:{line:194,column:9}},{start:{line:190,column:8},end:{line:194,column:9}}],line:190},'17':{loc:{start:{line:192,column:15},end:{line:194,column:9}},type:'if',locations:[{start:{line:192,column:15},end:{line:194,column:9}},{start:{line:192,column:15},end:{line:194,column:9}}],line:192},'18':{loc:{start:{line:200,column:8},end:{line:204,column:9}},type:'if',locations:[{start:{line:200,column:8},end:{line:204,column:9}},{start:{line:200,column:8},end:{line:204,column:9}}],line:200},'19':{loc:{start:{line:202,column:15},end:{line:204,column:9}},type:'if',locations:[{start:{line:202,column:15},end:{line:204,column:9}},{start:{line:202,column:15},end:{line:204,column:9}}],line:202},'20':{loc:{start:{line:206,column:8},end:{line:218,column:9}},type:'if',locations:[{start:{line:206,column:8},end:{line:218,column:9}},{start:{line:206,column:8},end:{line:218,column:9}}],line:206},'21':{loc:{start:{line:206,column:12},end:{line:206,column:70}},type:'binary-expr',locations:[{start:{line:206,column:12},end:{line:206,column:38}},{start:{line:206,column:42},end:{line:206,column:70}}],line:206},'22':{loc:{start:{line:210,column:12},end:{line:212,column:13}},type:'if',locations:[{start:{line:210,column:12},end:{line:212,column:13}},{start:{line:210,column:12},end:{line:212,column:13}}],line:210},'23':{loc:{start:{line:216,column:15},end:{line:218,column:9}},type:'if',locations:[{start:{line:216,column:15},end:{line:218,column:9}},{start:{line:216,column:15},end:{line:218,column:9}}],line:216},'24':{loc:{start:{line:273,column:10},end:{line:273,column:39}},type:'binary-expr',locations:[{start:{line:273,column:10},end:{line:273,column:31}},{start:{line:273,column:35},end:{line:273,column:39}}],line:273}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0,'34':0,'35':0,'36':0,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':0,'45':0,'46':0,'47':0,'48':0,'49':0,'50':0,'51':0,'52':0,'53':0,'54':0,'55':0,'56':0,'57':0,'58':0,'59':0,'60':0,'61':0,'62':0,'63':0,'64':0,'65':0,'66':0,'67':0,'68':0,'69':0,'70':0,'71':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0],'5':[0,0],'6':[0,0,0,0],'7':[0,0],'8':[0,0],'9':[0,0,0,0,0,0,0,0,0,0],'10':[0,0],'11':[0,0],'12':[0,0],'13':[0,0,0,0],'14':[0,0],'15':[0,0],'16':[0,0],'17':[0,0],'18':[0,0],'19':[0,0],'20':[0,0],'21':[0,0],'22':[0,0],'23':[0,0],'24':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var type=(cov_ljz9oonet.s[0]++,__webpack_require__(2));var array=(cov_ljz9oonet.s[1]++,__webpack_require__(3));/**
	 * The last id of stamp
	 * @type {number}
	 * @private
	 */var lastId=(cov_ljz9oonet.s[2]++,0);/**
	 * Extend the target object from other objects.
	 * @param {object} target - Object that will be extended
	 * @param {...object} objects - Objects as sources
	 * @returns {object} Extended object
	 * @memberof tui.util
	 */function extend(target,objects){cov_ljz9oonet.f[0]++;// eslint-disable-line no-unused-vars
	var hasOwnProp=(cov_ljz9oonet.s[3]++,Object.prototype.hasOwnProperty);var source,prop,i,len;cov_ljz9oonet.s[4]++;for(i=1,len=arguments.length;i<len;i+=1){cov_ljz9oonet.s[5]++;source=arguments[i];cov_ljz9oonet.s[6]++;for(prop in source){cov_ljz9oonet.s[7]++;if(hasOwnProp.call(source,prop)){cov_ljz9oonet.b[0][0]++;cov_ljz9oonet.s[8]++;target[prop]=source[prop];}else{cov_ljz9oonet.b[0][1]++;}}}cov_ljz9oonet.s[9]++;return target;}/**
	 * Assign a unique id to an object
	 * @param {object} obj - Object that will be assigned id.
	 * @returns {number} Stamped id
	 * @memberof tui.util
	 */function stamp(obj){cov_ljz9oonet.f[1]++;cov_ljz9oonet.s[10]++;if(!obj.__fe_id){cov_ljz9oonet.b[1][0]++;cov_ljz9oonet.s[11]++;lastId+=1;cov_ljz9oonet.s[12]++;obj.__fe_id=lastId;// eslint-disable-line camelcase
	}else{cov_ljz9oonet.b[1][1]++;}cov_ljz9oonet.s[13]++;return obj.__fe_id;}/**
	 * Verify whether an object has a stamped id or not.
	 * @param {object} obj - adjusted object
	 * @returns {boolean}
	 * @memberof tui.util
	 */function hasStamp(obj){cov_ljz9oonet.f[2]++;cov_ljz9oonet.s[14]++;return type.isExisty(pick(obj,'__fe_id'));}/**
	 * Reset the last id of stamp
	 * @private
	 */function resetLastId(){cov_ljz9oonet.f[3]++;cov_ljz9oonet.s[15]++;lastId=0;}/**
	 * Return a key-list(array) of a given object
	 * @param {object} obj - Object from which a key-list will be extracted
	 * @returns {Array} A key-list(array)
	 * @memberof tui.util
	 */function keys(obj){cov_ljz9oonet.f[4]++;var keyArray=(cov_ljz9oonet.s[16]++,[]);var key;cov_ljz9oonet.s[17]++;for(key in obj){cov_ljz9oonet.s[18]++;if(obj.hasOwnProperty(key)){cov_ljz9oonet.b[2][0]++;cov_ljz9oonet.s[19]++;keyArray.push(key);}else{cov_ljz9oonet.b[2][1]++;}}cov_ljz9oonet.s[20]++;return keyArray;}/**
	 * Return the equality for multiple objects(jsonObjects).<br>
	 *  See {@link http://stackoverflow.com/questions/1068834/object-comparison-in-javascript}
	 * @param {...object} object - Multiple objects for comparing.
	 * @returns {boolean} Equality
	 * @memberof tui.util
	 * @example
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var jsonObj1 = {name:'milk', price: 1000};
	 * var jsonObj2 = {name:'milk', price: 1000};
	 * var jsonObj3 = {name:'milk', price: 1000};
	 * util.compareJSON(jsonObj1, jsonObj2, jsonObj3);   // true
	 *
	 * var jsonObj4 = {name:'milk', price: 1000};
	 * var jsonObj5 = {name:'beer', price: 3000};
	 * util.compareJSON(jsonObj4, jsonObj5); // false
	 */function compareJSON(object){cov_ljz9oonet.f[5]++;var argsLen=(cov_ljz9oonet.s[21]++,arguments.length);var i=(cov_ljz9oonet.s[22]++,1);cov_ljz9oonet.s[23]++;if(argsLen<1){cov_ljz9oonet.b[3][0]++;cov_ljz9oonet.s[24]++;return true;}else{cov_ljz9oonet.b[3][1]++;}cov_ljz9oonet.s[25]++;for(;i<argsLen;i+=1){cov_ljz9oonet.s[26]++;if(!isSameObject(object,arguments[i])){cov_ljz9oonet.b[4][0]++;cov_ljz9oonet.s[27]++;return false;}else{cov_ljz9oonet.b[4][1]++;}}cov_ljz9oonet.s[28]++;return true;}/**
	 * @param {*} x - object to compare
	 * @param {*} y - object to compare
	 * @returns {boolean} - whether object x and y is same or not
	 * @private
	 */function isSameObject(x,y){cov_ljz9oonet.f[6]++;// eslint-disable-line complexity
	var leftChain=(cov_ljz9oonet.s[29]++,[]);var rightChain=(cov_ljz9oonet.s[30]++,[]);var p;// remember that NaN === NaN returns false
	// and isNaN(undefined) returns true
	cov_ljz9oonet.s[31]++;if((cov_ljz9oonet.b[6][0]++,isNaN(x))&&(cov_ljz9oonet.b[6][1]++,isNaN(y))&&(cov_ljz9oonet.b[6][2]++,type.isNumber(x))&&(cov_ljz9oonet.b[6][3]++,type.isNumber(y))){cov_ljz9oonet.b[5][0]++;cov_ljz9oonet.s[32]++;return true;}else{cov_ljz9oonet.b[5][1]++;}// Compare primitives and functions.
	// Check if both arguments link to the same object.
	// Especially useful on step when comparing prototypes
	cov_ljz9oonet.s[33]++;if(x===y){cov_ljz9oonet.b[7][0]++;cov_ljz9oonet.s[34]++;return true;}else{cov_ljz9oonet.b[7][1]++;}// Works in case when functions are created in constructor.
	// Comparing dates is a common scenario. Another built-ins?
	// We can even handle functions passed across iframes
	cov_ljz9oonet.s[35]++;if((cov_ljz9oonet.b[9][0]++,type.isFunction(x))&&(cov_ljz9oonet.b[9][1]++,type.isFunction(y))||(cov_ljz9oonet.b[9][2]++,x instanceof Date)&&(cov_ljz9oonet.b[9][3]++,y instanceof Date)||(cov_ljz9oonet.b[9][4]++,x instanceof RegExp)&&(cov_ljz9oonet.b[9][5]++,y instanceof RegExp)||(cov_ljz9oonet.b[9][6]++,x instanceof String)&&(cov_ljz9oonet.b[9][7]++,y instanceof String)||(cov_ljz9oonet.b[9][8]++,x instanceof Number)&&(cov_ljz9oonet.b[9][9]++,y instanceof Number)){cov_ljz9oonet.b[8][0]++;cov_ljz9oonet.s[36]++;return x.toString()===y.toString();}else{cov_ljz9oonet.b[8][1]++;}// At last checking prototypes as good a we can
	cov_ljz9oonet.s[37]++;if(!((cov_ljz9oonet.b[11][0]++,x instanceof Object)&&(cov_ljz9oonet.b[11][1]++,y instanceof Object))){cov_ljz9oonet.b[10][0]++;cov_ljz9oonet.s[38]++;return false;}else{cov_ljz9oonet.b[10][1]++;}cov_ljz9oonet.s[39]++;if((cov_ljz9oonet.b[13][0]++,x.isPrototypeOf(y))||(cov_ljz9oonet.b[13][1]++,y.isPrototypeOf(x))||(cov_ljz9oonet.b[13][2]++,x.constructor!==y.constructor)||(cov_ljz9oonet.b[13][3]++,x.prototype!==y.prototype)){cov_ljz9oonet.b[12][0]++;cov_ljz9oonet.s[40]++;return false;}else{cov_ljz9oonet.b[12][1]++;}// check for infinitive linking loops
	cov_ljz9oonet.s[41]++;if((cov_ljz9oonet.b[15][0]++,array.inArray(x,leftChain)>-1)||(cov_ljz9oonet.b[15][1]++,array.inArray(y,rightChain)>-1)){cov_ljz9oonet.b[14][0]++;cov_ljz9oonet.s[42]++;return false;}else{cov_ljz9oonet.b[14][1]++;}// Quick checking of one object beeing a subset of another.
	cov_ljz9oonet.s[43]++;for(p in y){cov_ljz9oonet.s[44]++;if(y.hasOwnProperty(p)!==x.hasOwnProperty(p)){cov_ljz9oonet.b[16][0]++;cov_ljz9oonet.s[45]++;return false;}else{cov_ljz9oonet.b[16][1]++;cov_ljz9oonet.s[46]++;if(typeof y[p]!==typeof x[p]){cov_ljz9oonet.b[17][0]++;cov_ljz9oonet.s[47]++;return false;}else{cov_ljz9oonet.b[17][1]++;}}}// This for loop executes comparing with hasOwnProperty() and typeof for each property in 'x' object,
	// and verifying equality for x[property] and y[property].
	cov_ljz9oonet.s[48]++;for(p in x){cov_ljz9oonet.s[49]++;if(y.hasOwnProperty(p)!==x.hasOwnProperty(p)){cov_ljz9oonet.b[18][0]++;cov_ljz9oonet.s[50]++;return false;}else{cov_ljz9oonet.b[18][1]++;cov_ljz9oonet.s[51]++;if(typeof y[p]!==typeof x[p]){cov_ljz9oonet.b[19][0]++;cov_ljz9oonet.s[52]++;return false;}else{cov_ljz9oonet.b[19][1]++;}}cov_ljz9oonet.s[53]++;if((cov_ljz9oonet.b[21][0]++,typeof x[p]==='object')||(cov_ljz9oonet.b[21][1]++,typeof x[p]==='function')){cov_ljz9oonet.b[20][0]++;cov_ljz9oonet.s[54]++;leftChain.push(x);cov_ljz9oonet.s[55]++;rightChain.push(y);cov_ljz9oonet.s[56]++;if(!isSameObject(x[p],y[p])){cov_ljz9oonet.b[22][0]++;cov_ljz9oonet.s[57]++;return false;}else{cov_ljz9oonet.b[22][1]++;}cov_ljz9oonet.s[58]++;leftChain.pop();cov_ljz9oonet.s[59]++;rightChain.pop();}else{cov_ljz9oonet.b[20][1]++;cov_ljz9oonet.s[60]++;if(x[p]!==y[p]){cov_ljz9oonet.b[23][0]++;cov_ljz9oonet.s[61]++;return false;}else{cov_ljz9oonet.b[23][1]++;}}}cov_ljz9oonet.s[62]++;return true;}/* eslint-enable complexity *//**
	 * Retrieve a nested item from the given object/array
	 * @param {object|Array} obj - Object for retrieving
	 * @param {...string|number} paths - Paths of property
	 * @returns {*} Value
	 * @memberof tui.util
	 * @example
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var obj = {
	 *     'key1': 1,
	 *     'nested' : {
	 *         'key1': 11,
	 *         'nested': {
	 *             'key1': 21
	 *         }
	 *     }
	 * };
	 * util.pick(obj, 'nested', 'nested', 'key1'); // 21
	 * util.pick(obj, 'nested', 'nested', 'key2'); // undefined
	 *
	 * var arr = ['a', 'b', 'c'];
	 * util.pick(arr, 1); // 'b'
	 */function pick(obj,paths){cov_ljz9oonet.f[7]++;// eslint-disable-line no-unused-vars
	var args=(cov_ljz9oonet.s[63]++,arguments);var target=(cov_ljz9oonet.s[64]++,args[0]);var length=(cov_ljz9oonet.s[65]++,args.length);var i;cov_ljz9oonet.s[66]++;try{cov_ljz9oonet.s[67]++;for(i=1;i<length;i+=1){cov_ljz9oonet.s[68]++;target=target[args[i]];}cov_ljz9oonet.s[69]++;return target;}catch(e){cov_ljz9oonet.s[70]++;return;// eslint-disable-line consistent-return, no-useless-return
	}}cov_ljz9oonet.s[71]++;module.exports={extend:extend,stamp:stamp,hasStamp:hasStamp,resetLastId:resetLastId,keys:(cov_ljz9oonet.b[24][0]++,Object.prototype.keys)||(cov_ljz9oonet.b[24][1]++,keys),compareJSON:compareJSON,pick:pick};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/**
	 * @fileoverview This module provides some functions to check the type of variable
	 * @author NHN Ent.
	 *         FE Development Lab <dl_javascript@nhnent.com>
	 */'use strict';var cov_asabnqek0=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/type.js',hash='0136b0d73584cbea4768aebb18e324a2684a7be7',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/type.js',statementMap:{'0':{start:{line:9,column:15},end:{line:9,column:40}},'1':{start:{line:31,column:4},end:{line:31,column:49}},'2':{start:{line:42,column:4},end:{line:42,column:29}},'3':{start:{line:53,column:4},end:{line:53,column:24}},'4':{start:{line:65,column:4},end:{line:65,column:42}},'5':{start:{line:76,column:4},end:{line:76,column:26}},'6':{start:{line:87,column:17},end:{line:88,column:71}},'7':{start:{line:90,column:4},end:{line:90,column:18}},'8':{start:{line:101,column:4},end:{line:101,column:32}},'9':{start:{line:112,column:4},end:{line:112,column:31}},'10':{start:{line:123,column:4},end:{line:123,column:35}},'11':{start:{line:134,column:4},end:{line:134,column:60}},'12':{start:{line:145,column:4},end:{line:145,column:60}},'13':{start:{line:156,column:4},end:{line:156,column:62}},'14':{start:{line:168,column:4},end:{line:168,column:51}},'15':{start:{line:180,column:4},end:{line:180,column:54}},'16':{start:{line:192,column:4},end:{line:192,column:52}},'17':{start:{line:204,column:4},end:{line:204,column:52}},'18':{start:{line:216,column:4},end:{line:216,column:53}},'19':{start:{line:227,column:4},end:{line:229,column:5}},'20':{start:{line:228,column:8},end:{line:228,column:74}},'21':{start:{line:231,column:4},end:{line:231,column:37}},'22':{start:{line:242,column:4},end:{line:244,column:5}},'23':{start:{line:243,column:8},end:{line:243,column:55}},'24':{start:{line:246,column:4},end:{line:246,column:60}},'25':{start:{line:257,column:4},end:{line:259,column:5}},'26':{start:{line:258,column:8},end:{line:258,column:20}},'27':{start:{line:261,column:4},end:{line:263,column:5}},'28':{start:{line:262,column:8},end:{line:262,column:32}},'29':{start:{line:265,column:4},end:{line:267,column:5}},'30':{start:{line:266,column:8},end:{line:266,column:37}},'31':{start:{line:269,column:4},end:{line:269,column:16}},'32':{start:{line:280,column:4},end:{line:280,column:39}},'33':{start:{line:292,column:4},end:{line:296,column:5}},'34':{start:{line:293,column:8},end:{line:295,column:9}},'35':{start:{line:294,column:12},end:{line:294,column:24}},'36':{start:{line:298,column:4},end:{line:298,column:17}},'37':{start:{line:310,column:4},end:{line:310,column:25}},'38':{start:{line:321,column:4},end:{line:321,column:31}},'39':{start:{line:333,column:4},end:{line:333,column:50}},'40':{start:{line:336,column:0},end:{line:360,column:2}}},fnMap:{'0':{name:'isExisty',decl:{start:{line:30,column:9},end:{line:30,column:17}},loc:{start:{line:30,column:25},end:{line:32,column:1}},line:30},'1':{name:'isUndefined',decl:{start:{line:41,column:9},end:{line:41,column:20}},loc:{start:{line:41,column:26},end:{line:43,column:1}},line:41},'2':{name:'isNull',decl:{start:{line:52,column:9},end:{line:52,column:15}},loc:{start:{line:52,column:21},end:{line:54,column:1}},line:52},'3':{name:'isTruthy',decl:{start:{line:64,column:9},end:{line:64,column:17}},loc:{start:{line:64,column:23},end:{line:66,column:1}},line:64},'4':{name:'isFalsy',decl:{start:{line:75,column:9},end:{line:75,column:16}},loc:{start:{line:75,column:22},end:{line:77,column:1}},line:75},'5':{name:'isArguments',decl:{start:{line:86,column:9},end:{line:86,column:20}},loc:{start:{line:86,column:26},end:{line:91,column:1}},line:86},'6':{name:'isArray',decl:{start:{line:100,column:9},end:{line:100,column:16}},loc:{start:{line:100,column:22},end:{line:102,column:1}},line:100},'7':{name:'isObject',decl:{start:{line:111,column:9},end:{line:111,column:17}},loc:{start:{line:111,column:23},end:{line:113,column:1}},line:111},'8':{name:'isFunction',decl:{start:{line:122,column:9},end:{line:122,column:19}},loc:{start:{line:122,column:25},end:{line:124,column:1}},line:122},'9':{name:'isNumber',decl:{start:{line:133,column:9},end:{line:133,column:17}},loc:{start:{line:133,column:23},end:{line:135,column:1}},line:133},'10':{name:'isString',decl:{start:{line:144,column:9},end:{line:144,column:17}},loc:{start:{line:144,column:23},end:{line:146,column:1}},line:144},'11':{name:'isBoolean',decl:{start:{line:155,column:9},end:{line:155,column:18}},loc:{start:{line:155,column:24},end:{line:157,column:1}},line:155},'12':{name:'isArraySafe',decl:{start:{line:167,column:9},end:{line:167,column:20}},loc:{start:{line:167,column:26},end:{line:169,column:1}},line:167},'13':{name:'isFunctionSafe',decl:{start:{line:179,column:9},end:{line:179,column:23}},loc:{start:{line:179,column:29},end:{line:181,column:1}},line:179},'14':{name:'isNumberSafe',decl:{start:{line:191,column:9},end:{line:191,column:21}},loc:{start:{line:191,column:27},end:{line:193,column:1}},line:191},'15':{name:'isStringSafe',decl:{start:{line:203,column:9},end:{line:203,column:21}},loc:{start:{line:203,column:27},end:{line:205,column:1}},line:203},'16':{name:'isBooleanSafe',decl:{start:{line:215,column:9},end:{line:215,column:22}},loc:{start:{line:215,column:28},end:{line:217,column:1}},line:215},'17':{name:'isHTMLNode',decl:{start:{line:226,column:9},end:{line:226,column:19}},loc:{start:{line:226,column:26},end:{line:232,column:1}},line:226},'18':{name:'isHTMLTag',decl:{start:{line:241,column:9},end:{line:241,column:18}},loc:{start:{line:241,column:25},end:{line:247,column:1}},line:241},'19':{name:'isEmpty',decl:{start:{line:256,column:9},end:{line:256,column:16}},loc:{start:{line:256,column:22},end:{line:270,column:1}},line:256},'20':{name:'_isEmptyString',decl:{start:{line:279,column:9},end:{line:279,column:23}},loc:{start:{line:279,column:29},end:{line:281,column:1}},line:279},'21':{name:'_hasOwnProperty',decl:{start:{line:290,column:9},end:{line:290,column:24}},loc:{start:{line:290,column:30},end:{line:299,column:1}},line:290},'22':{name:'isNotEmpty',decl:{start:{line:309,column:9},end:{line:309,column:19}},loc:{start:{line:309,column:25},end:{line:311,column:1}},line:309},'23':{name:'isDate',decl:{start:{line:320,column:9},end:{line:320,column:15}},loc:{start:{line:320,column:21},end:{line:322,column:1}},line:320},'24':{name:'isDateSafe',decl:{start:{line:332,column:9},end:{line:332,column:19}},loc:{start:{line:332,column:25},end:{line:334,column:1}},line:332}},branchMap:{'0':{loc:{start:{line:31,column:11},end:{line:31,column:48}},type:'binary-expr',locations:[{start:{line:31,column:11},end:{line:31,column:30}},{start:{line:31,column:34},end:{line:31,column:48}}],line:31},'1':{loc:{start:{line:65,column:11},end:{line:65,column:41}},type:'binary-expr',locations:[{start:{line:65,column:11},end:{line:65,column:24}},{start:{line:65,column:28},end:{line:65,column:41}}],line:65},'2':{loc:{start:{line:87,column:17},end:{line:88,column:71}},type:'binary-expr',locations:[{start:{line:87,column:17},end:{line:87,column:30}},{start:{line:88,column:10},end:{line:88,column:53}},{start:{line:88,column:58},end:{line:88,column:70}}],line:87},'3':{loc:{start:{line:134,column:11},end:{line:134,column:59}},type:'binary-expr',locations:[{start:{line:134,column:11},end:{line:134,column:34}},{start:{line:134,column:38},end:{line:134,column:59}}],line:134},'4':{loc:{start:{line:145,column:11},end:{line:145,column:59}},type:'binary-expr',locations:[{start:{line:145,column:11},end:{line:145,column:34}},{start:{line:145,column:38},end:{line:145,column:59}}],line:145},'5':{loc:{start:{line:156,column:11},end:{line:156,column:61}},type:'binary-expr',locations:[{start:{line:156,column:11},end:{line:156,column:35}},{start:{line:156,column:39},end:{line:156,column:61}}],line:156},'6':{loc:{start:{line:227,column:4},end:{line:229,column:5}},type:'if',locations:[{start:{line:227,column:4},end:{line:229,column:5}},{start:{line:227,column:4},end:{line:229,column:5}}],line:227},'7':{loc:{start:{line:228,column:16},end:{line:228,column:72}},type:'binary-expr',locations:[{start:{line:228,column:16},end:{line:228,column:20}},{start:{line:228,column:25},end:{line:228,column:52}},{start:{line:228,column:56},end:{line:228,column:71}}],line:228},'8':{loc:{start:{line:231,column:14},end:{line:231,column:35}},type:'binary-expr',locations:[{start:{line:231,column:14},end:{line:231,column:18}},{start:{line:231,column:22},end:{line:231,column:35}}],line:231},'9':{loc:{start:{line:242,column:4},end:{line:244,column:5}},type:'if',locations:[{start:{line:242,column:4},end:{line:244,column:5}},{start:{line:242,column:4},end:{line:244,column:5}}],line:242},'10':{loc:{start:{line:243,column:16},end:{line:243,column:53}},type:'binary-expr',locations:[{start:{line:243,column:16},end:{line:243,column:20}},{start:{line:243,column:25},end:{line:243,column:52}}],line:243},'11':{loc:{start:{line:246,column:14},end:{line:246,column:58}},type:'binary-expr',locations:[{start:{line:246,column:14},end:{line:246,column:18}},{start:{line:246,column:22},end:{line:246,column:35}},{start:{line:246,column:39},end:{line:246,column:58}}],line:246},'12':{loc:{start:{line:257,column:4},end:{line:259,column:5}},type:'if',locations:[{start:{line:257,column:4},end:{line:259,column:5}},{start:{line:257,column:4},end:{line:259,column:5}}],line:257},'13':{loc:{start:{line:257,column:8},end:{line:257,column:45}},type:'binary-expr',locations:[{start:{line:257,column:8},end:{line:257,column:22}},{start:{line:257,column:26},end:{line:257,column:45}}],line:257},'14':{loc:{start:{line:261,column:4},end:{line:263,column:5}},type:'if',locations:[{start:{line:261,column:4},end:{line:263,column:5}},{start:{line:261,column:4},end:{line:263,column:5}}],line:261},'15':{loc:{start:{line:261,column:8},end:{line:261,column:40}},type:'binary-expr',locations:[{start:{line:261,column:8},end:{line:261,column:20}},{start:{line:261,column:24},end:{line:261,column:40}}],line:261},'16':{loc:{start:{line:265,column:4},end:{line:267,column:5}},type:'if',locations:[{start:{line:265,column:4},end:{line:267,column:5}},{start:{line:265,column:4},end:{line:267,column:5}}],line:265},'17':{loc:{start:{line:265,column:8},end:{line:265,column:41}},type:'binary-expr',locations:[{start:{line:265,column:8},end:{line:265,column:21}},{start:{line:265,column:25},end:{line:265,column:41}}],line:265},'18':{loc:{start:{line:280,column:11},end:{line:280,column:38}},type:'binary-expr',locations:[{start:{line:280,column:11},end:{line:280,column:24}},{start:{line:280,column:28},end:{line:280,column:38}}],line:280},'19':{loc:{start:{line:293,column:8},end:{line:295,column:9}},type:'if',locations:[{start:{line:293,column:8},end:{line:295,column:9}},{start:{line:293,column:8},end:{line:295,column:9}}],line:293}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0,'34':0,'35':0,'36':0,'37':0,'38':0,'39':0,'40':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0},b:{'0':[0,0],'1':[0,0],'2':[0,0,0],'3':[0,0],'4':[0,0],'5':[0,0],'6':[0,0],'7':[0,0,0],'8':[0,0],'9':[0,0],'10':[0,0],'11':[0,0,0],'12':[0,0],'13':[0,0],'14':[0,0],'15':[0,0],'16':[0,0],'17':[0,0],'18':[0,0],'19':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var toString=(cov_asabnqek0.s[0]++,Object.prototype.toString);/**
	 * Check whether the given variable is existing or not.<br>
	 *  If the given variable is not null and not undefined, returns true.
	 * @param {*} param - Target for checking
	 * @returns {boolean} Is existy?
	 * @memberof tui.util
	 * @example
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * util.isExisty(''); //true
	 * util.isExisty(0); //true
	 * util.isExisty([]); //true
	 * util.isExisty({}); //true
	 * util.isExisty(null); //false
	 * util.isExisty(undefined); //false
	*/function isExisty(param){cov_asabnqek0.f[0]++;cov_asabnqek0.s[1]++;return(cov_asabnqek0.b[0][0]++,!isUndefined(param))&&(cov_asabnqek0.b[0][1]++,!isNull(param));}/**
	 * Check whether the given variable is undefined or not.<br>
	 *  If the given variable is undefined, returns true.
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is undefined?
	 * @memberof tui.util
	 */function isUndefined(obj){cov_asabnqek0.f[1]++;cov_asabnqek0.s[2]++;return obj===undefined;// eslint-disable-line no-undefined
	}/**
	 * Check whether the given variable is null or not.<br>
	 *  If the given variable(arguments[0]) is null, returns true.
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is null?
	 * @memberof tui.util
	 */function isNull(obj){cov_asabnqek0.f[2]++;cov_asabnqek0.s[3]++;return obj===null;}/**
	 * Check whether the given variable is truthy or not.<br>
	 *  If the given variable is not null or not undefined or not false, returns true.<br>
	 *  (It regards 0 as true)
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is truthy?
	 * @memberof tui.util
	 */function isTruthy(obj){cov_asabnqek0.f[3]++;cov_asabnqek0.s[4]++;return(cov_asabnqek0.b[1][0]++,isExisty(obj))&&(cov_asabnqek0.b[1][1]++,obj!==false);}/**
	 * Check whether the given variable is falsy or not.<br>
	 *  If the given variable is null or undefined or false, returns true.
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is falsy?
	 * @memberof tui.util
	 */function isFalsy(obj){cov_asabnqek0.f[4]++;cov_asabnqek0.s[5]++;return!isTruthy(obj);}/**
	 * Check whether the given variable is an arguments object or not.<br>
	 *  If the given variable is an arguments object, return true.
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is arguments?
	 * @memberof tui.util
	 */function isArguments(obj){cov_asabnqek0.f[5]++;var result=(cov_asabnqek0.s[6]++,(cov_asabnqek0.b[2][0]++,isExisty(obj))&&((cov_asabnqek0.b[2][1]++,toString.call(obj)==='[object Arguments]')||(cov_asabnqek0.b[2][2]++,!!obj.callee)));cov_asabnqek0.s[7]++;return result;}/**
	 * Check whether the given variable is an instance of Array or not.<br>
	 *  If the given variable is an instance of Array, return true.
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is array instance?
	 * @memberof tui.util
	 */function isArray(obj){cov_asabnqek0.f[6]++;cov_asabnqek0.s[8]++;return obj instanceof Array;}/**
	 * Check whether the given variable is an object or not.<br>
	 *  If the given variable is an object, return true.
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is object?
	 * @memberof tui.util
	 */function isObject(obj){cov_asabnqek0.f[7]++;cov_asabnqek0.s[9]++;return obj===Object(obj);}/**
	 * Check whether the given variable is a function or not.<br>
	 *  If the given variable is a function, return true.
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is function?
	 * @memberof tui.util
	 */function isFunction(obj){cov_asabnqek0.f[8]++;cov_asabnqek0.s[10]++;return obj instanceof Function;}/**
	 * Check whether the given variable is a number or not.<br>
	 *  If the given variable is a number, return true.
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is number?
	 * @memberof tui.util
	 */function isNumber(obj){cov_asabnqek0.f[9]++;cov_asabnqek0.s[11]++;return(cov_asabnqek0.b[3][0]++,typeof obj==='number')||(cov_asabnqek0.b[3][1]++,obj instanceof Number);}/**
	 * Check whether the given variable is a string or not.<br>
	 *  If the given variable is a string, return true.
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is string?
	 * @memberof tui.util
	 */function isString(obj){cov_asabnqek0.f[10]++;cov_asabnqek0.s[12]++;return(cov_asabnqek0.b[4][0]++,typeof obj==='string')||(cov_asabnqek0.b[4][1]++,obj instanceof String);}/**
	 * Check whether the given variable is a boolean or not.<br>
	 *  If the given variable is a boolean, return true.
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is boolean?
	 * @memberof tui.util
	 */function isBoolean(obj){cov_asabnqek0.f[11]++;cov_asabnqek0.s[13]++;return(cov_asabnqek0.b[5][0]++,typeof obj==='boolean')||(cov_asabnqek0.b[5][1]++,obj instanceof Boolean);}/**
	 * Check whether the given variable is an instance of Array or not.<br>
	 *  If the given variable is an instance of Array, return true.<br>
	 *  (It is used for multiple frame environments)
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is an instance of array?
	 * @memberof tui.util
	 */function isArraySafe(obj){cov_asabnqek0.f[12]++;cov_asabnqek0.s[14]++;return toString.call(obj)==='[object Array]';}/**
	 * Check whether the given variable is a function or not.<br>
	 *  If the given variable is a function, return true.<br>
	 *  (It is used for multiple frame environments)
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is a function?
	 * @memberof tui.util
	 */function isFunctionSafe(obj){cov_asabnqek0.f[13]++;cov_asabnqek0.s[15]++;return toString.call(obj)==='[object Function]';}/**
	 * Check whether the given variable is a number or not.<br>
	 *  If the given variable is a number, return true.<br>
	 *  (It is used for multiple frame environments)
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is a number?
	 * @memberof tui.util
	 */function isNumberSafe(obj){cov_asabnqek0.f[14]++;cov_asabnqek0.s[16]++;return toString.call(obj)==='[object Number]';}/**
	 * Check whether the given variable is a string or not.<br>
	 *  If the given variable is a string, return true.<br>
	 *  (It is used for multiple frame environments)
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is a string?
	 * @memberof tui.util
	 */function isStringSafe(obj){cov_asabnqek0.f[15]++;cov_asabnqek0.s[17]++;return toString.call(obj)==='[object String]';}/**
	 * Check whether the given variable is a boolean or not.<br>
	 *  If the given variable is a boolean, return true.<br>
	 *  (It is used for multiple frame environments)
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is a boolean?
	 * @memberof tui.util
	 */function isBooleanSafe(obj){cov_asabnqek0.f[16]++;cov_asabnqek0.s[18]++;return toString.call(obj)==='[object Boolean]';}/**
	 * Check whether the given variable is a instance of HTMLNode or not.<br>
	 *  If the given variables is a instance of HTMLNode, return true.
	 * @param {*} html - Target for checking
	 * @returns {boolean} Is HTMLNode ?
	 * @memberof tui.util
	 */function isHTMLNode(html){cov_asabnqek0.f[17]++;cov_asabnqek0.s[19]++;if(typeof HTMLElement==='object'){cov_asabnqek0.b[6][0]++;cov_asabnqek0.s[20]++;return(cov_asabnqek0.b[7][0]++,html)&&((cov_asabnqek0.b[7][1]++,html instanceof HTMLElement)||(cov_asabnqek0.b[7][2]++,!!html.nodeType));}else{cov_asabnqek0.b[6][1]++;}cov_asabnqek0.s[21]++;return!!((cov_asabnqek0.b[8][0]++,html)&&(cov_asabnqek0.b[8][1]++,html.nodeType));}/**
	 * Check whether the given variable is a HTML tag or not.<br>
	 *  If the given variables is a HTML tag, return true.
	 * @param {*} html - Target for checking
	 * @returns {Boolean} Is HTML tag?
	 * @memberof tui.util
	 */function isHTMLTag(html){cov_asabnqek0.f[18]++;cov_asabnqek0.s[22]++;if(typeof HTMLElement==='object'){cov_asabnqek0.b[9][0]++;cov_asabnqek0.s[23]++;return(cov_asabnqek0.b[10][0]++,html)&&(cov_asabnqek0.b[10][1]++,html instanceof HTMLElement);}else{cov_asabnqek0.b[9][1]++;}cov_asabnqek0.s[24]++;return!!((cov_asabnqek0.b[11][0]++,html)&&(cov_asabnqek0.b[11][1]++,html.nodeType)&&(cov_asabnqek0.b[11][2]++,html.nodeType===1));}/**
	 * Check whether the given variable is empty(null, undefined, or empty array, empty object) or not.<br>
	 *  If the given variables is empty, return true.
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is empty?
	 * @memberof tui.util
	 */function isEmpty(obj){cov_asabnqek0.f[19]++;cov_asabnqek0.s[25]++;if((cov_asabnqek0.b[13][0]++,!isExisty(obj))||(cov_asabnqek0.b[13][1]++,_isEmptyString(obj))){cov_asabnqek0.b[12][0]++;cov_asabnqek0.s[26]++;return true;}else{cov_asabnqek0.b[12][1]++;}cov_asabnqek0.s[27]++;if((cov_asabnqek0.b[15][0]++,isArray(obj))||(cov_asabnqek0.b[15][1]++,isArguments(obj))){cov_asabnqek0.b[14][0]++;cov_asabnqek0.s[28]++;return obj.length===0;}else{cov_asabnqek0.b[14][1]++;}cov_asabnqek0.s[29]++;if((cov_asabnqek0.b[17][0]++,isObject(obj))&&(cov_asabnqek0.b[17][1]++,!isFunction(obj))){cov_asabnqek0.b[16][0]++;cov_asabnqek0.s[30]++;return!_hasOwnProperty(obj);}else{cov_asabnqek0.b[16][1]++;}cov_asabnqek0.s[31]++;return true;}/**
	 * Check whether given argument is empty string
	 * @param {*} obj - Target for checking
	 * @returns {boolean} whether given argument is empty string
	 * @memberof tui.util
	 * @private
	 */function _isEmptyString(obj){cov_asabnqek0.f[20]++;cov_asabnqek0.s[32]++;return(cov_asabnqek0.b[18][0]++,isString(obj))&&(cov_asabnqek0.b[18][1]++,obj==='');}/**
	 * Check whether given argument has own property
	 * @param {Object} obj - Target for checking
	 * @returns {boolean} - whether given argument has own property
	 * @memberof tui.util
	 * @private
	 */function _hasOwnProperty(obj){cov_asabnqek0.f[21]++;var key;cov_asabnqek0.s[33]++;for(key in obj){cov_asabnqek0.s[34]++;if(obj.hasOwnProperty(key)){cov_asabnqek0.b[19][0]++;cov_asabnqek0.s[35]++;return true;}else{cov_asabnqek0.b[19][1]++;}}cov_asabnqek0.s[36]++;return false;}/**
	 * Check whether the given variable is not empty
	 * (not null, not undefined, or not empty array, not empty object) or not.<br>
	 *  If the given variables is not empty, return true.
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is not empty?
	 * @memberof tui.util
	 */function isNotEmpty(obj){cov_asabnqek0.f[22]++;cov_asabnqek0.s[37]++;return!isEmpty(obj);}/**
	 * Check whether the given variable is an instance of Date or not.<br>
	 *  If the given variables is an instance of Date, return true.
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is an instance of Date?
	 * @memberof tui.util
	 */function isDate(obj){cov_asabnqek0.f[23]++;cov_asabnqek0.s[38]++;return obj instanceof Date;}/**
	 * Check whether the given variable is an instance of Date or not.<br>
	 *  If the given variables is an instance of Date, return true.<br>
	 *  (It is used for multiple frame environments)
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is an instance of Date?
	 * @memberof tui.util
	 */function isDateSafe(obj){cov_asabnqek0.f[24]++;cov_asabnqek0.s[39]++;return toString.call(obj)==='[object Date]';}cov_asabnqek0.s[40]++;module.exports={isExisty:isExisty,isUndefined:isUndefined,isNull:isNull,isTruthy:isTruthy,isFalsy:isFalsy,isArguments:isArguments,isArray:isArray,isArraySafe:isArraySafe,isObject:isObject,isFunction:isFunction,isFunctionSafe:isFunctionSafe,isNumber:isNumber,isNumberSafe:isNumberSafe,isDate:isDate,isDateSafe:isDateSafe,isString:isString,isStringSafe:isStringSafe,isBoolean:isBoolean,isBooleanSafe:isBooleanSafe,isHTMLNode:isHTMLNode,isHTMLTag:isHTMLTag,isEmpty:isEmpty,isNotEmpty:isNotEmpty};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview This module has some functions for handling array.
	 * @author NHN Ent.
	 *         FE Development Lab <dl_javascript@nhnent.com>
	 */'use strict';var cov_160m400hkr=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/array.js',hash='c8e36864eee1563b83d253ff803b02ed178c9911',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/array.js',statementMap:{'0':{start:{line:9,column:17},end:{line:9,column:40}},'1':{start:{line:10,column:11},end:{line:10,column:28}},'2':{start:{line:12,column:10},end:{line:12,column:31}},'3':{start:{line:33,column:12},end:{line:51,column:1}},'4':{start:{line:34,column:14},end:{line:34,column:16}},'5':{start:{line:37,column:4},end:{line:40,column:5}},'6':{start:{line:38,column:8},end:{line:38,column:26}},'7':{start:{line:39,column:8},end:{line:39,column:18}},'8':{start:{line:42,column:4},end:{line:42,column:21}},'9':{start:{line:43,column:4},end:{line:43,column:29}},'10':{start:{line:44,column:4},end:{line:44,column:17}},'11':{start:{line:46,column:4},end:{line:48,column:5}},'12':{start:{line:47,column:8},end:{line:47,column:24}},'13':{start:{line:50,column:4},end:{line:50,column:15}},'14':{start:{line:70,column:10},end:{line:84,column:1}},'15':{start:{line:71,column:16},end:{line:71,column:35}},'16':{start:{line:72,column:17},end:{line:72,column:19}},'17':{start:{line:74,column:4},end:{line:81,column:7}},'18':{start:{line:75,column:8},end:{line:80,column:11}},'19':{start:{line:76,column:12},end:{line:78,column:13}},'20':{start:{line:77,column:16},end:{line:77,column:35}},'21':{start:{line:79,column:12},end:{line:79,column:38}},'22':{start:{line:83,column:4},end:{line:83,column:18}},'23':{start:{line:106,column:14},end:{line:127,column:1}},'24':{start:{line:109,column:4},end:{line:109,column:33}},'25':{start:{line:111,column:4},end:{line:113,column:5}},'26':{start:{line:112,column:8},end:{line:112,column:18}},'27':{start:{line:115,column:4},end:{line:117,column:5}},'28':{start:{line:116,column:8},end:{line:116,column:78}},'29':{start:{line:119,column:4},end:{line:119,column:26}},'30':{start:{line:120,column:4},end:{line:124,column:5}},'31':{start:{line:121,column:8},end:{line:123,column:9}},'32':{start:{line:122,column:12},end:{line:122,column:21}},'33':{start:{line:126,column:4},end:{line:126,column:14}},'34':{start:{line:129,column:0},end:{line:133,column:2}},'35':{start:{line:135,column:0},end:{line:135,column:22}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:33,column:12},end:{line:33,column:13}},loc:{start:{line:33,column:40},end:{line:51,column:1}},line:33},'1':{name:'(anonymous_1)',decl:{start:{line:70,column:10},end:{line:70,column:11}},loc:{start:{line:70,column:21},end:{line:84,column:1}},line:70},'2':{name:'(anonymous_2)',decl:{start:{line:74,column:30},end:{line:74,column:31}},loc:{start:{line:74,column:44},end:{line:81,column:5}},line:74},'3':{name:'(anonymous_3)',decl:{start:{line:75,column:32},end:{line:75,column:33}},loc:{start:{line:75,column:55},end:{line:80,column:9}},line:75},'4':{name:'(anonymous_4)',decl:{start:{line:106,column:14},end:{line:106,column:15}},loc:{start:{line:106,column:57},end:{line:127,column:1}},line:106}},branchMap:{'0':{loc:{start:{line:37,column:4},end:{line:40,column:5}},type:'if',locations:[{start:{line:37,column:4},end:{line:40,column:5}},{start:{line:37,column:4},end:{line:40,column:5}}],line:37},'1':{loc:{start:{line:38,column:15},end:{line:38,column:25}},type:'binary-expr',locations:[{start:{line:38,column:15},end:{line:38,column:20}},{start:{line:38,column:24},end:{line:38,column:25}}],line:38},'2':{loc:{start:{line:42,column:11},end:{line:42,column:20}},type:'binary-expr',locations:[{start:{line:42,column:11},end:{line:42,column:15}},{start:{line:42,column:19},end:{line:42,column:20}}],line:42},'3':{loc:{start:{line:43,column:11},end:{line:43,column:28}},type:'cond-expr',locations:[{start:{line:43,column:22},end:{line:43,column:24}},{start:{line:43,column:27},end:{line:43,column:28}}],line:43},'4':{loc:{start:{line:76,column:12},end:{line:78,column:13}},type:'if',locations:[{start:{line:76,column:12},end:{line:78,column:13}},{start:{line:76,column:12},end:{line:78,column:13}}],line:76},'5':{loc:{start:{line:109,column:17},end:{line:109,column:32}},type:'binary-expr',locations:[{start:{line:109,column:17},end:{line:109,column:27}},{start:{line:109,column:31},end:{line:109,column:32}}],line:109},'6':{loc:{start:{line:111,column:4},end:{line:113,column:5}},type:'if',locations:[{start:{line:111,column:4},end:{line:113,column:5}},{start:{line:111,column:4},end:{line:113,column:5}}],line:111},'7':{loc:{start:{line:115,column:4},end:{line:117,column:5}},type:'if',locations:[{start:{line:115,column:4},end:{line:117,column:5}},{start:{line:115,column:4},end:{line:117,column:5}}],line:115},'8':{loc:{start:{line:120,column:25},end:{line:120,column:54}},type:'binary-expr',locations:[{start:{line:120,column:25},end:{line:120,column:40}},{start:{line:120,column:44},end:{line:120,column:54}}],line:120},'9':{loc:{start:{line:121,column:8},end:{line:123,column:9}},type:'if',locations:[{start:{line:121,column:8},end:{line:123,column:9}},{start:{line:121,column:8},end:{line:123,column:9}}],line:121}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0,'34':0,'35':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0],'5':[0,0],'6':[0,0],'7':[0,0],'8':[0,0],'9':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var collection=(cov_160m400hkr.s[0]++,__webpack_require__(4));var type=(cov_160m400hkr.s[1]++,__webpack_require__(2));var aps=(cov_160m400hkr.s[2]++,Array.prototype.slice);var util;/**
	 * Generate an integer Array containing an arithmetic progression.
	 * @param {number} start - start index
	 * @param {number} stop - stop index
	 * @param {number} step - next visit index = current index + step
	 * @returns {Array}
	 * @memberof tui.util
	 * @example
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * util.range(5); // [0, 1, 2, 3, 4]
	 * util.range(1, 5); // [1,2,3,4]
	 * util.range(2, 10, 2); // [2,4,6,8]
	 * util.range(10, 2, -2); // [10,8,6,4]
	 */cov_160m400hkr.s[3]++;var range=function(start,stop,step){cov_160m400hkr.f[0]++;var arr=(cov_160m400hkr.s[4]++,[]);var flag;cov_160m400hkr.s[5]++;if(type.isUndefined(stop)){cov_160m400hkr.b[0][0]++;cov_160m400hkr.s[6]++;stop=(cov_160m400hkr.b[1][0]++,start)||(cov_160m400hkr.b[1][1]++,0);cov_160m400hkr.s[7]++;start=0;}else{cov_160m400hkr.b[0][1]++;}cov_160m400hkr.s[8]++;step=(cov_160m400hkr.b[2][0]++,step)||(cov_160m400hkr.b[2][1]++,1);cov_160m400hkr.s[9]++;flag=step<0?(cov_160m400hkr.b[3][0]++,-1):(cov_160m400hkr.b[3][1]++,1);cov_160m400hkr.s[10]++;stop*=flag;cov_160m400hkr.s[11]++;for(;start*flag<stop;start+=step){cov_160m400hkr.s[12]++;arr.push(start);}cov_160m400hkr.s[13]++;return arr;};/* eslint-disable valid-jsdoc *//**
	 * Zip together multiple lists into a single array
	 * @param {...Array}
	 * @returns {Array}
	 * @memberof tui.util
	 * @example
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var result = util.zip([1, 2, 3], ['a', 'b','c'], [true, false, true]);
	 * console.log(result[0]); // [1, 'a', true]
	 * console.log(result[1]); // [2, 'b', false]
	 * console.log(result[2]); // [3, 'c', true]
	 */cov_160m400hkr.s[14]++;var zip=function(){cov_160m400hkr.f[1]++;/* eslint-enable valid-jsdoc */var arr2d=(cov_160m400hkr.s[15]++,aps.call(arguments));var result=(cov_160m400hkr.s[16]++,[]);cov_160m400hkr.s[17]++;collection.forEach(arr2d,function(arr){cov_160m400hkr.f[2]++;cov_160m400hkr.s[18]++;collection.forEach(arr,function(value,index){cov_160m400hkr.f[3]++;cov_160m400hkr.s[19]++;if(!result[index]){cov_160m400hkr.b[4][0]++;cov_160m400hkr.s[20]++;result[index]=[];}else{cov_160m400hkr.b[4][1]++;}cov_160m400hkr.s[21]++;result[index].push(value);});});cov_160m400hkr.s[22]++;return result;};/**
	 * Returns the first index at which a given element can be found in the array
	 * from start index(default 0), or -1 if it is not present.<br>
	 * It compares searchElement to elements of the Array using strict equality
	 * (the same method used by the ===, or triple-equals, operator).
	 * @param {*} searchElement Element to locate in the array
	 * @param {Array} array Array that will be traversed.
	 * @param {number} startIndex Start index in array for searching (default 0)
	 * @returns {number} the First index at which a given element, or -1 if it is not present
	 * @memberof tui.util
	 * @example
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var arr = ['one', 'two', 'three', 'four'];
	 * var idx1 = util.inArray('one', arr, 3); // -1
	 * var idx2 = util.inArray('one', arr); // 0
	 */cov_160m400hkr.s[23]++;var inArray=function(searchElement,array,startIndex){cov_160m400hkr.f[4]++;var i;var length;cov_160m400hkr.s[24]++;startIndex=(cov_160m400hkr.b[5][0]++,startIndex)||(cov_160m400hkr.b[5][1]++,0);cov_160m400hkr.s[25]++;if(!type.isArray(array)){cov_160m400hkr.b[6][0]++;cov_160m400hkr.s[26]++;return-1;}else{cov_160m400hkr.b[6][1]++;}cov_160m400hkr.s[27]++;if(Array.prototype.indexOf){cov_160m400hkr.b[7][0]++;cov_160m400hkr.s[28]++;return Array.prototype.indexOf.call(array,searchElement,startIndex);}else{cov_160m400hkr.b[7][1]++;}cov_160m400hkr.s[29]++;length=array.length;cov_160m400hkr.s[30]++;for(i=startIndex;(cov_160m400hkr.b[8][0]++,startIndex>=0)&&(cov_160m400hkr.b[8][1]++,i<length);i+=1){cov_160m400hkr.s[31]++;if(array[i]===searchElement){cov_160m400hkr.b[9][0]++;cov_160m400hkr.s[32]++;return i;}else{cov_160m400hkr.b[9][1]++;}}cov_160m400hkr.s[33]++;return-1;};cov_160m400hkr.s[34]++;util={inArray:inArray,range:range,zip:zip};cov_160m400hkr.s[35]++;module.exports=util;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview This module has some functions for handling object as collection.
	 * @author NHN Ent.
	 *         FE Development Lab <dl_javascript@nhnent.com>
	 */'use strict';var cov_1vllu0m4x7=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/collection.js',hash='cd5a898ce50b7f88da3b3db9dd4ff48820ec714b',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/collection.js',statementMap:{'0':{start:{line:9,column:11},end:{line:9,column:28}},'1':{start:{line:10,column:13},end:{line:10,column:32}},'2':{start:{line:37,column:16},end:{line:37,column:17}},'3':{start:{line:38,column:14},end:{line:38,column:24}},'4':{start:{line:40,column:4},end:{line:40,column:30}},'5':{start:{line:42,column:4},end:{line:46,column:5}},'6':{start:{line:43,column:8},end:{line:45,column:9}},'7':{start:{line:44,column:12},end:{line:44,column:18}},'8':{start:{line:76,column:4},end:{line:76,column:30}},'9':{start:{line:78,column:4},end:{line:84,column:5}},'10':{start:{line:79,column:8},end:{line:83,column:9}},'11':{start:{line:80,column:12},end:{line:82,column:13}},'12':{start:{line:81,column:16},end:{line:81,column:22}},'13':{start:{line:118,column:4},end:{line:122,column:5}},'14':{start:{line:119,column:8},end:{line:119,column:45}},'15':{start:{line:121,column:8},end:{line:121,column:53}},'16':{start:{line:151,column:22},end:{line:151,column:24}},'17':{start:{line:153,column:4},end:{line:153,column:30}},'18':{start:{line:155,column:4},end:{line:157,column:7}},'19':{start:{line:156,column:8},end:{line:156,column:61}},'20':{start:{line:159,column:4},end:{line:159,column:23}},'21':{start:{line:189,column:16},end:{line:189,column:17}},'22':{start:{line:192,column:4},end:{line:192,column:30}},'23':{start:{line:194,column:4},end:{line:201,column:5}},'24':{start:{line:195,column:8},end:{line:195,column:32}},'25':{start:{line:196,column:8},end:{line:196,column:29}},'26':{start:{line:197,column:8},end:{line:197,column:38}},'27':{start:{line:199,column:8},end:{line:199,column:28}},'28':{start:{line:200,column:8},end:{line:200,column:27}},'29':{start:{line:203,column:4},end:{line:203,column:15}},'30':{start:{line:204,column:4},end:{line:206,column:5}},'31':{start:{line:205,column:8},end:{line:205,column:79}},'32':{start:{line:208,column:4},end:{line:208,column:17}},'33':{start:{line:237,column:4},end:{line:244,column:5}},'34':{start:{line:238,column:8},end:{line:238,column:52}},'35':{start:{line:240,column:8},end:{line:240,column:17}},'36':{start:{line:241,column:8},end:{line:243,column:11}},'37':{start:{line:242,column:12},end:{line:242,column:28}},'38':{start:{line:246,column:4},end:{line:246,column:15}},'39':{start:{line:282,column:4},end:{line:282,column:30}},'40':{start:{line:284,column:4},end:{line:286,column:5}},'41':{start:{line:285,column:8},end:{line:285,column:43}},'42':{start:{line:288,column:4},end:{line:298,column:5}},'43':{start:{line:289,column:8},end:{line:289,column:20}},'44':{start:{line:290,column:8},end:{line:292,column:10}},'45':{start:{line:291,column:12},end:{line:291,column:36}},'46':{start:{line:294,column:8},end:{line:294,column:20}},'47':{start:{line:295,column:8},end:{line:297,column:10}},'48':{start:{line:296,column:12},end:{line:296,column:41}},'49':{start:{line:300,column:4},end:{line:304,column:16}},'50':{start:{line:301,column:8},end:{line:303,column:9}},'51':{start:{line:302,column:12},end:{line:302,column:35}},'52':{start:{line:306,column:4},end:{line:306,column:18}},'53':{start:{line:335,column:17},end:{line:337,column:6}},'54':{start:{line:336,column:8},end:{line:336,column:30}},'55':{start:{line:339,column:4},end:{line:339,column:18}},'56':{start:{line:342,column:0},end:{line:351,column:2}}},fnMap:{'0':{name:'forEachArray',decl:{start:{line:36,column:9},end:{line:36,column:21}},loc:{start:{line:36,column:46},end:{line:47,column:1}},line:36},'1':{name:'forEachOwnProperties',decl:{start:{line:73,column:9},end:{line:73,column:29}},loc:{start:{line:73,column:54},end:{line:85,column:1}},line:73},'2':{name:'forEach',decl:{start:{line:117,column:9},end:{line:117,column:16}},loc:{start:{line:117,column:41},end:{line:123,column:1}},line:117},'3':{name:'map',decl:{start:{line:150,column:9},end:{line:150,column:12}},loc:{start:{line:150,column:37},end:{line:160,column:1}},line:150},'4':{name:'(anonymous_4)',decl:{start:{line:155,column:17},end:{line:155,column:18}},loc:{start:{line:155,column:28},end:{line:157,column:5}},line:155},'5':{name:'reduce',decl:{start:{line:188,column:9},end:{line:188,column:15}},loc:{start:{line:188,column:40},end:{line:209,column:1}},line:188},'6':{name:'toArray',decl:{start:{line:235,column:9},end:{line:235,column:16}},loc:{start:{line:235,column:28},end:{line:247,column:1}},line:235},'7':{name:'(anonymous_7)',decl:{start:{line:241,column:32},end:{line:241,column:33}},loc:{start:{line:241,column:48},end:{line:243,column:9}},line:241},'8':{name:'filter',decl:{start:{line:279,column:9},end:{line:279,column:15}},loc:{start:{line:279,column:40},end:{line:307,column:1}},line:279},'9':{name:'(anonymous_9)',decl:{start:{line:290,column:14},end:{line:290,column:15}},loc:{start:{line:290,column:40},end:{line:292,column:9}},line:290},'10':{name:'(anonymous_10)',decl:{start:{line:295,column:14},end:{line:295,column:15}},loc:{start:{line:295,column:40},end:{line:297,column:9}},line:295},'11':{name:'(anonymous_11)',decl:{start:{line:300,column:17},end:{line:300,column:18}},loc:{start:{line:300,column:28},end:{line:304,column:5}},line:300},'12':{name:'pluck',decl:{start:{line:334,column:9},end:{line:334,column:14}},loc:{start:{line:334,column:30},end:{line:340,column:1}},line:334},'13':{name:'(anonymous_13)',decl:{start:{line:335,column:26},end:{line:335,column:27}},loc:{start:{line:335,column:41},end:{line:337,column:5}},line:335}},branchMap:{'0':{loc:{start:{line:40,column:14},end:{line:40,column:29}},type:'binary-expr',locations:[{start:{line:40,column:14},end:{line:40,column:21}},{start:{line:40,column:25},end:{line:40,column:29}}],line:40},'1':{loc:{start:{line:43,column:8},end:{line:45,column:9}},type:'if',locations:[{start:{line:43,column:8},end:{line:45,column:9}},{start:{line:43,column:8},end:{line:45,column:9}}],line:43},'2':{loc:{start:{line:76,column:14},end:{line:76,column:29}},type:'binary-expr',locations:[{start:{line:76,column:14},end:{line:76,column:21}},{start:{line:76,column:25},end:{line:76,column:29}}],line:76},'3':{loc:{start:{line:79,column:8},end:{line:83,column:9}},type:'if',locations:[{start:{line:79,column:8},end:{line:83,column:9}},{start:{line:79,column:8},end:{line:83,column:9}}],line:79},'4':{loc:{start:{line:80,column:12},end:{line:82,column:13}},type:'if',locations:[{start:{line:80,column:12},end:{line:82,column:13}},{start:{line:80,column:12},end:{line:82,column:13}}],line:80},'5':{loc:{start:{line:118,column:4},end:{line:122,column:5}},type:'if',locations:[{start:{line:118,column:4},end:{line:122,column:5}},{start:{line:118,column:4},end:{line:122,column:5}}],line:118},'6':{loc:{start:{line:153,column:14},end:{line:153,column:29}},type:'binary-expr',locations:[{start:{line:153,column:14},end:{line:153,column:21}},{start:{line:153,column:25},end:{line:153,column:29}}],line:153},'7':{loc:{start:{line:192,column:14},end:{line:192,column:29}},type:'binary-expr',locations:[{start:{line:192,column:14},end:{line:192,column:21}},{start:{line:192,column:25},end:{line:192,column:29}}],line:192},'8':{loc:{start:{line:194,column:4},end:{line:201,column:5}},type:'if',locations:[{start:{line:194,column:4},end:{line:201,column:5}},{start:{line:194,column:4},end:{line:201,column:5}}],line:194},'9':{loc:{start:{line:205,column:50},end:{line:205,column:76}},type:'cond-expr',locations:[{start:{line:205,column:57},end:{line:205,column:68}},{start:{line:205,column:71},end:{line:205,column:76}}],line:205},'10':{loc:{start:{line:282,column:14},end:{line:282,column:29}},type:'binary-expr',locations:[{start:{line:282,column:14},end:{line:282,column:21}},{start:{line:282,column:25},end:{line:282,column:29}}],line:282},'11':{loc:{start:{line:284,column:4},end:{line:286,column:5}},type:'if',locations:[{start:{line:284,column:4},end:{line:286,column:5}},{start:{line:284,column:4},end:{line:286,column:5}}],line:284},'12':{loc:{start:{line:284,column:8},end:{line:284,column:57}},type:'binary-expr',locations:[{start:{line:284,column:8},end:{line:284,column:27}},{start:{line:284,column:31},end:{line:284,column:57}}],line:284},'13':{loc:{start:{line:288,column:4},end:{line:298,column:5}},type:'if',locations:[{start:{line:288,column:4},end:{line:298,column:5}},{start:{line:288,column:4},end:{line:298,column:5}}],line:288},'14':{loc:{start:{line:301,column:8},end:{line:303,column:9}},type:'if',locations:[{start:{line:301,column:8},end:{line:303,column:9}},{start:{line:301,column:8},end:{line:303,column:9}}],line:301}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0,'34':0,'35':0,'36':0,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':0,'45':0,'46':0,'47':0,'48':0,'49':0,'50':0,'51':0,'52':0,'53':0,'54':0,'55':0,'56':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0],'5':[0,0],'6':[0,0],'7':[0,0],'8':[0,0],'9':[0,0],'10':[0,0],'11':[0,0],'12':[0,0],'13':[0,0],'14':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var type=(cov_1vllu0m4x7.s[0]++,__webpack_require__(2));var object=(cov_1vllu0m4x7.s[1]++,__webpack_require__(1));/**
	 * Execute the provided callback once for each element present
	 * in the array(or Array-like object) in ascending order.<br>
	 * If the callback function returns false, the loop will be stopped.<br>
	 * Callback function(iteratee) is invoked with three arguments:
	 *  - The value of the element
	 *  - The index of the element
	 *  - The array(or Array-like object) being traversed
	 * @param {Array} arr The array(or Array-like object) that will be traversed
	 * @param {function} iteratee Callback function
	 * @param {Object} [context] Context(this) of callback function
	 * @memberof tui.util
	  * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var sum = 0;
	 *
	 * util.forEachArray([1,2,3], function(value){
	 *     sum += value;
	 * });
	 * alert(sum); // 6
	 */function forEachArray(arr,iteratee,context){cov_1vllu0m4x7.f[0]++;var index=(cov_1vllu0m4x7.s[2]++,0);var len=(cov_1vllu0m4x7.s[3]++,arr.length);cov_1vllu0m4x7.s[4]++;context=(cov_1vllu0m4x7.b[0][0]++,context)||(cov_1vllu0m4x7.b[0][1]++,null);cov_1vllu0m4x7.s[5]++;for(;index<len;index+=1){cov_1vllu0m4x7.s[6]++;if(iteratee.call(context,arr[index],index,arr)===false){cov_1vllu0m4x7.b[1][0]++;cov_1vllu0m4x7.s[7]++;break;}else{cov_1vllu0m4x7.b[1][1]++;}}}/**
	 * Execute the provided callback once for each property of object which actually exist.<br>
	 * If the callback function returns false, the loop will be stopped.<br>
	 * Callback function(iteratee) is invoked with three arguments:
	 *  - The value of the property
	 *  - The name of the property
	 *  - The object being traversed
	 * @param {Object} obj The object that will be traversed
	 * @param {function} iteratee  Callback function
	 * @param {Object} [context] Context(this) of callback function
	 * @memberof tui.util
	 * @example
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var sum = 0;
	 *
	 * util.forEachOwnProperties({a:1,b:2,c:3}, function(value){
	 *     sum += value;
	 * });
	 * alert(sum); // 6
	 **/function forEachOwnProperties(obj,iteratee,context){cov_1vllu0m4x7.f[1]++;var key;cov_1vllu0m4x7.s[8]++;context=(cov_1vllu0m4x7.b[2][0]++,context)||(cov_1vllu0m4x7.b[2][1]++,null);cov_1vllu0m4x7.s[9]++;for(key in obj){cov_1vllu0m4x7.s[10]++;if(obj.hasOwnProperty(key)){cov_1vllu0m4x7.b[3][0]++;cov_1vllu0m4x7.s[11]++;if(iteratee.call(context,obj[key],key,obj)===false){cov_1vllu0m4x7.b[4][0]++;cov_1vllu0m4x7.s[12]++;break;}else{cov_1vllu0m4x7.b[4][1]++;}}else{cov_1vllu0m4x7.b[3][1]++;}}}/**
	 * Execute the provided callback once for each property of object(or element of array) which actually exist.<br>
	 * If the object is Array-like object(ex-arguments object), It needs to transform to Array.(see 'ex2' of example).<br>
	 * If the callback function returns false, the loop will be stopped.<br>
	 * Callback function(iteratee) is invoked with three arguments:
	 *  - The value of the property(or The value of the element)
	 *  - The name of the property(or The index of the element)
	 *  - The object being traversed
	 * @param {Object} obj The object that will be traversed
	 * @param {function} iteratee Callback function
	 * @param {Object} [context] Context(this) of callback function
	 * @memberof tui.util
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var sum = 0;
	 *
	 * util.forEach([1,2,3], function(value){
	 *     sum += value;
	 * });
	 * alert(sum); // 6
	 *
	 * // In case of Array-like object 
	 * var array = Array.prototype.slice.call(arrayLike); // change to array
	 * util.forEach(array, function(value){
	 *     sum += value;
	 * });
	 */function forEach(obj,iteratee,context){cov_1vllu0m4x7.f[2]++;cov_1vllu0m4x7.s[13]++;if(type.isArray(obj)){cov_1vllu0m4x7.b[5][0]++;cov_1vllu0m4x7.s[14]++;forEachArray(obj,iteratee,context);}else{cov_1vllu0m4x7.b[5][1]++;cov_1vllu0m4x7.s[15]++;forEachOwnProperties(obj,iteratee,context);}}/**
	 * Execute the provided callback function once for each element in an array, in order,
	 * and constructs a new array from the results.<br>
	 * If the object is Array-like object(ex-arguments object),
	 * It needs to transform to Array.(see 'ex2' of forEach example)<br>
	 * Callback function(iteratee) is invoked with three arguments:
	 *  - The value of the property(or The value of the element)
	 *  - The name of the property(or The index of the element)
	 *  - The object being traversed
	 * @param {Object} obj The object that will be traversed
	 * @param {function} iteratee Callback function
	 * @param {Object} [context] Context(this) of callback function
	 * @returns {Array} A new array composed of returned values from callback function
	 * @memberof tui.util
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var result = util.map([0,1,2,3], function(value) {
	 *     return value + 1;
	 * });
	 *
	 * alert(result);  // 1,2,3,4
	 */function map(obj,iteratee,context){cov_1vllu0m4x7.f[3]++;var resultArray=(cov_1vllu0m4x7.s[16]++,[]);cov_1vllu0m4x7.s[17]++;context=(cov_1vllu0m4x7.b[6][0]++,context)||(cov_1vllu0m4x7.b[6][1]++,null);cov_1vllu0m4x7.s[18]++;forEach(obj,function(){cov_1vllu0m4x7.f[4]++;cov_1vllu0m4x7.s[19]++;resultArray.push(iteratee.apply(context,arguments));});cov_1vllu0m4x7.s[20]++;return resultArray;}/**
	 * Execute the callback function once for each element present in the array(or Array-like object or plain object).<br>
	 * If the object is Array-like object(ex-arguments object),
	 * It needs to transform to Array.(see 'ex2' of forEach example)<br>
	 * Callback function(iteratee) is invoked with four arguments:
	 *  - The previousValue
	 *  - The currentValue
	 *  - The index
	 *  - The object being traversed
	 * @param {Object} obj The object that will be traversed
	 * @param {function} iteratee Callback function
	 * @param {Object} [context] Context(this) of callback function
	 * @returns {*} The result value
	 * @memberof tui.util
	 * @example
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var result = util.reduce([0,1,2,3], function(stored, value) {
	 *     return stored + value;
	 * });
	 *
	 * alert(result); // 6
	 */function reduce(obj,iteratee,context){cov_1vllu0m4x7.f[5]++;var index=(cov_1vllu0m4x7.s[21]++,0);var keys,length,store;cov_1vllu0m4x7.s[22]++;context=(cov_1vllu0m4x7.b[7][0]++,context)||(cov_1vllu0m4x7.b[7][1]++,null);cov_1vllu0m4x7.s[23]++;if(!type.isArray(obj)){cov_1vllu0m4x7.b[8][0]++;cov_1vllu0m4x7.s[24]++;keys=object.keys(obj);cov_1vllu0m4x7.s[25]++;length=keys.length;cov_1vllu0m4x7.s[26]++;store=obj[keys[index+=1]];}else{cov_1vllu0m4x7.b[8][1]++;cov_1vllu0m4x7.s[27]++;length=obj.length;cov_1vllu0m4x7.s[28]++;store=obj[index];}cov_1vllu0m4x7.s[29]++;index+=1;cov_1vllu0m4x7.s[30]++;for(;index<length;index+=1){cov_1vllu0m4x7.s[31]++;store=iteratee.call(context,store,obj[keys?(cov_1vllu0m4x7.b[9][0]++,keys[index]):(cov_1vllu0m4x7.b[9][1]++,index)]);}cov_1vllu0m4x7.s[32]++;return store;}/**
	 * Transform the Array-like object to Array.<br>
	 * In low IE (below 8), Array.prototype.slice.call is not perfect. So, try-catch statement is used.
	 * @param {*} arrayLike Array-like object
	 * @returns {Array} Array
	 * @memberof tui.util
	 * @example
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var arrayLike = {
	 *     0: 'one',
	 *     1: 'two',
	 *     2: 'three',
	 *     3: 'four',
	 *     length: 4
	 * };
	 * var result = util.toArray(arrayLike);
	 *
	 * alert(result instanceof Array); // true
	 * alert(result); // one,two,three,four
	 */function toArray(arrayLike){cov_1vllu0m4x7.f[6]++;var arr;cov_1vllu0m4x7.s[33]++;try{cov_1vllu0m4x7.s[34]++;arr=Array.prototype.slice.call(arrayLike);}catch(e){cov_1vllu0m4x7.s[35]++;arr=[];cov_1vllu0m4x7.s[36]++;forEachArray(arrayLike,function(value){cov_1vllu0m4x7.f[7]++;cov_1vllu0m4x7.s[37]++;arr.push(value);});}cov_1vllu0m4x7.s[38]++;return arr;}/**
	 * Create a new array or plain object with all elements(or properties)
	 * that pass the test implemented by the provided function.<br>
	 * Callback function(iteratee) is invoked with three arguments:
	 *  - The value of the property(or The value of the element)
	 *  - The name of the property(or The index of the element)
	 *  - The object being traversed
	 * @param {Object} obj Object(plain object or Array) that will be traversed
	 * @param {function} iteratee Callback function
	 * @param {Object} [context] Context(this) of callback function
	 * @returns {Object} plain object or Array
	 * @memberof tui.util
	 * @example
	  * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var result1 = util.filter([0,1,2,3], function(value) {
	 *     return (value % 2 === 0);
	 * });
	 * alert(result1); // [0, 2]
	 *
	 * var result2 = util.filter({a : 1, b: 2, c: 3}, function(value) {
	 *     return (value % 2 !== 0);
	 * });
	 * alert(result2.a); // 1
	 * alert(result2.b); // undefined
	 * alert(result2.c); // 3
	 */function filter(obj,iteratee,context){cov_1vllu0m4x7.f[8]++;var result,add;cov_1vllu0m4x7.s[39]++;context=(cov_1vllu0m4x7.b[10][0]++,context)||(cov_1vllu0m4x7.b[10][1]++,null);cov_1vllu0m4x7.s[40]++;if((cov_1vllu0m4x7.b[12][0]++,!type.isObject(obj))||(cov_1vllu0m4x7.b[12][1]++,!type.isFunction(iteratee))){cov_1vllu0m4x7.b[11][0]++;cov_1vllu0m4x7.s[41]++;throw new Error('wrong parameter');}else{cov_1vllu0m4x7.b[11][1]++;}cov_1vllu0m4x7.s[42]++;if(type.isArray(obj)){cov_1vllu0m4x7.b[13][0]++;cov_1vllu0m4x7.s[43]++;result=[];cov_1vllu0m4x7.s[44]++;add=function(subResult,args){cov_1vllu0m4x7.f[9]++;cov_1vllu0m4x7.s[45]++;subResult.push(args[0]);};}else{cov_1vllu0m4x7.b[13][1]++;cov_1vllu0m4x7.s[46]++;result={};cov_1vllu0m4x7.s[47]++;add=function(subResult,args){cov_1vllu0m4x7.f[10]++;cov_1vllu0m4x7.s[48]++;subResult[args[1]]=args[0];};}cov_1vllu0m4x7.s[49]++;forEach(obj,function(){cov_1vllu0m4x7.f[11]++;cov_1vllu0m4x7.s[50]++;if(iteratee.apply(context,arguments)){cov_1vllu0m4x7.b[14][0]++;cov_1vllu0m4x7.s[51]++;add(result,arguments);}else{cov_1vllu0m4x7.b[14][1]++;}},context);cov_1vllu0m4x7.s[52]++;return result;}/**
	 * fetching a property
	 * @param {Array} arr target collection
	 * @param {String|Number} property property name
	 * @returns {Array}
	 * @memberof tui.util
	 * @example
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var objArr = [
	 *     {'abc': 1, 'def': 2, 'ghi': 3},
	 *     {'abc': 4, 'def': 5, 'ghi': 6},
	 *     {'abc': 7, 'def': 8, 'ghi': 9}
	 * ];
	 * var arr2d = [
	 *     [1, 2, 3],
	 *     [4, 5, 6],
	 *     [7, 8, 9]
	 * ];
	 * util.pluck(objArr, 'abc'); // [1, 4, 7]
	 * util.pluck(arr2d, 2); // [3, 6, 9]
	 */function pluck(arr,property){cov_1vllu0m4x7.f[12]++;var result=(cov_1vllu0m4x7.s[53]++,map(arr,function(item){cov_1vllu0m4x7.f[13]++;cov_1vllu0m4x7.s[54]++;return item[property];}));cov_1vllu0m4x7.s[55]++;return result;}cov_1vllu0m4x7.s[56]++;module.exports={forEachOwnProperties:forEachOwnProperties,forEachArray:forEachArray,forEach:forEach,toArray:toArray,map:map,reduce:reduce,filter:filter,pluck:pluck};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/**
	 * @fileoverview This module provides a bind() function for context binding.
	 * @author NHN Ent.
	 *         FE Development Lab <dl_javascript@nhnent.com>
	 */'use strict';/**
	 * Create a new function that, when called, has its this keyword set to the provided value.
	 * @param {function} fn A original function before binding
	 * @param {*} obj context of function in arguments[0]
	 * @returns {function()} A new bound function with context that is in arguments[1]
	 * @memberof tui.util
	 */var cov_4nbt3qvl2=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/func.js',hash='17cfc4a967d30d4d14ac7bda949c539337ad85f7',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/func.js',statementMap:{'0':{start:{line:17,column:16},end:{line:17,column:37}},'1':{start:{line:20,column:4},end:{line:22,column:5}},'2':{start:{line:21,column:8},end:{line:21,column:59}},'3':{start:{line:34,column:0},end:{line:36,column:2}}},fnMap:{'0':{name:'bind',decl:{start:{line:16,column:9},end:{line:16,column:13}},loc:{start:{line:16,column:23},end:{line:32,column:1}},line:16}},branchMap:{'0':{loc:{start:{line:20,column:4},end:{line:22,column:5}},type:'if',locations:[{start:{line:20,column:4},end:{line:22,column:5}},{start:{line:20,column:4},end:{line:22,column:5}}],line:20}},s:{'0':0,'1':0,'2':0,'3':0},f:{'0':0},b:{'0':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function bind(fn,obj){cov_4nbt3qvl2.f[0]++;var slice=(cov_4nbt3qvl2.s[0]++,Array.prototype.slice);var args;cov_4nbt3qvl2.s[1]++;if(fn.bind){cov_4nbt3qvl2.b[0][0]++;cov_4nbt3qvl2.s[2]++;return fn.bind.apply(fn,slice.call(arguments,1));}else{cov_4nbt3qvl2.b[0][1]++;}/* istanbul ignore next */args=slice.call(arguments,2);/* istanbul ignore next */return function(){/* istanbul ignore next */return fn.apply(obj,args.length?args.concat(slice.call(arguments)):arguments);};}cov_4nbt3qvl2.s[3]++;module.exports={bind:bind};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * @fileoverview This module provides some simple function for inheritance.
	 * @author NHN Ent.
	 *         FE Development Lab <dl_javascript@nhnent.com>
	 */'use strict';/**
	 * Create a new object with the specified prototype object and properties.
	 * @param {Object} obj This object will be a prototype of the newly-created object.
	 * @returns {Object}
	 * @memberof tui.util
	 */var cov_ru7tj0lxg=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/inheritance.js',hash='5713e3d8ce8b5d349e85e035f04b9555da332d73',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/inheritance.js',statementMap:{'0':{start:{line:17,column:4},end:{line:17,column:22}},'1':{start:{line:19,column:4},end:{line:19,column:19}},'2':{start:{line:59,column:20},end:{line:59,column:53}},'3':{start:{line:60,column:4},end:{line:60,column:36}},'4':{start:{line:61,column:4},end:{line:61,column:34}},'5':{start:{line:64,column:0},end:{line:67,column:2}}},fnMap:{'0':{name:'createObject',decl:{start:{line:15,column:9},end:{line:15,column:21}},loc:{start:{line:15,column:27},end:{line:20,column:1}},line:15},'1':{name:'F',decl:{start:{line:16,column:13},end:{line:16,column:14}},loc:{start:{line:16,column:17},end:{line:16,column:19}},line:16},'2':{name:'inherit',decl:{start:{line:58,column:9},end:{line:58,column:16}},loc:{start:{line:58,column:37},end:{line:62,column:1}},line:58}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0,'1':0,'2':0},b:{},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function createObject(obj){cov_ru7tj0lxg.f[0]++;function F(){cov_ru7tj0lxg.f[1]++;}// eslint-disable-line require-jsdoc
	cov_ru7tj0lxg.s[0]++;F.prototype=obj;cov_ru7tj0lxg.s[1]++;return new F();}/**
	 * Provide a simple inheritance in prototype-oriented.<br>
	 * Caution :
	 *  Don't overwrite the prototype of child constructor.
	 *
	 * @param {function} subType Child constructor
	 * @param {function} superType Parent constructor
	 * @memberof tui.util
	 * @example
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * // Parent constructor
	 * function Animal(leg) {
	 *     this.leg = leg;
	 * }
	 * Animal.prototype.growl = function() {
	 *     // ...
	 * };
	 *
	 * // Child constructor
	 * function Person(name) {
	 *     this.name = name;
	 * }
	 *
	 * // Inheritance
	 * util.inherit(Person, Animal);
	 *
	 * // After this inheritance, please use only the extending of property.
	 * // Do not overwrite prototype.
	 * Person.prototype.walk = function(direction) {
	 *     // ...
	 * };
	 */function inherit(subType,superType){cov_ru7tj0lxg.f[2]++;var prototype=(cov_ru7tj0lxg.s[2]++,createObject(superType.prototype));cov_ru7tj0lxg.s[3]++;prototype.constructor=subType;cov_ru7tj0lxg.s[4]++;subType.prototype=prototype;}cov_ru7tj0lxg.s[5]++;module.exports={createObject:createObject,inherit:inherit};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview This module has some functions for handling the string.
	 * @author NHN Ent.
	 *         FE Development Lab <dl_javascript@nhnent.com>
	 */'use strict';var cov_221ujad3hp=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/string.js',hash='3b051c789dbe3f334af5b929b31df8bd7347a7e0',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/string.js',statementMap:{'0':{start:{line:9,column:17},end:{line:9,column:40}},'1':{start:{line:10,column:13},end:{line:10,column:32}},'2':{start:{line:26,column:19},end:{line:33,column:5}},'3':{start:{line:35,column:4},end:{line:37,column:7}},'4':{start:{line:36,column:8},end:{line:36,column:48}},'5':{start:{line:56,column:19},end:{line:62,column:5}},'6':{start:{line:64,column:4},end:{line:66,column:7}},'7':{start:{line:65,column:8},end:{line:65,column:60}},'8':{start:{line:76,column:4},end:{line:76,column:36}},'9':{start:{line:96,column:12},end:{line:96,column:13}},'10':{start:{line:97,column:14},end:{line:97,column:32}},'11':{start:{line:98,column:15},end:{line:98,column:17}},'12':{start:{line:101,column:4},end:{line:104,column:5}},'13':{start:{line:102,column:8},end:{line:102,column:36}},'14':{start:{line:103,column:8},end:{line:103,column:22}},'15':{start:{line:106,column:4},end:{line:111,column:5}},'16':{start:{line:107,column:8},end:{line:107,column:36}},'17':{start:{line:108,column:8},end:{line:110,column:9}},'18':{start:{line:109,column:12},end:{line:109,column:27}},'19':{start:{line:113,column:4},end:{line:115,column:7}},'20':{start:{line:114,column:8},end:{line:114,column:24}},'21':{start:{line:117,column:4},end:{line:117,column:36}},'22':{start:{line:118,column:4},end:{line:118,column:25}},'23':{start:{line:120,column:4},end:{line:120,column:16}},'24':{start:{line:123,column:0},end:{line:128,column:2}}},fnMap:{'0':{name:'decodeHTMLEntity',decl:{start:{line:25,column:9},end:{line:25,column:25}},loc:{start:{line:25,column:38},end:{line:38,column:1}},line:25},'1':{name:'(anonymous_1)',decl:{start:{line:35,column:70},end:{line:35,column:71}},loc:{start:{line:35,column:83},end:{line:37,column:5}},line:35},'2':{name:'encodeHTMLEntity',decl:{start:{line:55,column:9},end:{line:55,column:25}},loc:{start:{line:55,column:32},end:{line:67,column:1}},line:55},'3':{name:'(anonymous_3)',decl:{start:{line:64,column:36},end:{line:64,column:37}},loc:{start:{line:64,column:49},end:{line:66,column:5}},line:64},'4':{name:'hasEncodableString',decl:{start:{line:75,column:9},end:{line:75,column:27}},loc:{start:{line:75,column:36},end:{line:77,column:1}},line:75},'5':{name:'getDuplicatedChar',decl:{start:{line:95,column:9},end:{line:95,column:26}},loc:{start:{line:95,column:53},end:{line:121,column:1}},line:95},'6':{name:'(anonymous_6)',decl:{start:{line:113,column:35},end:{line:113,column:36}},loc:{start:{line:113,column:50},end:{line:115,column:5}},line:113}},branchMap:{'0':{loc:{start:{line:36,column:15},end:{line:36,column:47}},type:'cond-expr',locations:[{start:{line:36,column:30},end:{line:36,column:42}},{start:{line:36,column:45},end:{line:36,column:47}}],line:36},'1':{loc:{start:{line:65,column:15},end:{line:65,column:59}},type:'cond-expr',locations:[{start:{line:65,column:30},end:{line:65,column:54}},{start:{line:65,column:57},end:{line:65,column:59}}],line:65},'2':{loc:{start:{line:108,column:8},end:{line:110,column:9}},type:'if',locations:[{start:{line:108,column:8},end:{line:110,column:9}},{start:{line:108,column:8},end:{line:110,column:9}}],line:108}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0},b:{'0':[0,0],'1':[0,0],'2':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var collection=(cov_221ujad3hp.s[0]++,__webpack_require__(4));var object=(cov_221ujad3hp.s[1]++,__webpack_require__(1));/**
	 * Transform the given HTML Entity string into plain string
	 * @param {String} htmlEntity - HTML Entity type string
	 * @returns {String} Plain string
	 * @memberof tui.util
	 * @example
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 *  var htmlEntityString = "A &#39;quote&#39; is &lt;b&gt;bold&lt;/b&gt;"
	 *  var result = util.decodeHTMLEntity(htmlEntityString); //"A 'quote' is <b>bold</b>"
	 */function decodeHTMLEntity(htmlEntity){cov_221ujad3hp.f[0]++;var entities=(cov_221ujad3hp.s[2]++,{'&quot;':'"','&amp;':'&','&lt;':'<','&gt;':'>','&#39;':'\'','&nbsp;':' '});cov_221ujad3hp.s[3]++;return htmlEntity.replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&nbsp;/g,function(m0){cov_221ujad3hp.f[1]++;cov_221ujad3hp.s[4]++;return entities[m0]?(cov_221ujad3hp.b[0][0]++,entities[m0]):(cov_221ujad3hp.b[0][1]++,m0);});}/**
	 * Transform the given string into HTML Entity string
	 * @param {String} html - String for encoding
	 * @returns {String} HTML Entity
	 * @memberof tui.util
	 * @example
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 *  var htmlEntityString = "<script> alert('test');</script><a href='test'>";
	 *  var result = util.encodeHTMLEntity(htmlEntityString);
	 * //"&lt;script&gt; alert(&#39;test&#39;);&lt;/script&gt;&lt;a href=&#39;test&#39;&gt;"
	 */function encodeHTMLEntity(html){cov_221ujad3hp.f[2]++;var entities=(cov_221ujad3hp.s[5]++,{'"':'quot','&':'amp','<':'lt','>':'gt','\'':'#39'});cov_221ujad3hp.s[6]++;return html.replace(/[<>&"']/g,function(m0){cov_221ujad3hp.f[3]++;cov_221ujad3hp.s[7]++;return entities[m0]?(cov_221ujad3hp.b[1][0]++,'&'+entities[m0]+';'):(cov_221ujad3hp.b[1][1]++,m0);});}/**
	 * Return whether the string capable to transform into plain string is in the given string or not.
	 * @param {String} string - test string
	 * @memberof tui.util
	 * @returns {boolean}
	 */function hasEncodableString(string){cov_221ujad3hp.f[4]++;cov_221ujad3hp.s[8]++;return /[<>&"']/.test(string);}/**
	 * Return duplicate charters
	 * @param {string} operandStr1 The operand string
	 * @param {string} operandStr2 The operand string
	 * @private
	 * @memberof tui.util
	 * @returns {string}
	 * @example
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * util.getDuplicatedChar('fe dev', 'nhn entertainment'); // 'e'
	 * util.getDuplicatedChar('fdsa', 'asdf'); // 'asdf'
	 */function getDuplicatedChar(operandStr1,operandStr2){cov_221ujad3hp.f[5]++;var i=(cov_221ujad3hp.s[9]++,0);var len=(cov_221ujad3hp.s[10]++,operandStr1.length);var pool=(cov_221ujad3hp.s[11]++,{});var dupl,key;cov_221ujad3hp.s[12]++;for(;i<len;i+=1){cov_221ujad3hp.s[13]++;key=operandStr1.charAt(i);cov_221ujad3hp.s[14]++;pool[key]=1;}cov_221ujad3hp.s[15]++;for(i=0,len=operandStr2.length;i<len;i+=1){cov_221ujad3hp.s[16]++;key=operandStr2.charAt(i);cov_221ujad3hp.s[17]++;if(pool[key]){cov_221ujad3hp.b[2][0]++;cov_221ujad3hp.s[18]++;pool[key]+=1;}else{cov_221ujad3hp.b[2][1]++;}}cov_221ujad3hp.s[19]++;pool=collection.filter(pool,function(item){cov_221ujad3hp.f[6]++;cov_221ujad3hp.s[20]++;return item>1;});cov_221ujad3hp.s[21]++;pool=object.keys(pool).sort();cov_221ujad3hp.s[22]++;dupl=pool.join('');cov_221ujad3hp.s[23]++;return dupl;}cov_221ujad3hp.s[24]++;module.exports={decodeHTMLEntity:decodeHTMLEntity,encodeHTMLEntity:encodeHTMLEntity,hasEncodableString:hasEncodableString,getDuplicatedChar:getDuplicatedChar};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/**
	 * @fileoverview collections of some technic methods.
	 * @author NHN Ent. FE Development Lab <e0242.nhnent.com>
	 */'use strict';var cov_2ps84vxkoe=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/tricks.js',hash='34f560035e2ac1fc79a7b214f7b624429f39c5f6',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/tricks.js',statementMap:{'0':{start:{line:8,column:13},end:{line:8,column:15}},'1':{start:{line:9,column:10},end:{line:9,column:31}},'2':{start:{line:45,column:8},end:{line:45,column:35}},'3':{start:{line:47,column:8},end:{line:47,column:35}},'4':{start:{line:48,column:8},end:{line:50,column:18}},'5':{start:{line:49,column:12},end:{line:49,column:33}},'6':{start:{line:53,column:4},end:{line:53,column:21}},'7':{start:{line:62,column:4},end:{line:62,column:30}},'8':{start:{line:100,column:20},end:{line:100,column:24}},'9':{start:{line:101,column:15},end:{line:104,column:5}},'10':{start:{line:102,column:8},end:{line:102,column:30}},'11':{start:{line:103,column:8},end:{line:103,column:20}},'12':{start:{line:110,column:4},end:{line:110,column:48}},'13':{start:{line:113,column:8},end:{line:113,column:35}},'14':{start:{line:115,column:8},end:{line:120,column:9}},'15':{start:{line:116,column:12},end:{line:116,column:23}},'16':{start:{line:117,column:12},end:{line:117,column:30}},'17':{start:{line:119,column:12},end:{line:119,column:19}},'18':{start:{line:122,column:8},end:{line:122,column:35}},'19':{start:{line:124,column:8},end:{line:124,column:29}},'20':{start:{line:131,column:8},end:{line:131,column:24}},'21':{start:{line:133,column:8},end:{line:135,column:9}},'22':{start:{line:134,column:12},end:{line:134,column:23}},'23':{start:{line:139,column:8},end:{line:139,column:25}},'24':{start:{line:140,column:8},end:{line:140,column:20}},'25':{start:{line:143,column:4},end:{line:143,column:28}},'26':{start:{line:145,column:4},end:{line:145,column:21}},'27':{start:{line:148,column:0},end:{line:148,column:29}},'28':{start:{line:149,column:0},end:{line:149,column:27}},'29':{start:{line:150,column:0},end:{line:150,column:27}},'30':{start:{line:152,column:0},end:{line:152,column:24}}},fnMap:{'0':{name:'debounce',decl:{start:{line:38,column:9},end:{line:38,column:17}},loc:{start:{line:38,column:29},end:{line:54,column:1}},line:38},'1':{name:'debounced',decl:{start:{line:44,column:13},end:{line:44,column:22}},loc:{start:{line:44,column:25},end:{line:51,column:5}},line:44},'2':{name:'(anonymous_2)',decl:{start:{line:48,column:34},end:{line:48,column:35}},loc:{start:{line:48,column:45},end:{line:50,column:9}},line:48},'3':{name:'timestamp',decl:{start:{line:61,column:9},end:{line:61,column:18}},loc:{start:{line:61,column:21},end:{line:63,column:1}},line:61},'4':{name:'throttle',decl:{start:{line:98,column:9},end:{line:98,column:17}},loc:{start:{line:98,column:32},end:{line:146,column:1}},line:98},'5':{name:'(anonymous_5)',decl:{start:{line:101,column:15},end:{line:101,column:16}},loc:{start:{line:101,column:31},end:{line:104,column:5}},line:101},'6':{name:'throttled',decl:{start:{line:112,column:13},end:{line:112,column:22}},loc:{start:{line:112,column:25},end:{line:136,column:5}},line:112},'7':{name:'reset',decl:{start:{line:138,column:13},end:{line:138,column:18}},loc:{start:{line:138,column:21},end:{line:141,column:5}},line:138}},branchMap:{'0':{loc:{start:{line:115,column:8},end:{line:120,column:9}},type:'if',locations:[{start:{line:115,column:8},end:{line:120,column:9}},{start:{line:115,column:8},end:{line:120,column:9}}],line:115},'1':{loc:{start:{line:124,column:15},end:{line:124,column:28}},type:'binary-expr',locations:[{start:{line:124,column:15},end:{line:124,column:19}},{start:{line:124,column:23},end:{line:124,column:28}}],line:124},'2':{loc:{start:{line:133,column:8},end:{line:135,column:9}},type:'if',locations:[{start:{line:133,column:8},end:{line:135,column:9}},{start:{line:133,column:8},end:{line:135,column:9}}],line:133}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0},b:{'0':[0,0],'1':[0,0],'2':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var tricks=(cov_2ps84vxkoe.s[0]++,{});var aps=(cov_2ps84vxkoe.s[1]++,Array.prototype.slice);/**
	 * Creates a debounced function that delays invoking fn until after delay milliseconds has elapsed
	 * since the last time the debouced function was invoked.
	 * @param {function} fn The function to debounce.
	 * @param {number} [delay=0] The number of milliseconds to delay
	 * @memberof tui.util
	 * @returns {function} debounced function.
	 * @example
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * function someMethodToInvokeDebounced() {}
	 *
	 * var debounced = util.debounce(someMethodToInvokeDebounced, 300);
	 *
	 * // invoke repeatedly
	 * debounced();
	 * debounced();
	 * debounced();
	 * debounced();
	 * debounced();
	 * debounced();    // last invoke of debounced()
	 *
	 * // invoke someMethodToInvokeDebounced() after 300 milliseconds.
	 */function debounce(fn,delay){cov_2ps84vxkoe.f[0]++;var timer,args;/* istanbul ignore next */delay=delay||0;function debounced(){cov_2ps84vxkoe.f[1]++;cov_2ps84vxkoe.s[2]++;// eslint-disable-line require-jsdoc
	args=aps.call(arguments);cov_2ps84vxkoe.s[3]++;window.clearTimeout(timer);cov_2ps84vxkoe.s[4]++;timer=window.setTimeout(function(){cov_2ps84vxkoe.f[2]++;cov_2ps84vxkoe.s[5]++;fn.apply(null,args);},delay);}cov_2ps84vxkoe.s[6]++;return debounced;}/**
	 * return timestamp
	 * @memberof tui.util
	 * @returns {number} The number of milliseconds from Jan. 1970 00:00:00 (GMT)
	 */function timestamp(){cov_2ps84vxkoe.f[3]++;cov_2ps84vxkoe.s[7]++;return Number(new Date());}/**
	 * Creates a throttled function that only invokes fn at most once per every interval milliseconds.
	 *
	 * You can use this throttle short time repeatedly invoking functions. (e.g MouseMove, Resize ...)
	 *
	 * if you need reuse throttled method. you must remove slugs (e.g. flag variable) related with throttling.
	 * @param {function} fn function to throttle
	 * @param {number} [interval=0] the number of milliseconds to throttle invocations to.
	 * @memberof tui.util
	 * @returns {function} throttled function
	 * @example
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * function someMethodToInvokeThrottled() {}
	 *
	 * var throttled = util.throttle(someMethodToInvokeThrottled, 300);
	 *
	 * // invoke repeatedly
	 * throttled();    // invoke (leading)
	 * throttled();
	 * throttled();    // invoke (near 300 milliseconds)
	 * throttled();
	 * throttled();
	 * throttled();    // invoke (near 600 milliseconds)
	 * // ...
	 * // invoke (trailing)
	 *
	 * // if you need reuse throttled method. then invoke reset()
	 * throttled.reset();
	 */function throttle(fn,interval){cov_2ps84vxkoe.f[4]++;var base;var isLeading=(cov_2ps84vxkoe.s[8]++,true);cov_2ps84vxkoe.s[9]++;var tick=function(_args){cov_2ps84vxkoe.f[5]++;cov_2ps84vxkoe.s[10]++;fn.apply(null,_args);cov_2ps84vxkoe.s[11]++;base=null;};var debounced,stamp,args;/* istanbul ignore next */interval=interval||0;cov_2ps84vxkoe.s[12]++;debounced=tricks.debounce(tick,interval);function throttled(){cov_2ps84vxkoe.f[6]++;cov_2ps84vxkoe.s[13]++;// eslint-disable-line require-jsdoc
	args=aps.call(arguments);cov_2ps84vxkoe.s[14]++;if(isLeading){cov_2ps84vxkoe.b[0][0]++;cov_2ps84vxkoe.s[15]++;tick(args);cov_2ps84vxkoe.s[16]++;isLeading=false;cov_2ps84vxkoe.s[17]++;return;}else{cov_2ps84vxkoe.b[0][1]++;}cov_2ps84vxkoe.s[18]++;stamp=tricks.timestamp();cov_2ps84vxkoe.s[19]++;base=(cov_2ps84vxkoe.b[1][0]++,base)||(cov_2ps84vxkoe.b[1][1]++,stamp);// pass array directly because `debounce()`, `tick()` are already use
	// `apply()` method to invoke developer's `fn` handler.
	//
	// also, this `debounced` line invoked every time for implements
	// `trailing` features.
	cov_2ps84vxkoe.s[20]++;debounced(args);cov_2ps84vxkoe.s[21]++;if(stamp-base>=interval){cov_2ps84vxkoe.b[2][0]++;cov_2ps84vxkoe.s[22]++;tick(args);}else{cov_2ps84vxkoe.b[2][1]++;}}function reset(){cov_2ps84vxkoe.f[7]++;cov_2ps84vxkoe.s[23]++;// eslint-disable-line require-jsdoc
	isLeading=true;cov_2ps84vxkoe.s[24]++;base=null;}cov_2ps84vxkoe.s[25]++;throttled.reset=reset;cov_2ps84vxkoe.s[26]++;return throttled;}cov_2ps84vxkoe.s[27]++;tricks.timestamp=timestamp;cov_2ps84vxkoe.s[28]++;tricks.debounce=debounce;cov_2ps84vxkoe.s[29]++;tricks.throttle=throttle;cov_2ps84vxkoe.s[30]++;module.exports=tricks;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/**
	 * @fileoverview This module detects the kind of well-known browser and version.
	 * @author NHN Ent.
	 *         FE Development Lab <dl_javascript@nhnent.com>
	 */'use strict';/**
	 * This object has an information that indicate the kind of browser.<br>
	 * The list below is a detectable browser list.
	 *  - ie8 ~ ie11
	 *  - chrome
	 *  - firefox
	 *  - safari
	 *  - edge
	 * @memberof tui.util
	 * @example
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * util.browser.chrome === true; // chrome
	 * util.browser.firefox === true; // firefox
	 * util.browser.safari === true; // safari
	 * util.browser.msie === true; // IE
	 * util.browser.edge === true; // edge
	 * util.browser.others === true; // other browser
	 * util.browser.version; // browser version
	 */var cov_12ggi16mdp=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/browser.js',hash='cf2150cfce5021236b0fb97dafb80d95f5290e83',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/browser.js',statementMap:{'0':{start:{line:32,column:14},end:{line:40,column:1}},'1':{start:{line:42,column:10},end:{line:42,column:26}},'2':{start:{line:43,column:14},end:{line:43,column:45}},'3':{start:{line:44,column:16},end:{line:44,column:29}},'4':{start:{line:46,column:10},end:{line:46,column:33}},'5':{start:{line:47,column:12},end:{line:47,column:30}},'6':{start:{line:48,column:12},end:{line:48,column:27}},'7':{start:{line:49,column:19},end:{line:53,column:1}},'8':{start:{line:57,column:15},end:{line:95,column:1}},'9':{start:{line:59,column:30},end:{line:59,column:50}},'10':{start:{line:61,column:8},end:{line:66,column:9}},'11':{start:{line:62,column:12},end:{line:62,column:32}},'12':{start:{line:63,column:12},end:{line:63,column:61}},'13':{start:{line:65,column:12},end:{line:65,column:34}},'14':{start:{line:69,column:23},end:{line:69,column:28}},'15':{start:{line:71,column:8},end:{line:90,column:9}},'16':{start:{line:72,column:12},end:{line:72,column:32}},'17':{start:{line:73,column:12},end:{line:73,column:33}},'18':{start:{line:74,column:12},end:{line:74,column:28}},'19':{start:{line:75,column:15},end:{line:90,column:9}},'20':{start:{line:76,column:12},end:{line:76,column:32}},'21':{start:{line:77,column:12},end:{line:77,column:56}},'22':{start:{line:78,column:12},end:{line:78,column:28}},'23':{start:{line:80,column:12},end:{line:89,column:13}},'24':{start:{line:81,column:16},end:{line:88,column:17}},'25':{start:{line:82,column:20},end:{line:82,column:61}},'26':{start:{line:83,column:20},end:{line:87,column:21}},'27':{start:{line:84,column:24},end:{line:84,column:55}},'28':{start:{line:85,column:24},end:{line:85,column:66}},'29':{start:{line:86,column:24},end:{line:86,column:30}},'30':{start:{line:91,column:8},end:{line:93,column:9}},'31':{start:{line:92,column:12},end:{line:92,column:34}},'32':{start:{line:97,column:9},end:{line:97,column:26}},'33':{start:{line:99,column:0},end:{line:101,column:1}},'34':{start:{line:100,column:4},end:{line:100,column:24}},'35':{start:{line:103,column:0},end:{line:103,column:25}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:58,column:33},end:{line:58,column:34}},loc:{start:{line:58,column:44},end:{line:67,column:5}},line:58},'1':{name:'(anonymous_1)',decl:{start:{line:68,column:14},end:{line:68,column:15}},loc:{start:{line:68,column:25},end:{line:94,column:5}},line:68}},branchMap:{'0':{loc:{start:{line:61,column:8},end:{line:66,column:9}},type:'if',locations:[{start:{line:61,column:8},end:{line:66,column:9}},{start:{line:61,column:8},end:{line:66,column:9}}],line:61},'1':{loc:{start:{line:71,column:8},end:{line:90,column:9}},type:'if',locations:[{start:{line:71,column:8},end:{line:90,column:9}},{start:{line:71,column:8},end:{line:90,column:9}}],line:71},'2':{loc:{start:{line:75,column:15},end:{line:90,column:9}},type:'if',locations:[{start:{line:75,column:15},end:{line:90,column:9}},{start:{line:75,column:15},end:{line:90,column:9}}],line:75},'3':{loc:{start:{line:81,column:16},end:{line:88,column:17}},type:'if',locations:[{start:{line:81,column:16},end:{line:88,column:17}},{start:{line:81,column:16},end:{line:88,column:17}}],line:81},'4':{loc:{start:{line:83,column:20},end:{line:87,column:21}},type:'if',locations:[{start:{line:83,column:20},end:{line:87,column:21}},{start:{line:83,column:20},end:{line:87,column:21}}],line:83},'5':{loc:{start:{line:83,column:24},end:{line:83,column:45}},type:'binary-expr',locations:[{start:{line:83,column:24},end:{line:83,column:27}},{start:{line:83,column:31},end:{line:83,column:45}}],line:83},'6':{loc:{start:{line:85,column:53},end:{line:85,column:64}},type:'binary-expr',locations:[{start:{line:85,column:53},end:{line:85,column:59}},{start:{line:85,column:63},end:{line:85,column:64}}],line:85},'7':{loc:{start:{line:91,column:8},end:{line:93,column:9}},type:'if',locations:[{start:{line:91,column:8},end:{line:93,column:9}},{start:{line:91,column:8},end:{line:93,column:9}}],line:91},'8':{loc:{start:{line:99,column:0},end:{line:101,column:1}},type:'if',locations:[{start:{line:99,column:0},end:{line:101,column:1}},{start:{line:99,column:0},end:{line:101,column:1}}],line:99}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0,'34':0,'35':0},f:{'0':0,'1':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0],'5':[0,0],'6':[0,0],'7':[0,0],'8':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var browser=(cov_12ggi16mdp.s[0]++,{chrome:false,firefox:false,safari:false,msie:false,edge:false,others:false,version:0});var nav=(cov_12ggi16mdp.s[1]++,window.navigator);var appName=(cov_12ggi16mdp.s[2]++,nav.appName.replace(/\s/g,'_'));var userAgent=(cov_12ggi16mdp.s[3]++,nav.userAgent);var rIE=(cov_12ggi16mdp.s[4]++,/MSIE\s([0-9]+[.0-9]*)/);var rIE11=(cov_12ggi16mdp.s[5]++,/Trident.*rv:11\./);var rEdge=(cov_12ggi16mdp.s[6]++,/Edge\/(\d+)\./);var versionRegex=(cov_12ggi16mdp.s[7]++,{firefox:/Firefox\/(\d+)\./,chrome:/Chrome\/(\d+)\./,safari:/Version\/([\d.]+).*Safari\/(\d+)/});var key,tmp;var detector=(cov_12ggi16mdp.s[8]++,{Microsoft_Internet_Explorer:function(){cov_12ggi16mdp.f[0]++;// eslint-disable-line camelcase
	var detectedVersion=(cov_12ggi16mdp.s[9]++,userAgent.match(rIE));cov_12ggi16mdp.s[10]++;if(detectedVersion){cov_12ggi16mdp.b[0][0]++;cov_12ggi16mdp.s[11]++;// ie8 ~ ie10
	browser.msie=true;cov_12ggi16mdp.s[12]++;browser.version=parseFloat(detectedVersion[1]);}else{cov_12ggi16mdp.b[0][1]++;cov_12ggi16mdp.s[13]++;// no version information
	browser.others=true;}},Netscape:function(){cov_12ggi16mdp.f[1]++;// eslint-disable-line complexity
	var detected=(cov_12ggi16mdp.s[14]++,false);cov_12ggi16mdp.s[15]++;if(rIE11.exec(userAgent)){cov_12ggi16mdp.b[1][0]++;cov_12ggi16mdp.s[16]++;browser.msie=true;cov_12ggi16mdp.s[17]++;browser.version=11;cov_12ggi16mdp.s[18]++;detected=true;}else{cov_12ggi16mdp.b[1][1]++;cov_12ggi16mdp.s[19]++;if(rEdge.exec(userAgent)){cov_12ggi16mdp.b[2][0]++;cov_12ggi16mdp.s[20]++;browser.edge=true;cov_12ggi16mdp.s[21]++;browser.version=userAgent.match(rEdge)[1];cov_12ggi16mdp.s[22]++;detected=true;}else{cov_12ggi16mdp.b[2][1]++;cov_12ggi16mdp.s[23]++;for(key in versionRegex){cov_12ggi16mdp.s[24]++;if(versionRegex.hasOwnProperty(key)){cov_12ggi16mdp.b[3][0]++;cov_12ggi16mdp.s[25]++;tmp=userAgent.match(versionRegex[key]);cov_12ggi16mdp.s[26]++;if((cov_12ggi16mdp.b[5][0]++,tmp)&&(cov_12ggi16mdp.b[5][1]++,tmp.length>1)){cov_12ggi16mdp.b[4][0]++;cov_12ggi16mdp.s[27]++;// eslint-disable-line max-depth
	browser[key]=detected=true;cov_12ggi16mdp.s[28]++;browser.version=parseFloat((cov_12ggi16mdp.b[6][0]++,tmp[1])||(cov_12ggi16mdp.b[6][1]++,0));cov_12ggi16mdp.s[29]++;break;}else{cov_12ggi16mdp.b[4][1]++;}}else{cov_12ggi16mdp.b[3][1]++;}}}}cov_12ggi16mdp.s[30]++;if(!detected){cov_12ggi16mdp.b[7][0]++;cov_12ggi16mdp.s[31]++;browser.others=true;}else{cov_12ggi16mdp.b[7][1]++;}}});var fn=(cov_12ggi16mdp.s[32]++,detector[appName]);cov_12ggi16mdp.s[33]++;if(fn){cov_12ggi16mdp.b[8][0]++;cov_12ggi16mdp.s[34]++;detector[appName]();}else{cov_12ggi16mdp.b[8][1]++;}cov_12ggi16mdp.s[35]++;module.exports=browser;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview This module has some methods for handling popup-window
	 * @author NHN Ent.
	 *         FE Development Lab <dl_javascript@nhnent.com>
	 */'use strict';var cov_2df6j28ox2=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/window.js',hash='23ad42195cd4429a98bb46a041c81d167b9c1610',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/window.js',statementMap:{'0':{start:{line:9,column:17},end:{line:9,column:40}},'1':{start:{line:10,column:11},end:{line:10,column:28}},'2':{start:{line:11,column:11},end:{line:11,column:28}},'3':{start:{line:12,column:14},end:{line:12,column:34}},'4':{start:{line:13,column:13},end:{line:13,column:32}},'5':{start:{line:15,column:14},end:{line:15,column:15}},'6':{start:{line:36,column:4},end:{line:36,column:26}},'7':{start:{line:43,column:4},end:{line:43,column:35}},'8':{start:{line:49,column:4},end:{line:49,column:28}},'9':{start:{line:61,column:0},end:{line:70,column:2}},'10':{start:{line:63,column:4},end:{line:67,column:5}},'11':{start:{line:64,column:8},end:{line:64,column:39}},'12':{start:{line:66,column:8},end:{line:66,column:34}},'13':{start:{line:69,column:4},end:{line:69,column:18}},'14':{start:{line:105,column:0},end:{line:178,column:2}},'15':{start:{line:108,column:4},end:{line:115,column:22}},'16':{start:{line:117,column:4},end:{line:117,column:50}},'17':{start:{line:119,column:4},end:{line:119,column:69}},'18':{start:{line:121,column:4},end:{line:122,column:51}},'19':{start:{line:124,column:4},end:{line:126,column:5}},'20':{start:{line:125,column:8},end:{line:125,column:56}},'21':{start:{line:128,column:4},end:{line:128,column:17}},'22':{start:{line:136,column:4},end:{line:145,column:5}},'23':{start:{line:137,column:8},end:{line:144,column:9}},'24':{start:{line:138,column:12},end:{line:138,column:89}},'25':{start:{line:139,column:15},end:{line:144,column:9}},'26':{start:{line:140,column:12},end:{line:143,column:13}},'27':{start:{line:141,column:16},end:{line:141,column:101}},'28':{start:{line:142,column:16},end:{line:142,column:36}},'29':{start:{line:147,column:4},end:{line:147,column:48}},'30':{start:{line:149,column:4},end:{line:160,column:5}},'31':{start:{line:150,column:8},end:{line:151,column:60}},'32':{start:{line:152,column:11},end:{line:160,column:5}},'33':{start:{line:153,column:8},end:{line:154,column:60}},'34':{start:{line:156,column:8},end:{line:158,column:9}},'35':{start:{line:157,column:12},end:{line:157,column:40}},'36':{start:{line:159,column:8},end:{line:159,column:22}},'37':{start:{line:162,column:4},end:{line:162,column:75}},'38':{start:{line:164,column:4},end:{line:166,column:5}},'39':{start:{line:165,column:8},end:{line:165,column:62}},'40':{start:{line:168,column:4},end:{line:175,column:5}},'41':{start:{line:169,column:8},end:{line:171,column:9}},'42':{start:{line:170,column:12},end:{line:170,column:33}},'43':{start:{line:172,column:8},end:{line:174,column:9}},'44':{start:{line:173,column:12},end:{line:173,column:60}},'45':{start:{line:177,column:4},end:{line:177,column:58}},'46':{start:{line:185,column:0},end:{line:197,column:2}},'47':{start:{line:186,column:17},end:{line:186,column:32}},'48':{start:{line:187,column:4},end:{line:187,column:82}},'49':{start:{line:189,column:4},end:{line:191,column:5}},'50':{start:{line:190,column:8},end:{line:190,column:31}},'51':{start:{line:193,column:4},end:{line:196,column:5}},'52':{start:{line:194,column:8},end:{line:194,column:45}},'53':{start:{line:195,column:8},end:{line:195,column:23}},'54':{start:{line:203,column:0},end:{line:211,column:2}},'55':{start:{line:204,column:17},end:{line:204,column:47}},'56':{start:{line:206,column:4},end:{line:210,column:13}},'57':{start:{line:207,column:8},end:{line:209,column:9}},'58':{start:{line:208,column:12},end:{line:208,column:37}},'59':{start:{line:217,column:0},end:{line:219,column:2}},'60':{start:{line:218,column:4},end:{line:218,column:41}},'61':{start:{line:226,column:0},end:{line:237,column:2}},'62':{start:{line:227,column:16},end:{line:227,column:18}},'63':{start:{line:230,column:4},end:{line:230,column:46}},'64':{start:{line:231,column:4},end:{line:234,column:7}},'65':{start:{line:232,column:8},end:{line:232,column:31}},'66':{start:{line:233,column:8},end:{line:233,column:73}},'67':{start:{line:236,column:4},end:{line:236,column:17}},'68':{start:{line:248,column:0},end:{line:270,column:2}},'69':{start:{line:249,column:15},end:{line:249,column:45}},'70':{start:{line:252,column:4},end:{line:252,column:43}},'71':{start:{line:254,column:4},end:{line:254,column:35}},'72':{start:{line:255,column:4},end:{line:255,column:31}},'73':{start:{line:256,column:4},end:{line:256,column:31}},'74':{start:{line:257,column:4},end:{line:257,column:32}},'75':{start:{line:259,column:4},end:{line:265,column:7}},'76':{start:{line:260,column:8},end:{line:260,column:48}},'77':{start:{line:261,column:8},end:{line:261,column:25}},'78':{start:{line:262,column:8},end:{line:262,column:30}},'79':{start:{line:263,column:8},end:{line:263,column:28}},'80':{start:{line:264,column:8},end:{line:264,column:32}},'81':{start:{line:267,column:4},end:{line:267,column:32}},'82':{start:{line:269,column:4},end:{line:269,column:16}},'83':{start:{line:282,column:0},end:{line:290,column:2}},'84':{start:{line:283,column:16},end:{line:283,column:18}},'85':{start:{line:285,column:4},end:{line:287,column:7}},'86':{start:{line:286,column:8},end:{line:286,column:78}},'87':{start:{line:289,column:4},end:{line:289,column:27}},'88':{start:{line:303,column:0},end:{line:316,column:2}},'89':{start:{line:306,column:4},end:{line:313,column:5}},'90':{start:{line:307,column:8},end:{line:307,column:70}},'91':{start:{line:308,column:8},end:{line:310,column:16}},'92':{start:{line:309,column:12},end:{line:309,column:39}},'93':{start:{line:312,column:8},end:{line:312,column:55}},'94':{start:{line:315,column:4},end:{line:315,column:17}},'95':{start:{line:318,column:0},end:{line:318,column:29}}},fnMap:{'0':{name:'Popup',decl:{start:{line:31,column:9},end:{line:31,column:14}},loc:{start:{line:31,column:17},end:{line:50,column:1}},line:31},'1':{name:'(anonymous_1)',decl:{start:{line:61,column:31},end:{line:61,column:32}},loc:{start:{line:61,column:45},end:{line:70,column:1}},line:61},'2':{name:'(anonymous_2)',decl:{start:{line:105,column:28},end:{line:105,column:29}},loc:{start:{line:105,column:51},end:{line:178,column:1}},line:105},'3':{name:'(anonymous_3)',decl:{start:{line:185,column:24},end:{line:185,column:25}},loc:{start:{line:185,column:58},end:{line:197,column:1}},line:185},'4':{name:'(anonymous_4)',decl:{start:{line:203,column:32},end:{line:203,column:33}},loc:{start:{line:203,column:58},end:{line:211,column:1}},line:203},'5':{name:'(anonymous_5)',decl:{start:{line:206,column:54},end:{line:206,column:55}},loc:{start:{line:206,column:75},end:{line:210,column:5}},line:206},'6':{name:'(anonymous_6)',decl:{start:{line:217,column:24},end:{line:217,column:25}},loc:{start:{line:217,column:44},end:{line:219,column:1}},line:217},'7':{name:'(anonymous_7)',decl:{start:{line:226,column:29},end:{line:226,column:30}},loc:{start:{line:226,column:40},end:{line:237,column:1}},line:226},'8':{name:'(anonymous_8)',decl:{start:{line:231,column:47},end:{line:231,column:48}},loc:{start:{line:231,column:62},end:{line:234,column:5}},line:231},'9':{name:'(anonymous_9)',decl:{start:{line:248,column:29},end:{line:248,column:30}},loc:{start:{line:248,column:79},end:{line:270,column:1}},line:248},'10':{name:'(anonymous_10)',decl:{start:{line:259,column:42},end:{line:259,column:43}},loc:{start:{line:259,column:63},end:{line:265,column:5}},line:259},'11':{name:'(anonymous_11)',decl:{start:{line:282,column:32},end:{line:282,column:33}},loc:{start:{line:282,column:46},end:{line:290,column:1}},line:282},'12':{name:'(anonymous_12)',decl:{start:{line:285,column:41},end:{line:285,column:42}},loc:{start:{line:285,column:62},end:{line:287,column:5}},line:285},'13':{name:'(anonymous_13)',decl:{start:{line:303,column:24},end:{line:303,column:25}},loc:{start:{line:303,column:84},end:{line:316,column:1}},line:303},'14':{name:'(anonymous_14)',decl:{start:{line:308,column:19},end:{line:308,column:20}},loc:{start:{line:308,column:30},end:{line:310,column:9}},line:308}},branchMap:{'0':{loc:{start:{line:63,column:4},end:{line:67,column:5}},type:'if',locations:[{start:{line:63,column:4},end:{line:67,column:5}},{start:{line:63,column:4},end:{line:67,column:5}}],line:63},'1':{loc:{start:{line:115,column:7},end:{line:115,column:20}},type:'binary-expr',locations:[{start:{line:115,column:7},end:{line:115,column:14}},{start:{line:115,column:18},end:{line:115,column:20}}],line:115},'2':{loc:{start:{line:119,column:25},end:{line:119,column:68}},type:'binary-expr',locations:[{start:{line:119,column:25},end:{line:119,column:46}},{start:{line:119,column:50},end:{line:119,column:68}}],line:119},'3':{loc:{start:{line:121,column:22},end:{line:122,column:50}},type:'binary-expr',locations:[{start:{line:121,column:22},end:{line:121,column:47}},{start:{line:121,column:51},end:{line:121,column:64}},{start:{line:122,column:12},end:{line:122,column:24}},{start:{line:122,column:28},end:{line:122,column:50}}],line:121},'4':{loc:{start:{line:124,column:4},end:{line:126,column:5}},type:'if',locations:[{start:{line:124,column:4},end:{line:126,column:5}},{start:{line:124,column:4},end:{line:126,column:5}}],line:124},'5':{loc:{start:{line:136,column:4},end:{line:145,column:5}},type:'if',locations:[{start:{line:136,column:4},end:{line:145,column:5}},{start:{line:136,column:4},end:{line:145,column:5}}],line:136},'6':{loc:{start:{line:137,column:8},end:{line:144,column:9}},type:'if',locations:[{start:{line:137,column:8},end:{line:144,column:9}},{start:{line:137,column:8},end:{line:144,column:9}}],line:137},'7':{loc:{start:{line:138,column:25},end:{line:138,column:51}},type:'cond-expr',locations:[{start:{line:138,column:42},end:{line:138,column:45}},{start:{line:138,column:48},end:{line:138,column:51}}],line:138},'8':{loc:{start:{line:139,column:15},end:{line:144,column:9}},type:'if',locations:[{start:{line:139,column:15},end:{line:144,column:9}},{start:{line:139,column:15},end:{line:144,column:9}}],line:139},'9':{loc:{start:{line:140,column:12},end:{line:143,column:13}},type:'if',locations:[{start:{line:140,column:12},end:{line:143,column:13}},{start:{line:140,column:12},end:{line:143,column:13}}],line:140},'10':{loc:{start:{line:149,column:4},end:{line:160,column:5}},type:'if',locations:[{start:{line:149,column:4},end:{line:160,column:5}},{start:{line:149,column:4},end:{line:160,column:5}}],line:149},'11':{loc:{start:{line:152,column:11},end:{line:160,column:5}},type:'if',locations:[{start:{line:152,column:11},end:{line:160,column:5}},{start:{line:152,column:11},end:{line:160,column:5}}],line:152},'12':{loc:{start:{line:156,column:8},end:{line:158,column:9}},type:'if',locations:[{start:{line:156,column:8},end:{line:158,column:9}},{start:{line:156,column:8},end:{line:158,column:9}}],line:156},'13':{loc:{start:{line:164,column:4},end:{line:166,column:5}},type:'if',locations:[{start:{line:164,column:4},end:{line:166,column:5}},{start:{line:164,column:4},end:{line:166,column:5}}],line:164},'14':{loc:{start:{line:164,column:8},end:{line:164,column:64}},type:'binary-expr',locations:[{start:{line:164,column:8},end:{line:164,column:14}},{start:{line:164,column:18},end:{line:164,column:30}},{start:{line:164,column:34},end:{line:164,column:64}}],line:164},'15':{loc:{start:{line:168,column:4},end:{line:175,column:5}},type:'if',locations:[{start:{line:168,column:4},end:{line:175,column:5}},{start:{line:168,column:4},end:{line:175,column:5}}],line:168},'16':{loc:{start:{line:168,column:8},end:{line:168,column:70}},type:'binary-expr',locations:[{start:{line:168,column:8},end:{line:168,column:21}},{start:{line:168,column:25},end:{line:168,column:50}},{start:{line:168,column:54},end:{line:168,column:70}}],line:168},'17':{loc:{start:{line:169,column:8},end:{line:171,column:9}},type:'if',locations:[{start:{line:169,column:8},end:{line:171,column:9}},{start:{line:169,column:8},end:{line:171,column:9}}],line:169},'18':{loc:{start:{line:172,column:8},end:{line:174,column:9}},type:'if',locations:[{start:{line:172,column:8},end:{line:174,column:9}},{start:{line:172,column:8},end:{line:174,column:9}}],line:172},'19':{loc:{start:{line:186,column:17},end:{line:186,column:32}},type:'binary-expr',locations:[{start:{line:186,column:17},end:{line:186,column:22}},{start:{line:186,column:26},end:{line:186,column:32}}],line:186},'20':{loc:{start:{line:187,column:23},end:{line:187,column:81}},type:'cond-expr',locations:[{start:{line:187,column:57},end:{line:187,column:73}},{start:{line:187,column:76},end:{line:187,column:81}}],line:187},'21':{loc:{start:{line:189,column:4},end:{line:191,column:5}},type:'if',locations:[{start:{line:189,column:4},end:{line:191,column:5}},{start:{line:189,column:4},end:{line:191,column:5}}],line:189},'22':{loc:{start:{line:193,column:4},end:{line:196,column:5}},type:'if',locations:[{start:{line:193,column:4},end:{line:196,column:5}},{start:{line:193,column:4},end:{line:196,column:5}}],line:193},'23':{loc:{start:{line:207,column:8},end:{line:209,column:9}},type:'if',locations:[{start:{line:207,column:8},end:{line:209,column:9}},{start:{line:207,column:8},end:{line:209,column:9}}],line:207},'24':{loc:{start:{line:207,column:12},end:{line:207,column:65}},type:'binary-expr',locations:[{start:{line:207,column:13},end:{line:207,column:19}},{start:{line:207,column:23},end:{line:207,column:53}},{start:{line:207,column:58},end:{line:207,column:65}}],line:207},'25':{loc:{start:{line:252,column:16},end:{line:252,column:42}},type:'binary-expr',locations:[{start:{line:252,column:16},end:{line:252,column:25}},{start:{line:252,column:29},end:{line:252,column:42}}],line:252},'26':{loc:{start:{line:254,column:18},end:{line:254,column:34}},type:'binary-expr',locations:[{start:{line:254,column:18},end:{line:254,column:24}},{start:{line:254,column:28},end:{line:254,column:34}}],line:254},'27':{loc:{start:{line:255,column:18},end:{line:255,column:30}},type:'binary-expr',locations:[{start:{line:255,column:18},end:{line:255,column:24}},{start:{line:255,column:28},end:{line:255,column:30}}],line:255},'28':{loc:{start:{line:256,column:18},end:{line:256,column:30}},type:'binary-expr',locations:[{start:{line:256,column:18},end:{line:256,column:24}},{start:{line:256,column:28},end:{line:256,column:30}}],line:256},'29':{loc:{start:{line:306,column:4},end:{line:313,column:5}},type:'if',locations:[{start:{line:306,column:4},end:{line:313,column:5}},{start:{line:306,column:4},end:{line:313,column:5}}],line:306}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0,'34':0,'35':0,'36':0,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':0,'45':0,'46':0,'47':0,'48':0,'49':0,'50':0,'51':0,'52':0,'53':0,'54':0,'55':0,'56':0,'57':0,'58':0,'59':0,'60':0,'61':0,'62':0,'63':0,'64':0,'65':0,'66':0,'67':0,'68':0,'69':0,'70':0,'71':0,'72':0,'73':0,'74':0,'75':0,'76':0,'77':0,'78':0,'79':0,'80':0,'81':0,'82':0,'83':0,'84':0,'85':0,'86':0,'87':0,'88':0,'89':0,'90':0,'91':0,'92':0,'93':0,'94':0,'95':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0,0,0],'4':[0,0],'5':[0,0],'6':[0,0],'7':[0,0],'8':[0,0],'9':[0,0],'10':[0,0],'11':[0,0],'12':[0,0],'13':[0,0],'14':[0,0,0],'15':[0,0],'16':[0,0,0],'17':[0,0],'18':[0,0],'19':[0,0],'20':[0,0],'21':[0,0],'22':[0,0],'23':[0,0],'24':[0,0,0],'25':[0,0],'26':[0,0],'27':[0,0],'28':[0,0],'29':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var collection=(cov_2df6j28ox2.s[0]++,__webpack_require__(4));var type=(cov_2df6j28ox2.s[1]++,__webpack_require__(2));var func=(cov_2df6j28ox2.s[2]++,__webpack_require__(5));var browser=(cov_2df6j28ox2.s[3]++,__webpack_require__(9));var object=(cov_2df6j28ox2.s[4]++,__webpack_require__(1));var popupId=(cov_2df6j28ox2.s[5]++,0);/**
	 * Popup management class
	 * @constructor
	 * @memberof tui.util
	 * @example
	 * // node, commonjs
	 * var popup = require('tui-code-snippet').popup;
	 * @example
	 * // distribution file, script
	 * <script src='path-to/tui-code-snippt.js'></script>
	 * <script>
	 * var popup = tui.util.popup;
	 * <script>
	 */function Popup(){cov_2df6j28ox2.f[0]++;cov_2df6j28ox2.s[6]++;/**
	     * Caching the window-contexts of opened popups
	     * @type {Object}
	     */this.openedPopup={};/**
	     * In IE7, an error occurs when the closeWithParent property attaches to window object.<br>
	     * So, It is for saving the value of closeWithParent instead of attaching to window object.
	     * @type {Object}
	     */cov_2df6j28ox2.s[7]++;this.closeWithParentPopup={};/**
	     * Post data bridge for IE11 popup
	     * @type {string}
	     */cov_2df6j28ox2.s[8]++;this.postBridgeUrl='';}/**********
	 * public methods
	 **********//**
	 * Returns a popup-list administered by current window.
	 * @param {string} [key] The key of popup.
	 * @returns {Object} popup window list object
	 */cov_2df6j28ox2.s[9]++;Popup.prototype.getPopupList=function(key){cov_2df6j28ox2.f[1]++;var target;cov_2df6j28ox2.s[10]++;if(type.isExisty(key)){cov_2df6j28ox2.b[0][0]++;cov_2df6j28ox2.s[11]++;target=this.openedPopup[key];}else{cov_2df6j28ox2.b[0][1]++;cov_2df6j28ox2.s[12]++;target=this.openedPopup;}cov_2df6j28ox2.s[13]++;return target;};/**
	 * Open popup
	 * Caution:
	 *  In IE11, when transfer data to popup by POST, must set the postBridgeUrl.
	 *
	 * @param {string} url - popup url
	 * @param {Object} options - popup options
	 *     @param {string} [options.popupName] - Key of popup window.<br>
	 *      If the key is set, when you try to open by this key, the popup of this key is focused.<br>
	 *      Or else a new popup window having this key is opened.
	 *
	 *     @param {string} [options.popupOptionStr=""] - Option string of popup window<br>
	 *      It is same with the third parameter of window.open() method.<br>
	 *      See {@link http://www.w3schools.com/jsref/met_win_open.asp}
	 *
	 *     @param {boolean} [options.closeWithParent=true] - Is closed when parent window closed?
	 *
	 *     @param {boolean} [options.useReload=false] - This property indicates whether reload the popup or not.<br>
	 *      If true, the popup will be reloaded when you try to re-open the popup that has been opened.<br>
	 *      When transmit the POST-data, some browsers alert a message for confirming whether retransmit or not.
	 *
	 *     @param {string} [options.postBridgeUrl='']
	 *      Use this url to avoid a certain bug occuring when transmitting POST data to the popup in IE11.<br>
	 *      This specific buggy situation is known to happen because IE11 tries to open the requested url<br>
	 *      not in a new popup window as intended, but in a new tab.<br>
	 *      See {@link http://wiki.nhnent.com/pages/viewpage.action?pageId=240562844}
	 *
	 *     @param {string} [options.method=get]
	 *     The method of transmission when the form-data is transmitted to popup-window.
	 *
	 *     @param {Object} [options.param=null]
	 *     Using as parameters for transmission when the form-data is transmitted to popup-window.
	 */cov_2df6j28ox2.s[14]++;Popup.prototype.openPopup=function(url,options){cov_2df6j28ox2.f[2]++;// eslint-disable-line complexity
	var popup,formElement,useIEPostBridge;cov_2df6j28ox2.s[15]++;options=object.extend({popupName:'popup_'+popupId+'_'+Number(new Date()),popupOptionStr:'',useReload:true,closeWithParent:true,method:'get',param:{}},(cov_2df6j28ox2.b[1][0]++,options)||(cov_2df6j28ox2.b[1][1]++,{}));cov_2df6j28ox2.s[16]++;options.method=options.method.toUpperCase();cov_2df6j28ox2.s[17]++;this.postBridgeUrl=(cov_2df6j28ox2.b[2][0]++,options.postBridgeUrl)||(cov_2df6j28ox2.b[2][1]++,this.postBridgeUrl);cov_2df6j28ox2.s[18]++;useIEPostBridge=(cov_2df6j28ox2.b[3][0]++,options.method==='POST')&&(cov_2df6j28ox2.b[3][1]++,options.param)&&(cov_2df6j28ox2.b[3][2]++,browser.msie)&&(cov_2df6j28ox2.b[3][3]++,browser.version===11);cov_2df6j28ox2.s[19]++;if(!type.isExisty(url)){cov_2df6j28ox2.b[4][0]++;cov_2df6j28ox2.s[20]++;throw new Error('Popup#open() need popup url.');}else{cov_2df6j28ox2.b[4][1]++;}cov_2df6j28ox2.s[21]++;popupId+=1;/*
	     * In form-data transmission
	     * 1. Create a form before opening a popup.
	     * 2. Transmit the form-data.
	     * 3. Remove the form after transmission.
	     */cov_2df6j28ox2.s[22]++;if(options.param){cov_2df6j28ox2.b[5][0]++;cov_2df6j28ox2.s[23]++;if(options.method==='GET'){cov_2df6j28ox2.b[6][0]++;cov_2df6j28ox2.s[24]++;url=url+(/\?/.test(url)?(cov_2df6j28ox2.b[7][0]++,'&'):(cov_2df6j28ox2.b[7][1]++,'?'))+this._parameterize(options.param);}else{cov_2df6j28ox2.b[6][1]++;cov_2df6j28ox2.s[25]++;if(options.method==='POST'){cov_2df6j28ox2.b[8][0]++;cov_2df6j28ox2.s[26]++;if(!useIEPostBridge){cov_2df6j28ox2.b[9][0]++;cov_2df6j28ox2.s[27]++;formElement=this.createForm(url,options.param,options.method,options.popupName);cov_2df6j28ox2.s[28]++;url='about:blank';}else{cov_2df6j28ox2.b[9][1]++;}}else{cov_2df6j28ox2.b[8][1]++;}}}else{cov_2df6j28ox2.b[5][1]++;}cov_2df6j28ox2.s[29]++;popup=this.openedPopup[options.popupName];cov_2df6j28ox2.s[30]++;if(!type.isExisty(popup)){cov_2df6j28ox2.b[10][0]++;cov_2df6j28ox2.s[31]++;this.openedPopup[options.popupName]=popup=this._open(useIEPostBridge,options.param,url,options.popupName,options.popupOptionStr);}else{cov_2df6j28ox2.b[10][1]++;cov_2df6j28ox2.s[32]++;if(popup.closed){cov_2df6j28ox2.b[11][0]++;cov_2df6j28ox2.s[33]++;this.openedPopup[options.popupName]=popup=this._open(useIEPostBridge,options.param,url,options.popupName,options.popupOptionStr);}else{cov_2df6j28ox2.b[11][1]++;cov_2df6j28ox2.s[34]++;if(options.useReload){cov_2df6j28ox2.b[12][0]++;cov_2df6j28ox2.s[35]++;popup.location.replace(url);}else{cov_2df6j28ox2.b[12][1]++;}cov_2df6j28ox2.s[36]++;popup.focus();}}cov_2df6j28ox2.s[37]++;this.closeWithParentPopup[options.popupName]=options.closeWithParent;cov_2df6j28ox2.s[38]++;if((cov_2df6j28ox2.b[14][0]++,!popup)||(cov_2df6j28ox2.b[14][1]++,popup.closed)||(cov_2df6j28ox2.b[14][2]++,type.isUndefined(popup.closed))){cov_2df6j28ox2.b[13][0]++;cov_2df6j28ox2.s[39]++;alert('please enable popup windows for this website');}else{cov_2df6j28ox2.b[13][1]++;}cov_2df6j28ox2.s[40]++;if((cov_2df6j28ox2.b[16][0]++,options.param)&&(cov_2df6j28ox2.b[16][1]++,options.method==='POST')&&(cov_2df6j28ox2.b[16][2]++,!useIEPostBridge)){cov_2df6j28ox2.b[15][0]++;cov_2df6j28ox2.s[41]++;if(popup){cov_2df6j28ox2.b[17][0]++;cov_2df6j28ox2.s[42]++;formElement.submit();}else{cov_2df6j28ox2.b[17][1]++;}cov_2df6j28ox2.s[43]++;if(formElement.parentNode){cov_2df6j28ox2.b[18][0]++;cov_2df6j28ox2.s[44]++;formElement.parentNode.removeChild(formElement);}else{cov_2df6j28ox2.b[18][1]++;}}else{cov_2df6j28ox2.b[15][1]++;}cov_2df6j28ox2.s[45]++;window.onunload=func.bind(this.closeAllPopup,this);};/**
	 * Close the popup
	 * @param {boolean} [skipBeforeUnload] - If true, the 'window.onunload' will be null and skip unload event.
	 * @param {Window} [popup] - Window-context of popup for closing. If omit this, current window-context will be closed.
	 */cov_2df6j28ox2.s[46]++;Popup.prototype.close=function(skipBeforeUnload,popup){cov_2df6j28ox2.f[3]++;var target=(cov_2df6j28ox2.s[47]++,(cov_2df6j28ox2.b[19][0]++,popup)||(cov_2df6j28ox2.b[19][1]++,window));cov_2df6j28ox2.s[48]++;skipBeforeUnload=type.isExisty(skipBeforeUnload)?(cov_2df6j28ox2.b[20][0]++,skipBeforeUnload):(cov_2df6j28ox2.b[20][1]++,false);cov_2df6j28ox2.s[49]++;if(skipBeforeUnload){cov_2df6j28ox2.b[21][0]++;cov_2df6j28ox2.s[50]++;window.onunload=null;}else{cov_2df6j28ox2.b[21][1]++;}cov_2df6j28ox2.s[51]++;if(!target.closed){cov_2df6j28ox2.b[22][0]++;cov_2df6j28ox2.s[52]++;target.opener=window.location.href;cov_2df6j28ox2.s[53]++;target.close();}else{cov_2df6j28ox2.b[22][1]++;}};/**
	 * Close all the popups in current window.
	 * @param {boolean} closeWithParent - If true, popups having the closeWithParentPopup property as true will be closed.
	 */cov_2df6j28ox2.s[54]++;Popup.prototype.closeAllPopup=function(closeWithParent){cov_2df6j28ox2.f[4]++;var hasArg=(cov_2df6j28ox2.s[55]++,type.isExisty(closeWithParent));cov_2df6j28ox2.s[56]++;collection.forEachOwnProperties(this.openedPopup,function(popup,key){cov_2df6j28ox2.f[5]++;cov_2df6j28ox2.s[57]++;if((cov_2df6j28ox2.b[24][0]++,hasArg)&&(cov_2df6j28ox2.b[24][1]++,this.closeWithParentPopup[key])||(cov_2df6j28ox2.b[24][2]++,!hasArg)){cov_2df6j28ox2.b[23][0]++;cov_2df6j28ox2.s[58]++;this.close(false,popup);}else{cov_2df6j28ox2.b[23][1]++;}},this);};/**
	 * Activate(or focus) the popup of the given name.
	 * @param {string} popupName - Name of popup for activation
	 */cov_2df6j28ox2.s[59]++;Popup.prototype.focus=function(popupName){cov_2df6j28ox2.f[6]++;cov_2df6j28ox2.s[60]++;this.getPopupList(popupName).focus();};/**
	 * Return an object made of parsing the query string.
	 * @returns {Object} An object having some information of the query string.
	 * @private
	 */cov_2df6j28ox2.s[61]++;Popup.prototype.parseQuery=function(){cov_2df6j28ox2.f[7]++;var param=(cov_2df6j28ox2.s[62]++,{});var search,pair;cov_2df6j28ox2.s[63]++;search=window.location.search.substr(1);cov_2df6j28ox2.s[64]++;collection.forEachArray(search.split('&'),function(part){cov_2df6j28ox2.f[8]++;cov_2df6j28ox2.s[65]++;pair=part.split('=');cov_2df6j28ox2.s[66]++;param[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1]);});cov_2df6j28ox2.s[67]++;return param;};/**
	 * Create a hidden form from the given arguments and return this form.
	 * @param {string} action - URL for form transmission
	 * @param {Object} [data] - Data for form transmission
	 * @param {string} [method] - Method of transmission
	 * @param {string} [target] - Target of transmission
	 * @param {HTMLElement} [container] - Container element of form.
	 * @returns {HTMLElement} Form element
	 */cov_2df6j28ox2.s[68]++;Popup.prototype.createForm=function(action,data,method,target,container){cov_2df6j28ox2.f[9]++;var form=(cov_2df6j28ox2.s[69]++,document.createElement('form')),input;cov_2df6j28ox2.s[70]++;container=(cov_2df6j28ox2.b[25][0]++,container)||(cov_2df6j28ox2.b[25][1]++,document.body);cov_2df6j28ox2.s[71]++;form.method=(cov_2df6j28ox2.b[26][0]++,method)||(cov_2df6j28ox2.b[26][1]++,'POST');cov_2df6j28ox2.s[72]++;form.action=(cov_2df6j28ox2.b[27][0]++,action)||(cov_2df6j28ox2.b[27][1]++,'');cov_2df6j28ox2.s[73]++;form.target=(cov_2df6j28ox2.b[28][0]++,target)||(cov_2df6j28ox2.b[28][1]++,'');cov_2df6j28ox2.s[74]++;form.style.display='none';cov_2df6j28ox2.s[75]++;collection.forEachOwnProperties(data,function(value,key){cov_2df6j28ox2.f[10]++;cov_2df6j28ox2.s[76]++;input=document.createElement('input');cov_2df6j28ox2.s[77]++;input.name=key;cov_2df6j28ox2.s[78]++;input.type='hidden';cov_2df6j28ox2.s[79]++;input.value=value;cov_2df6j28ox2.s[80]++;form.appendChild(input);});cov_2df6j28ox2.s[81]++;container.appendChild(form);cov_2df6j28ox2.s[82]++;return form;};/**********
	 * private methods
	 **********//**
	 * Return an query string made by parsing the given object
	 * @param {Object} obj - An object that has information for query string
	 * @returns {string} - Query string
	 * @private
	 */cov_2df6j28ox2.s[83]++;Popup.prototype._parameterize=function(obj){cov_2df6j28ox2.f[11]++;var query=(cov_2df6j28ox2.s[84]++,[]);cov_2df6j28ox2.s[85]++;collection.forEachOwnProperties(obj,function(value,key){cov_2df6j28ox2.f[12]++;cov_2df6j28ox2.s[86]++;query.push(encodeURIComponent(key)+'='+encodeURIComponent(value));});cov_2df6j28ox2.s[87]++;return query.join('&');};/**
	 * Open popup
	 * @param {boolean} useIEPostBridge - A switch option whether to use alternative
	 *                                  of tossing POST data to the popup window in IE11
	 * @param {Object} param - A data for tossing to popup
	 * @param {string} url - Popup url
	 * @param {string} popupName - Popup name
	 * @param {string} optionStr - Setting for popup, ex) 'width=640,height=320,scrollbars=yes'
	 * @returns {Window} Window context of popup
	 * @private
	 */cov_2df6j28ox2.s[88]++;Popup.prototype._open=function(useIEPostBridge,param,url,popupName,optionStr){cov_2df6j28ox2.f[13]++;var popup;cov_2df6j28ox2.s[89]++;if(useIEPostBridge){cov_2df6j28ox2.b[29][0]++;cov_2df6j28ox2.s[90]++;popup=window.open(this.postBridgeUrl,popupName,optionStr);cov_2df6j28ox2.s[91]++;setTimeout(function(){cov_2df6j28ox2.f[14]++;cov_2df6j28ox2.s[92]++;popup.redirect(url,param);},100);}else{cov_2df6j28ox2.b[29][1]++;cov_2df6j28ox2.s[93]++;popup=window.open(url,popupName,optionStr);}cov_2df6j28ox2.s[94]++;return popup;};cov_2df6j28ox2.s[95]++;module.exports=new Popup();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview This module has a function for date format.
	 * @author NHN Ent.
	 *         FE Development Lab <dl_javascript@nhnent.com>
	 */'use strict';var cov_1n7ghjgofb=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/formatDate.js',hash='0df6a62885598b5a5dbd3cb60a6168bf62b63f35',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/formatDate.js',statementMap:{'0':{start:{line:9,column:11},end:{line:9,column:28}},'1':{start:{line:10,column:13},end:{line:10,column:32}},'2':{start:{line:12,column:13},end:{line:12,column:105}},'3':{start:{line:13,column:16},end:{line:16,column:1}},'4':{start:{line:17,column:17},end:{line:17,column:68}},'5':{start:{line:18,column:17},end:{line:93,column:1}},'6':{start:{line:20,column:8},end:{line:20,column:34}},'7':{start:{line:23,column:20},end:{line:23,column:30}},'8':{start:{line:25,column:8},end:{line:25,column:58}},'9':{start:{line:28,column:8},end:{line:28,column:58}},'10':{start:{line:31,column:8},end:{line:31,column:45}},'11':{start:{line:34,column:8},end:{line:34,column:33}},'12':{start:{line:37,column:8},end:{line:37,column:34}},'13':{start:{line:40,column:25},end:{line:40,column:34}},'14':{start:{line:42,column:8},end:{line:42,column:73}},'15':{start:{line:45,column:8},end:{line:45,column:35}},'16':{start:{line:48,column:8},end:{line:48,column:39}},'17':{start:{line:51,column:8},end:{line:51,column:35}},'18':{start:{line:54,column:21},end:{line:54,column:25}},'19':{start:{line:55,column:19},end:{line:55,column:28}},'20':{start:{line:56,column:8},end:{line:58,column:9}},'21':{start:{line:57,column:12},end:{line:57,column:26}},'22':{start:{line:60,column:8},end:{line:60,column:67}},'23':{start:{line:63,column:8},end:{line:63,column:37}},'24':{start:{line:66,column:8},end:{line:66,column:29}},'25':{start:{line:69,column:8},end:{line:69,column:29}},'26':{start:{line:72,column:19},end:{line:72,column:28}},'27':{start:{line:74,column:8},end:{line:74,column:55}},'28':{start:{line:77,column:8},end:{line:77,column:35}},'29':{start:{line:80,column:8},end:{line:80,column:41}},'30':{start:{line:83,column:8},end:{line:83,column:34}},'31':{start:{line:86,column:8},end:{line:86,column:43}},'32':{start:{line:89,column:21},end:{line:89,column:32}},'33':{start:{line:91,column:8},end:{line:91,column:61}},'34':{start:{line:106,column:4},end:{line:106,column:24}},'35':{start:{line:107,column:4},end:{line:107,column:26}},'36':{start:{line:108,column:4},end:{line:108,column:24}},'37':{start:{line:110,column:4},end:{line:110,column:80}},'38':{start:{line:111,column:4},end:{line:111,column:47}},'39':{start:{line:113,column:4},end:{line:115,column:5}},'40':{start:{line:114,column:8},end:{line:114,column:21}},'41':{start:{line:117,column:4},end:{line:117,column:39}},'42':{start:{line:118,column:4},end:{line:122,column:5}},'43':{start:{line:119,column:8},end:{line:121,column:9}},'44':{start:{line:120,column:12},end:{line:120,column:32}},'45':{start:{line:124,column:4},end:{line:124,column:53}},'46':{start:{line:126,column:4},end:{line:126,column:19}},'47':{start:{line:183,column:13},end:{line:183,column:61}},'48':{start:{line:184,column:13},end:{line:184,column:61}},'49':{start:{line:187,column:4},end:{line:203,column:5}},'50':{start:{line:188,column:8},end:{line:194,column:10}},'51':{start:{line:196,column:8},end:{line:202,column:10}},'52':{start:{line:205,column:4},end:{line:207,column:5}},'53':{start:{line:206,column:8},end:{line:206,column:21}},'54':{start:{line:209,column:4},end:{line:209,column:24}},'55':{start:{line:210,column:4},end:{line:219,column:5}},'56':{start:{line:211,column:8},end:{line:211,column:47}},'57':{start:{line:212,column:8},end:{line:214,column:9}},'58':{start:{line:213,column:12},end:{line:213,column:29}},'59':{start:{line:215,column:8},end:{line:217,column:9}},'60':{start:{line:216,column:12},end:{line:216,column:28}},'61':{start:{line:218,column:8},end:{line:218,column:34}},'62':{start:{line:221,column:4},end:{line:227,column:7}},'63':{start:{line:222,column:8},end:{line:224,column:9}},'64':{start:{line:223,column:12},end:{line:223,column:41}},'65':{start:{line:226,column:8},end:{line:226,column:44}},'66':{start:{line:229,column:4},end:{line:229,column:21}},'67':{start:{line:232,column:0},end:{line:232,column:28}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:19,column:7},end:{line:19,column:8}},loc:{start:{line:19,column:22},end:{line:21,column:5}},line:19},'1':{name:'(anonymous_1)',decl:{start:{line:22,column:8},end:{line:22,column:9}},loc:{start:{line:22,column:23},end:{line:26,column:5}},line:22},'2':{name:'(anonymous_2)',decl:{start:{line:27,column:9},end:{line:27,column:10}},loc:{start:{line:27,column:24},end:{line:29,column:5}},line:27},'3':{name:'(anonymous_3)',decl:{start:{line:30,column:10},end:{line:30,column:11}},loc:{start:{line:30,column:25},end:{line:32,column:5}},line:30},'4':{name:'(anonymous_4)',decl:{start:{line:33,column:7},end:{line:33,column:8}},loc:{start:{line:33,column:22},end:{line:35,column:5}},line:33},'5':{name:'(anonymous_5)',decl:{start:{line:36,column:7},end:{line:36,column:8}},loc:{start:{line:36,column:22},end:{line:38,column:5}},line:36},'6':{name:'(anonymous_6)',decl:{start:{line:39,column:8},end:{line:39,column:9}},loc:{start:{line:39,column:23},end:{line:43,column:5}},line:39},'7':{name:'(anonymous_7)',decl:{start:{line:44,column:8},end:{line:44,column:9}},loc:{start:{line:44,column:23},end:{line:46,column:5}},line:44},'8':{name:'(anonymous_8)',decl:{start:{line:47,column:8},end:{line:47,column:9}},loc:{start:{line:47,column:23},end:{line:49,column:5}},line:47},'9':{name:'(anonymous_9)',decl:{start:{line:50,column:8},end:{line:50,column:9}},loc:{start:{line:50,column:23},end:{line:52,column:5}},line:50},'10':{name:'(anonymous_10)',decl:{start:{line:53,column:10},end:{line:53,column:11}},loc:{start:{line:53,column:25},end:{line:61,column:5}},line:53},'11':{name:'(anonymous_11)',decl:{start:{line:62,column:10},end:{line:62,column:11}},loc:{start:{line:62,column:25},end:{line:64,column:5}},line:62},'12':{name:'(anonymous_12)',decl:{start:{line:65,column:7},end:{line:65,column:8}},loc:{start:{line:65,column:22},end:{line:67,column:5}},line:65},'13':{name:'(anonymous_13)',decl:{start:{line:68,column:7},end:{line:68,column:8}},loc:{start:{line:68,column:22},end:{line:70,column:5}},line:68},'14':{name:'(anonymous_14)',decl:{start:{line:71,column:8},end:{line:71,column:9}},loc:{start:{line:71,column:23},end:{line:75,column:5}},line:71},'15':{name:'(anonymous_15)',decl:{start:{line:76,column:8},end:{line:76,column:9}},loc:{start:{line:76,column:23},end:{line:78,column:5}},line:76},'16':{name:'(anonymous_16)',decl:{start:{line:79,column:7},end:{line:79,column:8}},loc:{start:{line:79,column:22},end:{line:81,column:5}},line:79},'17':{name:'(anonymous_17)',decl:{start:{line:82,column:7},end:{line:82,column:8}},loc:{start:{line:82,column:22},end:{line:84,column:5}},line:82},'18':{name:'(anonymous_18)',decl:{start:{line:85,column:7},end:{line:85,column:8}},loc:{start:{line:85,column:22},end:{line:87,column:5}},line:85},'19':{name:'(anonymous_19)',decl:{start:{line:88,column:8},end:{line:88,column:9}},loc:{start:{line:88,column:23},end:{line:92,column:5}},line:88},'20':{name:'isValidDate',decl:{start:{line:103,column:9},end:{line:103,column:20}},loc:{start:{line:103,column:40},end:{line:127,column:1}},line:103},'21':{name:'formatDate',decl:{start:{line:182,column:9},end:{line:182,column:19}},loc:{start:{line:182,column:40},end:{line:230,column:1}},line:182},'22':{name:'(anonymous_22)',decl:{start:{line:221,column:37},end:{line:221,column:38}},loc:{start:{line:221,column:51},end:{line:227,column:5}},line:221}},branchMap:{'0':{loc:{start:{line:25,column:15},end:{line:25,column:57}},type:'cond-expr',locations:[{start:{line:25,column:38},end:{line:25,column:49}},{start:{line:25,column:52},end:{line:25,column:57}}],line:25},'1':{loc:{start:{line:42,column:15},end:{line:42,column:72}},type:'cond-expr',locations:[{start:{line:42,column:43},end:{line:42,column:59}},{start:{line:42,column:62},end:{line:42,column:72}}],line:42},'2':{loc:{start:{line:56,column:8},end:{line:58,column:9}},type:'if',locations:[{start:{line:56,column:8},end:{line:58,column:9}},{start:{line:56,column:8},end:{line:58,column:9}}],line:56},'3':{loc:{start:{line:56,column:12},end:{line:56,column:35}},type:'binary-expr',locations:[{start:{line:56,column:12},end:{line:56,column:21}},{start:{line:56,column:25},end:{line:56,column:35}}],line:56},'4':{loc:{start:{line:60,column:15},end:{line:60,column:66}},type:'cond-expr',locations:[{start:{line:60,column:38},end:{line:60,column:59}},{start:{line:60,column:62},end:{line:60,column:66}}],line:60},'5':{loc:{start:{line:74,column:15},end:{line:74,column:54}},type:'cond-expr',locations:[{start:{line:74,column:37},end:{line:74,column:47}},{start:{line:74,column:50},end:{line:74,column:54}}],line:74},'6':{loc:{start:{line:91,column:15},end:{line:91,column:60}},type:'cond-expr',locations:[{start:{line:91,column:39},end:{line:91,column:51}},{start:{line:91,column:54},end:{line:91,column:60}}],line:91},'7':{loc:{start:{line:110,column:18},end:{line:110,column:79}},type:'binary-expr',locations:[{start:{line:110,column:19},end:{line:110,column:28}},{start:{line:110,column:32},end:{line:110,column:42}},{start:{line:110,column:49},end:{line:110,column:60}},{start:{line:110,column:66},end:{line:110,column:77}}],line:110},'8':{loc:{start:{line:111,column:19},end:{line:111,column:46}},type:'binary-expr',locations:[{start:{line:111,column:20},end:{line:111,column:29}},{start:{line:111,column:35},end:{line:111,column:45}}],line:111},'9':{loc:{start:{line:113,column:4},end:{line:115,column:5}},type:'if',locations:[{start:{line:113,column:4},end:{line:115,column:5}},{start:{line:113,column:4},end:{line:115,column:5}}],line:113},'10':{loc:{start:{line:113,column:8},end:{line:113,column:37}},type:'binary-expr',locations:[{start:{line:113,column:8},end:{line:113,column:20}},{start:{line:113,column:24},end:{line:113,column:37}}],line:113},'11':{loc:{start:{line:118,column:4},end:{line:122,column:5}},type:'if',locations:[{start:{line:118,column:4},end:{line:122,column:5}},{start:{line:118,column:4},end:{line:122,column:5}}],line:118},'12':{loc:{start:{line:118,column:8},end:{line:118,column:37}},type:'binary-expr',locations:[{start:{line:118,column:8},end:{line:118,column:19}},{start:{line:118,column:23},end:{line:118,column:37}}],line:118},'13':{loc:{start:{line:119,column:8},end:{line:121,column:9}},type:'if',locations:[{start:{line:119,column:8},end:{line:121,column:9}},{start:{line:119,column:8},end:{line:121,column:9}}],line:119},'14':{loc:{start:{line:119,column:12},end:{line:119,column:48}},type:'binary-expr',locations:[{start:{line:119,column:12},end:{line:119,column:28}},{start:{line:119,column:32},end:{line:119,column:48}}],line:119},'15':{loc:{start:{line:124,column:14},end:{line:124,column:52}},type:'binary-expr',locations:[{start:{line:124,column:15},end:{line:124,column:23}},{start:{line:124,column:29},end:{line:124,column:51}}],line:124},'16':{loc:{start:{line:183,column:13},end:{line:183,column:61}},type:'binary-expr',locations:[{start:{line:183,column:13},end:{line:183,column:53}},{start:{line:183,column:57},end:{line:183,column:61}}],line:183},'17':{loc:{start:{line:184,column:13},end:{line:184,column:61}},type:'binary-expr',locations:[{start:{line:184,column:13},end:{line:184,column:53}},{start:{line:184,column:57},end:{line:184,column:61}}],line:184},'18':{loc:{start:{line:187,column:4},end:{line:203,column:5}},type:'if',locations:[{start:{line:187,column:4},end:{line:203,column:5}},{start:{line:187,column:4},end:{line:203,column:5}}],line:187},'19':{loc:{start:{line:205,column:4},end:{line:207,column:5}},type:'if',locations:[{start:{line:205,column:4},end:{line:207,column:5}},{start:{line:205,column:4},end:{line:207,column:5}}],line:205},'20':{loc:{start:{line:210,column:4},end:{line:219,column:5}},type:'if',locations:[{start:{line:210,column:4},end:{line:219,column:5}},{start:{line:210,column:4},end:{line:219,column:5}}],line:210},'21':{loc:{start:{line:211,column:19},end:{line:211,column:46}},type:'cond-expr',locations:[{start:{line:211,column:39},end:{line:211,column:41}},{start:{line:211,column:44},end:{line:211,column:46}}],line:211},'22':{loc:{start:{line:212,column:8},end:{line:214,column:9}},type:'if',locations:[{start:{line:212,column:8},end:{line:214,column:9}},{start:{line:212,column:8},end:{line:214,column:9}}],line:212},'23':{loc:{start:{line:215,column:8},end:{line:217,column:9}},type:'if',locations:[{start:{line:215,column:8},end:{line:217,column:9}},{start:{line:215,column:8},end:{line:217,column:9}}],line:215},'24':{loc:{start:{line:222,column:8},end:{line:224,column:9}},type:'if',locations:[{start:{line:222,column:8},end:{line:224,column:9}},{start:{line:222,column:8},end:{line:224,column:9}}],line:222},'25':{loc:{start:{line:226,column:15},end:{line:226,column:43}},type:'binary-expr',locations:[{start:{line:226,column:15},end:{line:226,column:37}},{start:{line:226,column:41},end:{line:226,column:43}}],line:226}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0,'34':0,'35':0,'36':0,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':0,'45':0,'46':0,'47':0,'48':0,'49':0,'50':0,'51':0,'52':0,'53':0,'54':0,'55':0,'56':0,'57':0,'58':0,'59':0,'60':0,'61':0,'62':0,'63':0,'64':0,'65':0,'66':0,'67':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0],'5':[0,0],'6':[0,0],'7':[0,0,0,0],'8':[0,0],'9':[0,0],'10':[0,0],'11':[0,0],'12':[0,0],'13':[0,0],'14':[0,0],'15':[0,0],'16':[0,0],'17':[0,0],'18':[0,0],'19':[0,0],'20':[0,0],'21':[0,0],'22':[0,0],'23':[0,0],'24':[0,0],'25':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var type=(cov_1n7ghjgofb.s[0]++,__webpack_require__(2));var object=(cov_1n7ghjgofb.s[1]++,__webpack_require__(1));var tokens=(cov_1n7ghjgofb.s[2]++,/[\\]*YYYY|[\\]*YY|[\\]*MMMM|[\\]*MMM|[\\]*MM|[\\]*M|[\\]*DD|[\\]*D|[\\]*HH|[\\]*H|[\\]*A/gi);var MONTH_STR=(cov_1n7ghjgofb.s[3]++,['Invalid month','January','February','March','April','May','June','July','August','September','October','November','December']);var MONTH_DAYS=(cov_1n7ghjgofb.s[4]++,[0,31,28,31,30,31,30,31,31,30,31,30,31]);var replaceMap=(cov_1n7ghjgofb.s[5]++,{M:function(date){cov_1n7ghjgofb.f[0]++;cov_1n7ghjgofb.s[6]++;return Number(date.month);},MM:function(date){cov_1n7ghjgofb.f[1]++;var month=(cov_1n7ghjgofb.s[7]++,date.month);cov_1n7ghjgofb.s[8]++;return Number(month)<10?(cov_1n7ghjgofb.b[0][0]++,'0'+month):(cov_1n7ghjgofb.b[0][1]++,month);},MMM:function(date){cov_1n7ghjgofb.f[2]++;cov_1n7ghjgofb.s[9]++;return MONTH_STR[Number(date.month)].substr(0,3);},MMMM:function(date){cov_1n7ghjgofb.f[3]++;cov_1n7ghjgofb.s[10]++;return MONTH_STR[Number(date.month)];},D:function(date){cov_1n7ghjgofb.f[4]++;cov_1n7ghjgofb.s[11]++;return Number(date.date);},d:function(date){cov_1n7ghjgofb.f[5]++;cov_1n7ghjgofb.s[12]++;return replaceMap.D(date);// eslint-disable-line new-cap
	},DD:function(date){cov_1n7ghjgofb.f[6]++;var dayInMonth=(cov_1n7ghjgofb.s[13]++,date.date);cov_1n7ghjgofb.s[14]++;return Number(dayInMonth)<10?(cov_1n7ghjgofb.b[1][0]++,'0'+dayInMonth):(cov_1n7ghjgofb.b[1][1]++,dayInMonth);},dd:function(date){cov_1n7ghjgofb.f[7]++;cov_1n7ghjgofb.s[15]++;return replaceMap.DD(date);// eslint-disable-line new-cap
	},YY:function(date){cov_1n7ghjgofb.f[8]++;cov_1n7ghjgofb.s[16]++;return Number(date.year)%100;},yy:function(date){cov_1n7ghjgofb.f[9]++;cov_1n7ghjgofb.s[17]++;return replaceMap.YY(date);// eslint-disable-line new-cap
	},YYYY:function(date){cov_1n7ghjgofb.f[10]++;var prefix=(cov_1n7ghjgofb.s[18]++,'20'),year=(cov_1n7ghjgofb.s[19]++,date.year);cov_1n7ghjgofb.s[20]++;if((cov_1n7ghjgofb.b[3][0]++,year>69)&&(cov_1n7ghjgofb.b[3][1]++,year<100)){cov_1n7ghjgofb.b[2][0]++;cov_1n7ghjgofb.s[21]++;prefix='19';}else{cov_1n7ghjgofb.b[2][1]++;}cov_1n7ghjgofb.s[22]++;return Number(year)<100?(cov_1n7ghjgofb.b[4][0]++,prefix+String(year)):(cov_1n7ghjgofb.b[4][1]++,year);},yyyy:function(date){cov_1n7ghjgofb.f[11]++;cov_1n7ghjgofb.s[23]++;return replaceMap.YYYY(date);// eslint-disable-line new-cap
	},A:function(date){cov_1n7ghjgofb.f[12]++;cov_1n7ghjgofb.s[24]++;return date.meridiem;},a:function(date){cov_1n7ghjgofb.f[13]++;cov_1n7ghjgofb.s[25]++;return date.meridiem;},hh:function(date){cov_1n7ghjgofb.f[14]++;var hour=(cov_1n7ghjgofb.s[26]++,date.hour);cov_1n7ghjgofb.s[27]++;return Number(hour)<10?(cov_1n7ghjgofb.b[5][0]++,'0'+hour):(cov_1n7ghjgofb.b[5][1]++,hour);},HH:function(date){cov_1n7ghjgofb.f[15]++;cov_1n7ghjgofb.s[28]++;return replaceMap.hh(date);},h:function(date){cov_1n7ghjgofb.f[16]++;cov_1n7ghjgofb.s[29]++;return String(Number(date.hour));},H:function(date){cov_1n7ghjgofb.f[17]++;cov_1n7ghjgofb.s[30]++;return replaceMap.h(date);},m:function(date){cov_1n7ghjgofb.f[18]++;cov_1n7ghjgofb.s[31]++;return String(Number(date.minute));},mm:function(date){cov_1n7ghjgofb.f[19]++;var minute=(cov_1n7ghjgofb.s[32]++,date.minute);cov_1n7ghjgofb.s[33]++;return Number(minute)<10?(cov_1n7ghjgofb.b[6][0]++,'0'+minute):(cov_1n7ghjgofb.b[6][1]++,minute);}});/**
	 * Check whether the given variables are valid date or not.
	 * @param {number} year - Year
	 * @param {number} month - Month
	 * @param {number} date - Day in month.
	 * @returns {boolean} Is valid?
	 * @private
	 */function isValidDate(year,month,date){cov_1n7ghjgofb.f[20]++;// eslint-disable-line complexity
	var isValidYear,isValidMonth,isValid,lastDayInMonth;cov_1n7ghjgofb.s[34]++;year=Number(year);cov_1n7ghjgofb.s[35]++;month=Number(month);cov_1n7ghjgofb.s[36]++;date=Number(date);cov_1n7ghjgofb.s[37]++;isValidYear=(cov_1n7ghjgofb.b[7][0]++,year>-1)&&(cov_1n7ghjgofb.b[7][1]++,year<100)||(cov_1n7ghjgofb.b[7][2]++,year>1969)&&(cov_1n7ghjgofb.b[7][3]++,year<2070);cov_1n7ghjgofb.s[38]++;isValidMonth=(cov_1n7ghjgofb.b[8][0]++,month>0)&&(cov_1n7ghjgofb.b[8][1]++,month<13);cov_1n7ghjgofb.s[39]++;if((cov_1n7ghjgofb.b[10][0]++,!isValidYear)||(cov_1n7ghjgofb.b[10][1]++,!isValidMonth)){cov_1n7ghjgofb.b[9][0]++;cov_1n7ghjgofb.s[40]++;return false;}else{cov_1n7ghjgofb.b[9][1]++;}cov_1n7ghjgofb.s[41]++;lastDayInMonth=MONTH_DAYS[month];cov_1n7ghjgofb.s[42]++;if((cov_1n7ghjgofb.b[12][0]++,month===2)&&(cov_1n7ghjgofb.b[12][1]++,year%4===0)){cov_1n7ghjgofb.b[11][0]++;cov_1n7ghjgofb.s[43]++;if((cov_1n7ghjgofb.b[14][0]++,year%100!==0)||(cov_1n7ghjgofb.b[14][1]++,year%400===0)){cov_1n7ghjgofb.b[13][0]++;cov_1n7ghjgofb.s[44]++;lastDayInMonth=29;}else{cov_1n7ghjgofb.b[13][1]++;}}else{cov_1n7ghjgofb.b[11][1]++;}cov_1n7ghjgofb.s[45]++;isValid=(cov_1n7ghjgofb.b[15][0]++,date>0)&&(cov_1n7ghjgofb.b[15][1]++,date<=lastDayInMonth);cov_1n7ghjgofb.s[46]++;return isValid;}/**
	 * Return a string that transformed from the given form and date.
	 * @param {string} form - Date form
	 * @param {Date|Object} date - Date object
	 * @param {{meridiemSet: {AM: string, PM: string}}} option - Option
	 * @returns {boolean|string} A transformed string or false.
	 * @memberof tui.util
	 * @example
	 *  // key             | Shorthand
	 *  // --------------- |-----------------------
	 *  // years           | YY / YYYY / yy / yyyy
	 *  // months(n)       | M / MM
	 *  // months(str)     | MMM / MMMM
	 *  // days            | D / DD / d / dd
	 *  // hours           | H / HH / h / hh
	 *  // minutes         | m / mm
	 *  // meridiem(AM,PM) | A / a
	 *
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var dateStr1 = util.formatDate('yyyy-MM-dd', {
	 *     year: 2014,
	 *     month: 12,
	 *     date: 12
	 * });
	 * alert(dateStr1); // '2014-12-12'
	 *
	 * var dateStr2 = util.formatDate('MMM DD YYYY HH:mm', {
	 *     year: 1999,
	 *     month: 9,
	 *     date: 9,
	 *     hour: 0,
	 *     minute: 2
	 * });
	 * alert(dateStr2); // 'Sep 09 1999 00:02'
	 *
	 * var dt = new Date(2010, 2, 13),
	 *     dateStr3 = util.formatDate('yyyy년 M월 dd일', dt);
	 * alert(dateStr3); // '2010년 3월 13일'
	 *
	 * var option4 = {
	 *     meridiemSet: {
	 *         AM: '오전',
	 *         PM: '오후'
	 *     }
	 * };
	 * var date4 = {year: 1999, month: 9, date: 9, hour: 13, minute: 2};
	 * var dateStr4 = util.formatDate('yyyy-MM-dd A hh:mm', date4, option4));
	 * alert(dateStr4); // '1999-09-09 오후 01:02'
	 */function formatDate(form,date,option){cov_1n7ghjgofb.f[21]++;// eslint-disable-line complexity
	var am=(cov_1n7ghjgofb.s[47]++,(cov_1n7ghjgofb.b[16][0]++,object.pick(option,'meridiemSet','AM'))||(cov_1n7ghjgofb.b[16][1]++,'AM'));var pm=(cov_1n7ghjgofb.s[48]++,(cov_1n7ghjgofb.b[17][0]++,object.pick(option,'meridiemSet','PM'))||(cov_1n7ghjgofb.b[17][1]++,'PM'));var meridiem,nDate,resultStr;cov_1n7ghjgofb.s[49]++;if(type.isDate(date)){cov_1n7ghjgofb.b[18][0]++;cov_1n7ghjgofb.s[50]++;nDate={year:date.getFullYear(),month:date.getMonth()+1,date:date.getDate(),hour:date.getHours(),minute:date.getMinutes()};}else{cov_1n7ghjgofb.b[18][1]++;cov_1n7ghjgofb.s[51]++;nDate={year:date.year,month:date.month,date:date.date,hour:date.hour,minute:date.minute};}cov_1n7ghjgofb.s[52]++;if(!isValidDate(nDate.year,nDate.month,nDate.date)){cov_1n7ghjgofb.b[19][0]++;cov_1n7ghjgofb.s[53]++;return false;}else{cov_1n7ghjgofb.b[19][1]++;}cov_1n7ghjgofb.s[54]++;nDate.meridiem='';cov_1n7ghjgofb.s[55]++;if(/([^\\]|^)[aA]\b/.test(form)){cov_1n7ghjgofb.b[20][0]++;cov_1n7ghjgofb.s[56]++;meridiem=nDate.hour>11?(cov_1n7ghjgofb.b[21][0]++,pm):(cov_1n7ghjgofb.b[21][1]++,am);cov_1n7ghjgofb.s[57]++;if(nDate.hour>12){cov_1n7ghjgofb.b[22][0]++;cov_1n7ghjgofb.s[58]++;// See the clock system: https://en.wikipedia.org/wiki/12-hour_clock
	nDate.hour%=12;}else{cov_1n7ghjgofb.b[22][1]++;}cov_1n7ghjgofb.s[59]++;if(nDate.hour===0){cov_1n7ghjgofb.b[23][0]++;cov_1n7ghjgofb.s[60]++;nDate.hour=12;}else{cov_1n7ghjgofb.b[23][1]++;}cov_1n7ghjgofb.s[61]++;nDate.meridiem=meridiem;}else{cov_1n7ghjgofb.b[20][1]++;}cov_1n7ghjgofb.s[62]++;resultStr=form.replace(tokens,function(key){cov_1n7ghjgofb.f[22]++;cov_1n7ghjgofb.s[63]++;if(key.indexOf('\\')>-1){cov_1n7ghjgofb.b[24][0]++;cov_1n7ghjgofb.s[64]++;// escape character
	return key.replace(/\\/,'');}else{cov_1n7ghjgofb.b[24][1]++;}cov_1n7ghjgofb.s[65]++;return(cov_1n7ghjgofb.b[25][0]++,replaceMap[key](nDate))||(cov_1n7ghjgofb.b[25][1]++,'');});cov_1n7ghjgofb.s[66]++;return resultStr;}cov_1n7ghjgofb.s[67]++;module.exports=formatDate;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview
	 *  This module provides a function to make a constructor
	 * that can inherit from the other constructors like the CLASS easily.
	 * @author NHN Ent.
	 *         FE Development Lab <dl_javascript@nhnent.com>
	 */'use strict';var cov_vgo3cbr8z=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/defineClass.js',hash='d3d5524f708e6ae39c58803086eac8fceb12577d',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/defineClass.js',statementMap:{'0':{start:{line:11,column:14},end:{line:11,column:46}},'1':{start:{line:12,column:13},end:{line:12,column:39}},'2':{start:{line:59,column:4},end:{line:62,column:5}},'3':{start:{line:60,column:8},end:{line:60,column:23}},'4':{start:{line:61,column:8},end:{line:61,column:22}},'5':{start:{line:64,column:4},end:{line:64,column:38}},'6':{start:{line:66,column:4},end:{line:68,column:5}},'7':{start:{line:67,column:8},end:{line:67,column:29}},'8':{start:{line:70,column:4},end:{line:73,column:5}},'9':{start:{line:71,column:8},end:{line:71,column:37}},'10':{start:{line:72,column:8},end:{line:72,column:31}},'11':{start:{line:75,column:4},end:{line:75,column:33}},'12':{start:{line:77,column:4},end:{line:77,column:15}},'13':{start:{line:80,column:0},end:{line:80,column:29}}},fnMap:{'0':{name:'defineClass',decl:{start:{line:56,column:9},end:{line:56,column:20}},loc:{start:{line:56,column:36},end:{line:78,column:1}},line:56},'1':{name:'(anonymous_1)',decl:{start:{line:64,column:24},end:{line:64,column:25}},loc:{start:{line:64,column:35},end:{line:64,column:37}},line:64}},branchMap:{'0':{loc:{start:{line:59,column:4},end:{line:62,column:5}},type:'if',locations:[{start:{line:59,column:4},end:{line:62,column:5}},{start:{line:59,column:4},end:{line:62,column:5}}],line:59},'1':{loc:{start:{line:64,column:10},end:{line:64,column:37}},type:'binary-expr',locations:[{start:{line:64,column:10},end:{line:64,column:20}},{start:{line:64,column:24},end:{line:64,column:37}}],line:64},'2':{loc:{start:{line:66,column:4},end:{line:68,column:5}},type:'if',locations:[{start:{line:66,column:4},end:{line:68,column:5}},{start:{line:66,column:4},end:{line:68,column:5}}],line:66},'3':{loc:{start:{line:70,column:4},end:{line:73,column:5}},type:'if',locations:[{start:{line:70,column:4},end:{line:73,column:5}},{start:{line:70,column:4},end:{line:73,column:5}}],line:70}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0},f:{'0':0,'1':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var inherit=(cov_vgo3cbr8z.s[0]++,__webpack_require__(6).inherit);var extend=(cov_vgo3cbr8z.s[1]++,__webpack_require__(1).extend);/**
	 * Help a constructor to be defined and to inherit from the other constructors
	 * @param {*} [parent] Parent constructor
	 * @param {Object} props Members of constructor
	 *  @param {Function} props.init Initialization method
	 *  @param {Object} [props.static] Static members of constructor
	 * @returns {*} Constructor
	 * @memberof tui.util
	 * @example
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var Parent = util.defineClass({
	 *     init: function() { // constuructor
	 *         this.name = 'made by def';
	 *     },
	 *     method: function() {
	 *         // ...
	 *     },
	 *     static: {
	 *         staticMethod: function() {
	 *              // ...
	 *         }
	 *     }
	 * });
	 *
	 * var Child = util.defineClass(Parent, {
	 *     childMethod: function() {}
	 * });
	 * 
	 * Parent.staticMethod();
	 *
	 * var parentInstance = new Parent();
	 * console.log(parentInstance.name); //made by def
	 * parentInstance.staticMethod(); // Error
	 *
	 * var childInstance = new Child();
	 * childInstance.method();
	 * childInstance.childMethod();
	 */function defineClass(parent,props){cov_vgo3cbr8z.f[0]++;var obj;cov_vgo3cbr8z.s[2]++;if(!props){cov_vgo3cbr8z.b[0][0]++;cov_vgo3cbr8z.s[3]++;props=parent;cov_vgo3cbr8z.s[4]++;parent=null;}else{cov_vgo3cbr8z.b[0][1]++;}cov_vgo3cbr8z.s[5]++;obj=(cov_vgo3cbr8z.b[1][0]++,props.init)||(cov_vgo3cbr8z.b[1][1]++,function(){cov_vgo3cbr8z.f[1]++;});cov_vgo3cbr8z.s[6]++;if(parent){cov_vgo3cbr8z.b[2][0]++;cov_vgo3cbr8z.s[7]++;inherit(obj,parent);}else{cov_vgo3cbr8z.b[2][1]++;}cov_vgo3cbr8z.s[8]++;if(props.hasOwnProperty('static')){cov_vgo3cbr8z.b[3][0]++;cov_vgo3cbr8z.s[9]++;extend(obj,props['static']);cov_vgo3cbr8z.s[10]++;delete props['static'];}else{cov_vgo3cbr8z.b[3][1]++;}cov_vgo3cbr8z.s[11]++;extend(obj.prototype,props);cov_vgo3cbr8z.s[12]++;return obj;}cov_vgo3cbr8z.s[13]++;module.exports=defineClass;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview Define module
	 * @author NHN Ent.
	 *         FE Development Lab <dl_javscript@nhnent.com>
	 * @dependency type.js, defineNamespace.js
	 */'use strict';var cov_s5u8zkz1g=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/defineModule.js',hash='eac7c41f900a7cf6844084124f4f56c1cd57e486',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/defineModule.js',statementMap:{'0':{start:{line:10,column:22},end:{line:10,column:50}},'1':{start:{line:11,column:11},end:{line:11,column:28}},'2':{start:{line:13,column:33},end:{line:13,column:45}},'3':{start:{line:41,column:15},end:{line:41,column:37}},'4':{start:{line:43,column:4},end:{line:45,column:5}},'5':{start:{line:44,column:8},end:{line:44,column:43}},'6':{start:{line:47,column:4},end:{line:47,column:44}},'7':{start:{line:50,column:0},end:{line:50,column:30}}},fnMap:{'0':{name:'defineModule',decl:{start:{line:40,column:9},end:{line:40,column:21}},loc:{start:{line:40,column:51},end:{line:48,column:1}},line:40}},branchMap:{'0':{loc:{start:{line:41,column:15},end:{line:41,column:37}},type:'binary-expr',locations:[{start:{line:41,column:15},end:{line:41,column:31}},{start:{line:41,column:35},end:{line:41,column:37}}],line:41},'1':{loc:{start:{line:43,column:4},end:{line:45,column:5}},type:'if',locations:[{start:{line:43,column:4},end:{line:45,column:5}},{start:{line:43,column:4},end:{line:45,column:5}}],line:43}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0},f:{'0':0},b:{'0':[0,0],'1':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var defineNamespace=(cov_s5u8zkz1g.s[0]++,__webpack_require__(14));var type=(cov_s5u8zkz1g.s[1]++,__webpack_require__(2));var INITIALIZATION_METHOD_NAME=(cov_s5u8zkz1g.s[2]++,'initialize');/**
	 * Define module
	 * @param {string} namespace - Namespace of module
	 * @param {Object} moduleDefinition - Object literal for module
	 * @returns {Object} Defined module
	 * @memberof tui.util
	 * @example
	  * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var myModule = util.defineModule('modules.myModule', {
	 *     name: 'john',
	 *     message: '',
	 *     initialize: function() {
	 *        this.message = 'hello world';
	 *     },
	 *     getMessage: function() {
	 *         return this.name + ': ' + this.message
	 *     }
	 * });
	 *
	 * console.log(myModule.getMessage());  // 'john: hello world';
	 */function defineModule(namespace,moduleDefinition){cov_s5u8zkz1g.f[0]++;var base=(cov_s5u8zkz1g.s[3]++,(cov_s5u8zkz1g.b[0][0]++,moduleDefinition)||(cov_s5u8zkz1g.b[0][1]++,{}));cov_s5u8zkz1g.s[4]++;if(type.isFunction(base[INITIALIZATION_METHOD_NAME])){cov_s5u8zkz1g.b[1][0]++;cov_s5u8zkz1g.s[5]++;base[INITIALIZATION_METHOD_NAME]();}else{cov_s5u8zkz1g.b[1][1]++;}cov_s5u8zkz1g.s[6]++;return defineNamespace(namespace,base);}cov_s5u8zkz1g.s[7]++;module.exports=defineModule;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview Define namespace
	 * @author NHN Ent.
	 *         FE Development Lab <dl_javascript@nhnent.com>
	 * @dependency object.js, collection.js
	 */'use strict';var cov_1880g5mf2r=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/defineNamespace.js',hash='ea704c5a5665b3f262a77b35629be12172a34109',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/defineNamespace.js',statementMap:{'0':{start:{line:10,column:17},end:{line:10,column:40}},'1':{start:{line:11,column:13},end:{line:11,column:32}},'2':{start:{line:37,column:4},end:{line:37,column:33}},'3':{start:{line:38,column:4},end:{line:38,column:26}},'4':{start:{line:40,column:4},end:{line:44,column:7}},'5':{start:{line:41,column:8},end:{line:41,column:36}},'6':{start:{line:43,column:8},end:{line:43,column:25}},'7':{start:{line:46,column:4},end:{line:52,column:5}},'8':{start:{line:47,column:8},end:{line:47,column:27}},'9':{start:{line:48,column:8},end:{line:48,column:50}},'10':{start:{line:49,column:8},end:{line:49,column:40}},'11':{start:{line:51,column:8},end:{line:51,column:37}},'12':{start:{line:54,column:4},end:{line:54,column:18}},'13':{start:{line:57,column:0},end:{line:57,column:33}}},fnMap:{'0':{name:'defineNamespace',decl:{start:{line:34,column:9},end:{line:34,column:24}},loc:{start:{line:34,column:55},end:{line:55,column:1}},line:34},'1':{name:'(anonymous_1)',decl:{start:{line:40,column:38},end:{line:40,column:39}},loc:{start:{line:40,column:58},end:{line:44,column:5}},line:40}},branchMap:{'0':{loc:{start:{line:41,column:20},end:{line:41,column:35}},type:'binary-expr',locations:[{start:{line:41,column:20},end:{line:41,column:29}},{start:{line:41,column:33},end:{line:41,column:35}}],line:41},'1':{loc:{start:{line:46,column:4},end:{line:52,column:5}},type:'if',locations:[{start:{line:46,column:4},end:{line:52,column:5}},{start:{line:46,column:4},end:{line:52,column:5}}],line:46}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0},f:{'0':0,'1':0},b:{'0':[0,0],'1':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var collection=(cov_1880g5mf2r.s[0]++,__webpack_require__(4));var object=(cov_1880g5mf2r.s[1]++,__webpack_require__(1));/**
	 * Define namespace
	 * @param {string} namespace - Namespace (ex- 'foo.bar.baz')
	 * @param {(object|function)} props - A set of modules or one module
	 * @param {boolean} [isOverride] - Override the props to the namespace.<br>
	 *                                  (It removes previous properties of this namespace)
	 * @returns {(object|function)} Defined namespace
	 * @memberof tui.util
	 * @example
	 * //-- #1. Get Module --//
	 * var util = require('tui-code-snippet'); // node, commonjs
	 * var util = tui.util; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var neComp = util.defineNamespace;
	 * neComp.listMenu = defineClass({
	 *     init: function() {
	 *         // ...
	 *     }
	 * });
	 */function defineNamespace(namespace,props,isOverride){cov_1880g5mf2r.f[0]++;var names,result,prevLast,last;cov_1880g5mf2r.s[2]++;names=namespace.split('.');cov_1880g5mf2r.s[3]++;names.unshift(window);cov_1880g5mf2r.s[4]++;result=collection.reduce(names,function(obj,name){cov_1880g5mf2r.f[1]++;cov_1880g5mf2r.s[5]++;obj[name]=(cov_1880g5mf2r.b[0][0]++,obj[name])||(cov_1880g5mf2r.b[0][1]++,{});cov_1880g5mf2r.s[6]++;return obj[name];});cov_1880g5mf2r.s[7]++;if(isOverride){cov_1880g5mf2r.b[1][0]++;cov_1880g5mf2r.s[8]++;last=names.pop();cov_1880g5mf2r.s[9]++;prevLast=object.pick.apply(null,names);cov_1880g5mf2r.s[10]++;result=prevLast[last]=props;}else{cov_1880g5mf2r.b[1][1]++;cov_1880g5mf2r.s[11]++;object.extend(result,props);}cov_1880g5mf2r.s[12]++;return result;}cov_1880g5mf2r.s[13]++;module.exports=defineNamespace;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview
	 *  This module provides some functions for custom events.<br>
	 *  And it is implemented in the observer design pattern.
	 * @author NHN Ent.
	 *         FE Development Lab <dl_javascript@nhnent.com>
	 */'use strict';var cov_2jbocvxgr7=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/customEvent.js',hash='9c1a37c5dfef1683c6d07d1c687f1e758e3da176',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/customEvent.js',statementMap:{'0':{start:{line:11,column:17},end:{line:11,column:40}},'1':{start:{line:12,column:11},end:{line:12,column:28}},'2':{start:{line:13,column:13},end:{line:13,column:32}},'3':{start:{line:15,column:24},end:{line:15,column:30}},'4':{start:{line:42,column:4},end:{line:42,column:23}},'5':{start:{line:48,column:4},end:{line:48,column:25}},'6':{start:{line:71,column:0},end:{line:73,column:2}},'7':{start:{line:72,column:4},end:{line:72,column:58}},'8':{start:{line:82,column:0},end:{line:90,column:2}},'9':{start:{line:83,column:15},end:{line:83,column:33}},'10':{start:{line:85,column:4},end:{line:87,column:5}},'11':{start:{line:86,column:8},end:{line:86,column:31}},'12':{start:{line:89,column:4},end:{line:89,column:16}},'13':{start:{line:99,column:0},end:{line:119,column:2}},'14':{start:{line:100,column:17},end:{line:100,column:28}},'15':{start:{line:103,column:4},end:{line:105,column:5}},'16':{start:{line:104,column:8},end:{line:104,column:34}},'17':{start:{line:107,column:4},end:{line:116,column:5}},'18':{start:{line:108,column:8},end:{line:108,column:35}},'19':{start:{line:110,column:8},end:{line:113,column:9}},'20':{start:{line:111,column:12},end:{line:111,column:24}},'21':{start:{line:112,column:12},end:{line:112,column:39}},'22':{start:{line:115,column:8},end:{line:115,column:24}},'23':{start:{line:118,column:4},end:{line:118,column:18}},'24':{start:{line:126,column:0},end:{line:134,column:2}},'25':{start:{line:127,column:18},end:{line:127,column:31}},'26':{start:{line:129,column:4},end:{line:131,column:5}},'27':{start:{line:130,column:8},end:{line:130,column:37}},'28':{start:{line:133,column:4},end:{line:133,column:19}},'29':{start:{line:142,column:0},end:{line:155,column:2}},'30':{start:{line:143,column:18},end:{line:143,column:37}},'31':{start:{line:144,column:16},end:{line:144,column:17}},'32':{start:{line:146,column:4},end:{line:152,column:5}},'33':{start:{line:147,column:8},end:{line:149,column:9}},'34':{start:{line:148,column:12},end:{line:148,column:25}},'35':{start:{line:151,column:8},end:{line:151,column:19}},'36':{start:{line:154,column:4},end:{line:154,column:14}},'37':{start:{line:163,column:0},end:{line:178,column:2}},'38':{start:{line:166,column:4},end:{line:168,column:5}},'39':{start:{line:167,column:8},end:{line:167,column:15}},'40':{start:{line:170,column:4},end:{line:170,column:34}},'41':{start:{line:171,column:4},end:{line:171,column:38}},'42':{start:{line:173,column:4},end:{line:177,column:5}},'43':{start:{line:174,column:8},end:{line:174,column:31}},'44':{start:{line:176,column:8},end:{line:176,column:31}},'45':{start:{line:185,column:0},end:{line:202,column:2}},'46':{start:{line:188,column:4},end:{line:190,column:5}},'47':{start:{line:189,column:8},end:{line:189,column:15}},'48':{start:{line:192,column:4},end:{line:192,column:34}},'49':{start:{line:193,column:4},end:{line:193,column:45}},'50':{start:{line:195,column:4},end:{line:201,column:5}},'51':{start:{line:196,column:8},end:{line:196,column:38}},'52':{start:{line:198,column:8},end:{line:200,column:9}},'53':{start:{line:199,column:12},end:{line:199,column:44}},'54':{start:{line:212,column:0},end:{line:216,column:2}},'55':{start:{line:213,column:17},end:{line:213,column:43}},'56':{start:{line:214,column:4},end:{line:214,column:35}},'57':{start:{line:215,column:4},end:{line:215,column:56}},'58':{start:{line:246,column:0},end:{line:262,column:2}},'59':{start:{line:247,column:15},end:{line:247,column:19}},'60':{start:{line:249,column:4},end:{line:261,column:5}},'61':{start:{line:251,column:8},end:{line:251,column:55}},'62':{start:{line:252,column:8},end:{line:254,column:11}},'63':{start:{line:253,column:12},end:{line:253,column:52}},'64':{start:{line:255,column:11},end:{line:261,column:5}},'65':{start:{line:257,column:8},end:{line:257,column:26}},'66':{start:{line:258,column:8},end:{line:260,column:11}},'67':{start:{line:259,column:12},end:{line:259,column:41}},'68':{start:{line:271,column:0},end:{line:289,column:2}},'69':{start:{line:272,column:15},end:{line:272,column:19}},'70':{start:{line:274,column:4},end:{line:281,column:5}},'71':{start:{line:275,column:8},end:{line:275,column:26}},'72':{start:{line:276,column:8},end:{line:278,column:11}},'73':{start:{line:277,column:12},end:{line:277,column:43}},'74':{start:{line:280,column:8},end:{line:280,column:15}},'75':{start:{line:284,column:8},end:{line:284,column:42}},'76':{start:{line:285,column:8},end:{line:285,column:50}},'77':{start:{line:288,column:4},end:{line:288,column:45}},'78':{start:{line:297,column:0},end:{line:312,column:2}},'79':{start:{line:298,column:12},end:{line:298,column:13}},'80':{start:{line:301,column:4},end:{line:303,column:5}},'81':{start:{line:302,column:8},end:{line:302,column:15}},'82':{start:{line:305,column:4},end:{line:311,column:5}},'83':{start:{line:306,column:8},end:{line:310,column:9}},'84':{start:{line:307,column:12},end:{line:307,column:29}},'85':{start:{line:308,column:12},end:{line:308,column:21}},'86':{start:{line:309,column:12},end:{line:309,column:19}},'87':{start:{line:320,column:0},end:{line:332,column:2}},'88':{start:{line:321,column:15},end:{line:321,column:19}},'89':{start:{line:323,column:4},end:{line:331,column:6}},'90':{start:{line:324,column:25},end:{line:324,column:49}},'91':{start:{line:326,column:8},end:{line:328,column:9}},'92':{start:{line:327,column:12},end:{line:327,column:46}},'93':{start:{line:330,column:8},end:{line:330,column:26}},'94':{start:{line:340,column:0},end:{line:352,column:2}},'95':{start:{line:341,column:15},end:{line:341,column:19}},'96':{start:{line:343,column:4},end:{line:351,column:6}},'97':{start:{line:344,column:25},end:{line:344,column:49}},'98':{start:{line:346,column:8},end:{line:348,column:9}},'99':{start:{line:347,column:12},end:{line:347,column:46}},'100':{start:{line:350,column:8},end:{line:350,column:26}},'101':{start:{line:361,column:0},end:{line:375,column:2}},'102':{start:{line:362,column:15},end:{line:362,column:19}},'103':{start:{line:364,column:4},end:{line:374,column:6}},'104':{start:{line:365,column:28},end:{line:365,column:52}},'105':{start:{line:366,column:28},end:{line:366,column:52}},'106':{start:{line:367,column:26},end:{line:367,column:54}},'107':{start:{line:369,column:8},end:{line:371,column:9}},'108':{start:{line:370,column:12},end:{line:370,column:46}},'109':{start:{line:373,column:8},end:{line:373,column:26}},'110':{start:{line:383,column:0},end:{line:404,column:2}},'111':{start:{line:384,column:15},end:{line:384,column:19}},'112':{start:{line:385,column:18},end:{line:385,column:41}},'113':{start:{line:386,column:23},end:{line:386,column:47}},'114':{start:{line:387,column:23},end:{line:387,column:50}},'115':{start:{line:389,column:4},end:{line:389,column:51}},'116':{start:{line:391,column:4},end:{line:403,column:7}},'117':{start:{line:392,column:27},end:{line:392,column:48}},'118':{start:{line:394,column:8},end:{line:402,column:9}},'119':{start:{line:395,column:12},end:{line:395,column:60}},'120':{start:{line:397,column:12},end:{line:399,column:15}},'121':{start:{line:398,column:16},end:{line:398,column:50}},'122':{start:{line:401,column:12},end:{line:401,column:35}},'123':{start:{line:411,column:0},end:{line:418,column:2}},'124':{start:{line:412,column:15},end:{line:412,column:19}},'125':{start:{line:413,column:23},end:{line:413,column:50}},'126':{start:{line:415,column:4},end:{line:417,column:7}},'127':{start:{line:416,column:8},end:{line:416,column:56}},'128':{start:{line:426,column:0},end:{line:451,column:2}},'129':{start:{line:427,column:15},end:{line:427,column:19}},'130':{start:{line:430,column:4},end:{line:450,column:5}},'131':{start:{line:431,column:8},end:{line:433,column:11}},'132':{start:{line:432,column:12},end:{line:432,column:33}},'133':{start:{line:434,column:11},end:{line:450,column:5}},'134':{start:{line:435,column:8},end:{line:435,column:44}},'135':{start:{line:437,column:8},end:{line:437,column:65}},'136':{start:{line:438,column:11},end:{line:450,column:5}},'137':{start:{line:439,column:8},end:{line:439,column:63}},'138':{start:{line:441,column:8},end:{line:443,column:11}},'139':{start:{line:442,column:12},end:{line:442,column:57}},'140':{start:{line:445,column:8},end:{line:445,column:44}},'141':{start:{line:447,column:8},end:{line:449,column:11}},'142':{start:{line:448,column:12},end:{line:448,column:57}},'143':{start:{line:491,column:0},end:{line:506,column:2}},'144':{start:{line:492,column:4},end:{line:505,column:5}},'145':{start:{line:494,column:8},end:{line:494,column:49}},'146':{start:{line:495,column:11},end:{line:505,column:5}},'147':{start:{line:497,column:8},end:{line:497,column:25}},'148':{start:{line:498,column:8},end:{line:498,column:27}},'149':{start:{line:499,column:11},end:{line:505,column:5}},'150':{start:{line:501,column:8},end:{line:501,column:38}},'151':{start:{line:502,column:11},end:{line:505,column:5}},'152':{start:{line:504,column:8},end:{line:504,column:46}},'153':{start:{line:512,column:0},end:{line:514,column:2}},'154':{start:{line:513,column:4},end:{line:513,column:39}},'155':{start:{line:544,column:0},end:{line:566,column:2}},'156':{start:{line:547,column:4},end:{line:549,column:5}},'157':{start:{line:548,column:8},end:{line:548,column:20}},'158':{start:{line:551,column:4},end:{line:551,column:40}},'159':{start:{line:552,column:4},end:{line:552,column:52}},'160':{start:{line:553,column:4},end:{line:553,column:14}},'161':{start:{line:555,column:4},end:{line:563,column:5}},'162':{start:{line:556,column:8},end:{line:556,column:29}},'163':{start:{line:558,column:8},end:{line:560,column:9}},'164':{start:{line:559,column:12},end:{line:559,column:25}},'165':{start:{line:562,column:8},end:{line:562,column:19}},'166':{start:{line:565,column:4},end:{line:565,column:16}},'167':{start:{line:574,column:0},end:{line:576,column:2}},'168':{start:{line:575,column:4},end:{line:575,column:49}},'169':{start:{line:583,column:0},end:{line:587,column:2}},'170':{start:{line:584,column:17},end:{line:584,column:43}},'171':{start:{line:586,column:4},end:{line:586,column:25}},'172':{start:{line:589,column:0},end:{line:589,column:30}}},fnMap:{'0':{name:'CustomEvents',decl:{start:{line:38,column:9},end:{line:38,column:21}},loc:{start:{line:38,column:24},end:{line:49,column:1}},line:38},'1':{name:'(anonymous_1)',decl:{start:{line:71,column:21},end:{line:71,column:22}},loc:{start:{line:71,column:36},end:{line:73,column:1}},line:71},'2':{name:'(anonymous_2)',decl:{start:{line:82,column:41},end:{line:82,column:42}},loc:{start:{line:82,column:68},end:{line:90,column:1}},line:82},'3':{name:'(anonymous_3)',decl:{start:{line:99,column:36},end:{line:99,column:37}},loc:{start:{line:99,column:56},end:{line:119,column:1}},line:99},'4':{name:'(anonymous_4)',decl:{start:{line:126,column:38},end:{line:126,column:39}},loc:{start:{line:126,column:49},end:{line:134,column:1}},line:126},'5':{name:'(anonymous_5)',decl:{start:{line:142,column:41},end:{line:142,column:42}},loc:{start:{line:142,column:55},end:{line:155,column:1}},line:142},'6':{name:'(anonymous_6)',decl:{start:{line:163,column:42},end:{line:163,column:43}},loc:{start:{line:163,column:56},end:{line:178,column:1}},line:163},'7':{name:'(anonymous_7)',decl:{start:{line:185,column:40},end:{line:185,column:41}},loc:{start:{line:185,column:54},end:{line:202,column:1}},line:185},'8':{name:'(anonymous_8)',decl:{start:{line:212,column:36},end:{line:212,column:37}},loc:{start:{line:212,column:74},end:{line:216,column:1}},line:212},'9':{name:'(anonymous_9)',decl:{start:{line:246,column:28},end:{line:246,column:29}},loc:{start:{line:246,column:66},end:{line:262,column:1}},line:246},'10':{name:'(anonymous_10)',decl:{start:{line:252,column:38},end:{line:252,column:39}},loc:{start:{line:252,column:53},end:{line:254,column:9}},line:252},'11':{name:'(anonymous_11)',decl:{start:{line:258,column:38},end:{line:258,column:39}},loc:{start:{line:258,column:59},end:{line:260,column:9}},line:258},'12':{name:'(anonymous_12)',decl:{start:{line:271,column:30},end:{line:271,column:31}},loc:{start:{line:271,column:68},end:{line:289,column:1}},line:271},'13':{name:'(anonymous_13)',decl:{start:{line:276,column:38},end:{line:276,column:39}},loc:{start:{line:276,column:59},end:{line:278,column:9}},line:276},'14':{name:'onceHandler',decl:{start:{line:283,column:13},end:{line:283,column:24}},loc:{start:{line:283,column:27},end:{line:286,column:5}},line:283},'15':{name:'(anonymous_15)',decl:{start:{line:297,column:40},end:{line:297,column:41}},loc:{start:{line:297,column:65},end:{line:312,column:1}},line:297},'16':{name:'(anonymous_16)',decl:{start:{line:320,column:39},end:{line:320,column:40}},loc:{start:{line:320,column:57},end:{line:332,column:1}},line:320},'17':{name:'(anonymous_17)',decl:{start:{line:323,column:11},end:{line:323,column:12}},loc:{start:{line:323,column:26},end:{line:331,column:5}},line:323},'18':{name:'(anonymous_18)',decl:{start:{line:340,column:39},end:{line:340,column:40}},loc:{start:{line:340,column:57},end:{line:352,column:1}},line:340},'19':{name:'(anonymous_19)',decl:{start:{line:343,column:11},end:{line:343,column:12}},loc:{start:{line:343,column:26},end:{line:351,column:5}},line:343},'20':{name:'(anonymous_20)',decl:{start:{line:361,column:49},end:{line:361,column:50}},loc:{start:{line:361,column:76},end:{line:375,column:1}},line:361},'21':{name:'(anonymous_21)',decl:{start:{line:364,column:11},end:{line:364,column:12}},loc:{start:{line:364,column:26},end:{line:374,column:5}},line:364},'22':{name:'(anonymous_22)',decl:{start:{line:383,column:41},end:{line:383,column:42}},loc:{start:{line:383,column:70},end:{line:404,column:1}},line:383},'23':{name:'(anonymous_23)',decl:{start:{line:391,column:23},end:{line:391,column:24}},loc:{start:{line:391,column:38},end:{line:403,column:5}},line:391},'24':{name:'(anonymous_24)',decl:{start:{line:397,column:34},end:{line:397,column:35}},loc:{start:{line:397,column:49},end:{line:399,column:13}},line:397},'25':{name:'(anonymous_25)',decl:{start:{line:411,column:39},end:{line:411,column:40}},loc:{start:{line:411,column:57},end:{line:418,column:1}},line:411},'26':{name:'(anonymous_26)',decl:{start:{line:415,column:42},end:{line:415,column:43}},loc:{start:{line:415,column:65},end:{line:417,column:5}},line:415},'27':{name:'(anonymous_27)',decl:{start:{line:426,column:38},end:{line:426,column:39}},loc:{start:{line:426,column:61},end:{line:451,column:1}},line:426},'28':{name:'(anonymous_28)',decl:{start:{line:431,column:32},end:{line:431,column:33}},loc:{start:{line:431,column:53},end:{line:433,column:9}},line:431},'29':{name:'(anonymous_29)',decl:{start:{line:441,column:46},end:{line:441,column:47}},loc:{start:{line:441,column:69},end:{line:443,column:9}},line:441},'30':{name:'(anonymous_30)',decl:{start:{line:447,column:46},end:{line:447,column:47}},loc:{start:{line:447,column:69},end:{line:449,column:9}},line:447},'31':{name:'(anonymous_31)',decl:{start:{line:491,column:29},end:{line:491,column:30}},loc:{start:{line:491,column:58},end:{line:506,column:1}},line:491},'32':{name:'(anonymous_32)',decl:{start:{line:512,column:30},end:{line:512,column:31}},loc:{start:{line:512,column:50},end:{line:514,column:1}},line:512},'33':{name:'(anonymous_33)',decl:{start:{line:544,column:32},end:{line:544,column:33}},loc:{start:{line:544,column:52},end:{line:566,column:1}},line:544},'34':{name:'(anonymous_34)',decl:{start:{line:574,column:37},end:{line:574,column:38}},loc:{start:{line:574,column:57},end:{line:576,column:1}},line:574},'35':{name:'(anonymous_35)',decl:{start:{line:583,column:43},end:{line:583,column:44}},loc:{start:{line:583,column:63},end:{line:587,column:1}},line:583}},branchMap:{'0':{loc:{start:{line:85,column:4},end:{line:87,column:5}},type:'if',locations:[{start:{line:85,column:4},end:{line:87,column:5}},{start:{line:85,column:4},end:{line:87,column:5}}],line:85},'1':{loc:{start:{line:103,column:4},end:{line:105,column:5}},type:'if',locations:[{start:{line:103,column:4},end:{line:105,column:5}},{start:{line:103,column:4},end:{line:105,column:5}}],line:103},'2':{loc:{start:{line:107,column:4},end:{line:116,column:5}},type:'if',locations:[{start:{line:107,column:4},end:{line:116,column:5}},{start:{line:107,column:4},end:{line:116,column:5}}],line:107},'3':{loc:{start:{line:110,column:8},end:{line:113,column:9}},type:'if',locations:[{start:{line:110,column:8},end:{line:113,column:9}},{start:{line:110,column:8},end:{line:113,column:9}}],line:110},'4':{loc:{start:{line:129,column:4},end:{line:131,column:5}},type:'if',locations:[{start:{line:129,column:4},end:{line:131,column:5}},{start:{line:129,column:4},end:{line:131,column:5}}],line:129},'5':{loc:{start:{line:147,column:8},end:{line:149,column:9}},type:'if',locations:[{start:{line:147,column:8},end:{line:149,column:9}},{start:{line:147,column:8},end:{line:149,column:9}}],line:147},'6':{loc:{start:{line:166,column:4},end:{line:168,column:5}},type:'if',locations:[{start:{line:166,column:4},end:{line:168,column:5}},{start:{line:166,column:4},end:{line:168,column:5}}],line:166},'7':{loc:{start:{line:173,column:4},end:{line:177,column:5}},type:'if',locations:[{start:{line:173,column:4},end:{line:177,column:5}},{start:{line:173,column:4},end:{line:177,column:5}}],line:173},'8':{loc:{start:{line:188,column:4},end:{line:190,column:5}},type:'if',locations:[{start:{line:188,column:4},end:{line:190,column:5}},{start:{line:188,column:4},end:{line:190,column:5}}],line:188},'9':{loc:{start:{line:195,column:4},end:{line:201,column:5}},type:'if',locations:[{start:{line:195,column:4},end:{line:201,column:5}},{start:{line:195,column:4},end:{line:201,column:5}}],line:195},'10':{loc:{start:{line:198,column:8},end:{line:200,column:9}},type:'if',locations:[{start:{line:198,column:8},end:{line:200,column:9}},{start:{line:198,column:8},end:{line:200,column:9}}],line:198},'11':{loc:{start:{line:249,column:4},end:{line:261,column:5}},type:'if',locations:[{start:{line:249,column:4},end:{line:261,column:5}},{start:{line:249,column:4},end:{line:261,column:5}}],line:249},'12':{loc:{start:{line:255,column:11},end:{line:261,column:5}},type:'if',locations:[{start:{line:255,column:11},end:{line:261,column:5}},{start:{line:255,column:11},end:{line:261,column:5}}],line:255},'13':{loc:{start:{line:274,column:4},end:{line:281,column:5}},type:'if',locations:[{start:{line:274,column:4},end:{line:281,column:5}},{start:{line:274,column:4},end:{line:281,column:5}}],line:274},'14':{loc:{start:{line:301,column:4},end:{line:303,column:5}},type:'if',locations:[{start:{line:301,column:4},end:{line:303,column:5}},{start:{line:301,column:4},end:{line:303,column:5}}],line:301},'15':{loc:{start:{line:306,column:8},end:{line:310,column:9}},type:'if',locations:[{start:{line:306,column:8},end:{line:310,column:9}},{start:{line:306,column:8},end:{line:310,column:9}}],line:306},'16':{loc:{start:{line:326,column:8},end:{line:328,column:9}},type:'if',locations:[{start:{line:326,column:8},end:{line:328,column:9}},{start:{line:326,column:8},end:{line:328,column:9}}],line:326},'17':{loc:{start:{line:346,column:8},end:{line:348,column:9}},type:'if',locations:[{start:{line:346,column:8},end:{line:348,column:9}},{start:{line:346,column:8},end:{line:348,column:9}}],line:346},'18':{loc:{start:{line:367,column:26},end:{line:367,column:54}},type:'binary-expr',locations:[{start:{line:367,column:26},end:{line:367,column:38}},{start:{line:367,column:42},end:{line:367,column:54}}],line:367},'19':{loc:{start:{line:369,column:8},end:{line:371,column:9}},type:'if',locations:[{start:{line:369,column:8},end:{line:371,column:9}},{start:{line:369,column:8},end:{line:371,column:9}}],line:369},'20':{loc:{start:{line:394,column:8},end:{line:402,column:9}},type:'if',locations:[{start:{line:394,column:8},end:{line:402,column:9}},{start:{line:394,column:8},end:{line:402,column:9}}],line:394},'21':{loc:{start:{line:430,column:4},end:{line:450,column:5}},type:'if',locations:[{start:{line:430,column:4},end:{line:450,column:5}},{start:{line:430,column:4},end:{line:450,column:5}}],line:430},'22':{loc:{start:{line:434,column:11},end:{line:450,column:5}},type:'if',locations:[{start:{line:434,column:11},end:{line:450,column:5}},{start:{line:434,column:11},end:{line:450,column:5}}],line:434},'23':{loc:{start:{line:438,column:11},end:{line:450,column:5}},type:'if',locations:[{start:{line:438,column:11},end:{line:450,column:5}},{start:{line:438,column:11},end:{line:450,column:5}}],line:438},'24':{loc:{start:{line:492,column:4},end:{line:505,column:5}},type:'if',locations:[{start:{line:492,column:4},end:{line:505,column:5}},{start:{line:492,column:4},end:{line:505,column:5}}],line:492},'25':{loc:{start:{line:495,column:11},end:{line:505,column:5}},type:'if',locations:[{start:{line:495,column:11},end:{line:505,column:5}},{start:{line:495,column:11},end:{line:505,column:5}}],line:495},'26':{loc:{start:{line:499,column:11},end:{line:505,column:5}},type:'if',locations:[{start:{line:499,column:11},end:{line:505,column:5}},{start:{line:499,column:11},end:{line:505,column:5}}],line:499},'27':{loc:{start:{line:502,column:11},end:{line:505,column:5}},type:'if',locations:[{start:{line:502,column:11},end:{line:505,column:5}},{start:{line:502,column:11},end:{line:505,column:5}}],line:502},'28':{loc:{start:{line:547,column:4},end:{line:549,column:5}},type:'if',locations:[{start:{line:547,column:4},end:{line:549,column:5}},{start:{line:547,column:4},end:{line:549,column:5}}],line:547},'29':{loc:{start:{line:558,column:8},end:{line:560,column:9}},type:'if',locations:[{start:{line:558,column:8},end:{line:560,column:9}},{start:{line:558,column:8},end:{line:560,column:9}}],line:558}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0,'34':0,'35':0,'36':0,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':0,'45':0,'46':0,'47':0,'48':0,'49':0,'50':0,'51':0,'52':0,'53':0,'54':0,'55':0,'56':0,'57':0,'58':0,'59':0,'60':0,'61':0,'62':0,'63':0,'64':0,'65':0,'66':0,'67':0,'68':0,'69':0,'70':0,'71':0,'72':0,'73':0,'74':0,'75':0,'76':0,'77':0,'78':0,'79':0,'80':0,'81':0,'82':0,'83':0,'84':0,'85':0,'86':0,'87':0,'88':0,'89':0,'90':0,'91':0,'92':0,'93':0,'94':0,'95':0,'96':0,'97':0,'98':0,'99':0,'100':0,'101':0,'102':0,'103':0,'104':0,'105':0,'106':0,'107':0,'108':0,'109':0,'110':0,'111':0,'112':0,'113':0,'114':0,'115':0,'116':0,'117':0,'118':0,'119':0,'120':0,'121':0,'122':0,'123':0,'124':0,'125':0,'126':0,'127':0,'128':0,'129':0,'130':0,'131':0,'132':0,'133':0,'134':0,'135':0,'136':0,'137':0,'138':0,'139':0,'140':0,'141':0,'142':0,'143':0,'144':0,'145':0,'146':0,'147':0,'148':0,'149':0,'150':0,'151':0,'152':0,'153':0,'154':0,'155':0,'156':0,'157':0,'158':0,'159':0,'160':0,'161':0,'162':0,'163':0,'164':0,'165':0,'166':0,'167':0,'168':0,'169':0,'170':0,'171':0,'172':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0,'34':0,'35':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0],'5':[0,0],'6':[0,0],'7':[0,0],'8':[0,0],'9':[0,0],'10':[0,0],'11':[0,0],'12':[0,0],'13':[0,0],'14':[0,0],'15':[0,0],'16':[0,0],'17':[0,0],'18':[0,0],'19':[0,0],'20':[0,0],'21':[0,0],'22':[0,0],'23':[0,0],'24':[0,0],'25':[0,0],'26':[0,0],'27':[0,0],'28':[0,0],'29':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var collection=(cov_2jbocvxgr7.s[0]++,__webpack_require__(4));var type=(cov_2jbocvxgr7.s[1]++,__webpack_require__(2));var object=(cov_2jbocvxgr7.s[2]++,__webpack_require__(1));var R_EVENTNAME_SPLIT=(cov_2jbocvxgr7.s[3]++,/\s+/g);/**
	 * A unit of event handler item.
	 * @ignore
	 * @typedef {object} HandlerItem
	 * @property {function} fn - event handler
	 * @property {object} ctx - context of event handler
	 *//**
	 * @class
	 * @memberof tui.util
	 * @example
	 * // node, commonjs
	 * var CustomEvents = require('tui-code-snippet').CustomEvents;
	 * @example
	 * // distribution file, script
	 * <script src='path-to/tui-code-snippt.js'></script>
	 * <script>
	 * var CustomEvents = tui.util.CustomEvents;
	 * </script>
	 */function CustomEvents(){cov_2jbocvxgr7.f[0]++;cov_2jbocvxgr7.s[4]++;/**
	     * @type {HandlerItem[]}
	     */this.events=null;/**
	     * only for checking specific context event was binded
	     * @type {object[]}
	     */cov_2jbocvxgr7.s[5]++;this.contexts=null;}/**
	 * Mixin custom events feature to specific constructor
	 * @param {function} func - constructor
	 * @example
	 * //-- #1. Get Module --//
	 * var CustomEvents = require('tui-code-snippet').CustomEvents; // node, commonjs
	 * var CustomEvents = tui.util.CustomEvents; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var model;
	 * function Model() {
	 *     this.name = '';
	 * }
	 * CustomEvents.mixin(Model);
	 *
	 * model = new Model();
	 * model.on('change', function() { this.name = 'model'; }, this);
	 * model.fire('change');
	 * alert(model.name); // 'model';
	 */cov_2jbocvxgr7.s[6]++;CustomEvents.mixin=function(func){cov_2jbocvxgr7.f[1]++;cov_2jbocvxgr7.s[7]++;object.extend(func.prototype,CustomEvents.prototype);};/**
	 * Get HandlerItem object
	 * @param {function} handler - handler function
	 * @param {object} [context] - context for handler
	 * @returns {HandlerItem} HandlerItem object
	 * @private
	 */cov_2jbocvxgr7.s[8]++;CustomEvents.prototype._getHandlerItem=function(handler,context){cov_2jbocvxgr7.f[2]++;var item=(cov_2jbocvxgr7.s[9]++,{handler:handler});cov_2jbocvxgr7.s[10]++;if(context){cov_2jbocvxgr7.b[0][0]++;cov_2jbocvxgr7.s[11]++;item.context=context;}else{cov_2jbocvxgr7.b[0][1]++;}cov_2jbocvxgr7.s[12]++;return item;};/**
	 * Get event object safely
	 * @param {string} [eventName] - create sub event map if not exist.
	 * @returns {(object|array)} event object. if you supplied `eventName`
	 *  parameter then make new array and return it
	 * @private
	 */cov_2jbocvxgr7.s[13]++;CustomEvents.prototype._safeEvent=function(eventName){cov_2jbocvxgr7.f[3]++;var events=(cov_2jbocvxgr7.s[14]++,this.events);var byName;cov_2jbocvxgr7.s[15]++;if(!events){cov_2jbocvxgr7.b[1][0]++;cov_2jbocvxgr7.s[16]++;events=this.events={};}else{cov_2jbocvxgr7.b[1][1]++;}cov_2jbocvxgr7.s[17]++;if(eventName){cov_2jbocvxgr7.b[2][0]++;cov_2jbocvxgr7.s[18]++;byName=events[eventName];cov_2jbocvxgr7.s[19]++;if(!byName){cov_2jbocvxgr7.b[3][0]++;cov_2jbocvxgr7.s[20]++;byName=[];cov_2jbocvxgr7.s[21]++;events[eventName]=byName;}else{cov_2jbocvxgr7.b[3][1]++;}cov_2jbocvxgr7.s[22]++;events=byName;}else{cov_2jbocvxgr7.b[2][1]++;}cov_2jbocvxgr7.s[23]++;return events;};/**
	 * Get context array safely
	 * @returns {array} context array
	 * @private
	 */cov_2jbocvxgr7.s[24]++;CustomEvents.prototype._safeContext=function(){cov_2jbocvxgr7.f[4]++;var context=(cov_2jbocvxgr7.s[25]++,this.contexts);cov_2jbocvxgr7.s[26]++;if(!context){cov_2jbocvxgr7.b[4][0]++;cov_2jbocvxgr7.s[27]++;context=this.contexts=[];}else{cov_2jbocvxgr7.b[4][1]++;}cov_2jbocvxgr7.s[28]++;return context;};/**
	 * Get index of context
	 * @param {object} ctx - context that used for bind custom event
	 * @returns {number} index of context
	 * @private
	 */cov_2jbocvxgr7.s[29]++;CustomEvents.prototype._indexOfContext=function(ctx){cov_2jbocvxgr7.f[5]++;var context=(cov_2jbocvxgr7.s[30]++,this._safeContext());var index=(cov_2jbocvxgr7.s[31]++,0);cov_2jbocvxgr7.s[32]++;while(context[index]){cov_2jbocvxgr7.s[33]++;if(ctx===context[index][0]){cov_2jbocvxgr7.b[5][0]++;cov_2jbocvxgr7.s[34]++;return index;}else{cov_2jbocvxgr7.b[5][1]++;}cov_2jbocvxgr7.s[35]++;index+=1;}cov_2jbocvxgr7.s[36]++;return-1;};/**
	 * Memorize supplied context for recognize supplied object is context or
	 *  name: handler pair object when off()
	 * @param {object} ctx - context object to memorize
	 * @private
	 */cov_2jbocvxgr7.s[37]++;CustomEvents.prototype._memorizeContext=function(ctx){cov_2jbocvxgr7.f[6]++;var context,index;cov_2jbocvxgr7.s[38]++;if(!type.isExisty(ctx)){cov_2jbocvxgr7.b[6][0]++;cov_2jbocvxgr7.s[39]++;return;}else{cov_2jbocvxgr7.b[6][1]++;}cov_2jbocvxgr7.s[40]++;context=this._safeContext();cov_2jbocvxgr7.s[41]++;index=this._indexOfContext(ctx);cov_2jbocvxgr7.s[42]++;if(index>-1){cov_2jbocvxgr7.b[7][0]++;cov_2jbocvxgr7.s[43]++;context[index][1]+=1;}else{cov_2jbocvxgr7.b[7][1]++;cov_2jbocvxgr7.s[44]++;context.push([ctx,1]);}};/**
	 * Forget supplied context object
	 * @param {object} ctx - context object to forget
	 * @private
	 */cov_2jbocvxgr7.s[45]++;CustomEvents.prototype._forgetContext=function(ctx){cov_2jbocvxgr7.f[7]++;var context,contextIndex;cov_2jbocvxgr7.s[46]++;if(!type.isExisty(ctx)){cov_2jbocvxgr7.b[8][0]++;cov_2jbocvxgr7.s[47]++;return;}else{cov_2jbocvxgr7.b[8][1]++;}cov_2jbocvxgr7.s[48]++;context=this._safeContext();cov_2jbocvxgr7.s[49]++;contextIndex=this._indexOfContext(ctx);cov_2jbocvxgr7.s[50]++;if(contextIndex>-1){cov_2jbocvxgr7.b[9][0]++;cov_2jbocvxgr7.s[51]++;context[contextIndex][1]-=1;cov_2jbocvxgr7.s[52]++;if(context[contextIndex][1]<=0){cov_2jbocvxgr7.b[10][0]++;cov_2jbocvxgr7.s[53]++;context.splice(contextIndex,1);}else{cov_2jbocvxgr7.b[10][1]++;}}else{cov_2jbocvxgr7.b[9][1]++;}};/**
	 * Bind event handler
	 * @param {(string|{name:string, handler:function})} eventName - custom
	 *  event name or an object {eventName: handler}
	 * @param {(function|object)} [handler] - handler function or context
	 * @param {object} [context] - context for binding
	 * @private
	 */cov_2jbocvxgr7.s[54]++;CustomEvents.prototype._bindEvent=function(eventName,handler,context){cov_2jbocvxgr7.f[8]++;var events=(cov_2jbocvxgr7.s[55]++,this._safeEvent(eventName));cov_2jbocvxgr7.s[56]++;this._memorizeContext(context);cov_2jbocvxgr7.s[57]++;events.push(this._getHandlerItem(handler,context));};/**
	 * Bind event handlers
	 * @param {(string|{name:string, handler:function})} eventName - custom
	 *  event name or an object {eventName: handler}
	 * @param {(function|object)} [handler] - handler function or context
	 * @param {object} [context] - context for binding
	 * //-- #1. Get Module --//
	 * var CustomEvents = require('tui-code-snippet').CustomEvents; // node, commonjs
	 * var CustomEvents = tui.util.CustomEvents; // distribution file
	 *
	 * //-- #2. Use property --//
	 * // # 2.1 Basic Usage
	 * CustomEvents.on('onload', handler);
	 *
	 * // # 2.2 With context
	 * CustomEvents.on('onload', handler, myObj);
	 *
	 * // # 2.3 Bind by object that name, handler pairs
	 * CustomEvents.on({
	 *     'play': handler,
	 *     'pause': handler2
	 * });
	 *
	 * // # 2.4 Bind by object that name, handler pairs with context object
	 * CustomEvents.on({
	 *     'play': handler
	 * }, myObj);
	 */cov_2jbocvxgr7.s[58]++;CustomEvents.prototype.on=function(eventName,handler,context){cov_2jbocvxgr7.f[9]++;var self=(cov_2jbocvxgr7.s[59]++,this);cov_2jbocvxgr7.s[60]++;if(type.isString(eventName)){cov_2jbocvxgr7.b[11][0]++;cov_2jbocvxgr7.s[61]++;// [syntax 1, 2]
	eventName=eventName.split(R_EVENTNAME_SPLIT);cov_2jbocvxgr7.s[62]++;collection.forEach(eventName,function(name){cov_2jbocvxgr7.f[10]++;cov_2jbocvxgr7.s[63]++;self._bindEvent(name,handler,context);});}else{cov_2jbocvxgr7.b[11][1]++;cov_2jbocvxgr7.s[64]++;if(type.isObject(eventName)){cov_2jbocvxgr7.b[12][0]++;cov_2jbocvxgr7.s[65]++;// [syntax 3, 4]
	context=handler;cov_2jbocvxgr7.s[66]++;collection.forEach(eventName,function(func,name){cov_2jbocvxgr7.f[11]++;cov_2jbocvxgr7.s[67]++;self.on(name,func,context);});}else{cov_2jbocvxgr7.b[12][1]++;}}};/**
	 * Bind one-shot event handlers
	 * @param {(string|{name:string,handler:function})} eventName - custom
	 *  event name or an object {eventName: handler}
	 * @param {function|object} [handler] - handler function or context
	 * @param {object} [context] - context for binding
	 */cov_2jbocvxgr7.s[68]++;CustomEvents.prototype.once=function(eventName,handler,context){cov_2jbocvxgr7.f[12]++;var self=(cov_2jbocvxgr7.s[69]++,this);cov_2jbocvxgr7.s[70]++;if(type.isObject(eventName)){cov_2jbocvxgr7.b[13][0]++;cov_2jbocvxgr7.s[71]++;context=handler;cov_2jbocvxgr7.s[72]++;collection.forEach(eventName,function(func,name){cov_2jbocvxgr7.f[13]++;cov_2jbocvxgr7.s[73]++;self.once(name,func,context);});cov_2jbocvxgr7.s[74]++;return;}else{cov_2jbocvxgr7.b[13][1]++;}function onceHandler(){cov_2jbocvxgr7.f[14]++;cov_2jbocvxgr7.s[75]++;// eslint-disable-line require-jsdoc
	handler.apply(context,arguments);cov_2jbocvxgr7.s[76]++;self.off(eventName,onceHandler,context);}cov_2jbocvxgr7.s[77]++;this.on(eventName,onceHandler,context);};/**
	 * Splice supplied array by callback result
	 * @param {array} arr - array to splice
	 * @param {function} predicate - function return boolean
	 * @private
	 */cov_2jbocvxgr7.s[78]++;CustomEvents.prototype._spliceMatches=function(arr,predicate){cov_2jbocvxgr7.f[15]++;var i=(cov_2jbocvxgr7.s[79]++,0);var len;cov_2jbocvxgr7.s[80]++;if(!type.isArray(arr)){cov_2jbocvxgr7.b[14][0]++;cov_2jbocvxgr7.s[81]++;return;}else{cov_2jbocvxgr7.b[14][1]++;}cov_2jbocvxgr7.s[82]++;for(len=arr.length;i<len;i+=1){cov_2jbocvxgr7.s[83]++;if(predicate(arr[i])===true){cov_2jbocvxgr7.b[15][0]++;cov_2jbocvxgr7.s[84]++;arr.splice(i,1);cov_2jbocvxgr7.s[85]++;len-=1;cov_2jbocvxgr7.s[86]++;i-=1;}else{cov_2jbocvxgr7.b[15][1]++;}}};/**
	 * Get matcher for unbind specific handler events
	 * @param {function} handler - handler function
	 * @returns {function} handler matcher
	 * @private
	 */cov_2jbocvxgr7.s[87]++;CustomEvents.prototype._matchHandler=function(handler){cov_2jbocvxgr7.f[16]++;var self=(cov_2jbocvxgr7.s[88]++,this);cov_2jbocvxgr7.s[89]++;return function(item){cov_2jbocvxgr7.f[17]++;var needRemove=(cov_2jbocvxgr7.s[90]++,handler===item.handler);cov_2jbocvxgr7.s[91]++;if(needRemove){cov_2jbocvxgr7.b[16][0]++;cov_2jbocvxgr7.s[92]++;self._forgetContext(item.context);}else{cov_2jbocvxgr7.b[16][1]++;}cov_2jbocvxgr7.s[93]++;return needRemove;};};/**
	 * Get matcher for unbind specific context events
	 * @param {object} context - context
	 * @returns {function} object matcher
	 * @private
	 */cov_2jbocvxgr7.s[94]++;CustomEvents.prototype._matchContext=function(context){cov_2jbocvxgr7.f[18]++;var self=(cov_2jbocvxgr7.s[95]++,this);cov_2jbocvxgr7.s[96]++;return function(item){cov_2jbocvxgr7.f[19]++;var needRemove=(cov_2jbocvxgr7.s[97]++,context===item.context);cov_2jbocvxgr7.s[98]++;if(needRemove){cov_2jbocvxgr7.b[17][0]++;cov_2jbocvxgr7.s[99]++;self._forgetContext(item.context);}else{cov_2jbocvxgr7.b[17][1]++;}cov_2jbocvxgr7.s[100]++;return needRemove;};};/**
	 * Get matcher for unbind specific hander, context pair events
	 * @param {function} handler - handler function
	 * @param {object} context - context
	 * @returns {function} handler, context matcher
	 * @private
	 */cov_2jbocvxgr7.s[101]++;CustomEvents.prototype._matchHandlerAndContext=function(handler,context){cov_2jbocvxgr7.f[20]++;var self=(cov_2jbocvxgr7.s[102]++,this);cov_2jbocvxgr7.s[103]++;return function(item){cov_2jbocvxgr7.f[21]++;var matchHandler=(cov_2jbocvxgr7.s[104]++,handler===item.handler);var matchContext=(cov_2jbocvxgr7.s[105]++,context===item.context);var needRemove=(cov_2jbocvxgr7.s[106]++,(cov_2jbocvxgr7.b[18][0]++,matchHandler)&&(cov_2jbocvxgr7.b[18][1]++,matchContext));cov_2jbocvxgr7.s[107]++;if(needRemove){cov_2jbocvxgr7.b[19][0]++;cov_2jbocvxgr7.s[108]++;self._forgetContext(item.context);}else{cov_2jbocvxgr7.b[19][1]++;}cov_2jbocvxgr7.s[109]++;return needRemove;};};/**
	 * Unbind event by event name
	 * @param {string} eventName - custom event name to unbind
	 * @param {function} [handler] - handler function
	 * @private
	 */cov_2jbocvxgr7.s[110]++;CustomEvents.prototype._offByEventName=function(eventName,handler){cov_2jbocvxgr7.f[22]++;var self=(cov_2jbocvxgr7.s[111]++,this);var forEach=(cov_2jbocvxgr7.s[112]++,collection.forEachArray);var andByHandler=(cov_2jbocvxgr7.s[113]++,type.isFunction(handler));var matchHandler=(cov_2jbocvxgr7.s[114]++,self._matchHandler(handler));cov_2jbocvxgr7.s[115]++;eventName=eventName.split(R_EVENTNAME_SPLIT);cov_2jbocvxgr7.s[116]++;forEach(eventName,function(name){cov_2jbocvxgr7.f[23]++;var handlerItems=(cov_2jbocvxgr7.s[117]++,self._safeEvent(name));cov_2jbocvxgr7.s[118]++;if(andByHandler){cov_2jbocvxgr7.b[20][0]++;cov_2jbocvxgr7.s[119]++;self._spliceMatches(handlerItems,matchHandler);}else{cov_2jbocvxgr7.b[20][1]++;cov_2jbocvxgr7.s[120]++;forEach(handlerItems,function(item){cov_2jbocvxgr7.f[24]++;cov_2jbocvxgr7.s[121]++;self._forgetContext(item.context);});cov_2jbocvxgr7.s[122]++;self.events[name]=[];}});};/**
	 * Unbind event by handler function
	 * @param {function} handler - handler function
	 * @private
	 */cov_2jbocvxgr7.s[123]++;CustomEvents.prototype._offByHandler=function(handler){cov_2jbocvxgr7.f[25]++;var self=(cov_2jbocvxgr7.s[124]++,this);var matchHandler=(cov_2jbocvxgr7.s[125]++,this._matchHandler(handler));cov_2jbocvxgr7.s[126]++;collection.forEach(this._safeEvent(),function(handlerItems){cov_2jbocvxgr7.f[26]++;cov_2jbocvxgr7.s[127]++;self._spliceMatches(handlerItems,matchHandler);});};/**
	 * Unbind event by object(name: handler pair object or context object)
	 * @param {object} obj - context or {name: handler} pair object
	 * @param {function} handler - handler function
	 * @private
	 */cov_2jbocvxgr7.s[128]++;CustomEvents.prototype._offByObject=function(obj,handler){cov_2jbocvxgr7.f[27]++;var self=(cov_2jbocvxgr7.s[129]++,this);var matchFunc;cov_2jbocvxgr7.s[130]++;if(this._indexOfContext(obj)<0){cov_2jbocvxgr7.b[21][0]++;cov_2jbocvxgr7.s[131]++;collection.forEach(obj,function(func,name){cov_2jbocvxgr7.f[28]++;cov_2jbocvxgr7.s[132]++;self.off(name,func);});}else{cov_2jbocvxgr7.b[21][1]++;cov_2jbocvxgr7.s[133]++;if(type.isString(handler)){cov_2jbocvxgr7.b[22][0]++;cov_2jbocvxgr7.s[134]++;matchFunc=this._matchContext(obj);cov_2jbocvxgr7.s[135]++;self._spliceMatches(this._safeEvent(handler),matchFunc);}else{cov_2jbocvxgr7.b[22][1]++;cov_2jbocvxgr7.s[136]++;if(type.isFunction(handler)){cov_2jbocvxgr7.b[23][0]++;cov_2jbocvxgr7.s[137]++;matchFunc=this._matchHandlerAndContext(handler,obj);cov_2jbocvxgr7.s[138]++;collection.forEach(this._safeEvent(),function(handlerItems){cov_2jbocvxgr7.f[29]++;cov_2jbocvxgr7.s[139]++;self._spliceMatches(handlerItems,matchFunc);});}else{cov_2jbocvxgr7.b[23][1]++;cov_2jbocvxgr7.s[140]++;matchFunc=this._matchContext(obj);cov_2jbocvxgr7.s[141]++;collection.forEach(this._safeEvent(),function(handlerItems){cov_2jbocvxgr7.f[30]++;cov_2jbocvxgr7.s[142]++;self._spliceMatches(handlerItems,matchFunc);});}}}};/**
	 * Unbind custom events
	 * @param {(string|object|function)} eventName - event name or context or
	 *  {name: handler} pair object or handler function
	 * @param {(function)} handler - handler function
	 * @example
	 * //-- #1. Get Module --//
	 * var CustomEvents = require('tui-code-snippet').CustomEvents; // node, commonjs
	 * var CustomEvents = tui.util.CustomEvents; // distribution file
	 *
	 * //-- #2. Use property --//
	 * // # 2.1 off by event name
	 * CustomEvents.off('onload');
	 *
	 * // # 2.2 off by event name and handler
	 * CustomEvents.off('play', handler);
	 *
	 * // # 2.3 off by handler
	 * CustomEvents.off(handler);
	 *
	 * // # 2.4 off by context
	 * CustomEvents.off(myObj);
	 *
	 * // # 2.5 off by context and handler
	 * CustomEvents.off(myObj, handler);
	 *
	 * // # 2.6 off by context and event name
	 * CustomEvents.off(myObj, 'onload');
	 *
	 * // # 2.7 off by an Object.<string, function> that is {eventName: handler}
	 * CustomEvents.off({
	 *   'play': handler,
	 *   'pause': handler2
	 * });
	 *
	 * // # 2.8 off the all events
	 * CustomEvents.off();
	 */cov_2jbocvxgr7.s[143]++;CustomEvents.prototype.off=function(eventName,handler){cov_2jbocvxgr7.f[31]++;cov_2jbocvxgr7.s[144]++;if(type.isString(eventName)){cov_2jbocvxgr7.b[24][0]++;cov_2jbocvxgr7.s[145]++;// [syntax 1, 2]
	this._offByEventName(eventName,handler);}else{cov_2jbocvxgr7.b[24][1]++;cov_2jbocvxgr7.s[146]++;if(!arguments.length){cov_2jbocvxgr7.b[25][0]++;cov_2jbocvxgr7.s[147]++;// [syntax 8]
	this.events={};cov_2jbocvxgr7.s[148]++;this.contexts=[];}else{cov_2jbocvxgr7.b[25][1]++;cov_2jbocvxgr7.s[149]++;if(type.isFunction(eventName)){cov_2jbocvxgr7.b[26][0]++;cov_2jbocvxgr7.s[150]++;// [syntax 3]
	this._offByHandler(eventName);}else{cov_2jbocvxgr7.b[26][1]++;cov_2jbocvxgr7.s[151]++;if(type.isObject(eventName)){cov_2jbocvxgr7.b[27][0]++;cov_2jbocvxgr7.s[152]++;// [syntax 4, 5, 6]
	this._offByObject(eventName,handler);}else{cov_2jbocvxgr7.b[27][1]++;}}}}};/**
	 * Fire custom event
	 * @param {string} eventName - name of custom event
	 */cov_2jbocvxgr7.s[153]++;CustomEvents.prototype.fire=function(eventName){cov_2jbocvxgr7.f[32]++;cov_2jbocvxgr7.s[154]++;// eslint-disable-line
	this.invoke.apply(this,arguments);};/**
	 * Fire a event and returns the result of operation 'boolean AND' with all
	 *  listener's results.
	 *
	 * So, It is different from {@link CustomEvents#fire}.
	 *
	 * In service code, use this as a before event in component level usually
	 *  for notifying that the event is cancelable.
	 * @param {string} eventName - Custom event name
	 * @param {...*} data - Data for event
	 * @returns {boolean} The result of operation 'boolean AND'
	 * @example
	 * var map = new Map();
	 * map.on({
	 *     'beforeZoom': function() {
	 *         // It should cancel the 'zoom' event by some conditions.
	 *         if (that.disabled && this.getState()) {
	 *             return false;
	 *         }
	 *         return true;
	 *     }
	 * });
	 *
	 * if (this.invoke('beforeZoom')) {    // check the result of 'beforeZoom'
	 *     // if true,
	 *     // doSomething
	 * }
	 */cov_2jbocvxgr7.s[155]++;CustomEvents.prototype.invoke=function(eventName){cov_2jbocvxgr7.f[33]++;var events,args,index,item;cov_2jbocvxgr7.s[156]++;if(!this.hasListener(eventName)){cov_2jbocvxgr7.b[28][0]++;cov_2jbocvxgr7.s[157]++;return true;}else{cov_2jbocvxgr7.b[28][1]++;}cov_2jbocvxgr7.s[158]++;events=this._safeEvent(eventName);cov_2jbocvxgr7.s[159]++;args=Array.prototype.slice.call(arguments,1);cov_2jbocvxgr7.s[160]++;index=0;cov_2jbocvxgr7.s[161]++;while(events[index]){cov_2jbocvxgr7.s[162]++;item=events[index];cov_2jbocvxgr7.s[163]++;if(item.handler.apply(item.context,args)===false){cov_2jbocvxgr7.b[29][0]++;cov_2jbocvxgr7.s[164]++;return false;}else{cov_2jbocvxgr7.b[29][1]++;}cov_2jbocvxgr7.s[165]++;index+=1;}cov_2jbocvxgr7.s[166]++;return true;};/**
	 * Return whether at least one of the handlers is registered in the given
	 *  event name.
	 * @param {string} eventName - Custom event name
	 * @returns {boolean} Is there at least one handler in event name?
	 */cov_2jbocvxgr7.s[167]++;CustomEvents.prototype.hasListener=function(eventName){cov_2jbocvxgr7.f[34]++;cov_2jbocvxgr7.s[168]++;return this.getListenerLength(eventName)>0;};/**
	 * Return a count of events registered.
	 * @param {string} eventName - Custom event name
	 * @returns {number} number of event
	 */cov_2jbocvxgr7.s[169]++;CustomEvents.prototype.getListenerLength=function(eventName){cov_2jbocvxgr7.f[35]++;var events=(cov_2jbocvxgr7.s[170]++,this._safeEvent(eventName));cov_2jbocvxgr7.s[171]++;return events.length;};cov_2jbocvxgr7.s[172]++;module.exports=CustomEvents;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview This module provides a Enum Constructor.
	 * @author NHN Ent.
	 *         FE Development Lab <dl_javascript@nhnent.com>
	 * @example
	 * // node, commonjs
	 * var Enum = require('tui-code-snippet').Enum;
	 * @example
	 * // distribution file, script
	 * <script src='path-to/tui-code-snippt.js'></script>
	 * <script>
	 * var Enum = tui.util.Enum;
	 * <script>
	 */'use strict';var cov_1t9l375ydj=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/enum.js',hash='625f2e2779f0ab26e5a4d5f75d0b5fd27b6e726c',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/enum.js',statementMap:{'0':{start:{line:18,column:17},end:{line:18,column:40}},'1':{start:{line:19,column:11},end:{line:19,column:28}},'2':{start:{line:26,column:31},end:{line:34,column:4}},'3':{start:{line:27,column:4},end:{line:33,column:5}},'4':{start:{line:28,column:8},end:{line:28,column:43}},'5':{start:{line:30,column:8},end:{line:30,column:20}},'6':{start:{line:32,column:8},end:{line:32,column:21}},'7':{start:{line:41,column:16},end:{line:41,column:17}},'8':{start:{line:77,column:4},end:{line:79,column:5}},'9':{start:{line:78,column:8},end:{line:78,column:40}},'10':{start:{line:86,column:0},end:{line:96,column:2}},'11':{start:{line:87,column:15},end:{line:87,column:19}},'12':{start:{line:89,column:4},end:{line:91,column:5}},'13':{start:{line:90,column:8},end:{line:90,column:49}},'14':{start:{line:93,column:4},end:{line:95,column:7}},'15':{start:{line:94,column:8},end:{line:94,column:28}},'16':{start:{line:103,column:0},end:{line:116,column:2}},'17':{start:{line:104,column:15},end:{line:104,column:19}},'18':{start:{line:107,column:4},end:{line:113,column:7}},'19':{start:{line:108,column:8},end:{line:112,column:9}},'20':{start:{line:109,column:12},end:{line:109,column:29}},'21':{start:{line:111,column:12},end:{line:111,column:25}},'22':{start:{line:115,column:4},end:{line:115,column:22}},'23':{start:{line:123,column:0},end:{line:140,column:2}},'24':{start:{line:126,column:4},end:{line:139,column:5}},'25':{start:{line:127,column:8},end:{line:127,column:38}},'26':{start:{line:129,column:8},end:{line:138,column:9}},'27':{start:{line:130,column:12},end:{line:135,column:15}},'28':{start:{line:137,column:12},end:{line:137,column:31}},'29':{start:{line:147,column:0},end:{line:154,column:2}},'30':{start:{line:150,column:4},end:{line:150,column:22}},'31':{start:{line:151,column:4},end:{line:151,column:19}},'32':{start:{line:153,column:4},end:{line:153,column:17}},'33':{start:{line:162,column:0},end:{line:164,column:2}},'34':{start:{line:163,column:4},end:{line:163,column:36}},'35':{start:{line:166,column:0},end:{line:166,column:22}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:26,column:32},end:{line:26,column:33}},loc:{start:{line:26,column:43},end:{line:34,column:1}},line:26},'1':{name:'Enum',decl:{start:{line:76,column:9},end:{line:76,column:13}},loc:{start:{line:76,column:24},end:{line:80,column:1}},line:76},'2':{name:'(anonymous_2)',decl:{start:{line:86,column:21},end:{line:86,column:22}},loc:{start:{line:86,column:40},end:{line:96,column:1}},line:86},'3':{name:'itemListIteratee',decl:{start:{line:93,column:42},end:{line:93,column:58}},loc:{start:{line:93,column:65},end:{line:95,column:5}},line:93},'4':{name:'(anonymous_4)',decl:{start:{line:103,column:25},end:{line:103,column:26}},loc:{start:{line:103,column:41},end:{line:116,column:1}},line:103},'5':{name:'(anonymous_5)',decl:{start:{line:107,column:29},end:{line:107,column:30}},loc:{start:{line:107,column:54},end:{line:113,column:5}},line:107},'6':{name:'(anonymous_6)',decl:{start:{line:123,column:26},end:{line:123,column:27}},loc:{start:{line:123,column:41},end:{line:140,column:1}},line:123},'7':{name:'(anonymous_7)',decl:{start:{line:147,column:32},end:{line:147,column:33}},loc:{start:{line:147,column:43},end:{line:154,column:1}},line:147},'8':{name:'(anonymous_8)',decl:{start:{line:162,column:29},end:{line:162,column:30}},loc:{start:{line:162,column:43},end:{line:164,column:1}},line:162}},branchMap:{'0':{loc:{start:{line:77,column:4},end:{line:79,column:5}},type:'if',locations:[{start:{line:77,column:4},end:{line:79,column:5}},{start:{line:77,column:4},end:{line:79,column:5}}],line:77},'1':{loc:{start:{line:89,column:4},end:{line:91,column:5}},type:'if',locations:[{start:{line:89,column:4},end:{line:91,column:5}},{start:{line:89,column:4},end:{line:91,column:5}}],line:89},'2':{loc:{start:{line:108,column:8},end:{line:112,column:9}},type:'if',locations:[{start:{line:108,column:8},end:{line:112,column:9}},{start:{line:108,column:8},end:{line:112,column:9}}],line:108},'3':{loc:{start:{line:108,column:12},end:{line:108,column:56}},type:'binary-expr',locations:[{start:{line:108,column:12},end:{line:108,column:33}},{start:{line:108,column:37},end:{line:108,column:56}}],line:108},'4':{loc:{start:{line:126,column:4},end:{line:139,column:5}},type:'if',locations:[{start:{line:126,column:4},end:{line:139,column:5}},{start:{line:126,column:4},end:{line:139,column:5}}],line:126},'5':{loc:{start:{line:129,column:8},end:{line:138,column:9}},type:'if',locations:[{start:{line:129,column:8},end:{line:138,column:9}},{start:{line:129,column:8},end:{line:138,column:9}}],line:129}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0,'34':0,'35':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0],'5':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var collection=(cov_1t9l375ydj.s[0]++,__webpack_require__(4));var type=(cov_1t9l375ydj.s[1]++,__webpack_require__(2));/**
	 * Check whether the defineProperty() method is supported.
	 * @type {boolean}
	 * @ignore
	 */var isSupportDefinedProperty=(cov_1t9l375ydj.s[2]++,function(){cov_1t9l375ydj.f[0]++;cov_1t9l375ydj.s[3]++;try{cov_1t9l375ydj.s[4]++;Object.defineProperty({},'x',{});cov_1t9l375ydj.s[5]++;return true;}catch(e){cov_1t9l375ydj.s[6]++;return false;}}());/**
	 * A unique value of a constant.
	 * @type {number}
	 * @ignore
	 */var enumValue=(cov_1t9l375ydj.s[7]++,0);/**
	 * Make a constant-list that has unique values.<br>
	 * In modern browsers (except IE8 and lower),<br>
	 *  a value defined once can not be changed.
	 *
	 * @param {...string|string[]} itemList Constant-list (An array of string is available)
	 * @class
	 * @memberof tui.util
	 * @example
	 * //-- #1. Get Module --//
	 * var Enum = require('tui-code-snippet').Enum; // node, commonjs
	 * var Enum = tui.util.Enum; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var MYENUM = new Enum('TYPE1', 'TYPE2');
	 * var MYENUM2 = new Enum(['TYPE1', 'TYPE2']);
	 *
	 * //usage
	 * if (value === MYENUM.TYPE1) {
	 *      ....
	 * }
	 *
	 * //add (If a duplicate name is inputted, will be disregarded.)
	 * MYENUM.set('TYPE3', 'TYPE4');
	 *
	 * //get name of a constant by a value
	 * MYENUM.getName(MYENUM.TYPE1); // 'TYPE1'
	 *
	 * // In modern browsers (except IE8 and lower), a value can not be changed in constants.
	 * var originalValue = MYENUM.TYPE1;
	 * MYENUM.TYPE1 = 1234; // maybe TypeError
	 * MYENUM.TYPE1 === originalValue; // true
	 **/function Enum(itemList){cov_1t9l375ydj.f[1]++;cov_1t9l375ydj.s[8]++;if(itemList){cov_1t9l375ydj.b[0][0]++;cov_1t9l375ydj.s[9]++;this.set.apply(this,arguments);}else{cov_1t9l375ydj.b[0][1]++;}}/**
	 * Define a constants-list
	 * @param {...string|string[]} itemList Constant-list (An array of string is available)
	 */cov_1t9l375ydj.s[10]++;Enum.prototype.set=function(itemList){cov_1t9l375ydj.f[2]++;var self=(cov_1t9l375ydj.s[11]++,this);cov_1t9l375ydj.s[12]++;if(!type.isArray(itemList)){cov_1t9l375ydj.b[1][0]++;cov_1t9l375ydj.s[13]++;itemList=collection.toArray(arguments);}else{cov_1t9l375ydj.b[1][1]++;}cov_1t9l375ydj.s[14]++;collection.forEach(itemList,function itemListIteratee(item){cov_1t9l375ydj.f[3]++;cov_1t9l375ydj.s[15]++;self._addItem(item);});};/**
	 * Return a key of the constant.
	 * @param {number} value A value of the constant.
	 * @returns {string|undefined} Key of the constant.
	 */cov_1t9l375ydj.s[16]++;Enum.prototype.getName=function(value){cov_1t9l375ydj.f[4]++;var self=(cov_1t9l375ydj.s[17]++,this);var foundedKey;cov_1t9l375ydj.s[18]++;collection.forEach(this,function(itemValue,key){cov_1t9l375ydj.f[5]++;cov_1t9l375ydj.s[19]++;// eslint-disable-line consistent-return
	if((cov_1t9l375ydj.b[3][0]++,self._isEnumItem(key))&&(cov_1t9l375ydj.b[3][1]++,value===itemValue)){cov_1t9l375ydj.b[2][0]++;cov_1t9l375ydj.s[20]++;foundedKey=key;cov_1t9l375ydj.s[21]++;return false;}else{cov_1t9l375ydj.b[2][1]++;}});cov_1t9l375ydj.s[22]++;return foundedKey;};/**
	 * Create a constant.
	 * @private
	 * @param {string} name Constant name. (It will be a key of a constant)
	 */cov_1t9l375ydj.s[23]++;Enum.prototype._addItem=function(name){cov_1t9l375ydj.f[6]++;var value;cov_1t9l375ydj.s[24]++;if(!this.hasOwnProperty(name)){cov_1t9l375ydj.b[4][0]++;cov_1t9l375ydj.s[25]++;value=this._makeEnumValue();cov_1t9l375ydj.s[26]++;if(isSupportDefinedProperty){cov_1t9l375ydj.b[5][0]++;cov_1t9l375ydj.s[27]++;Object.defineProperty(this,name,{enumerable:true,configurable:false,writable:false,value:value});}else{cov_1t9l375ydj.b[5][1]++;cov_1t9l375ydj.s[28]++;this[name]=value;}}else{cov_1t9l375ydj.b[4][1]++;}};/**
	 * Return a unique value for assigning to a constant.
	 * @private
	 * @returns {number} A unique value
	 */cov_1t9l375ydj.s[29]++;Enum.prototype._makeEnumValue=function(){cov_1t9l375ydj.f[7]++;var value;cov_1t9l375ydj.s[30]++;value=enumValue;cov_1t9l375ydj.s[31]++;enumValue+=1;cov_1t9l375ydj.s[32]++;return value;};/**
	 * Return whether a constant from the given key is in instance or not.
	 * @param {string} key - A constant key
	 * @returns {boolean} Result
	 * @private
	 */cov_1t9l375ydj.s[33]++;Enum.prototype._isEnumItem=function(key){cov_1t9l375ydj.f[8]++;cov_1t9l375ydj.s[34]++;return type.isNumber(this[key]);};cov_1t9l375ydj.s[35]++;module.exports=Enum;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview
	 *  Implements the ExMap (Extended Map) object.
	 * @author NHN Ent.
	 *         FE Development Lab <dl_javascript@nhnent.com>
	 */'use strict';var cov_24uptzoenj=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/exMap.js',hash='86e6342c9c9c9e71120d45c470b8622c3104bd15',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/exMap.js',statementMap:{'0':{start:{line:10,column:17},end:{line:10,column:40}},'1':{start:{line:11,column:10},end:{line:11,column:26}},'2':{start:{line:14,column:21},end:{line:14,column:75}},'3':{start:{line:15,column:23},end:{line:15,column:42}},'4':{start:{line:35,column:4},end:{line:35,column:34}},'5':{start:{line:36,column:4},end:{line:36,column:31}},'6':{start:{line:39,column:0},end:{line:43,column:3}},'7':{start:{line:40,column:4},end:{line:42,column:6}},'8':{start:{line:41,column:8},end:{line:41,column:59}},'9':{start:{line:45,column:0},end:{line:52,column:3}},'10':{start:{line:46,column:4},end:{line:51,column:6}},'11':{start:{line:47,column:21},end:{line:47,column:64}},'12':{start:{line:48,column:8},end:{line:48,column:35}},'13':{start:{line:50,column:8},end:{line:50,column:22}},'14':{start:{line:54,column:0},end:{line:59,column:2}},'15':{start:{line:55,column:4},end:{line:55,column:46}},'16':{start:{line:56,column:4},end:{line:56,column:31}},'17':{start:{line:58,column:4},end:{line:58,column:16}},'18':{start:{line:65,column:0},end:{line:69,column:2}},'19':{start:{line:66,column:4},end:{line:68,column:13}},'20':{start:{line:67,column:8},end:{line:67,column:29}},'21':{start:{line:75,column:0},end:{line:79,column:2}},'22':{start:{line:76,column:4},end:{line:78,column:13}},'23':{start:{line:77,column:8},end:{line:77,column:28}},'24':{start:{line:85,column:0},end:{line:89,column:2}},'25':{start:{line:86,column:4},end:{line:88,column:13}},'26':{start:{line:87,column:8},end:{line:87,column:29}},'27':{start:{line:98,column:0},end:{line:108,column:2}},'28':{start:{line:99,column:19},end:{line:99,column:30}},'29':{start:{line:101,column:4},end:{line:105,column:7}},'30':{start:{line:102,column:8},end:{line:104,column:9}},'31':{start:{line:103,column:12},end:{line:103,column:37}},'32':{start:{line:107,column:4},end:{line:107,column:20}},'33':{start:{line:110,column:0},end:{line:110,column:23}}},fnMap:{'0':{name:'ExMap',decl:{start:{line:34,column:9},end:{line:34,column:14}},loc:{start:{line:34,column:25},end:{line:37,column:1}},line:34},'1':{name:'(anonymous_1)',decl:{start:{line:39,column:40},end:{line:39,column:41}},loc:{start:{line:39,column:55},end:{line:43,column:1}},line:39},'2':{name:'(anonymous_2)',decl:{start:{line:40,column:28},end:{line:40,column:29}},loc:{start:{line:40,column:39},end:{line:42,column:5}},line:40},'3':{name:'(anonymous_3)',decl:{start:{line:45,column:42},end:{line:45,column:43}},loc:{start:{line:45,column:57},end:{line:52,column:1}},line:45},'4':{name:'(anonymous_4)',decl:{start:{line:46,column:28},end:{line:46,column:29}},loc:{start:{line:46,column:39},end:{line:51,column:5}},line:46},'5':{name:'(anonymous_5)',decl:{start:{line:54,column:22},end:{line:54,column:23}},loc:{start:{line:54,column:33},end:{line:59,column:1}},line:54},'6':{name:'(anonymous_6)',decl:{start:{line:65,column:28},end:{line:65,column:29}},loc:{start:{line:65,column:45},end:{line:69,column:1}},line:65},'7':{name:'(anonymous_7)',decl:{start:{line:66,column:44},end:{line:66,column:45}},loc:{start:{line:66,column:65},end:{line:68,column:5}},line:66},'8':{name:'(anonymous_8)',decl:{start:{line:75,column:31},end:{line:75,column:32}},loc:{start:{line:75,column:46},end:{line:79,column:1}},line:75},'9':{name:'(anonymous_9)',decl:{start:{line:76,column:34},end:{line:76,column:35}},loc:{start:{line:76,column:48},end:{line:78,column:5}},line:76},'10':{name:'(anonymous_10)',decl:{start:{line:85,column:24},end:{line:85,column:25}},loc:{start:{line:85,column:38},end:{line:89,column:1}},line:85},'11':{name:'(anonymous_11)',decl:{start:{line:86,column:16},end:{line:86,column:17}},loc:{start:{line:86,column:37},end:{line:88,column:5}},line:86},'12':{name:'(anonymous_12)',decl:{start:{line:98,column:25},end:{line:98,column:26}},loc:{start:{line:98,column:45},end:{line:108,column:1}},line:98},'13':{name:'(anonymous_13)',decl:{start:{line:101,column:17},end:{line:101,column:18}},loc:{start:{line:101,column:38},end:{line:105,column:5}},line:101}},branchMap:{'0':{loc:{start:{line:102,column:8},end:{line:104,column:9}},type:'if',locations:[{start:{line:102,column:8},end:{line:104,column:9}},{start:{line:102,column:8},end:{line:104,column:9}}],line:102}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0},b:{'0':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var collection=(cov_24uptzoenj.s[0]++,__webpack_require__(4));var Map=(cov_24uptzoenj.s[1]++,__webpack_require__(18));// Caching tui.util for performance enhancing
	var mapAPIsForRead=(cov_24uptzoenj.s[2]++,['get','has','forEach','keys','values','entries']);var mapAPIsForDelete=(cov_24uptzoenj.s[3]++,['delete','clear']);/**
	 * The ExMap object is Extended Version of the tui.util.Map object.<br>
	 * and added some useful feature to make it easy to manage the Map object.
	 * @constructor
	 * @param {Array} initData - Array of key-value pairs (2-element Arrays).
	 *      Each key-value pair will be added to the new Map
	 * @memberof tui.util
	 * @example
	 * // node, commonjs
	 * var ExMap = require('tui-code-snippet').ExMap;
	 * @example
	 * // distribution file, script
	 * <script src='path-to/tui-code-snippt.js'></script>
	 * <script>
	 * var ExMap = tui.util.ExMap;
	 * <script>
	 */function ExMap(initData){cov_24uptzoenj.f[0]++;cov_24uptzoenj.s[4]++;this._map=new Map(initData);cov_24uptzoenj.s[5]++;this.size=this._map.size;}cov_24uptzoenj.s[6]++;collection.forEachArray(mapAPIsForRead,function(name){cov_24uptzoenj.f[1]++;cov_24uptzoenj.s[7]++;ExMap.prototype[name]=function(){cov_24uptzoenj.f[2]++;cov_24uptzoenj.s[8]++;return this._map[name].apply(this._map,arguments);};});cov_24uptzoenj.s[9]++;collection.forEachArray(mapAPIsForDelete,function(name){cov_24uptzoenj.f[3]++;cov_24uptzoenj.s[10]++;ExMap.prototype[name]=function(){cov_24uptzoenj.f[4]++;var result=(cov_24uptzoenj.s[11]++,this._map[name].apply(this._map,arguments));cov_24uptzoenj.s[12]++;this.size=this._map.size;cov_24uptzoenj.s[13]++;return result;};});cov_24uptzoenj.s[14]++;ExMap.prototype.set=function(){cov_24uptzoenj.f[5]++;cov_24uptzoenj.s[15]++;this._map.set.apply(this._map,arguments);cov_24uptzoenj.s[16]++;this.size=this._map.size;cov_24uptzoenj.s[17]++;return this;};/**
	 * Sets all of the key-value pairs in the specified object to the Map object.
	 * @param  {Object} object - Plain object that has a key-value pair
	 */cov_24uptzoenj.s[18]++;ExMap.prototype.setObject=function(object){cov_24uptzoenj.f[6]++;cov_24uptzoenj.s[19]++;collection.forEachOwnProperties(object,function(value,key){cov_24uptzoenj.f[7]++;cov_24uptzoenj.s[20]++;this.set(key,value);},this);};/**
	 * Removes the elements associated with keys in the specified array.
	 * @param  {Array} keys - Array that contains keys of the element to remove
	 */cov_24uptzoenj.s[21]++;ExMap.prototype.deleteByKeys=function(keys){cov_24uptzoenj.f[8]++;cov_24uptzoenj.s[22]++;collection.forEachArray(keys,function(key){cov_24uptzoenj.f[9]++;cov_24uptzoenj.s[23]++;this['delete'](key);},this);};/**
	 * Sets all of the key-value pairs in the specified Map object to this Map object.
	 * @param  {Map} map - Map object to be merged into this Map object
	 */cov_24uptzoenj.s[24]++;ExMap.prototype.merge=function(map){cov_24uptzoenj.f[10]++;cov_24uptzoenj.s[25]++;map.forEach(function(value,key){cov_24uptzoenj.f[11]++;cov_24uptzoenj.s[26]++;this.set(key,value);},this);};/**
	 * Looks through each key-value pair in the map and returns the new ExMap object of
	 * all key-value pairs that pass a truth test implemented by the provided function.
	 * @param  {function} predicate - Function to test each key-value pair of the Map object.<br>
	 *      Invoked with arguments (value, key). Return true to keep the element, false otherwise.
	 * @returns {ExMap} A new ExMap object
	 */cov_24uptzoenj.s[27]++;ExMap.prototype.filter=function(predicate){cov_24uptzoenj.f[12]++;var filtered=(cov_24uptzoenj.s[28]++,new ExMap());cov_24uptzoenj.s[29]++;this.forEach(function(value,key){cov_24uptzoenj.f[13]++;cov_24uptzoenj.s[30]++;if(predicate(value,key)){cov_24uptzoenj.b[0][0]++;cov_24uptzoenj.s[31]++;filtered.set(key,value);}else{cov_24uptzoenj.b[0][1]++;}});cov_24uptzoenj.s[32]++;return filtered;};cov_24uptzoenj.s[33]++;module.exports=ExMap;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview
	 *  Implements the Map object.
	 * @author NHN Ent.
	 *         FE Development Lab <dl_javascript@nhnent.com>
	 */'use strict';var cov_1dbq5r9sza=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/map.js',hash='809e2ff5ec4086e9cf580493d841cb7004acf876',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/map.js',statementMap:{'0':{start:{line:11,column:17},end:{line:11,column:40}},'1':{start:{line:12,column:11},end:{line:12,column:28}},'2':{start:{line:13,column:12},end:{line:13,column:30}},'3':{start:{line:14,column:14},end:{line:14,column:34}},'4':{start:{line:15,column:11},end:{line:15,column:28}},'5':{start:{line:24,column:25},end:{line:24,column:27}},'6':{start:{line:33,column:19},end:{line:33,column:21}},'7':{start:{line:45,column:4},end:{line:45,column:22}},'8':{start:{line:46,column:4},end:{line:46,column:36}},'9':{start:{line:47,column:4},end:{line:47,column:37}},'10':{start:{line:48,column:4},end:{line:48,column:21}},'11':{start:{line:49,column:4},end:{line:49,column:23}},'12':{start:{line:56,column:0},end:{line:70,column:2}},'13':{start:{line:57,column:15},end:{line:57,column:17}},'14':{start:{line:58,column:4},end:{line:60,column:86}},'15':{start:{line:59,column:8},end:{line:59,column:25}},'16':{start:{line:62,column:4},end:{line:67,column:5}},'17':{start:{line:63,column:8},end:{line:63,column:25}},'18':{start:{line:65,column:8},end:{line:65,column:26}},'19':{start:{line:66,column:8},end:{line:66,column:77}},'20':{start:{line:69,column:4},end:{line:69,column:16}},'21':{start:{line:99,column:4},end:{line:99,column:31}},'22':{start:{line:100,column:4},end:{line:100,column:30}},'23':{start:{line:101,column:4},end:{line:101,column:20}},'24':{start:{line:103,column:4},end:{line:105,column:5}},'25':{start:{line:104,column:8},end:{line:104,column:36}},'26':{start:{line:107,column:4},end:{line:107,column:18}},'27':{start:{line:116,column:0},end:{line:123,column:2}},'28':{start:{line:117,column:4},end:{line:119,column:5}},'29':{start:{line:118,column:8},end:{line:118,column:52}},'30':{start:{line:120,column:4},end:{line:122,column:13}},'31':{start:{line:121,column:8},end:{line:121,column:35}},'32':{start:{line:133,column:0},end:{line:135,column:2}},'33':{start:{line:134,column:4},end:{line:134,column:56}},'34':{start:{line:143,column:0},end:{line:157,column:2}},'35':{start:{line:144,column:17},end:{line:144,column:19}},'36':{start:{line:147,column:4},end:{line:154,column:5}},'37':{start:{line:148,column:8},end:{line:148,column:43}},'38':{start:{line:149,column:8},end:{line:151,column:9}},'39':{start:{line:150,column:12},end:{line:150,column:36}},'40':{start:{line:153,column:8},end:{line:153,column:48}},'41':{start:{line:156,column:4},end:{line:156,column:18}},'42':{start:{line:165,column:0},end:{line:174,column:2}},'43':{start:{line:166,column:20},end:{line:166,column:23}},'44':{start:{line:167,column:4},end:{line:171,column:5}},'45':{start:{line:168,column:8},end:{line:168,column:30}},'46':{start:{line:169,column:11},end:{line:171,column:5}},'47':{start:{line:170,column:8},end:{line:170,column:24}},'48':{start:{line:173,column:4},end:{line:173,column:21}},'49':{start:{line:182,column:0},end:{line:191,column:2}},'50':{start:{line:183,column:20},end:{line:183,column:23}},'51':{start:{line:184,column:4},end:{line:188,column:5}},'52':{start:{line:185,column:8},end:{line:185,column:39}},'53':{start:{line:186,column:11},end:{line:188,column:5}},'54':{start:{line:187,column:8},end:{line:187,column:33}},'55':{start:{line:190,column:4},end:{line:190,column:21}},'56':{start:{line:200,column:0},end:{line:211,column:2}},'57':{start:{line:201,column:4},end:{line:203,column:5}},'58':{start:{line:202,column:8},end:{line:202,column:42}},'59':{start:{line:205,column:4},end:{line:207,column:5}},'60':{start:{line:206,column:8},end:{line:206,column:42}},'61':{start:{line:208,column:4},end:{line:210,column:5}},'62':{start:{line:209,column:8},end:{line:209,column:46}},'63':{start:{line:220,column:0},end:{line:222,column:2}},'64':{start:{line:221,column:4},end:{line:221,column:54}},'65':{start:{line:231,column:0},end:{line:233,column:2}},'66':{start:{line:232,column:4},end:{line:232,column:74}},'67':{start:{line:243,column:0},end:{line:248,column:2}},'68':{start:{line:244,column:4},end:{line:247,column:6}},'69':{start:{line:256,column:0},end:{line:274,column:2}},'70':{start:{line:257,column:20},end:{line:257,column:43}},'71':{start:{line:258,column:19},end:{line:258,column:47}},'72':{start:{line:261,column:4},end:{line:264,column:5}},'73':{start:{line:262,column:8},end:{line:262,column:50}},'74':{start:{line:263,column:8},end:{line:263,column:23}},'75':{start:{line:265,column:4},end:{line:265,column:59}},'76':{start:{line:267,column:4},end:{line:271,column:5}},'77':{start:{line:268,column:8},end:{line:268,column:49}},'78':{start:{line:270,column:8},end:{line:270,column:53}},'79':{start:{line:273,column:4},end:{line:273,column:16}},'80':{start:{line:281,column:0},end:{line:286,column:2}},'81':{start:{line:282,column:20},end:{line:282,column:43}},'82':{start:{line:283,column:16},end:{line:283,column:47}},'83':{start:{line:285,column:4},end:{line:285,column:33}},'84':{start:{line:293,column:0},end:{line:295,column:2}},'85':{start:{line:294,column:4},end:{line:294,column:76}},'86':{start:{line:302,column:0},end:{line:304,column:2}},'87':{start:{line:303,column:4},end:{line:303,column:78}},'88':{start:{line:311,column:0},end:{line:313,column:2}},'89':{start:{line:312,column:4},end:{line:312,column:79}},'90':{start:{line:322,column:0},end:{line:324,column:2}},'91':{start:{line:323,column:4},end:{line:323,column:39}},'92':{start:{line:333,column:0},end:{line:352,column:2}},'93':{start:{line:336,column:4},end:{line:346,column:5}},'94':{start:{line:337,column:8},end:{line:340,column:9}},'95':{start:{line:338,column:12},end:{line:338,column:59}},'96':{start:{line:339,column:12},end:{line:339,column:46}},'97':{start:{line:342,column:8},end:{line:342,column:42}},'98':{start:{line:343,column:8},end:{line:345,column:9}},'99':{start:{line:344,column:12},end:{line:344,column:50}},'100':{start:{line:348,column:4},end:{line:351,column:5}},'101':{start:{line:349,column:8},end:{line:349,column:36}},'102':{start:{line:350,column:8},end:{line:350,column:23}},'103':{start:{line:360,column:0},end:{line:367,column:2}},'104':{start:{line:361,column:4},end:{line:361,column:30}},'105':{start:{line:362,column:4},end:{line:366,column:13}},'106':{start:{line:363,column:8},end:{line:365,column:9}},'107':{start:{line:364,column:12},end:{line:364,column:80}},'108':{start:{line:372,column:0},end:{line:374,column:2}},'109':{start:{line:373,column:4},end:{line:373,column:19}},'110':{start:{line:379,column:0},end:{line:387,column:5}},'111':{start:{line:380,column:4},end:{line:386,column:5}},'112':{start:{line:385,column:8},end:{line:385,column:25}},'113':{start:{line:389,column:0},end:{line:389,column:21}}},fnMap:{'0':{name:'MapIterator',decl:{start:{line:44,column:9},end:{line:44,column:20}},loc:{start:{line:44,column:40},end:{line:50,column:1}},line:44},'1':{name:'(anonymous_1)',decl:{start:{line:56,column:29},end:{line:56,column:30}},loc:{start:{line:56,column:40},end:{line:70,column:1}},line:56},'2':{name:'Map',decl:{start:{line:98,column:9},end:{line:98,column:12}},loc:{start:{line:98,column:23},end:{line:108,column:1}},line:98},'3':{name:'(anonymous_3)',decl:{start:{line:116,column:29},end:{line:116,column:30}},loc:{start:{line:116,column:48},end:{line:123,column:1}},line:116},'4':{name:'(anonymous_4)',decl:{start:{line:120,column:38},end:{line:120,column:39}},loc:{start:{line:120,column:53},end:{line:122,column:5}},line:120},'5':{name:'(anonymous_5)',decl:{start:{line:133,column:23},end:{line:133,column:24}},loc:{start:{line:133,column:39},end:{line:135,column:1}},line:133},'6':{name:'(anonymous_6)',decl:{start:{line:143,column:29},end:{line:143,column:30}},loc:{start:{line:143,column:43},end:{line:157,column:1}},line:143},'7':{name:'(anonymous_7)',decl:{start:{line:165,column:30},end:{line:165,column:31}},loc:{start:{line:165,column:44},end:{line:174,column:1}},line:165},'8':{name:'(anonymous_8)',decl:{start:{line:182,column:30},end:{line:182,column:31}},loc:{start:{line:182,column:44},end:{line:191,column:1}},line:182},'9':{name:'(anonymous_9)',decl:{start:{line:200,column:32},end:{line:200,column:33}},loc:{start:{line:200,column:56},end:{line:211,column:1}},line:200},'10':{name:'(anonymous_10)',decl:{start:{line:220,column:32},end:{line:220,column:33}},loc:{start:{line:220,column:56},end:{line:222,column:1}},line:220},'11':{name:'(anonymous_11)',decl:{start:{line:231,column:33},end:{line:231,column:34}},loc:{start:{line:231,column:57},end:{line:233,column:1}},line:231},'12':{name:'(anonymous_12)',decl:{start:{line:243,column:35},end:{line:243,column:36}},loc:{start:{line:243,column:62},end:{line:248,column:1}},line:243},'13':{name:'(anonymous_13)',decl:{start:{line:256,column:20},end:{line:256,column:21}},loc:{start:{line:256,column:41},end:{line:274,column:1}},line:256},'14':{name:'(anonymous_14)',decl:{start:{line:281,column:20},end:{line:281,column:21}},loc:{start:{line:281,column:34},end:{line:286,column:1}},line:281},'15':{name:'(anonymous_15)',decl:{start:{line:293,column:21},end:{line:293,column:22}},loc:{start:{line:293,column:32},end:{line:295,column:1}},line:293},'16':{name:'(anonymous_16)',decl:{start:{line:302,column:23},end:{line:302,column:24}},loc:{start:{line:302,column:34},end:{line:304,column:1}},line:302},'17':{name:'(anonymous_17)',decl:{start:{line:311,column:24},end:{line:311,column:25}},loc:{start:{line:311,column:35},end:{line:313,column:1}},line:311},'18':{name:'(anonymous_18)',decl:{start:{line:322,column:20},end:{line:322,column:21}},loc:{start:{line:322,column:34},end:{line:324,column:1}},line:322},'19':{name:'(anonymous_19)',decl:{start:{line:333,column:26},end:{line:333,column:27}},loc:{start:{line:333,column:40},end:{line:352,column:1}},line:333},'20':{name:'(anonymous_20)',decl:{start:{line:360,column:24},end:{line:360,column:25}},loc:{start:{line:360,column:52},end:{line:367,column:1}},line:360},'21':{name:'(anonymous_21)',decl:{start:{line:362,column:40},end:{line:362,column:41}},loc:{start:{line:362,column:54},end:{line:366,column:5}},line:362},'22':{name:'(anonymous_22)',decl:{start:{line:372,column:22},end:{line:372,column:23}},loc:{start:{line:372,column:33},end:{line:374,column:1}},line:372},'23':{name:'(anonymous_23)',decl:{start:{line:379,column:1},end:{line:379,column:2}},loc:{start:{line:379,column:12},end:{line:387,column:1}},line:379}},branchMap:{'0':{loc:{start:{line:60,column:13},end:{line:60,column:84}},type:'binary-expr',locations:[{start:{line:60,column:13},end:{line:60,column:54}},{start:{line:60,column:58},end:{line:60,column:84}}],line:60},'1':{loc:{start:{line:62,column:4},end:{line:67,column:5}},type:'if',locations:[{start:{line:62,column:4},end:{line:67,column:5}},{start:{line:62,column:4},end:{line:67,column:5}}],line:62},'2':{loc:{start:{line:103,column:4},end:{line:105,column:5}},type:'if',locations:[{start:{line:103,column:4},end:{line:105,column:5}},{start:{line:103,column:4},end:{line:105,column:5}}],line:103},'3':{loc:{start:{line:117,column:4},end:{line:119,column:5}},type:'if',locations:[{start:{line:117,column:4},end:{line:119,column:5}},{start:{line:117,column:4},end:{line:119,column:5}}],line:117},'4':{loc:{start:{line:134,column:11},end:{line:134,column:55}},type:'binary-expr',locations:[{start:{line:134,column:11},end:{line:134,column:36}},{start:{line:134,column:40},end:{line:134,column:55}}],line:134},'5':{loc:{start:{line:147,column:4},end:{line:154,column:5}},type:'if',locations:[{start:{line:147,column:4},end:{line:154,column:5}},{start:{line:147,column:4},end:{line:154,column:5}}],line:147},'6':{loc:{start:{line:149,column:8},end:{line:151,column:9}},type:'if',locations:[{start:{line:149,column:8},end:{line:151,column:9}},{start:{line:149,column:8},end:{line:151,column:9}}],line:149},'7':{loc:{start:{line:167,column:4},end:{line:171,column:5}},type:'if',locations:[{start:{line:167,column:4},end:{line:171,column:5}},{start:{line:167,column:4},end:{line:171,column:5}}],line:167},'8':{loc:{start:{line:169,column:11},end:{line:171,column:5}},type:'if',locations:[{start:{line:169,column:11},end:{line:171,column:5}},{start:{line:169,column:11},end:{line:171,column:5}}],line:169},'9':{loc:{start:{line:184,column:4},end:{line:188,column:5}},type:'if',locations:[{start:{line:184,column:4},end:{line:188,column:5}},{start:{line:184,column:4},end:{line:188,column:5}}],line:184},'10':{loc:{start:{line:186,column:11},end:{line:188,column:5}},type:'if',locations:[{start:{line:186,column:11},end:{line:188,column:5}},{start:{line:186,column:11},end:{line:188,column:5}}],line:186},'11':{loc:{start:{line:201,column:4},end:{line:203,column:5}},type:'if',locations:[{start:{line:201,column:4},end:{line:203,column:5}},{start:{line:201,column:4},end:{line:203,column:5}}],line:201},'12':{loc:{start:{line:205,column:4},end:{line:207,column:5}},type:'if',locations:[{start:{line:205,column:4},end:{line:207,column:5}},{start:{line:205,column:4},end:{line:207,column:5}}],line:205},'13':{loc:{start:{line:208,column:4},end:{line:210,column:5}},type:'if',locations:[{start:{line:208,column:4},end:{line:210,column:5}},{start:{line:208,column:4},end:{line:210,column:5}}],line:208},'14':{loc:{start:{line:261,column:4},end:{line:264,column:5}},type:'if',locations:[{start:{line:261,column:4},end:{line:264,column:5}},{start:{line:261,column:4},end:{line:264,column:5}}],line:261},'15':{loc:{start:{line:267,column:4},end:{line:271,column:5}},type:'if',locations:[{start:{line:267,column:4},end:{line:271,column:5}},{start:{line:267,column:4},end:{line:271,column:5}}],line:267},'16':{loc:{start:{line:285,column:11},end:{line:285,column:32}},type:'binary-expr',locations:[{start:{line:285,column:11},end:{line:285,column:16}},{start:{line:285,column:20},end:{line:285,column:32}}],line:285},'17':{loc:{start:{line:336,column:4},end:{line:346,column:5}},type:'if',locations:[{start:{line:336,column:4},end:{line:346,column:5}},{start:{line:336,column:4},end:{line:346,column:5}}],line:336},'18':{loc:{start:{line:337,column:8},end:{line:340,column:9}},type:'if',locations:[{start:{line:337,column:8},end:{line:340,column:9}},{start:{line:337,column:8},end:{line:340,column:9}}],line:337},'19':{loc:{start:{line:343,column:8},end:{line:345,column:9}},type:'if',locations:[{start:{line:343,column:8},end:{line:345,column:9}},{start:{line:343,column:8},end:{line:345,column:9}}],line:343},'20':{loc:{start:{line:348,column:4},end:{line:351,column:5}},type:'if',locations:[{start:{line:348,column:4},end:{line:351,column:5}},{start:{line:348,column:4},end:{line:351,column:5}}],line:348},'21':{loc:{start:{line:361,column:14},end:{line:361,column:29}},type:'binary-expr',locations:[{start:{line:361,column:14},end:{line:361,column:21}},{start:{line:361,column:25},end:{line:361,column:29}}],line:361},'22':{loc:{start:{line:363,column:8},end:{line:365,column:9}},type:'if',locations:[{start:{line:363,column:8},end:{line:365,column:9}},{start:{line:363,column:8},end:{line:365,column:9}}],line:363},'23':{loc:{start:{line:380,column:4},end:{line:386,column:5}},type:'if',locations:[{start:{line:380,column:4},end:{line:386,column:5}},{start:{line:380,column:4},end:{line:386,column:5}}],line:380},'24':{loc:{start:{line:380,column:8},end:{line:383,column:5}},type:'binary-expr',locations:[{start:{line:380,column:8},end:{line:380,column:18}},{start:{line:381,column:9},end:{line:381,column:24}},{start:{line:381,column:28},end:{line:381,column:49}},{start:{line:382,column:13},end:{line:382,column:27}},{start:{line:382,column:31},end:{line:382,column:52}}],line:380}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0,'34':0,'35':0,'36':0,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':0,'45':0,'46':0,'47':0,'48':0,'49':0,'50':0,'51':0,'52':0,'53':0,'54':0,'55':0,'56':0,'57':0,'58':0,'59':0,'60':0,'61':0,'62':0,'63':0,'64':0,'65':0,'66':0,'67':0,'68':0,'69':0,'70':0,'71':0,'72':0,'73':0,'74':0,'75':0,'76':0,'77':0,'78':0,'79':0,'80':0,'81':0,'82':0,'83':0,'84':0,'85':0,'86':0,'87':0,'88':0,'89':0,'90':0,'91':0,'92':0,'93':0,'94':0,'95':0,'96':0,'97':0,'98':0,'99':0,'100':0,'101':0,'102':0,'103':0,'104':0,'105':0,'106':0,'107':0,'108':0,'109':0,'110':0,'111':0,'112':0,'113':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0],'5':[0,0],'6':[0,0],'7':[0,0],'8':[0,0],'9':[0,0],'10':[0,0],'11':[0,0],'12':[0,0],'13':[0,0],'14':[0,0],'15':[0,0],'16':[0,0],'17':[0,0],'18':[0,0],'19':[0,0],'20':[0,0],'21':[0,0],'22':[0,0],'23':[0,0],'24':[0,0,0,0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var collection=(cov_1dbq5r9sza.s[0]++,__webpack_require__(4));var type=(cov_1dbq5r9sza.s[1]++,__webpack_require__(2));var array=(cov_1dbq5r9sza.s[2]++,__webpack_require__(3));var browser=(cov_1dbq5r9sza.s[3]++,__webpack_require__(9));var func=(cov_1dbq5r9sza.s[4]++,__webpack_require__(5));/**
	 * Using undefined for a key can be ambiguous if there's deleted item in the array,<br>
	 * which is also undefined when accessed by index.<br>
	 * So use this unique object as an undefined key to distinguish it from deleted keys.
	 * @private
	 * @constant
	 */var _KEY_FOR_UNDEFINED=(cov_1dbq5r9sza.s[5]++,{});/**
	 * For using NaN as a key, use this unique object as a NaN key.<br>
	 * This makes it easier and faster to compare an object with each keys in the array<br>
	 * through no exceptional comapring for NaN.
	 * @private
	 * @constant
	 */var _KEY_FOR_NAN=(cov_1dbq5r9sza.s[6]++,{});/**
	 * Constructor of MapIterator<br>
	 * Creates iterator object with new keyword.
	 * @constructor
	 * @param  {Array} keys - The array of keys in the map
	 * @param  {function} valueGetter - Function that returns certain value,
	 *      taking key and keyIndex as arguments.
	 * @ignore
	 */function MapIterator(keys,valueGetter){cov_1dbq5r9sza.f[0]++;cov_1dbq5r9sza.s[7]++;this._keys=keys;cov_1dbq5r9sza.s[8]++;this._valueGetter=valueGetter;cov_1dbq5r9sza.s[9]++;this._length=this._keys.length;cov_1dbq5r9sza.s[10]++;this._index=-1;cov_1dbq5r9sza.s[11]++;this._done=false;}/**
	 * Implementation of Iterator protocol.
	 * @returns {{done: boolean, value: *}} Object that contains done(boolean) and value.
	 */cov_1dbq5r9sza.s[12]++;MapIterator.prototype.next=function(){cov_1dbq5r9sza.f[1]++;var data=(cov_1dbq5r9sza.s[13]++,{});cov_1dbq5r9sza.s[14]++;do{cov_1dbq5r9sza.s[15]++;this._index+=1;}while((cov_1dbq5r9sza.b[0][0]++,type.isUndefined(this._keys[this._index]))&&(cov_1dbq5r9sza.b[0][1]++,this._index<this._length));cov_1dbq5r9sza.s[16]++;if(this._index>=this._length){cov_1dbq5r9sza.b[1][0]++;cov_1dbq5r9sza.s[17]++;data.done=true;}else{cov_1dbq5r9sza.b[1][1]++;cov_1dbq5r9sza.s[18]++;data.done=false;cov_1dbq5r9sza.s[19]++;data.value=this._valueGetter(this._keys[this._index],this._index);}cov_1dbq5r9sza.s[20]++;return data;};/**
	 * The Map object implements the ES6 Map specification as closely as possible.<br>
	 * For using objects and primitive values as keys, this object uses array internally.<br>
	 * So if the key is not a string, get(), set(), has(), delete() will operates in O(n),<br>
	 * and it can cause performance issues with a large dataset.
	 *
	 * Features listed below are not supported. (can't be implented without native support)
	 * - Map object is iterable<br>
	 * - Iterable object can be used as an argument of constructor
	 *
	 * If the browser supports full implementation of ES6 Map specification, native Map obejct
	 * will be used internally.
	 * @class
	 * @param  {Array} initData - Array of key-value pairs (2-element Arrays).
	 *      Each key-value pair will be added to the new Map
	 * @memberof tui.util
	 * @example
	 * // node, commonjs
	 * var Map = require('tui-code-snippet').Map;
	 * @example
	 * // distribution file, script
	 * <script src='path-to/tui-code-snippt.js'></script>
	 * <script>
	 * var Map = tui.util.Map;
	 * <script>
	 */function Map(initData){cov_1dbq5r9sza.f[2]++;cov_1dbq5r9sza.s[21]++;this._valuesForString={};cov_1dbq5r9sza.s[22]++;this._valuesForIndex={};cov_1dbq5r9sza.s[23]++;this._keys=[];cov_1dbq5r9sza.s[24]++;if(initData){cov_1dbq5r9sza.b[2][0]++;cov_1dbq5r9sza.s[25]++;this._setInitData(initData);}else{cov_1dbq5r9sza.b[2][1]++;}cov_1dbq5r9sza.s[26]++;this.size=0;}/* eslint-disable no-extend-native *//**
	 * Add all elements in the initData to the Map object.
	 * @private
	 * @param  {Array} initData - Array of key-value pairs to add to the Map object
	 */cov_1dbq5r9sza.s[27]++;Map.prototype._setInitData=function(initData){cov_1dbq5r9sza.f[3]++;cov_1dbq5r9sza.s[28]++;if(!type.isArray(initData)){cov_1dbq5r9sza.b[3][0]++;cov_1dbq5r9sza.s[29]++;throw new Error('Only Array is supported.');}else{cov_1dbq5r9sza.b[3][1]++;}cov_1dbq5r9sza.s[30]++;collection.forEachArray(initData,function(pair){cov_1dbq5r9sza.f[4]++;cov_1dbq5r9sza.s[31]++;this.set(pair[0],pair[1]);},this);};/**
	 * Returns true if the specified value is NaN.<br>
	 * For unsing NaN as a key, use this method to test equality of NaN<br>
	 * because === operator doesn't work for NaN.
	 * @private
	 * @param {*} value - Any object to be tested
	 * @returns {boolean} True if value is NaN, false otherwise.
	 */cov_1dbq5r9sza.s[32]++;Map.prototype._isNaN=function(value){cov_1dbq5r9sza.f[5]++;cov_1dbq5r9sza.s[33]++;return(cov_1dbq5r9sza.b[4][0]++,typeof value==='number')&&(cov_1dbq5r9sza.b[4][1]++,value!==value);// eslint-disable-line no-self-compare
	};/**
	 * Returns the index of the specified key.
	 * @private
	 * @param  {*} key - The key object to search for.
	 * @returns {number} The index of the specified key
	 */cov_1dbq5r9sza.s[34]++;Map.prototype._getKeyIndex=function(key){cov_1dbq5r9sza.f[6]++;var result=(cov_1dbq5r9sza.s[35]++,-1);var value;cov_1dbq5r9sza.s[36]++;if(type.isString(key)){cov_1dbq5r9sza.b[5][0]++;cov_1dbq5r9sza.s[37]++;value=this._valuesForString[key];cov_1dbq5r9sza.s[38]++;if(value){cov_1dbq5r9sza.b[6][0]++;cov_1dbq5r9sza.s[39]++;result=value.keyIndex;}else{cov_1dbq5r9sza.b[6][1]++;}}else{cov_1dbq5r9sza.b[5][1]++;cov_1dbq5r9sza.s[40]++;result=array.inArray(key,this._keys);}cov_1dbq5r9sza.s[41]++;return result;};/**
	 * Returns the original key of the specified key.
	 * @private
	 * @param  {*} key - key
	 * @returns {*} Original key
	 */cov_1dbq5r9sza.s[42]++;Map.prototype._getOriginKey=function(key){cov_1dbq5r9sza.f[7]++;var originKey=(cov_1dbq5r9sza.s[43]++,key);cov_1dbq5r9sza.s[44]++;if(key===_KEY_FOR_UNDEFINED){cov_1dbq5r9sza.b[7][0]++;cov_1dbq5r9sza.s[45]++;originKey=undefined;// eslint-disable-line no-undefined
	}else{cov_1dbq5r9sza.b[7][1]++;cov_1dbq5r9sza.s[46]++;if(key===_KEY_FOR_NAN){cov_1dbq5r9sza.b[8][0]++;cov_1dbq5r9sza.s[47]++;originKey=NaN;}else{cov_1dbq5r9sza.b[8][1]++;}}cov_1dbq5r9sza.s[48]++;return originKey;};/**
	 * Returns the unique key of the specified key.
	 * @private
	 * @param  {*} key - key
	 * @returns {*} Unique key
	 */cov_1dbq5r9sza.s[49]++;Map.prototype._getUniqueKey=function(key){cov_1dbq5r9sza.f[8]++;var uniqueKey=(cov_1dbq5r9sza.s[50]++,key);cov_1dbq5r9sza.s[51]++;if(type.isUndefined(key)){cov_1dbq5r9sza.b[9][0]++;cov_1dbq5r9sza.s[52]++;uniqueKey=_KEY_FOR_UNDEFINED;}else{cov_1dbq5r9sza.b[9][1]++;cov_1dbq5r9sza.s[53]++;if(this._isNaN(key)){cov_1dbq5r9sza.b[10][0]++;cov_1dbq5r9sza.s[54]++;uniqueKey=_KEY_FOR_NAN;}else{cov_1dbq5r9sza.b[10][1]++;}}cov_1dbq5r9sza.s[55]++;return uniqueKey;};/**
	 * Returns the value object of the specified key.
	 * @private
	 * @param  {*} key - The key of the value object to be returned
	 * @param  {number} keyIndex - The index of the key
	 * @returns {{keyIndex: number, origin: *}} Value object
	 */cov_1dbq5r9sza.s[56]++;Map.prototype._getValueObject=function(key,keyIndex){cov_1dbq5r9sza.f[9]++;cov_1dbq5r9sza.s[57]++;// eslint-disable-line consistent-return
	if(type.isString(key)){cov_1dbq5r9sza.b[11][0]++;cov_1dbq5r9sza.s[58]++;return this._valuesForString[key];}else{cov_1dbq5r9sza.b[11][1]++;}cov_1dbq5r9sza.s[59]++;if(type.isUndefined(keyIndex)){cov_1dbq5r9sza.b[12][0]++;cov_1dbq5r9sza.s[60]++;keyIndex=this._getKeyIndex(key);}else{cov_1dbq5r9sza.b[12][1]++;}cov_1dbq5r9sza.s[61]++;if(keyIndex>=0){cov_1dbq5r9sza.b[13][0]++;cov_1dbq5r9sza.s[62]++;return this._valuesForIndex[keyIndex];}else{cov_1dbq5r9sza.b[13][1]++;}};/**
	 * Returns the original value of the specified key.
	 * @private
	 * @param  {*} key - The key of the value object to be returned
	 * @param  {number} keyIndex - The index of the key
	 * @returns {*} Original value
	 */cov_1dbq5r9sza.s[63]++;Map.prototype._getOriginValue=function(key,keyIndex){cov_1dbq5r9sza.f[10]++;cov_1dbq5r9sza.s[64]++;return this._getValueObject(key,keyIndex).origin;};/**
	 * Returns key-value pair of the specified key.
	 * @private
	 * @param  {*} key - The key of the value object to be returned
	 * @param  {number} keyIndex - The index of the key
	 * @returns {Array} Key-value Pair
	 */cov_1dbq5r9sza.s[65]++;Map.prototype._getKeyValuePair=function(key,keyIndex){cov_1dbq5r9sza.f[11]++;cov_1dbq5r9sza.s[66]++;return[this._getOriginKey(key),this._getOriginValue(key,keyIndex)];};/**
	 * Creates the wrapper object of original value that contains a key index
	 * and returns it.
	 * @private
	 * @param  {type} origin - Original value
	 * @param  {type} keyIndex - Index of the key
	 * @returns {{keyIndex: number, origin: *}} Value object
	 */cov_1dbq5r9sza.s[67]++;Map.prototype._createValueObject=function(origin,keyIndex){cov_1dbq5r9sza.f[12]++;cov_1dbq5r9sza.s[68]++;return{keyIndex:keyIndex,origin:origin};};/**
	 * Sets the value for the key in the Map object.
	 * @param  {*} key - The key of the element to add to the Map object
	 * @param  {*} value - The value of the element to add to the Map object
	 * @returns {Map} The Map object
	 */cov_1dbq5r9sza.s[69]++;Map.prototype.set=function(key,value){cov_1dbq5r9sza.f[13]++;var uniqueKey=(cov_1dbq5r9sza.s[70]++,this._getUniqueKey(key));var keyIndex=(cov_1dbq5r9sza.s[71]++,this._getKeyIndex(uniqueKey));var valueObject;cov_1dbq5r9sza.s[72]++;if(keyIndex<0){cov_1dbq5r9sza.b[14][0]++;cov_1dbq5r9sza.s[73]++;keyIndex=this._keys.push(uniqueKey)-1;cov_1dbq5r9sza.s[74]++;this.size+=1;}else{cov_1dbq5r9sza.b[14][1]++;}cov_1dbq5r9sza.s[75]++;valueObject=this._createValueObject(value,keyIndex);cov_1dbq5r9sza.s[76]++;if(type.isString(key)){cov_1dbq5r9sza.b[15][0]++;cov_1dbq5r9sza.s[77]++;this._valuesForString[key]=valueObject;}else{cov_1dbq5r9sza.b[15][1]++;cov_1dbq5r9sza.s[78]++;this._valuesForIndex[keyIndex]=valueObject;}cov_1dbq5r9sza.s[79]++;return this;};/**
	 * Returns the value associated to the key, or undefined if there is none.
	 * @param  {*} key - The key of the element to return
	 * @returns {*} Element associated with the specified key
	 */cov_1dbq5r9sza.s[80]++;Map.prototype.get=function(key){cov_1dbq5r9sza.f[14]++;var uniqueKey=(cov_1dbq5r9sza.s[81]++,this._getUniqueKey(key));var value=(cov_1dbq5r9sza.s[82]++,this._getValueObject(uniqueKey));cov_1dbq5r9sza.s[83]++;return(cov_1dbq5r9sza.b[16][0]++,value)&&(cov_1dbq5r9sza.b[16][1]++,value.origin);};/**
	 * Returns a new Iterator object that contains the keys for each element
	 * in the Map object in insertion order.
	 * @returns {Iterator} A new Iterator object
	 */cov_1dbq5r9sza.s[84]++;Map.prototype.keys=function(){cov_1dbq5r9sza.f[15]++;cov_1dbq5r9sza.s[85]++;return new MapIterator(this._keys,func.bind(this._getOriginKey,this));};/**
	 * Returns a new Iterator object that contains the values for each element
	 * in the Map object in insertion order.
	 * @returns {Iterator} A new Iterator object
	 */cov_1dbq5r9sza.s[86]++;Map.prototype.values=function(){cov_1dbq5r9sza.f[16]++;cov_1dbq5r9sza.s[87]++;return new MapIterator(this._keys,func.bind(this._getOriginValue,this));};/**
	 * Returns a new Iterator object that contains the [key, value] pairs
	 * for each element in the Map object in insertion order.
	 * @returns {Iterator} A new Iterator object
	 */cov_1dbq5r9sza.s[88]++;Map.prototype.entries=function(){cov_1dbq5r9sza.f[17]++;cov_1dbq5r9sza.s[89]++;return new MapIterator(this._keys,func.bind(this._getKeyValuePair,this));};/**
	 * Returns a boolean asserting whether a value has been associated to the key
	 * in the Map object or not.
	 * @param  {*} key - The key of the element to test for presence
	 * @returns {boolean} True if an element with the specified key exists;
	 *          Otherwise false
	 */cov_1dbq5r9sza.s[90]++;Map.prototype.has=function(key){cov_1dbq5r9sza.f[18]++;cov_1dbq5r9sza.s[91]++;return!!this._getValueObject(key);};/**
	 * Removes the specified element from a Map object.
	 * @param {*} key - The key of the element to remove
	 * @function delete
	 * @memberof tui.util.Map.prototype
	 */// cannot use reserved keyword as a property name in IE8 and under.
	cov_1dbq5r9sza.s[92]++;Map.prototype['delete']=function(key){cov_1dbq5r9sza.f[19]++;var keyIndex;cov_1dbq5r9sza.s[93]++;if(type.isString(key)){cov_1dbq5r9sza.b[17][0]++;cov_1dbq5r9sza.s[94]++;if(this._valuesForString[key]){cov_1dbq5r9sza.b[18][0]++;cov_1dbq5r9sza.s[95]++;keyIndex=this._valuesForString[key].keyIndex;cov_1dbq5r9sza.s[96]++;delete this._valuesForString[key];}else{cov_1dbq5r9sza.b[18][1]++;}}else{cov_1dbq5r9sza.b[17][1]++;cov_1dbq5r9sza.s[97]++;keyIndex=this._getKeyIndex(key);cov_1dbq5r9sza.s[98]++;if(keyIndex>=0){cov_1dbq5r9sza.b[19][0]++;cov_1dbq5r9sza.s[99]++;delete this._valuesForIndex[keyIndex];}else{cov_1dbq5r9sza.b[19][1]++;}}cov_1dbq5r9sza.s[100]++;if(keyIndex>=0){cov_1dbq5r9sza.b[20][0]++;cov_1dbq5r9sza.s[101]++;delete this._keys[keyIndex];cov_1dbq5r9sza.s[102]++;this.size-=1;}else{cov_1dbq5r9sza.b[20][1]++;}};/**
	 * Executes a provided function once per each key/value pair in the Map object,
	 * in insertion order.
	 * @param  {function} callback - Function to execute for each element
	 * @param  {thisArg} thisArg - Value to use as this when executing callback
	 */cov_1dbq5r9sza.s[103]++;Map.prototype.forEach=function(callback,thisArg){cov_1dbq5r9sza.f[20]++;cov_1dbq5r9sza.s[104]++;thisArg=(cov_1dbq5r9sza.b[21][0]++,thisArg)||(cov_1dbq5r9sza.b[21][1]++,this);cov_1dbq5r9sza.s[105]++;collection.forEachArray(this._keys,function(key){cov_1dbq5r9sza.f[21]++;cov_1dbq5r9sza.s[106]++;if(!type.isUndefined(key)){cov_1dbq5r9sza.b[22][0]++;cov_1dbq5r9sza.s[107]++;callback.call(thisArg,this._getValueObject(key).origin,key,this);}else{cov_1dbq5r9sza.b[22][1]++;}},this);};/**
	 * Removes all elements from a Map object.
	 */cov_1dbq5r9sza.s[108]++;Map.prototype.clear=function(){cov_1dbq5r9sza.f[22]++;cov_1dbq5r9sza.s[109]++;Map.call(this);};/* eslint-enable no-extend-native */// Use native Map object if exists.
	// But only latest versions of Chrome and Firefox support full implementation.
	cov_1dbq5r9sza.s[110]++;(function(){cov_1dbq5r9sza.f[23]++;cov_1dbq5r9sza.s[111]++;if((cov_1dbq5r9sza.b[24][0]++,window.Map)&&((cov_1dbq5r9sza.b[24][1]++,browser.firefox)&&(cov_1dbq5r9sza.b[24][2]++,browser.version>=37)||(cov_1dbq5r9sza.b[24][3]++,browser.chrome)&&(cov_1dbq5r9sza.b[24][4]++,browser.version>=42))){cov_1dbq5r9sza.b[23][0]++;cov_1dbq5r9sza.s[112]++;Map=window.Map;// eslint-disable-line no-func-assign
	}else{cov_1dbq5r9sza.b[23][1]++;}})();cov_1dbq5r9sza.s[113]++;module.exports=Map;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview This module provides the HashMap constructor.
	 * @author NHN Ent.
	 *         FE Development Lab <dl_javascript@nhnent.com>
	 */'use strict';var cov_1rtkpudt64=function(){var path='/Users/nhnent/Documents/work/component/code-snippet/src/js/hashMap.js',hash='8736fc5bef57ca313b1ce997188ebf248a1a75da',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/nhnent/Documents/work/component/code-snippet/src/js/hashMap.js',statementMap:{'0':{start:{line:9,column:17},end:{line:9,column:40}},'1':{start:{line:10,column:11},end:{line:10,column:28}},'2':{start:{line:16,column:21},end:{line:16,column:24}},'3':{start:{line:53,column:4},end:{line:53,column:20}},'4':{start:{line:55,column:4},end:{line:57,column:5}},'5':{start:{line:56,column:8},end:{line:56,column:28}},'6':{start:{line:77,column:0},end:{line:83,column:2}},'7':{start:{line:78,column:4},end:{line:82,column:5}},'8':{start:{line:79,column:8},end:{line:79,column:37}},'9':{start:{line:81,column:8},end:{line:81,column:28}},'10':{start:{line:98,column:0},end:{line:103,column:2}},'11':{start:{line:99,column:4},end:{line:101,column:5}},'12':{start:{line:100,column:8},end:{line:100,column:25}},'13':{start:{line:102,column:4},end:{line:102,column:38}},'14':{start:{line:120,column:0},end:{line:126,column:2}},'15':{start:{line:121,column:15},end:{line:121,column:19}},'16':{start:{line:123,column:4},end:{line:125,column:7}},'17':{start:{line:124,column:8},end:{line:124,column:37}},'18':{start:{line:132,column:0},end:{line:138,column:2}},'19':{start:{line:133,column:15},end:{line:133,column:19}},'20':{start:{line:135,column:4},end:{line:137,column:7}},'21':{start:{line:136,column:8},end:{line:136,column:37}},'22':{start:{line:146,column:0},end:{line:148,column:2}},'23':{start:{line:147,column:4},end:{line:147,column:32}},'24':{start:{line:156,column:0},end:{line:160,column:2}},'25':{start:{line:157,column:21},end:{line:157,column:46}},'26':{start:{line:159,column:4},end:{line:159,column:45}},'27':{start:{line:176,column:0},end:{line:178,column:2}},'28':{start:{line:177,column:4},end:{line:177,column:37}},'29':{start:{line:194,column:0},end:{line:196,column:2}},'30':{start:{line:195,column:4},end:{line:195,column:52}},'31':{start:{line:216,column:0},end:{line:222,column:2}},'32':{start:{line:217,column:4},end:{line:219,column:5}},'33':{start:{line:218,column:8},end:{line:218,column:44}},'34':{start:{line:221,column:4},end:{line:221,column:82}},'35':{start:{line:238,column:0},end:{line:247,column:2}},'36':{start:{line:239,column:15},end:{line:239,column:51}},'37':{start:{line:241,column:4},end:{line:244,column:5}},'38':{start:{line:242,column:8},end:{line:242,column:41}},'39':{start:{line:243,column:8},end:{line:243,column:25}},'40':{start:{line:246,column:4},end:{line:246,column:16}},'41':{start:{line:264,column:0},end:{line:273,column:2}},'42':{start:{line:265,column:15},end:{line:265,column:17}},'43':{start:{line:266,column:15},end:{line:266,column:19}},'44':{start:{line:268,column:4},end:{line:270,column:7}},'45':{start:{line:269,column:8},end:{line:269,column:41}},'46':{start:{line:272,column:4},end:{line:272,column:16}},'47':{start:{line:278,column:0},end:{line:284,column:2}},'48':{start:{line:279,column:15},end:{line:279,column:19}},'49':{start:{line:281,column:4},end:{line:283,column:7}},'50':{start:{line:282,column:8},end:{line:282,column:25}},'51':{start:{line:303,column:0},end:{line:316,column:2}},'52':{start:{line:304,column:15},end:{line:304,column:19}},'53':{start:{line:307,column:4},end:{line:315,column:7}},'54':{start:{line:308,column:8},end:{line:310,column:9}},'55':{start:{line:309,column:12},end:{line:309,column:56}},'56':{start:{line:312,column:8},end:{line:314,column:9}},'57':{start:{line:313,column:12},end:{line:313,column:24}},'58':{start:{line:332,column:0},end:{line:341,column:2}},'59':{start:{line:333,column:15},end:{line:333,column:17}},'60':{start:{line:334,column:15},end:{line:334,column:19}},'61':{start:{line:336,column:4},end:{line:338,column:7}},'62':{start:{line:337,column:8},end:{line:337,column:39}},'63':{start:{line:340,column:4},end:{line:340,column:16}},'64':{start:{line:376,column:0},end:{line:386,column:2}},'65':{start:{line:377,column:17},end:{line:377,column:19}},'66':{start:{line:379,column:4},end:{line:383,column:7}},'67':{start:{line:380,column:8},end:{line:382,column:9}},'68':{start:{line:381,column:12},end:{line:381,column:31}},'69':{start:{line:385,column:4},end:{line:385,column:18}},'70':{start:{line:392,column:0},end:{line:400,column:2}},'71':{start:{line:393,column:17},end:{line:393,column:19}},'72':{start:{line:395,column:4},end:{line:397,column:7}},'73':{start:{line:396,column:8},end:{line:396,column:23}},'74':{start:{line:399,column:4},end:{line:399,column:18}},'75':{start:{line:402,column:0},end:{line:402,column:25}}},fnMap:{'0':{name:'HashMap',decl:{start:{line:48,column:9},end:{line:48,column:16}},loc:{start:{line:48,column:22},end:{line:58,column:1}},line:48},'1':{name:'(anonymous_1)',decl:{start:{line:77,column:24},end:{line:77,column:25}},loc:{start:{line:77,column:45},end:{line:83,column:1}},line:77},'2':{name:'(anonymous_2)',decl:{start:{line:98,column:32},end:{line:98,column:33}},loc:{start:{line:98,column:53},end:{line:103,column:1}},line:98},'3':{name:'(anonymous_3)',decl:{start:{line:120,column:30},end:{line:120,column:31}},loc:{start:{line:120,column:44},end:{line:126,column:1}},line:120},'4':{name:'(anonymous_4)',decl:{start:{line:123,column:41},end:{line:123,column:42}},loc:{start:{line:123,column:62},end:{line:125,column:5}},line:123},'5':{name:'(anonymous_5)',decl:{start:{line:132,column:26},end:{line:132,column:27}},loc:{start:{line:132,column:44},end:{line:138,column:1}},line:132},'6':{name:'(anonymous_6)',decl:{start:{line:135,column:17},end:{line:135,column:18}},loc:{start:{line:135,column:38},end:{line:137,column:5}},line:135},'7':{name:'(anonymous_7)',decl:{start:{line:146,column:30},end:{line:146,column:31}},loc:{start:{line:146,column:44},end:{line:148,column:1}},line:146},'8':{name:'(anonymous_8)',decl:{start:{line:156,column:30},end:{line:156,column:31}},loc:{start:{line:156,column:44},end:{line:160,column:1}},line:156},'9':{name:'(anonymous_9)',decl:{start:{line:176,column:24},end:{line:176,column:25}},loc:{start:{line:176,column:38},end:{line:178,column:1}},line:176},'10':{name:'(anonymous_10)',decl:{start:{line:194,column:24},end:{line:194,column:25}},loc:{start:{line:194,column:38},end:{line:196,column:1}},line:194},'11':{name:'(anonymous_11)',decl:{start:{line:216,column:27},end:{line:216,column:28}},loc:{start:{line:216,column:41},end:{line:222,column:1}},line:216},'12':{name:'(anonymous_12)',decl:{start:{line:238,column:32},end:{line:238,column:33}},loc:{start:{line:238,column:46},end:{line:247,column:1}},line:238},'13':{name:'(anonymous_13)',decl:{start:{line:264,column:37},end:{line:264,column:38}},loc:{start:{line:264,column:56},end:{line:273,column:1}},line:264},'14':{name:'(anonymous_14)',decl:{start:{line:268,column:33},end:{line:268,column:34}},loc:{start:{line:268,column:47},end:{line:270,column:5}},line:268},'15':{name:'(anonymous_15)',decl:{start:{line:278,column:30},end:{line:278,column:31}},loc:{start:{line:278,column:41},end:{line:284,column:1}},line:278},'16':{name:'(anonymous_16)',decl:{start:{line:281,column:14},end:{line:281,column:15}},loc:{start:{line:281,column:35},end:{line:283,column:5}},line:281},'17':{name:'(anonymous_17)',decl:{start:{line:303,column:25},end:{line:303,column:26}},loc:{start:{line:303,column:44},end:{line:316,column:1}},line:303},'18':{name:'(anonymous_18)',decl:{start:{line:307,column:42},end:{line:307,column:43}},loc:{start:{line:307,column:63},end:{line:315,column:5}},line:307},'19':{name:'(anonymous_19)',decl:{start:{line:332,column:25},end:{line:332,column:26}},loc:{start:{line:332,column:36},end:{line:341,column:1}},line:332},'20':{name:'(anonymous_20)',decl:{start:{line:336,column:14},end:{line:336,column:15}},loc:{start:{line:336,column:35},end:{line:338,column:5}},line:336},'21':{name:'(anonymous_21)',decl:{start:{line:376,column:25},end:{line:376,column:26}},loc:{start:{line:376,column:45},end:{line:386,column:1}},line:376},'22':{name:'(anonymous_22)',decl:{start:{line:379,column:14},end:{line:379,column:15}},loc:{start:{line:379,column:35},end:{line:383,column:5}},line:379},'23':{name:'(anonymous_23)',decl:{start:{line:392,column:28},end:{line:392,column:29}},loc:{start:{line:392,column:39},end:{line:400,column:1}},line:392},'24':{name:'(anonymous_24)',decl:{start:{line:395,column:14},end:{line:395,column:15}},loc:{start:{line:395,column:26},end:{line:397,column:5}},line:395}},branchMap:{'0':{loc:{start:{line:55,column:4},end:{line:57,column:5}},type:'if',locations:[{start:{line:55,column:4},end:{line:57,column:5}},{start:{line:55,column:4},end:{line:57,column:5}}],line:55},'1':{loc:{start:{line:78,column:4},end:{line:82,column:5}},type:'if',locations:[{start:{line:78,column:4},end:{line:82,column:5}},{start:{line:78,column:4},end:{line:82,column:5}}],line:78},'2':{loc:{start:{line:99,column:4},end:{line:101,column:5}},type:'if',locations:[{start:{line:99,column:4},end:{line:101,column:5}},{start:{line:99,column:4},end:{line:101,column:5}}],line:99},'3':{loc:{start:{line:217,column:4},end:{line:219,column:5}},type:'if',locations:[{start:{line:217,column:4},end:{line:219,column:5}},{start:{line:217,column:4},end:{line:219,column:5}}],line:217},'4':{loc:{start:{line:221,column:11},end:{line:221,column:81}},type:'cond-expr',locations:[{start:{line:221,column:31},end:{line:221,column:57}},{start:{line:221,column:60},end:{line:221,column:81}}],line:221},'5':{loc:{start:{line:239,column:15},end:{line:239,column:51}},type:'cond-expr',locations:[{start:{line:239,column:31},end:{line:239,column:44}},{start:{line:239,column:47},end:{line:239,column:51}}],line:239},'6':{loc:{start:{line:241,column:4},end:{line:244,column:5}},type:'if',locations:[{start:{line:241,column:4},end:{line:244,column:5}},{start:{line:241,column:4},end:{line:244,column:5}}],line:241},'7':{loc:{start:{line:308,column:8},end:{line:310,column:9}},type:'if',locations:[{start:{line:308,column:8},end:{line:310,column:9}},{start:{line:308,column:8},end:{line:310,column:9}}],line:308},'8':{loc:{start:{line:312,column:8},end:{line:314,column:9}},type:'if',locations:[{start:{line:312,column:8},end:{line:314,column:9}},{start:{line:312,column:8},end:{line:314,column:9}}],line:312},'9':{loc:{start:{line:380,column:8},end:{line:382,column:9}},type:'if',locations:[{start:{line:380,column:8},end:{line:382,column:9}},{start:{line:380,column:8},end:{line:382,column:9}}],line:380}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0,'34':0,'35':0,'36':0,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':0,'45':0,'46':0,'47':0,'48':0,'49':0,'50':0,'51':0,'52':0,'53':0,'54':0,'55':0,'56':0,'57':0,'58':0,'59':0,'60':0,'61':0,'62':0,'63':0,'64':0,'65':0,'66':0,'67':0,'68':0,'69':0,'70':0,'71':0,'72':0,'73':0,'74':0,'75':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0],'5':[0,0],'6':[0,0],'7':[0,0],'8':[0,0],'9':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var collection=(cov_1rtkpudt64.s[0]++,__webpack_require__(4));var type=(cov_1rtkpudt64.s[1]++,__webpack_require__(2));/**
	 * All the data in hashMap begin with _MAPDATAPREFIX;
	 * @type {string}
	 * @private
	 */var _MAPDATAPREFIX=(cov_1rtkpudt64.s[2]++,'å');/**
	 * HashMap can handle the key-value pairs.<br>
	 * Caution:<br>
	 *  HashMap instance has a length property but is not an instance of Array.
	 * @param {Object} [obj] A initial data for creation.
	 * @constructor
	 * @memberof tui.util
	 * @deprecated since version 1.3.0
	 * @example
	 * // node, commonjs
	 * var HashMap = require('tui-code-snippet').HashMap;
	 * var hm = new tui.util.HashMap({
	  'mydata': {
	    'hello': 'imfine'
	  },
	  'what': 'time'
	});
	 * @example
	 * // distribution file, script
	 * <script src='path-to/tui-code-snippt.js'></script>
	 * <script>
	 * var HashMap = tui.util.HashMap;
	 * <script>
	 * var hm = new tui.util.HashMap({
	  'mydata': {
	    'hello': 'imfine'
	  },
	  'what': 'time'
	});
	 */function HashMap(obj){cov_1rtkpudt64.f[0]++;cov_1rtkpudt64.s[3]++;/**
	     * size
	     * @type {number}
	     */this.length=0;cov_1rtkpudt64.s[4]++;if(obj){cov_1rtkpudt64.b[0][0]++;cov_1rtkpudt64.s[5]++;this.setObject(obj);}else{cov_1rtkpudt64.b[0][1]++;}}/**
	 * Set a data from the given key with value or the given object.
	 * @param {string|Object} key A string or object for key
	 * @param {*} [value] A data
	 * @example
	 * //-- #1. Get Module --//
	 * var HashMap = require('tui-code-snippet').HashMap; // node, commonjs
	 * var HashMap = tui.util.HashMap; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var hm = new HashMap();
	 * hm.set('key', 'value');
	 * hm.set({
	 *     'key1': 'data1',
	 *     'key2': 'data2'
	 * });
	 */cov_1rtkpudt64.s[6]++;HashMap.prototype.set=function(key,value){cov_1rtkpudt64.f[1]++;cov_1rtkpudt64.s[7]++;if(arguments.length===2){cov_1rtkpudt64.b[1][0]++;cov_1rtkpudt64.s[8]++;this.setKeyValue(key,value);}else{cov_1rtkpudt64.b[1][1]++;cov_1rtkpudt64.s[9]++;this.setObject(key);}};/**
	 * Set a data from the given key with value.
	 * @param {string} key A string for key
	 * @param {*} value A data
	 * @example
	 * //-- #1. Get Module --//
	 * var HashMap = require('tui-code-snippet').HashMap; // node, commonjs
	 * var HashMap = tui.util.HashMap; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var hm = new HashMap();
	 * hm.setKeyValue('key', 'value');
	 */cov_1rtkpudt64.s[10]++;HashMap.prototype.setKeyValue=function(key,value){cov_1rtkpudt64.f[2]++;cov_1rtkpudt64.s[11]++;if(!this.has(key)){cov_1rtkpudt64.b[2][0]++;cov_1rtkpudt64.s[12]++;this.length+=1;}else{cov_1rtkpudt64.b[2][1]++;}cov_1rtkpudt64.s[13]++;this[this.encodeKey(key)]=value;};/**
	 * Set a data from the given object.
	 * @param {Object} obj A object for data
	 * @example
	 * //-- #1. Get Module --//
	 * var HashMap = require('tui-code-snippet').HashMap; // node, commonjs
	 * var HashMap = tui.util.HashMap; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var hm = new HashMap();
	 * hm.setObject({
	 *     'key1': 'data1',
	 *     'key2': 'data2'
	 * });
	 */cov_1rtkpudt64.s[14]++;HashMap.prototype.setObject=function(obj){cov_1rtkpudt64.f[3]++;var self=(cov_1rtkpudt64.s[15]++,this);cov_1rtkpudt64.s[16]++;collection.forEachOwnProperties(obj,function(value,key){cov_1rtkpudt64.f[4]++;cov_1rtkpudt64.s[17]++;self.setKeyValue(key,value);});};/**
	 * Merge with the given another hashMap.
	 * @param {HashMap} hashMap Another hashMap instance
	 */cov_1rtkpudt64.s[18]++;HashMap.prototype.merge=function(hashMap){cov_1rtkpudt64.f[5]++;var self=(cov_1rtkpudt64.s[19]++,this);cov_1rtkpudt64.s[20]++;hashMap.each(function(value,key){cov_1rtkpudt64.f[6]++;cov_1rtkpudt64.s[21]++;self.setKeyValue(key,value);});};/**
	 * Encode the given key for hashMap.
	 * @param {string} key A string for key
	 * @returns {string} A encoded key
	 * @private
	 */cov_1rtkpudt64.s[22]++;HashMap.prototype.encodeKey=function(key){cov_1rtkpudt64.f[7]++;cov_1rtkpudt64.s[23]++;return _MAPDATAPREFIX+key;};/**
	 * Decode the given key in hashMap.
	 * @param {string} key A string for key
	 * @returns {string} A decoded key
	 * @private
	 */cov_1rtkpudt64.s[24]++;HashMap.prototype.decodeKey=function(key){cov_1rtkpudt64.f[8]++;var decodedKey=(cov_1rtkpudt64.s[25]++,key.split(_MAPDATAPREFIX));cov_1rtkpudt64.s[26]++;return decodedKey[decodedKey.length-1];};/**
	 * Return the value from the given key.
	 * @param {string} key A string for key
	 * @returns {*} The value from a key
	 * @example
	 * //-- #1. Get Module --//
	 * var HashMap = require('tui-code-snippet').HashMap; // node, commonjs
	 * var HashMap = tui.util.HashMap; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var hm = new HashMap();
	 * hm.set('key', 'value');
	 * hm.get('key') // value
	 */cov_1rtkpudt64.s[27]++;HashMap.prototype.get=function(key){cov_1rtkpudt64.f[9]++;cov_1rtkpudt64.s[28]++;return this[this.encodeKey(key)];};/**
	 * Check the existence of a value from the key.
	 * @param {string} key A string for key
	 * @returns {boolean} Indicating whether a value exists or not.
	 * @example
	 * //-- #1. Get Module --//
	 * var HashMap = require('tui-code-snippet').HashMap; // node, commonjs
	 * var HashMap = tui.util.HashMap; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var hm = new HashMap();
	 * hm.set('key', 'value');
	 * hm.has('key') // true
	 */cov_1rtkpudt64.s[29]++;HashMap.prototype.has=function(key){cov_1rtkpudt64.f[10]++;cov_1rtkpudt64.s[30]++;return this.hasOwnProperty(this.encodeKey(key));};/**
	 * Remove a data(key-value pairs) from the given key or the given key-list.
	 * @param {...string|string[]} key A string for key
	 * @returns {string|string[]} A removed data
	 * @example
	 * //-- #1. Get Module --//
	 * var HashMap = require('tui-code-snippet').HashMap; // node, commonjs
	 * var HashMap = tui.util.HashMap; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var hm = new HashMap();
	 * hm.set('key', 'value');
	 * hm.set('key2', 'value');
	 *
	 * hm.remove('key');
	 * hm.remove('key', 'key2');
	 * hm.remove(['key', 'key2']);
	 */cov_1rtkpudt64.s[31]++;HashMap.prototype.remove=function(key){cov_1rtkpudt64.f[11]++;cov_1rtkpudt64.s[32]++;if(arguments.length>1){cov_1rtkpudt64.b[3][0]++;cov_1rtkpudt64.s[33]++;key=collection.toArray(arguments);}else{cov_1rtkpudt64.b[3][1]++;}cov_1rtkpudt64.s[34]++;return type.isArray(key)?(cov_1rtkpudt64.b[4][0]++,this.removeByKeyArray(key)):(cov_1rtkpudt64.b[4][1]++,this.removeByKey(key));};/**
	 * Remove data(key-value pair) from the given key.
	 * @param {string} key A string for key
	 * @returns {*|null} A removed data
	 * @example
	 * //-- #1. Get Module --//
	 * var HashMap = require('tui-code-snippet').HashMap; // node, commonjs
	 * var HashMap = tui.util.HashMap; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var hm = new HashMap();
	 * hm.set('key', 'value');
	 * hm.removeByKey('key')
	 */cov_1rtkpudt64.s[35]++;HashMap.prototype.removeByKey=function(key){cov_1rtkpudt64.f[12]++;var data=(cov_1rtkpudt64.s[36]++,this.has(key)?(cov_1rtkpudt64.b[5][0]++,this.get(key)):(cov_1rtkpudt64.b[5][1]++,null));cov_1rtkpudt64.s[37]++;if(data!==null){cov_1rtkpudt64.b[6][0]++;cov_1rtkpudt64.s[38]++;delete this[this.encodeKey(key)];cov_1rtkpudt64.s[39]++;this.length-=1;}else{cov_1rtkpudt64.b[6][1]++;}cov_1rtkpudt64.s[40]++;return data;};/**
	 * Remove a data(key-value pairs) from the given key-list.
	 * @param {string[]} keyArray An array of keys
	 * @returns {string[]} A removed data
	 * @example
	 * //-- #1. Get Module --//
	 * var HashMap = require('tui-code-snippet').HashMap; // node, commonjs
	 * var HashMap = tui.util.HashMap; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var hm = new HashMap();
	 * hm.set('key', 'value');
	 * hm.set('key2', 'value');
	 * hm.removeByKeyArray(['key', 'key2']);
	 */cov_1rtkpudt64.s[41]++;HashMap.prototype.removeByKeyArray=function(keyArray){cov_1rtkpudt64.f[13]++;var data=(cov_1rtkpudt64.s[42]++,[]);var self=(cov_1rtkpudt64.s[43]++,this);cov_1rtkpudt64.s[44]++;collection.forEach(keyArray,function(key){cov_1rtkpudt64.f[14]++;cov_1rtkpudt64.s[45]++;data.push(self.removeByKey(key));});cov_1rtkpudt64.s[46]++;return data;};/**
	 * Remove all the data
	 */cov_1rtkpudt64.s[47]++;HashMap.prototype.removeAll=function(){cov_1rtkpudt64.f[15]++;var self=(cov_1rtkpudt64.s[48]++,this);cov_1rtkpudt64.s[49]++;this.each(function(value,key){cov_1rtkpudt64.f[16]++;cov_1rtkpudt64.s[50]++;self.remove(key);});};/**
	 * Execute the provided callback once for each all the data.
	 * @param {Function} iteratee Callback function
	 * @example
	 * //-- #1. Get Module --//
	 * var HashMap = require('tui-code-snippet').HashMap; // node, commonjs
	 * var HashMap = tui.util.HashMap; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var hm = new HashMap();
	 * hm.set('key', 'value');
	 * hm.set('key2', 'value');
	 *
	 * hm.each(function(value, key) {
	 *     //do something...
	 * });
	 */cov_1rtkpudt64.s[51]++;HashMap.prototype.each=function(iteratee){cov_1rtkpudt64.f[17]++;var self=(cov_1rtkpudt64.s[52]++,this);var flag;cov_1rtkpudt64.s[53]++;collection.forEachOwnProperties(this,function(value,key){cov_1rtkpudt64.f[18]++;cov_1rtkpudt64.s[54]++;// eslint-disable-line consistent-return
	if(key.charAt(0)===_MAPDATAPREFIX){cov_1rtkpudt64.b[7][0]++;cov_1rtkpudt64.s[55]++;flag=iteratee(value,self.decodeKey(key));}else{cov_1rtkpudt64.b[7][1]++;}cov_1rtkpudt64.s[56]++;if(flag===false){cov_1rtkpudt64.b[8][0]++;cov_1rtkpudt64.s[57]++;return flag;}else{cov_1rtkpudt64.b[8][1]++;}});};/**
	 * Return the key-list stored.
	 * @returns {Array} A key-list
	 * @example
	 * //-- #1. Get Module --//
	 * var HashMap = require('tui-code-snippet').HashMap; // node, commonjs
	 * var HashMap = tui.util.HashMap; // distribution file
	 *
	 * //-- #2. Use property --//
	 *  var hm = new HashMap();
	 *  hm.set('key', 'value');
	 *  hm.set('key2', 'value');
	 *  hm.keys();  //['key', 'key2');
	 */cov_1rtkpudt64.s[58]++;HashMap.prototype.keys=function(){cov_1rtkpudt64.f[19]++;var keys=(cov_1rtkpudt64.s[59]++,[]);var self=(cov_1rtkpudt64.s[60]++,this);cov_1rtkpudt64.s[61]++;this.each(function(value,key){cov_1rtkpudt64.f[20]++;cov_1rtkpudt64.s[62]++;keys.push(self.decodeKey(key));});cov_1rtkpudt64.s[63]++;return keys;};/**
	 * Work similarly to Array.prototype.map().<br>
	 * It executes the provided callback that checks conditions once for each element of hashMap,<br>
	 *  and returns a new array having elements satisfying the conditions
	 * @param {Function} condition A function that checks conditions
	 * @returns {Array} A new array having elements satisfying the conditions
	 * @example
	 * //-- #1. Get Module --//
	 * var HashMap = require('tui-code-snippet').HashMap; // node, commonjs
	 * var HashMap = tui.util.HashMap; // distribution file
	 *
	 * //-- #2. Use property --//
	 * var hm1 = new HashMap();
	 * hm1.set('key', 'value');
	 * hm1.set('key2', 'value');
	 *
	 * hm1.find(function(value, key) {
	 *     return key === 'key2';
	 * }); // ['value']
	 *
	 * var hm2 = new HashMap({
	 *     'myobj1': {
	 *         visible: true
	 *     },
	 *     'mybobj2': {
	 *         visible: false
	 *     }
	 * });
	 *
	 * hm2.find(function(obj, key) {
	 *     return obj.visible === true;
	 * }); // [{visible: true}];
	 */cov_1rtkpudt64.s[64]++;HashMap.prototype.find=function(condition){cov_1rtkpudt64.f[21]++;var founds=(cov_1rtkpudt64.s[65]++,[]);cov_1rtkpudt64.s[66]++;this.each(function(value,key){cov_1rtkpudt64.f[22]++;cov_1rtkpudt64.s[67]++;if(condition(value,key)){cov_1rtkpudt64.b[9][0]++;cov_1rtkpudt64.s[68]++;founds.push(value);}else{cov_1rtkpudt64.b[9][1]++;}});cov_1rtkpudt64.s[69]++;return founds;};/**
	 * Return a new Array having all values.
	 * @returns {Array} A new array having all values
	 */cov_1rtkpudt64.s[70]++;HashMap.prototype.toArray=function(){cov_1rtkpudt64.f[23]++;var result=(cov_1rtkpudt64.s[71]++,[]);cov_1rtkpudt64.s[72]++;this.each(function(v){cov_1rtkpudt64.f[24]++;cov_1rtkpudt64.s[73]++;result.push(v);});cov_1rtkpudt64.s[74]++;return result;};cov_1rtkpudt64.s[75]++;module.exports=HashMap;

/***/ })
/******/ ])
});
;