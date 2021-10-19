function factorial(number) {
  let result = 1;

  if (number == 0 || number == 1) return result;

  for (let i = number; i > 0; i--) {
    result = result * i;
  }

  return result;
}

console.log(factorial(5));


function recursiveFatorial(number) {
  if (number == 1 || number == 0) return 1
  let result = number * recursiveFatorial(number - 1);
  return result;
}

console.log(recursiveFatorial(5))