
var one = "one";

function two() {
  return "two";
}

// Anti pattern
global.three = "three";
global.four = function() {
  return "four";
};

// Module pattern
exports.five = "five";
exports.six = function() {
  return "six";
};
