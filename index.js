// Author: Jacopo Daeli <jacopo.daeli@gmail.com>
// Do you like algorithms?

// Sort Algorithms
var SelectionSort = require('./lib/sort/SelectionSort')
  , QuickSort = require('./lib/sort/QuickSort')
  , BubbleSort = require('./lib/sort/BubbleSort');

exports.selectionSort = SelectionSort;
exports.quickSort = QuickSort;
exports.bubbleSort = BubbleSort;


// Search Algorithms
var BinarySearch = require('./lib/search/BinarySearch');

exports.binarySearch = BinarySearch;


// Async Algorithms
var ForEach = require('./lib/async/ForEach');

exports.forEach = ForEach;
