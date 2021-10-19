function addBinary(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

console.log(addBinary("100", 1));