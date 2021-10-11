function vacuumRoute(robotMoves) {
  let right = 0,
    left = 0,
    up = 0,
    down = 0;


  for (let i = 0; i < robotMoves.length; i++) {
    if (robotMoves[i] === 'L') {
      left++;
      right--;
      up = up;
      down = down;

    } else if (robotMoves[i] === 'R') {
      left--;
      right++;
      up = up;
      down = down;

    } else if (robotMoves[i] === 'U') {
      left = left;
      right = right;
      up++;
      down--;

    } else  {
      left = left;
      right = right;
      up--;
      down++;

    }
  }
  console.log(`robot path: ${robotMoves}`);
  console.log(`right: ${right}`);
  console.log(`left: ${left}`);
  console.log(`up: ${up}`);
  console.log(`down: ${down}`);
  return (right === 0 && left === 0 && down === 0 && up === 0) ?  true : false;



}


const robotMoves = 'RUULLDRD'
console.log(vacuumRoute(robotMoves));