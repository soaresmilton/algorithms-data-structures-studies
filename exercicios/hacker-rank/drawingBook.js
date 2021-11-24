function pageCount(bookLen, targetPage) {

  let result = [];

  let fromStart = Math.floor(targetPage / 2);
  let fromEnd = Math.floor(bookLen / 2) - fromStart;
  return Math.min(fromStart, fromEnd);

}

const bookLen = 5;
const targetPage = 4;
console.log(pageCount(bookLen, targetPage))
