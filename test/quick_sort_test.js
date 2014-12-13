var chai = require('chai')
  , should = chai.should()
  , expect = chai.expect
  , assert = chai.assert
  , QuickSort = require("../lib/sort/QuickSort");

describe('QuickSort', function() {

  var sa  // expected array after the sort
  , lts // list to sort
  , isa // expected array after the sort
  , ilts; // list to sort

  // Env set-up
  before(function(done) {
    sa  = [1, 4, 5, 7, 9, 10];
    lts = [5, 1, 4, 10,7, 9];
    isa  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    ilts = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    // Done!
    done();
  });

  // Test
  it('Should sort list', function(done) {
    QuickSort(lts); // sort lts array
    assert.deepEqual(lts, sa);
    done();
  });

  it('Should sort inverted list', function(done) {
    QuickSort(ilts); // sort lts array
    assert.deepEqual(ilts, isa);
    done();
  });

  // Env tear-down
  after(function(done) {
    done();
  });

});
