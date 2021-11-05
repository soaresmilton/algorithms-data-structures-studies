function compareKeystrokes(s, t) {
  let sArr = [];
  let tArr = [];

  for (let i = 0; i < s.length; i++) {
    s[i] === "#" ? sArr.pop() : sArr.push(s[i]);
  }

  for (let j = 0; j < t.length; j++) {
    t[j] === "#" ? tArr.pop() : tArr.push(t[j]);
  }

  sArr = sArr.join('');
  tArr = tArr.join('');
  return sArr === tArr;
}


const s = "xywrrmp";
const t = "xywrrmu#p";
console.log(compareKeystrokes(s, t));