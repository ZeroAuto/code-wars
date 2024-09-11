// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

const rowWeights = arr => {
  return arr.reduce((acc, cur, idx) => {
    if (idx % 2 === 0) acc[0] += cur;
    if (idx % 2 !== 0) acc[1] += cur;
    return acc;
  }, [0, 0]);
};

console.log(rowWeights([80])) // [80, 0]
console.log(rowWeights([100,50])); // [100, 50]
console.log(rowWeights([50,60,70,80])); // [120, 140]
console.log(rowWeights([13,27,49])); // [62, 27]
console.log(rowWeights([70,58,75,34,91])); // [236, 92]
