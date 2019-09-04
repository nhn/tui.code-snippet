# TOAST UI CodeSnippet

`tui-code-snippet` is group of utility methods to make ease with developing javascript applications.

It includes several features like `class simulation`, `browser detecting`, `type checking` and more.

`tui-code-snippet` supports IE8+ and modern browsers and already has been used for [open source javascript components](http://github.com/nhn/) and many commercial projects in [NHN](http://www.nhn.com) corporation.

## Documents

* [Getting Started](https://github.com/nhn/tui.code-snippet/blob/master/docs/getting-started.md)
* [APIs](https://nhn.github.io/tui.code-snippet/latest/)
* [v2.0 Migration Guide](https://github.com/nhn/tui.code-snippet/blob/master/docs/v2.0-migration-guide.md)

## Features

* array
  * Handle arrays
* browser
  * Detect browser
* collection
  * Process collections
  * Support util methods for collections
* customEvents
  * Add/Remove/fire custom events
* defineClass
  * Define classes
* domEvent
  * Add, remove, fire DOM events
  * Control mouse events
* domUtil
  * Control the information of DOM
  * Add, remove, find DOM class name
* enum
  * Manage constant value
  * Make immutability values but IE8 low
* formatDate
  * Format date strings
* inheritance
  * Simple inheritance (Nicholas C. Zakas, YUI Library)
  * Call supur constructor of superclass
  * Have to get inheritance before define child
  * Use mixin and inner object
* object
  * Support utils to control object
* request
  * Request image ping
* string
  * Support utils such as decodeHTMLEntity, encodeHTMLEntity
* tricks
  * Creates a debounced function and a throttled function
* type
  * Check data type

## Installation

Install the latest version using `npm` command:

``` sh
$ npm install --save tui-code-snippet
```

or install the each version:

```
$ npm install --save tui-code-snippet@<version>
```

## Usage

Import only functions that you need in your code:

```javascript
var func = require('tui-code-snippet/<folder>/<function>');

// for example,
var inArray = require('tui-code-snippet/array/inArray');
var customEvents = require('tui-code-snippet/customEvents/customEvents');
```

The folder structure can be found [here](https://github.com/nhn/tui.code-snippet/tree/production).

## Browser Support

| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :---------: | :---------: | :---------: | :---------: | :---------: |
| Yes | 8+ | Yes | Yes | Yes |

## License

This software is licensed under the [MIT](https://github.com/nhn/tui.code-snippet/blob/master/LICENSE) © [NHN](https://github.com/nhn).
