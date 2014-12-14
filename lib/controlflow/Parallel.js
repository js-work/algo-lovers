// Author: Jacopo Daeli <jacopo.daeli@gmail.com>

var ForEachParallel = require('./ForEachParallel')
  , utilObject = require('../util/object')
  , utilArray = require('../util/array');

function parallel(tasks, callback) {
  if(utilArray.isArray(tasks)) {
    var results = [];
  } else {
    var results = {};
  }
  var keys = utilObject.keys(tasks);
  ForEachParallel(keys, function(key, cb) {
    tasks[key](function(err, result) {
      results[key] = result || null;
      cb(err || null);
    });
  }, function(err) {
    callback(err, results);
  });
};
module.exports = parallel;

/*
  var tasks = [
    function one(cb) {
      cb(null, 'one');
    }, function two(cb) {
      cb(null, 'two');
    }
  ];

  var main_cb = function(err, results) {
    results --> ['one', 'two'];
  }
*/
