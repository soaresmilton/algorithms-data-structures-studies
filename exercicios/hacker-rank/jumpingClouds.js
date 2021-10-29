function jumpingOnClouds(c, k) {
  let e = 100;
  let n = c.length;
  let i = 0; //first jump

  do {
    i = (i + k) % n;
    e--;
    if (c[i] == 1) e -= 2;
  } while (i != 0)

  return e;
}


const c = [0, 0, 1, 0, 0, 1, 1, 0]
const k = 2;
console.log(jumpingOnClouds(c, k));