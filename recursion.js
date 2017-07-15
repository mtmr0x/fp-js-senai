// retorna o valor z se x === y
// o primeiro escopo da funcao nao pode saber quem z é
// se x !== y chama xhamps de novo
// se y < x retorna e nao deixa a funçao seguir
function xhamps(x, y) {
  if (x > y) {
    return function() {
      return
    }
  }
  const newData = x;
  if (x === y) {
    return function(z) {
      console.log('ok, I\'m done', z);
    }
  }

  return xhamps(x + 1, y);
}

xhamps(10, 9)(13);

