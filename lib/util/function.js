// Author: Jacopo Daeli <jacopo.daeli@gmail.com>
// Util functions for playing with Javascript Functions

// Make a function only one time callable
function _only_once(fn) {
  var called = false;
  return function() {
    if (called) throw new Error("Fn was already called.");
    called = true;
    fn.apply(null, arguments);
  }
}
exports.only_once = _only_once;
