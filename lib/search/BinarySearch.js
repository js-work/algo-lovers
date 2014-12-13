// Author: Jacopo Daeli <jacopo.daeli@gmail.com>
// BinarySearch Algorithm

function binary_search(val, A) {
  var lo = 0;
  var hi = A.length-1;

  while(lo <= hi) {
    var mid = lo + Math.floor((hi-lo) / 2);
    if(val < A[mid]) {
      hi = mid-1;
    } else if(val > A[mid]) {
      lo = mid+1;
    } else {
      return mid;
    }
  }
  return false;
}

module.exports = binary_search;
