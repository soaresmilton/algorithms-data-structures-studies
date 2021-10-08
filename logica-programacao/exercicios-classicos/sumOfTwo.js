// You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return fals

const sumOfTwo = (arr1, arr2, goal) => {
  const differences = new Set() //=> Evita valores duplicados
  for (let i = 0; i < arr1.length; i++) {
    const complement = goal - arr1[i]
    differences.add(complement);
  }

  console.log(differences);


  for (let j = 0; j < arr2.length; j++) {
    if (differences.has(arr2[j])) return true
  }
  return false
}

console.log(sumOfTwo([2, 3, 4], [-15, 6, 3], 7));