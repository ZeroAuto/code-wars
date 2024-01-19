// https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript
const noBoringZeros = n => {
  if (n === 0) return 0;
  const arr = n.toString().split('');
  while (arr[arr.length - 1] == '0') {
    arr.pop();
  }
  return parseInt(arr.join(''));
};

const noBoringZeroesOnelineRegex = n => +n.toString().replace(/0*$/, "");

console.log(noBoringZeroesOnelineRegex(1450)); // 145
console.log(noBoringZeroesOnelineRegex(9600000)); // 96
console.log(noBoringZeroesOnelineRegex(0));
