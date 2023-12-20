const sumTwoSmallestNumbers = (numbers) => {
  numbers.sort((a,b) => a - b);
  return numbers[0] + numbers[1]
};

const sumTwoSmallestNumbersReduce = numbers => numbers.sort((a,b) => a - b).slice(0,2).reduce((a,b) => a+b);

console.log(sumTwoSmallestNumbersReduce([5,8,12,19,22])) // 13
console.log(sumTwoSmallestNumbersReduce([15,28,4,2,43])) //6
