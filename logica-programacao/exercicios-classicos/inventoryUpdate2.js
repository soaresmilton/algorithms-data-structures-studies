const updateInventory = (arr1, arr2) => {
  // 1- Converter os arrays 2D dos argumentos / parametros em um objeto

  const obj1 = arr1.reduce((accumulator, [amount, name]) => ({
    ...accumulator,
    [name]: amount,
  }), {});


  const obj2 = arr2.reduce((accumulator, [amount, name]) => ({
    ...accumulator,
    [name]: amount,
  }), {});

  // 2 - Verificar no obj2 quais itens possuem o mesmo nome que os itens do obj1, quando possuirem, somar suas quantidades ao obj1. Se não possuir, adicionar o item como um todo no obj1.

  for (const item in obj2) {
    if (item in obj1) {
      obj1[item] += obj2[item];
    } else {
      obj1[item] = obj2[item];
    }
  }

  // 3 - Transformar o resultado final em um array 2D novamente. Respeitando o formato inicial dos argumentos/parametros

  const newInventory = [];
  for (const item in obj1) {
    newInventory.push([obj1[item], item]);
  }
  // 4 - Ordernar o array final
  return newInventory.sort((arr1, arr2) => arr1[1] > arr2[1] ? 1 : -1);
}




var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(

  updateInventory(curInv, newInv)

)
