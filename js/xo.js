const XO = str => {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
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
