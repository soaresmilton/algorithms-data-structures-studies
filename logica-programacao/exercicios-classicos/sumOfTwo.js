// You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return fals

const sumOfTwo = (a, b, v) => {
  const differences = new Set()
  for (let i = 0; i < a.length; i++) {
    const complement = v - a[i]
    differences.add(complement);
  }

  console.log(differences);


  for (let j = 0; j < b.length; j++) {
    if (differences.has(b[j])) return true
  }
  return false
}

console.log(sumOfTwo([2, 3, 4], [-15, 6, 3], 7));