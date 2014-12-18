var chai = require('chai')
  , should = chai.should()
  , expect = chai.expect
  , assert = chai.assert
  , ForEachLimit = require("../lib/controlflow/ForEachLimit");

describe('ForEachLimit', function() {

  var numbers
    , total = 0
    , partial = 0;

  // Env set-up
  before(function(done) {
    numbers = [320, 160, 80, 40, 20, 4, 2, 1];
    for(var i=0; i<numbers.length; i++) {
      total += numbers[i];
    }
    done();
  });

  // Test
  it('Should execute ForEachLimit with no errors', function(done) {
    ForEachLimit(numbers, 3, function(number, callback) {
      // console.log("Printing " + number);
      setTimeout(function() {
        callback(null); // no errors
        partial += number;
        if(partial===total) {
          done();
        }
      }, number*2);
    }, function(err) {
      assert.equal(err, null);
      // console.log("Completed");
    });
  });

  // Env tear-down
  after(function(done) {
    done();
  });

});
