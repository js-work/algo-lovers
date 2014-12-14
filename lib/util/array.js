// Author: Jacopo Daeli <jacopo.daeli@gmail.com>
// Util functions for playing with Array Javascript Objects

// Swap two elements in array object
function _swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
exports.swap = _swap;

// Equal to Array.forEach
function _each (A, iterator) {
  if (A.forEach) {
    return A.forEach(iterator);
  }
  for (var i = 0; i < A.length; i++) {
    iterator(A[i], i, arr);
  }
}

exports.each = _each;

// Check if the object is a javascript Array
function _isArray(obj) {
  if(Array.isArray) {
    return Array.isArray(obj);
  } else {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }
}
exports.isArray = _isArray;
