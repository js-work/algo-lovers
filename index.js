// Author: Jacopo Daeli <jacopo.daeli@gmail.com>
// Do you like algorithms?

// Sort Algorithms
var QuickSort = require('./lib/sort/QuickSort')
  , BubbleSort = require('./lib/sort/BubbleSort');

exports.quickSort = QuickSort;
exports.bubbleSort = BubbleSort;

// Search Algorithms
var BinarySearch = require('./lib/search/BinarySearch');

exports.binarySearch = BinarySearch;
