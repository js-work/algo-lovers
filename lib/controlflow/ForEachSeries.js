// Author: Jacopo Daeli <jacopo.daeli@gmail.com>
// Strongly inspired by async.each()

// Applies the function iterator to each item in arr, in parallel.
// The iterator is called with an item from the list,
// and a callback for when it has finished. If the iterator passes
// an error to its callback, the main callback (for the each function)
// is immediately called with the error.
// Note, that since this function applies iterator to each item in parallel,
// there is no guarantee that the iterator functions will complete in order.

var only_once = require('../util/function').only_once;

function for_each_series (A, iterator, callback) {
  // iterator = function(el, callback) { ... }
  callback = callback || function () {};
  if (!A.length) {
    return callback(null);
  }
  var completed = 0;

  function iterate() {
    iterator(A[completed], only_once(done)); // passing the element
  }

  function done(err) {
    if(err) {
      callback(err);
    } else {
      completed++;
      if(completed>=A.length) {
        callback(null);
      } else {
        iterate();
      }
    }
  }

  iterate(); // start iteration

};
module.exports = for_each_series;
