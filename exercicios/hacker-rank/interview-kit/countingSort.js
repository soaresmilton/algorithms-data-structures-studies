function coutingSort(arr) {
  let countedArray = new Array(100).fill(0)
  for (let nums of arr) {
    countedArray[nums]++;
  }
  return countedArray;
}

const generateRandomArray = () => {
  let arr =  Array.from({ length: 100 }, () => (Math.random() * 100).toFixed())

  return arr;
}

console.log(coutingSort(generateRandomArray()));