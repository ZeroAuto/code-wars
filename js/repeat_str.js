const repeatStr = (n,s) => {
  let finalStr = '';
  for (let i = 0; i < n; i++) {
    finalStr += s;
  }
  return finalStr;
};

// apparently there is a built in function 
const rRepeatStr = (n,s) => s.repeat(n);

console.log(rRepeatStr(3, 'blah'));
console.log(rRepeatStr(4, 'str'));
