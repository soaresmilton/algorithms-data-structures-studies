function hurdleRace(k, height) {
  let numberOfDoses = [];

  for (let i = 0; i < height.length; i++) {
    if (k < height[i]) numberOfDoses.push(height[i] - k);
  }

  return numberOfDoses.length === 0 ? 0 : numberOfDoses.sort((a, b) => b - a)[0];
}

const k = 4;

const height = [1, 6, 3, 5, 2];

console.log(hurdleRace(k, height));


console.log(Math.max(0, Math.max(...height) - k))