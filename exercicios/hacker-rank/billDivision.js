function bonAppetit(bill, k, b) {
  let annaBills = bill.filter(value => value !== bill[k]);
  let annaCharge = (annaBills.reduce((a, b) => a + b, 0)) / 2;
  if(b - annaCharge === 0)  console.log('Bon Appetit');

  const sumTotal = bill.reduce((a, b) => a + b)
  console.log(sumTotal);
  const result = (sum - bill[k]) / 2;
  console.log(result);

  return console.log(b - annaCharge);
}


const bill = [3, 10, 2, 9];
const k = 1;
const b = 12;
bonAppetit(bill, k, b)