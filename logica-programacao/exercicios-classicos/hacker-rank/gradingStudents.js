function gradingStudents(grades) {
  let finalGrade = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38 || grades[i] % 5 <= 2) finalGrade.push(grades[i]);

    if (grades[i] >= 38 && grades[i] % 5 > 2) {
      let difference = 5 - (grades[i] % 5);
      let nextMultipleOfFive = grades[i] + difference;
      finalGrade.push(nextMultipleOfFive);
    }
  }

  return finalGrade;
}


const grades = [73, 67, 38, 33, 70, 39];

console.log(gradingStudents(grades));

// function multipleOfFive (grades) {
//   let arr = []
//   grades.forEach(element => {
//     arr.push(element % 5); 
//   });

//   return arr;
// }

// console.log(multipleOfFive(grades))