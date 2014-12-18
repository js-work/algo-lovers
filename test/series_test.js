var chai = require('chai')
  , should = chai.should()
  , expect = chai.expect
  , assert = chai.assert
  , Series = require("../lib/controlflow/Series");

describe('Series', function() {

  var tasks;
  var tasks_completed = 0;

  // Env set-up
  before(function(done) {
    tasks = [
      function(callback){
        tasks_completed++;
        callback(null, 'one');
      },
      function(callback){
        tasks_completed++;
        callback(null, 'two');
      }
    ];
    done();
  });

  // Test
  it('Should execute a Series of tasks with no errors', function(done) {
    Series(tasks, function(err, results) {
      assert.equal(err, null);
      assert.equal(typeof results, "object");
      assert.equal(results[0], "one");
      assert.equal(results[1], "two");
      // console.log(results);
      if(tasks_completed===2) {
        done(); // Done!
      }
    });
  });

  // Env tear-down
  after(function(done) {
    done();
  });

});
