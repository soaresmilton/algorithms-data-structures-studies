const sentence1 = "apple apple", sentence2 = "banana";

function uncommonWords(sentence1, sentence2) {
  let s1 = sentence1.split(" ");
  let s2 = sentence2.split(" ");
  let uncommon = new Set();

  s1.filter((word) => {
    if (!s2.includes(word)) uncommon.add(word);
  })

  s2.filter(word => {
    if (!s1.includes(word)) uncommon.add(word);
  })

  return [...uncommon];

}

console.log(uncommonWords(sentence1, sentence2));

function uncommonFromSentences(sentence1, sentence2) {
  let arr = sentence1.concat(' ', sentence2).split(' ');
  let objArr = {};
  let uncommon = [];

  for (let word of arr) {
     objArr[word] = (objArr[word] || 0) + 1;
  }

  for (let count of arr) {
    if(objArr[count] === 1) uncommon.push(count);
  }

  return uncommon;

}


console.log(uncommonFromSentences(sentence1, sentence2));
