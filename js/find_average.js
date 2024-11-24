// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

// const findAverage = arr => {
//   if (arr.length === 0) return 0;
//   const sum = arr.reduce((sum, cur) => sum + cur, 0);
//   return sum / arr.length;
// };

// it can be done in one line
const findAverage = arr => arr.length === 0 ? 0 : arr.reduce((sum, cur) => sum + cur, 0) / arr.length;
