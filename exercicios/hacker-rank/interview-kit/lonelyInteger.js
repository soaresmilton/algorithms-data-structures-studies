function lonelyinteger(a) {
  let uniqueInteger = a.filter((value) => {
    return a.indexOf(value) === a.lastIndexOf(value);
  })

  return uniqueInteger[0];
}

const a = [1, 2, 3, 4, 3, 2, 1];
console.log(lonelyinteger(a));