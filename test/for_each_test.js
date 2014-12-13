var chai = require('chai')
  , should = chai.should()
  , expect = chai.expect
  , assert = chai.assert
  , ForEach = require("../lib/async/ForEach");

describe('ForEach', function() {

  var numbers;
  var count_errors = 0;

  // Env set-up
  before(function(done) {
    numbers = [1, 2, 3, 4, 40, 80, 160];
    done();
  });

  // Test
  it('Should execute ForEach with no errors', function(done) {
    ForEach(numbers, function(number, callback) {
      // console.log("Printing " + number);
      callback(null); // no errors
      if(number==160 && count_errors==0) {
        done();
      }
    }, function(err) {
      if(err) {
        count_errors++;
        // console.log('Failed to process');
      } else {
        // console.log('Process completed');
      }
    });
  });

  it('Should execute ForEach with an error when number equal to 3', function(done) {
    count_errors = 0;
    ForEach(numbers, function(number, callback) {
      if(number==3) { callback('Number == 3'); return; }

      callback(null); // no errors
      if(number==160 && count_errors==1) {
        done();
      }
    }, function(err) {
      if(err) {
        count_errors++;
        // console.log('Failed to process');
      } else {
        // console.log('Process completed');
      }
    });
  });

  // Env tear-down
  after(function(done) {
    done();
  });

});
