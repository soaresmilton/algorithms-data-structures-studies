function catsAndMouse(x, y, z) {
  if (x === y) return "Mouse C";
  if (Math.abs(x - z) < Math.abs(y - z)) return "Cat A";
  if (Math.abs(x - z) > Math.abs(y - z)) return "Cat B";
  if (Math.abs(x - z) === Math.abs(y - z)) return "Mouse C";
}

// cat position
const x = 1;
// cat2 position
const y = 3;
//mouse position
const z = 2;

catsAndMouse(x, y, z);