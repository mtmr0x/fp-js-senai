function sum(x) {
  if (x > 4) {
    return x * 2;
  }
  return function() {
    return x / 2;
  }
}

module.exports = sum;

