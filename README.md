KeyMirrorPrefix
=========

Create an object with each value constructed by concatonating a prefix with its key name.

I thought `https://github.com/STRML/keyMirror` was useful (esspecially as it had no additional dependencies) and wanted to reuse it, but with a prefix.

Why?
----

I work on a lot of projects that use React Redux, and KeyMirror is a useful tool when defining Action Types.

However, the action names inevitably become quite similar and the console does not differentiate them well.

So I like to add a prefix to a group of action types like these for searching for cities or countries.

```
export const CITIES = keyMirrorPfx('CITIES', {
  SEARCH_REQUEST: null,
  SEARCH_SUCCESS: null,
  SEARCH_FAILURE: null,
})

export const COUNTRIES = keyMirrorPfx('COUNTRIES', {
  SEARCH_REQUEST: null,
  SEARCH_SUCCESS: null,
  SEARCH_FAILURE: null,
})
```

This would log something like:

```
| prev state  { ... }
| action      {type: "CITIES_SEARCH_SUCCESS"}
| next state  { ... }

| prev state  { ... }
| action      {type: "COUNTRIES_SEARCH_SUCCESS"}
| next state  { ... }
```

Usage
-----

`yarn add -D keymirrorprefix` (or `npm install -D keymirrorprefix`)


```javascript
import keyMirrorPfx from 'keymirrorprefix'

const COLOURS = keyMirrorPfx('COLOURS', { blue: null, red: null })

console.log(COLOURS.blue) // COLOURS_blue
```

Input:  `prefix, {key1: val1, key2: val2}`

Output: `{key1: prefix_key1, key2: prefix_key2}`
