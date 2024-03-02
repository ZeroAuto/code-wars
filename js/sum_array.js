// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
const sumArray = arr => {
  if (!arr || arr.length <= 2) {
    return 0;
  }
  return arr.sort((a, b) => a - b).slice(1, arr.length - 1).reduce((total, current) => total + current);
}

const sumArrayOneline = arr => !arr || arr.length <= 2 ? 0 : arr.sort((a, b) => a - b).slice(1, -1).reduce((total, current) => total + current);

console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([1,2]));
console.log(sumArray([1,3,4,5]));
console.log(sumArray([1,5,4,3]));
