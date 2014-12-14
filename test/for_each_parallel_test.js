var chai = require('chai')
  , should = chai.should()
  , expect = chai.expect
  , assert = chai.assert
  , ForEachParallel = require("../lib/controlflow/ForEachParallel");

describe('ForEachParallel', function() {

  var numbers
  , total = 0
  , partial = 0;

  // Env set-up
  before(function(done) {
    numbers = [320,160, 80, 40, 20, 4, 2, 1];
    for(var i=0; i<numbers.length; i++) {
      total += numbers[i];
    }
    done();
  });

  // Test
  it('Should execute ForEachParallel with no errors', function(done) {
    ForEachParallel(numbers, function(number, callback) {
      // console.log("Printing " + number);
      setTimeout(function() {
        callback(null); // no errors
        partial += number;
        if(partial==total) {
          done();
        }
      }, number*2);
    }, function(err) {
      if(err) { count_errors++; return; }
      // console.log("Completed");
    });
  });

  // Env tear-down
  after(function(done) {
    done();
  });

});
