const doubleChar = str => {
  let result = '';
  for (let index = 0; index < str.length; index++) {
    const char = str.charAt(index);
    result = result + char + char;
  }
  return result;
};

const doubleCharMap = str => str.split('').map(char => char + char).join('');

const doubleCharRegex = str => str.replace(/(.)/g, '$1$1');

console.log(doubleCharRegex('String'));
console.log(doubleCharRegex('Hello World'));
