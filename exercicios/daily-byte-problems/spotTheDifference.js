const spotTheDifference = (s, t) => {
  let sortingS = s.split('').sort().join('');
  let sortingT = t.split('').sort().join('');
  let extraCharactere = '';

  if (sortingS.length !== sortingT.length) {
    for (let i = 0; i < sortingT.length; i++) {
      if (sortingS[i] !== sortingT[i])
       return extraCharactere = sortingT[i];
    }
  }
  return "''";
}


const s = 'ide';
const t = 'idea';

console.log(spotTheDifference(s, t));;