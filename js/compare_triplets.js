// https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true
const compareTriplets = (a,b) => {
  let scoreA = 0;
  let scoreB = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) scoreA++;
    if (a[i] < b[i]) scoreB++;
  }
  return [scoreA, scoreB];
};

console.log(compareTriplets([1,2,3],[3,2,1])); // [1,1]
