// https://www.codewars.com/kata/55c45be3b2079eccff00010f/solutions/javascript
const sortString = (a,b) => {
  const matchA = a.match(/(\d+)/);
  const matchB = b.match(/(\d+)/);
  return matchA[0] - matchB[0];
};

const order = words => words.split(' ').sort(sortString).join(' ');

const orderConcise = words => words.split(' ').sort((a,b) => a.match(/\d/) - b.match(/\d/)).join(' ');

console.log(orderConcise('is2 Thi1s T4est 3a'));
console.log(orderConcise('4of Fo1r pe6ople g3ood th5e the2'));
