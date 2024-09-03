/**
 * @param {string} s
 * @return {number}
 */

const isInt = (char) => {
  const regex = /^[0-9]$/;
  return regex.test(char);
}

const myAtoi = (s) => {
  // trim any whitespace
  const str = s.trim();
  let result = '';

  for (let i = 0; i < str.length - 1; i++) {
    const currentChar = str.charAt(i);
    if (
      isInt(currentChar) ||
        (i === 0 && currentChar === '-')
    ) {
      result += currentChar;
    } else {
      break;
    }
  }

  return result.length > 0 ? parseInt(result) : 0;
};

const var1 = myAtoi('42');
console.log(var1); 
const var2 = myAtoi('   -042');
console.log(var2);
const var3 = myAtoi('words and stuff 23462');
console.log(var3);
const var4 = myAtoi('1337c0d3')
console.log(var4);

console.log(parseInt('-042'));
