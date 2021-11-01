const plusMinus = (arr) => {
  let countNegativeNumbers = 0;
  let countZeros = 0;
  let countPositiveNumbers = 0;
  const arrLength = arr.length;


  for (let i = 0; i < arrLength; i++) {
    if (arr[i] < 0) countNegativeNumbers++;
    if (arr[i] > 0) countPositiveNumbers++;
    if (arr[i] === 0) countZeros++
  }

const ocurrenceOfNegativesNumbers = (countNegativeNumbers / arrLength).toFixed(6);
const occurenceOfZeros = (countZeros / arrLength).toFixed(6);
const occurenceOfPositivesNumbers = (countPositiveNumbers / arrLength).toFixed(6);

return (
  console.log(occurenceOfPositivesNumbers),
  console.log(ocurrenceOfNegativesNumbers),
  console.log(occurenceOfZeros)
)

}

const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);