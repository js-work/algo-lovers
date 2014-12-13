var chai = require('chai')
  , should = chai.should()
  , expect = chai.expect
  , assert = chai.assert
  , ForEachSeries = require("../lib/controlflow/ForEachSeries");

describe('ForEachSeries', function() {

  var numbers;
  var count_errors = 0;

  // Env set-up
  before(function(done) {
    numbers = [1, 2, 3, 4, 40, 80, 160];
    done();
  });

  // Test
  it('Should execute ForEachSeries with no errors', function(done) {
    ForEachSeries(numbers, function(number, callback) {
      // console.log("Printing " + number);
      callback(null); // no errors
      if(number==160 && count_errors==0) {
        done();
      }
    }, function(err) {
      if(err) { count_errors++; }
    });
  });

  // Env tear-down
  after(function(done) {
    done();
  });

});
