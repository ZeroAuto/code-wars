// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
const countBy = (x, n) => Array.from({ length: n }, (_, i) => x + i * x);

console.log(countBy(1, 10));
console.log(countBy(2, 5));
console.log(countBy(5, 3));
