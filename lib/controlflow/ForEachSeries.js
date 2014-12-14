// Author: Jacopo Daeli <jacopo.daeli@gmail.com>

var only_once = require('../util/function').only_once;

function for_each_series(A, iterator, callback) {
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
