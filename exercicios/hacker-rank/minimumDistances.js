function minimumDistances(arr) {
  let distances = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      let minDistance = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]);
      distances.push(minDistance)
    }
  }

  return distances.length === 0 ? -1 : distances.sort((a, b) => a - b)[0];
}

const arr = [7, 1, 3, 4, 1, 7];
console.log(minimumDistances(arr));
