// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

const largestPairSum = numbers => {
  numbers.sort((a,b) => a-b);
  return numbers[numbers.length-2] + numbers[numbers.length-1];
}

// don't forget about array destructuring
const largestPairSumDestruct = numbers => {
  const [a,b] = numbers.sort((a,b) => b - a);
  return a + b;
}

console.log(largestPairSumDestruct([10,14,2,23,19])) // 42
