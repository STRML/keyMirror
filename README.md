KeyMirror
=========

Create an object with values equal to its key names.

I thought `react/lib/keyMirror` was useful and wanted to reuse it without any dependencies.

This is not my code, this is property of Facebook.

Why?
----

From [this discussion](https://github.com/facebook/react/issues/1639#issuecomment-45188026):


> The main purpose of keyMirror is to deal with the fact that Closure Compiler advanced mode crushes keys, which allows you to write code like

> `keyMirror({monkey: null, gorilla: null})`

> and have it become something like

> `k({m:null,g:null})`

> which evaluates to

> `{m:"m",g:"g"}`

> at runtime. If it was specified as a list of strings, they wouldn't get crushed matching the property names.

Usage
-----

`npm install keymirror`

```javascript
var keyMirror = require('keymirror');
var COLORS = keyMirror({blue: null, red: null});
var myColor = COLORS.blue;
var isColorValid = !!COLORS[myColor];
```

The last line could not be performed if the values of the generated enum were
not equal to their keys.

Input:  `{key1: val1, key2: val2}`

Output: `{key1: key1, key2: key2}`

I sometimes use this with lodash - use the following upon your first use of lodash to mix it in:

```javascript
var _ = require('lodash');
_.mixin({keyMirror: require('keymirror')});
// Can now be used as _.keyMirror(object)
```



Optional Parameter
----

```javascript
{ useCustomValue: true }
```

Idea is to provide users to provide custom values for some of the keys
(specifically when you want to have keys different than the values)
and tell the keyMirror to mirror only keys with value as null.


```javascript
var keyMirror = require('keymirror');
var AppConstants = keyMirror({
    a: null,
    b: null,
    jsPath: '../js/',
    colors: keyMirror({
        blue: null,
        red: 'darkred'
    }, { useCustomValue: true })
}, {
    useCustomValue: true
});

console.log(AppConstants.a); // Output: a
console.log(AppConstants.b); // Output: b
console.log(AppConstants.jsPath); // Output: ../js/ -> custom value being used
console.log(AppConstants.colors.blue); // Output: blue
console.log(AppConstants.colors.red); // Output: darkred -> custom value being used

// Even AppConstants.colors is defined with custom value,
// and this allows us to build complex JSON objects with few mirrored values and few custom values

```
