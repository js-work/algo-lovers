// Author: Jacopo Daeli <jacopo.daeli@gmail.com>
// Util functions for playing with Javascript Objects

// Extract object keys
var _keys = function (obj) {
  if (Object.keys) {
    return Object.keys(obj);
  }
  var keys = [];
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      keys.push(k);
    }
  }
  return keys;
};

exports.keys = _keys;
