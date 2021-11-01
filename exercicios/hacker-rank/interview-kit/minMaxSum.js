function miniMaxSum(arr) {
  const sortedArray = arr.sort((a, b) => a - b);

  let removeLastNumber = sortedArray.pop()
  const maxSum = sortedArray.reduce((a, b) => a + b, 0);
  sortedArray.push(removeLastNumber);

  let removeFirstNumber = sortedArray.shift();
  const minSum = sortedArray.reduce((a, b) => a + b, 0);

  return console.log(maxSum, minSum);
}

const arr = [5, 4, 3, 2, 1];
miniMaxSum(arr)