function longestCommonPrefix(strings) {
  let prefix = strings[0];
  if (strings.length === 0) return "";

  for (let i = 1; i < strings.length; i++) {
    while (strings[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}

const strings = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strings));