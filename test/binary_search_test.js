var chai = require('chai')
  , should = chai.should()
  , expect = chai.expect
  , assert = chai.assert
  , BinarySearch = require("../lib/search/BinarySearch");

describe('BinarySearch', function() {

  var A = [];

  // Env set-up
  before(function(done) {
    for(var i = 0; i<100; i++) {
      A[i] = i*i;
    }
    done();
  });

  // Test
  it('Should search and find 2401', function(done) {
    var key = BinarySearch(2401, A);
    assert.equal(A[key], 2401);
    done();
  });

  // Test
  it('Should search and return false', function(done) {
    var key = BinarySearch(2400, A);
    assert.equal(key, false);
    done();
  });

  // Env tear-down
  after(function(done) {
    done();
  });

});
