function bonAppetit(bill, k, b) {
  let annaBills = bill.filter(value => value !== bill[k]);
  let annaCharge = (annaBills.reduce((a, b) => a + b, 0)) / 2;
  return b - annaCharge === 0 ? console.log('Bon Appetit') : console.log(b - annaCharge);
}

function bonAppetit(bill, k, b) {
  const sum = bill.reduce((r, v) => r + v, 0);
  const result = (sum - bill[k]) / 2;
  return b - result === 0 ? console.log('Bon Appetit') : console.log(b - result);
}


const bill = [3, 10, 2, 9];
const k = 1;
const b = 12;
bonAppetit(bill, k, b)