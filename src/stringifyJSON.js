// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
    return 'null';
  }
  if (typeof(obj) === 'function' || typeof(obj) === 'undefined') {
    return undefined;
  }
  // if typeof obj is a number, then return the string version of number
  if (typeof(obj) === 'number') {
    if (isNaN(obj) || !isFinite(obj)) {
      return 'null';
    }
    return '' + obj;
    // if typeof obj is a boolean, then return the string version of boolean
  } else if (typeof(obj) === 'boolean') {
    return '' + obj;
    // if typeof obj is a string, return the "string"
  } else if (typeof(obj) === 'string') {
    return '"' + obj + '"';
    // if type of obj is an array, recursively stringify the array and return the stringified array
  } else if (Array.isArray(obj)) {
    var arrayStr = '[';
    for (var i = 0; i < obj.length; i++) {
      if (typeof(obj[i]) === 'function' || typeof(obj[i]) === 'undefined') {
        arrayStr += stringifyJSON(null) + ',';
        continue;
      }
      arrayStr += stringifyJSON(obj[i]) + ',';
    }
    if (arrayStr[arrayStr.length - 1] === ',') {
      arrayStr = arrayStr.slice(0, arrayStr.length - 1);
    }
    arrayStr += ']';
    return arrayStr;
    // if type of obj is an obj, put the key in "" and  recursively stringify the value andd return the stringified object
  } else if (typeof(obj) === 'object') {
    var objStr = '{';
    for (var key in obj) {
      if (typeof(obj[key]) === 'function' || typeof(obj[key]) === 'undefined') {
        continue;
      }
      objStr += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
    }
    if (objStr[objStr.length - 1] === ',') {
      objStr = objStr.slice(0, objStr.length - 1);
    }
    objStr += '}';
    return objStr;
  }
};
