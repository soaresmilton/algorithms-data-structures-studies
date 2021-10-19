// function validAnagram(s, t) {
//   let map = {};

//   if (s.length !== t.length) return false;

//   for (let i = 0; i < s.length; i++) {
//     if (!map[s[i]]) map[s[i]] = 0;
//     map[s[i]]++;
//   }

//   for (let j = 0; j < t.length; j++) {
//     if (!map[t[j]]) return false;
//     map[t[j]]--;
//   }

//   return true;
// }


function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  let organizeS = s.split('').sort().join('');
  let organizeT = t.split('').sort().join('');

  return organizeS === organizeT;
}

const s = 'abdc';
const t = 'abdc';

console.log(validAnagram(s, t));