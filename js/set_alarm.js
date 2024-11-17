// https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript

const setAlarm = (employed, vacation) => (employed && !vacation) ? true : false ;

console.log(setAlarm(true, true)); // false
console.log(setAlarm(false, true)); // false
console.log(setAlarm(true, false)); // true
