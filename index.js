// Author: Jacopo Daeli <jacopo.daeli@gmail.com>
// Do you like algorithms?

// Sort Algorithms
var SelectionSort = require('./lib/sort/SelectionSort')
  , QuickSort = require('./lib/sort/QuickSort')
  , BubbleSort = require('./lib/sort/BubbleSort');

exports.Sort = {
  selectionSort: SelectionSort,
  quickSort: QuickSort,
  bubbleSort: BubbleSort
}


// Search Algorithms
var BinarySearch = require('./lib/search/BinarySearch');

exports.Search = {
  binarySearch: BinarySearch
}


// Control Flow Algorithms
var ForEachParallel = require('./lib/controlflow/ForEachParallel')
  , ForEachSeries = require('./lib/controlflow/ForEachSeries');

exports.ControlFlow = {
  forEachParallel: ForEachParallel,
  forEachSeries: ForEachSeries
}
