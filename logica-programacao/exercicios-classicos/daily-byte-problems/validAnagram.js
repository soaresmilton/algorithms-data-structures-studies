function validAnagram(s, t) {
  let map = {};

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) map[s[i]] = 0;
    map[s[i]]++;
  }

  for (let j = 0; j < t.length; j++) {
    if (!map[t[j]]) return false;
    map[t[j]]--;
  }

  return true;
}


const s = 'abcdzg';
const t = 'bcfagz';

console.log(validAnagram(s, t));