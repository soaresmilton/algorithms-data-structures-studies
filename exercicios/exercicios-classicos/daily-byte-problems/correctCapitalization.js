function correctCapitalization(str) {
  let lowerCase = str.toLowerCase();
  let upperCase = str.toUpperCase();
  let isCapitalize = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  return str === lowerCase || str === upperCase || str === isCapitalize;
}

const str = "E se for duas";

console.log(correctCapitalization(str));