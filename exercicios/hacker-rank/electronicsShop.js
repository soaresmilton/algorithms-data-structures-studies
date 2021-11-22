function getMoneySpent(keyboards, drives, b) {

  let arrOfCombinations = [];

  for (let keyboardPrice of keyboards) {

    for (let i = 0; i < drives.length; i++) {
      let sum = keyboardPrice + drives[i];
      arrOfCombinations.push(sum);
    }
  }

  let result = arrOfCombinations.filter(combination => combination <= b).sort((a, b) => b - a);

  return result.length == 0 ? -1 : result[0];
}
const b = 10;
const keyboards = [40, 50, 60];
const drives = [5, 8, 12];

console.log(getMoneySpent(keyboards, drives, b));