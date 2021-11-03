function beautifulDays(i, j, k) {
  let n = i;
  const reversedNumber = () => {
    return Number(n.toString().split('').reverse().join(''))
  };
  let beautyDays = 0;

  for (n; n <= j; n++) {
   if(Math.abs(n - reversedNumber()) % k === 0) beautyDays++;
  }

  return beautyDays;
}


const i = 20;
const j = 23;
const k = 6;

console.log(beautifulDays(i, j, k));