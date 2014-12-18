// Author: Jacopo Daeli <jacopo.daeli@gmail.com>
// BubbleSort Algorithm

// Bubble sort has worst-case and average complexity both О(n^2),
// where n is the number of items being sorted.
// The significant advantage that bubble sort has over most other implementations,
// even quicksort, but not insertion sort, is that the ability to detect that the
// list is sorted is efficiently built into the algorithm. When the list is
// already sorted (best-case), the complexity of bubble sort is only O(n).

var utilArray = require('../util/array');

function bubble_sort(list_to_sort) {
  if(!list_to_sort) {
    throw new Error('BubbleSort: list of sortable items is missing.')
  }
  var lts = list_to_sort;
  var N = lts.length;
  // var step = 0;
  // console.log("## Step " + step);
  // console.log(lts);
  while(N!==0) {
    var new_n = 0;
    // console.log("## Step " + (++step));
    for(var i=1; i<N; i++) {
      if(lts[i-1] > lts[i]) {
        utilArray.swap(lts, i-1, i);
        new_n = i;
      }
      // console.log(lts);
    }
    N = new_n;
  }
}

module.exports = bubble_sort;
