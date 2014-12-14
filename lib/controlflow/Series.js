// Author: Jacopo Daeli <jacopo.daeli@gmail.com>

var only_once = require('../util/function').only_once
  , utilObject = require('../util/object');

function series(tasks, callback) {
  callback = callback || function () {};
  if (!tasks.length) {
    return callback(null);
  }
  var completed = 0;

  function iterate() {
    tasks[completed](only_once(done));
  }

  function done(err, result) {
    if(err) {
      callback(err, null);
    } else {
      completed++;
      result = result || null;
      callback(null, result);
      if(completed<tasks.length) {
        iterate();
      }
    }
  }

  iterate(); // start iteration

};
module.exports = series;
