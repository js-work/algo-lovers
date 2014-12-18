// Author: Jacopo Daeli <jacopo.daeli@gmail.com>

var only_once = require('../util/function').only_once;

function for_each_limit(A, limit, iterator, callback) {

  if(!iterator) {
    throw new Error('Missing iterator function');
  }

  callback = callback || function () {};

  if (!A.length || limit <= 0) {
    return callback(null);
  }

  var completed = 0
    , started = 0
    , running = 0;

  function iterate() {
    // console.log("Running " + running + " operations");
    while(running<limit && started<A.length) {
      // console.log("Started " + started + " operations");
      started++;
      running++;
      iterator(A[started-1], only_once(done));
    }
  }

  function done(err) {
    if (err) {
      callback(err);
      callback = function () {}; // reset callback after the first error
    }
    else {
      running--; // -1 running operation
      completed++; // +1 completed operation
      // console.log(completed + "===" + A.length);
      if (completed >= A.length) {
        callback(null); // no errors
      } else {
        iterate();
      }
    }
  }

  iterate(); // starting to iterate

};
module.exports = for_each_limit;
