function symOfTwo(arr1, arr2) {
  const result = [];

  // A ideia é verificar quais elementos existem no arr1 e não existe no arr2. E vice-versa. E adicionar esses elementos que não são em comum, dentro do array resultante.

  for (const element of arr1) {
    if (!arr2.includes(element) && !result.includes(element)) {
      result.push(element);
    };
  }

  for (const element of arr2) {
    if (!arr1.includes(element) && !result.includes(element)) {
      result.push(element);
    };
  }

  return result;
};

function symmetricDifference() {
  const arrayOfArrays = [...arguments];
  let result = arrayOfArrays[0];

  for (let i = 1; i < arrayOfArrays.length; i++) {
    result = symOfTwo(result, arrayOfArrays[i]);
  }

  let sortResult = result.sort((a, b) => a - b);
  return sortResult;
};

console.log(symmetricDifference([1, 2, 5], [2, 3, 5], [3, 4, 5]));