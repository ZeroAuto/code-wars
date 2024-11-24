// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

const findMultiples = (integer, limit) => {
  const result = [];
  let num = integer;
  while (num <= limit) {
    result.push(num);
    num += integer;
  }
  return result;
};

// use Array.from
const findMultiplesArrayFrom = ( int, limit ) => Array.from({ length: limit/int }, ( _, i ) => ( i + 1 ) * int );

console.log(findMultiples(5, 25));
console.log(findMultiples(5, 7));
console.log(findMultiples(4, 27));
