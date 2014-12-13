// Author: Jacopo Daeli <jacopo.daeli@gmail.com>
// QuickSort Algorithm

// Quicksort, or partition-exchange sort, is a sorting
// algorithm developed by Tony Hoare that, on average,
// makes O(n log n) comparisons to sort n items. In the
// worst case, it makes O(n2) comparisons, though this
// behavior is rare. Quicksort is often faster in practice
// than other O(n log n) algorithms.

// Selecting a pivot element is also complicated by the
// existence of integer overflow. If the boundary indices
// of the subarray being sorted are sufficiently large, the
// naïve expression for the middle index, (lo + hi)/2,
// will cause overflow and provide an invalid pivot index.
// This can be overcome by using, for example, lo + (hi-lo)/2
// to index the middle element, at the cost of more complex
// arithmetic. Similar issues arise in some other methods
// of selecting the pivot element.

var utilArray = require('../util/array');

function partition(A, begin, end, pivot_index) {
  var pivot_value = A[pivot_index]
    , store_index = begin;

  utilArray.swap(A, pivot_index, end-1);

  for(var i=begin; i<end-1; ++i) {
    if(A[i]<=pivot_value) {
      utilArray.swap(A, store_index, i);
      ++store_index;
    }
  }

  utilArray.swap(A, end-1, store_index);

  return store_index;
}

function qsort(A, begin, end) {
  if(end-1>begin) {
    var pindex = begin + Math.floor((end-begin)/2);
    pindex = partition(A, begin, end, pindex);

    qsort(A, begin, pindex);
    qsort(A, pindex+1, end);
  }
}

function quick_sort(A) {
  qsort(A, 0, A.length);
}

module.exports = quick_sort;
