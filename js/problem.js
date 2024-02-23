// https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/javascript
const problem = x => typeof x === 'string' ? 'Error' : (x*50) + 6;

console.log(problem('blah'));
console.log(problem(6));
