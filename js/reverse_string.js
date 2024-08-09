const solution = str => {
  let result = "";

  for (let index = str.length - 1; index >= 0; index--) {
    result += str.charAt(index);
  }

  return result;
}

const reverseStringConcat = str => {
  let result = ''
  for (let char of str) {
    result = char.concat(result);
  }
  return result;
};

console.log(solution('blah')); // halb
console.log(solution('shitballs')); // sllabtihs

console.log(reverseStringConcat('abc'));
console.log(reverseStringConcat('balls'));
