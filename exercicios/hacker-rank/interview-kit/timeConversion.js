function timeConversion(time12h) {

  let modifier = time12h.slice(-2);

  let [hours, minutes, secondsWithModifier] = time12h.split(':');
  let seconds = secondsWithModifier.split('').splice(0, 2).join('');
  [hours, minutes, secondsWithModifier] = [hours, minutes, seconds];

  if (hours === '12') hours === '00';
  if (modifier === 'PM') hours = parseInt(hours, 10) + 12;

  return console.log(`${hours}:${minutes}:${seconds}`);

}

const time12h = '07:05:45PM';

timeConversion(time12h);