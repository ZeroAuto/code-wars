// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

const minValue = values => {
  const newSet = new Set(values);
  const sortedSet = [...newSet].sort((a,b) => a - b);
  return parseInt(sortedSet.map(n => n.toString()).join(''));
}

console.log(minValue(minValue([1, 3, 1])));
console.log(minValue([4, 7, 5, 7]));
console.log(minValue([4, 8, 1, 4]));
console.log(minValue([5, 7, 9, 5, 7]));
