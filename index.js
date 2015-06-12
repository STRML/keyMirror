/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

"use strict";

var isString = function(s) {
  return typeof(s) === 'string' || s instanceof String;
}

/**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 *   Input:  [key1, key2]
 *   Output: {key1: key1, key2: key2}
 *
 * @param {(object|string[])} obj
 * @return {object}
 */
var keyMirror = function(obj) {
  var ret = {};
  var key;
  if (!(obj instanceof Object)) {
    throw new Error('keyMirror(...): Argument must be an object or an array.');
  }
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      key = obj[i];
      if (!(isString(key))) {
        throw new Error('keyMirror(...): Keys must be strings.');
      }
      ret[key] = key;
    };
  } else {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        ret[key] = key;
      }
    }
  }
  return ret;
};

module.exports = keyMirror;
