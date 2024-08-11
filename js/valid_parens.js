/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  const characters = { ')': '(', '}': '{', ']': '['};
  const stack = [];

  for (const char of s) {
    if (!characters[char]) {
      stack.push(char);
      console.log(stack);
    } else if (stack.pop() !== characters[char]) {
      return false;
      console.log(stack);
    }
  }
  return stack.length === 0;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false

console.log(isValid('{{(([]))}}')); // false``
console.log(isValid('{(){}}')); // false
