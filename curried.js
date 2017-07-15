const j = require('./j.json');
function fetch(x) {
  if (x > 5) {
    return returnUserToHome;
  }

  return function(y, obj) {
    return y(obj);
  }
}

function returnUserToHome() {
  console.log('Ok :(');
}

function parseProducts(products) {
  const filtered = products.filter(function(p) { return p.name.length < 25 }).map(function(p) { return p.name });
  console.log(filtered);
  return filtered;
}

fetch(6)(parseProducts, j.data.products);

