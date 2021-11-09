function migratoryBirds(birds) {
  let count = 0;
  let maxKey;
  let myBirdsMap = new Map();

  for (let bird of birds) {
    myBirdsMap[bird] = myBirdsMap[bird] ? myBirdsMap[bird] + 1 : 1;
  }

  for (let birdsKey in myBirdsMap) {
    if (myBirdsMap[birdsKey] > count) {
      count = myBirdsMap[birdsKey];
      maxKey = birdsKey;
    }
  }
  return maxKey;
}


const birds = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

console.log(migratoryBirds(birds));