// Author: Jacopo Daeli <jacopo.daeli@gmail.com>
// Strongly inspired by async.each()

// Applies the function iterator to each item in arr, in parallel.
// The iterator is called with an item from the list,
// and a callback for when it has finished. If the iterator passes
// an error to its callback, the main callback (for the each function)
// is immediately called with the error.
// Note, that since this function applies iterator to each item in parallel,
// there is no guarantee that the iterator functions will complete in order.

var each = require('../util/array').each
  , only_once = require('../util/function').only_once;

function for_each_parallel (A, iterator, callback) {
  // iterator = function(el, callback) { ... }
  callback = callback || function () {};
  if (!A.length) {
    return callback(null);
  }
  var completed = 0;

  function done(err) {
    if (err) {
      callback(err);
      callback = function () {}; // reset callback after the first error
    }
    else {
      completed++; // +1 iterator function applied over an array element completed
      // console.log(completed + "==" + A.length);
      if (completed == A.length) {
        callback(null); // no errors
      }
    }
  }

  // equal to Array.forEach
  // iterate over all array elements
  each(A, function (element, index, arr) {
    // It is the iterator function that if an error occour
    // the developer must call the callback with the error parameter
    // not null
    iterator(element, only_once(done)); // passing the element
  });

};
module.exports = for_each_parallel;
