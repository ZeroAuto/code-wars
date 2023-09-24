const XO = str => {
  let x_total = 0;
  let o_total = 0;

  for (l of str) {
    if (l.toLowerCase() === 'x') x_total ++
    if (l.toLowerCase() === 'o') o_total ++
  }

  return x_total === o_total;
};

// use array filter
const filterXO = str => {
  arr = str.toLowerCase().split('');
  return arr.filter(l => l === 'x').length === arr.filter(l => l === 'o').length;
}

// use regex and replace
const replaceXO = str => str.replace(/x/gi, '').length === str.replace(/o/gi, '').length;

console.log(replaceXO('ooxx')); // true
console.log(replaceXO('xooxx')); // false
console.log(replaceXO('ooXxm')); // true
console.log(replaceXO('zpzpzpp')) // true
console.log(replaceXO('zzoo')) // false
