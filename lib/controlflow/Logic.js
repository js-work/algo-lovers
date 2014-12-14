// Author: Jacopo Daeli <jacopo.daeli@gmail.com>

var utilObject = require('../util/object')
  , utilArray = require('../util/array')
  , only_once = require('../util/function').only_once;

function logic(tasks, callback) {

  callback = callback || function () {};
  var keys = utilObject.keys(tasks);
  var remainingTasks = keys.length;
  if (!remainingTasks) { return callback(); }
  if (typeof tasks != "object") { throw new Error("Tasks must be an object") }

  var completed = 0
    , results = {}
    , tasksInfo = {};

  // Preparing things
  utilArray.each(keys, function(key, index, arr) {
    var task = utilArray.isArray(tasks[key]) ? tasks[key] : [tasks[key]];
    tasksInfo[key] = {};
    tasksInfo[key].completed = false;
    tasksInfo[key].started = false;
    tasksInfo[key].dependencies = [];
    tasksInfo[key].fn = null;
    for(var i=0; i<task.length; i++) {
      if(typeof task[i] == "string") {
        tasksInfo[key].dependencies.push(task[i]);
      } else {
        tasksInfo[key].fn = task[i];
      }
    }
    if(!tasksInfo[key].fn) {
      throw new Error("Task be a function or an array containing a function");
    }
  });

  //console.log(tasksInfo);

  function iterate() {
    utilArray.each(keys, function(key, index, arr) {
      // console.log(key + "::::" + tasksInfo[key].completed);
      if(!tasksInfo[key].completed && !tasksInfo[key].started) {
        var depCompleted = 0;
        for(var i in tasksInfo[key].dependencies) {
          var kdep = tasksInfo[key].dependencies[i];
          depCompleted = tasksInfo[kdep].completed ? depCompleted+1 : depCompleted;
        }
        if(depCompleted == tasksInfo[key].dependencies.length) {
          tasksInfo[key].started = true;
          tasksInfo[key].fn(only_once(function(err, result) {
            if (err) {
              callback(err, null);
              callback = function () {}; // reset callback after the first error
            }
            else {
              tasksInfo[key].completed = true;
              completed++;
              if (completed >= keys.length) {
                callback(null, results); // no errors
              } else {
                results[key] = result;
              }
              iterate();
            }
          }), results);
        }
      }
    });
  }

  iterate(); // starts iteration

};
module.exports = logic;
