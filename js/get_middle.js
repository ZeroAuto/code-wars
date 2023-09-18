const getMiddle = (s) => {
  // check if strength length is even or odd
  if (s.length % 2 === 0) {
    // use slice
    const start = (s.length / 2) - 1;
    const end = (s.length / 2) + 1;
    return s.slice(start, end);
  } else {
    // get index of middle
    const mIdx = Math.floor(s.length/2);
    return s.charAt(mIdx);
  }
};

const getMiddleSubstr = s => s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);

console.log(getMiddleSubstr('blah')); // 'la'
console.log(getMiddleSubstr('asdfg')); // 'd'
console.log(getMiddleSubstr('middle')); // 'dd' noice
