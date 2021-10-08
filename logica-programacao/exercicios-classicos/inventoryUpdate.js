function updateInventory(arr1, arr2) {

  let index;
  let currentItemsNames = [];
  let newItemsNames = [];
  let newInventory = [...arr1];

  newInventory.forEach(item => {
    arr2.forEach(item2 => {
      if (item[1] === item2[1]) item[0] = item[0] + item2[0];
    })
  })

  newInventory.forEach(item => {
    currentItemsNames.push(item[1]);
  })

  arr2.forEach(item => {
    newItemsNames.push(item[1]);
  })

  newItemsNames.forEach(item => {
    if (currentItemsNames.indexOf(item) === -1) { //currentItemsNames.indexOf(item) === undefined
      index = newItemsNames.indexOf(item);
      newInventory.push(arr2[index]);
    }
  })

  return newInventory.sort((a, b) => a[1] > b[1] ? 1 : -1);

}

var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(curInv, newInv);