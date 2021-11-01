function angryProfessor(thresholdNumber, arrivalTimes) {
  let countOnTimeStudents = 0;

  for (let i = 0; i < arrivalTimes.length; i++) {
    if (arrivalTimes[i] <= 0) countOnTimeStudents++
  }
  
  return countOnTimeStudents < thresholdNumber ? console.log("YES") : console.log("NO");
}

const thresholdNumber = 2;
const arrivalTimes = [0, -1, 2, 1];
angryProfessor(thresholdNumber, arrivalTimes);

