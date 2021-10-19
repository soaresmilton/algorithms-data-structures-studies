function divisibleSumPairs(n, k, ar) {
  let count = 0;
  // let pairs = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0 && i < j) {
        // pairs.push([ar[i], ar[j]]);
        count++;
      };
    }
  }
  // console.log(pairs);
  return count;
}


const k = 5;
const ar = [1, 2, 3, 4, 5, 6];
const n = ar.length;

console.log(
  divisibleSumPairs(n, k, ar)
)