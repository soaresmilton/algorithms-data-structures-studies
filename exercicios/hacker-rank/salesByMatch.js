function sockMerchant(n, ar) {
  let countPairs = 0;
  let colors = new Set();

  for (let i = 0; i < n; i++) {

    if (!colors.has(ar[i])) {
      colors.add(ar[i]);
    } else {
      countPairs++;
      colors.delete(ar[i]);
    }
  }
  return countPairs;

}


const n = 7;

const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(n, ar));