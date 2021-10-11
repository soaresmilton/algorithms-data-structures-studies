function validPalindrome(str) {
  let replaceString = /[\W_]/g;
  // console.log(`String recebida: ${str}`);
  let toLowerCaseString = str.toLowerCase().replace(replaceString, '');
  // console.log(`String passada para miníscula: ${toLowerCaseString}`);

  let reversedString = toLowerCaseString.split('').reverse().join('');
  // console.log(`String revertida: ${reversedString}`);

  return reversedString === toLowerCaseString;
}


const str = "A man, a plan, a canal: Panama.";

console.log(validPalindrome(str));
