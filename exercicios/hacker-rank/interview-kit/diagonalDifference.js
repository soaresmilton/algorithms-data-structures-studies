function diagonalDifference(arr) {
  let mainDiagonal = 0;
  let secondaryDiagonal = 0;
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    mainDiagonal += arr[i][i];
    secondaryDiagonal += arr[len - 1 - i][i]; //invertendo o array principal
  }

  return Math.abs(mainDiagonal -  secondaryDiagonal);
}

const arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]

console.log(diagonalDifference(arr));