const j = { a: 1, b: 2, c: 3 };
console.log(j);

// retorna o valor de j.c alterado sem alterar j em nenhum nivel;
function xhamps(obj) {
  // acessa o objeto e assina valores em newData baseando-se em j
  const newData = {};
  const objKeys = Object.keys(obj); // ['a', 'b', 'c']
  objKeys.map(function(o) {
    return newData[o] = obj[o];
  });
  newData.c = 'x';
  console.log(newData);
  return newData;
}

const newXhamps = xhamps(j);
newXhamps

console.log(j);

