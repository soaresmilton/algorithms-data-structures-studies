function addTwoNumbers(l1, l2) {
  let l1Reversed = '';
  let l2Reversed = '';

  l1.reverse().forEach(element => {
    l1Reversed += element.toString();
  })

  l2.reverse().forEach(element => {
    l2Reversed += element.toString();
  })

  let num1 = Number(l1Reversed);
  let num2 = Number(l2Reversed);
  let sum = num1 + num2;
  let reversedSum = sum.toString().split('').reverse().join('');
  let finalArr = [];

  for (let i = 0; i < reversedSum.length; i++) {
    finalArr.push(Number(reversedSum[i]));
  }
  return finalArr;

}

const l1 = [1, 2];
const l2 = [1];
console.log(addTwoNumbers(l1, l2));