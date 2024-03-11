// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript
const dutyFree = (norm, discount, hol) => Math.floor(hol/(norm * (discount/100)));

console.log(dutyFree(12, 50, 1000)); // 166
console.log(dutyFree(17, 10, 500)); // 294
