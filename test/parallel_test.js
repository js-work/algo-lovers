var chai = require('chai')
  , should = chai.should()
  , expect = chai.expect
  , assert = chai.assert
  , Parallel = require("../lib/controlflow/Parallel");

describe('Parallel', function() {

  var tasks;
  var tasks_completed = 0;

  // Env set-up
  before(function(done) {
    tasks = [
      function(callback){
        setTimeout(function() {
          tasks_completed++;
          callback(null, 'one');
        }, 200);
      },
      function(callback){
        setTimeout(function() {
          tasks_completed++;
          callback(null, 'two');
        }, 10);
      }
    ];
    done();
  });

  // Test
  it('Should execute a Parallel of tasks with no errors', function(done) {
    Parallel(tasks, function(err, results) {
      // the results array will equal ['one','two'] even though
      // the second function had a shorter timeout
      assert.equal(err, null);
      assert.equal(typeof results, "object");
      assert.equal(results[0], "one");
      assert.equal(results[1], "two");
      // console.log(results);
      if(tasks_completed==2) {
        done(); // Done!
      }
    });
  });

  // Env tear-down
  after(function(done) {
    done();
  });

});
