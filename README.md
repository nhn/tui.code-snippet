Toast UI CodeSnippet
======================

`tui-code-snippet` is group of utility methods to make ease with developing javascript applications.

It includes several features like `class simulation`, `browser detecting`, `type checking` and +30 more.

`tui-code-snippet` supports IE7+ and modern browsers and already has been used for [open source javascript components](http://github.com/nhnent/) and many commercial projects in [NHNEnt](http://www.nhnent.com/en/index.nhn) corporation.

## Feature
* browser.js
  * Browser detecting modules
* collection.js
 * Modules to Process collecitons
 * Support util methods for collecitons
* customEvent.js
 * Custom event modules
 * Add/Remove/fire custom events 
* defineClass.js
 * Defined classes module
* enum.js
 * Const value modules
 * Making immutability values but IE8 low 
* func.js
 * Function modules
* hashMap.js
 * Hash map modules
 * Managing data by key/value 
* inheritance.js
  * Simple inheritance modules (Nicholas C. Zakas, YUI Library)
  * Call supur constructor of superclass
  * Have to get inheritance before define child 
  * Using mixin and inner object 
* object.js
 * Object modules
 * Support utils to control object
* string.js
 * String processing modules
 * Support utils such as decodeHTMLEntity, encodeHTMLEntity
* type.js
 * Check data type
* window.js
 * Window object modules
 * You need 'postDataBridgeUrl' options to avoid IE11 popup form submit bug.
 * Different domain have x-domain issue.
* defineNamespace.js
 * Support utils to define namespace
* formatDate.js
 * Formating date strings modules
* defineModule.js
 * Support utils to define modules

## How to use CodeSnippet 
* Using CodeSnippet build file
 * Download code-snippet.js or code-snippet.min.js from [[master branch]](https://github.com/nhnent/tui.code-snippet)
 * It's better that you do not change the file name. 
* Using the copy only the necesary parts
 * Check dependency before copy the codes
 * Use build file as you can

## Documentation
* **API** - https://nhnent.github.io/tui.code-snippet/latest/
* **Tutorial** - https://github.com/nhnent/fe.javascript/wiki/FE-CodeSnippet

## Tested browsers
* browser : 
   * IE7+
   * Chrome
   * Firefox

## Download/Install
* Bower: 
   * latest :  `bower install tui-code-snippet`
   * each version : `bower install tui-code-snippet[#tag]`
* Download : https://github.com/nhnent/tui.code-snippet

## History
| Version | Description | Date | Developer |
| ---- | ---- | ---- | ---- |
| <a href="https://nhnent.github.io/tui.code-snippet/1.2.0/">1.2.0</a> | `defineNamespace` base on object extending. | 2016.04 | NHN Entertainment FE Dev team<dl_javascript@nhnent.com> |
| 1.0.8 | [Refactoring `CustomEvents`](https://github.com/nhnent/tui.code-snippet/releases/tag/1.0.8) | 2016.03 | NHN Entertainment FE Dev team<dl_javascript@nhnent.com> |
| 1.0.7 | [Fix critical bug in CustomEvent module.](https://github.com/nhnent/tui.code-snippet/releases/tag/1.0.7) | 2016.01 | NHN Entertainment FE Dev team<dl_javascript@nhnent.com> |
| <a href="https://nhnent.github.io/tui.code-snippet/1.0.6/">1.0.6</a> | [Please see github release page after this versions.](https://github.com/nhnent/tui.code-snippet/releases/tag/1.0.6) | 2015.11 | NHN Entertainment FE Dev team<dl_javascript@nhnent.com> |
| <a href="https://nhnent.github.io/tui.code-snippet/1.0.4/">1.0.4</a> | getDuplicatedChar added | 2015.07 | NHN Entertainment FE Dev team<dl_javascript@nhnent.com> |
| <a href="https://nhnent.github.io/tui.code-snippet/1.0.3/">1.0.3</a> | defineModule,<br>formatDate added | 2015.06 | NHN Entertainment FE Dev team<dl_javascript@nhnent.com> |
| <a href="https://nhnent.github.io/tui.code-snippet/1.0.2/">1.0.2</a> | defineNamespace,<br>map, exMap added | 2015.04 | NHN Entertainment FE Dev team<dl_javascript@nhnent.com> |
| 1.0.1 | isExisty modified,<br>pick added<br>type modifyied | 2015.04 | NHN Entertainment FE Dev team<dl_javascript@nhnent.com> |
| <a href="https://nhnent.github.io/tui.code-snippet/1.0.0/">1.0.0</a> | jquery dependency removed | 2015.03 | NHN Entertainment FE Dev team<dl_javascript@nhnent.com> |
