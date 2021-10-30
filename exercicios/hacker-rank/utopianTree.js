function utopianTree(n) {
  let h = 1;

  for (let i = 0; i < n; i++) {
    (i % 2) == 0 ? h *= 2 : h += 1;
  }

  return h;
}


const n = 5;
console.log(utopianTree(n))