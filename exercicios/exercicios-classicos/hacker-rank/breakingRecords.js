function breakingRecords(scores) {
  let countMostPoints = 0;
  let countLeastPoints = 0;
  let max = scores[0];
  let min = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
      countMostPoints++;
      max = scores[i];
    }
    if (scores[i] < min) {
      min = countLeastPoints++;
      min = scores[i];
    }
  }

  return [countMostPoints, countLeastPoints];

}

const scores = [ 10, 5, 20, 20, 4, 5, 2, 25, 1]

console.log(breakingRecords(scores))