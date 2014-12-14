var chai = require('chai')
  , should = chai.should()
  , expect = chai.expect
  , assert = chai.assert
  , Logic = require("../lib/controlflow/Logic");

describe('Logic', function() {

  var tasks;
  var tasks_completed = 0;

  // Env set-up
  before(function(done) {
    done();
  });

  // Test
  it('Should execute a Logic of tasks with no errors', function(done) {
    Logic({
      zero: function(callback){
        setTimeout(function() {
          // console.log("zero --> ok");
          callback(null, 'zero done');
        }, 1100);
      },
      one: function(callback){
        setTimeout(function() {
          // console.log("one --> ok");
          callback(null, 'one done');
        }, 400);
      },
      two: ['one', 'zero', function(callback){
        setTimeout(function() {
          // console.log("two --> ok");
          callback(null, 'two done');
        }, 200);
      }],
      three: ['two', function(callback, results){
        setTimeout(function() {
          // console.log("three --> ok");
          // console.log("Three: " + JSON.stringify(results));
          callback(null, 'three done');
        }, 50);
      }],
      four: ['three', 'zero', function(callback, results){
        setTimeout(function() {
          // console.log("four --> ok");
          // console.log("Four: " + JSON.stringify(results));
          callback(null, 'four done');
        }, 100);
      }]
    }, function(err, results) {
      // console.log('err = ', err);
      // console.log('results = ', results);
      done();
    });
  });

  // Env tear-down
  after(function(done) {
    done();
  });

});
