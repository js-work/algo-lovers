// Author: Jacopo Daeli <jacopo.daeli@gmail.com>
// Util function for playing with Array Javascript Objects

// Swap two elements in array object
function _swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
exports.swap = _swap;
