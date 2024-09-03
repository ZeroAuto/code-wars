// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript

const decipherThis = str => {
  const arr = str.split(' ');

  const result = arr.map(word => {
    const strippedWord = word.replace(/\d+/g, '');
    const charNum = word.match(/\d+/g).map(Number)[0];
    return String.fromCharCode(charNum) + swapFirstAndLast(strippedWord);
  });

  return result.join(' ');
};

const swapFirstAndLast = str => {
  if (str.length <= 1) {
    return str;
  }

  return str.slice(-1) + str.slice(1, -1) + str[0];
}

console.log(deciperThis('72olle 103doo 100ya')); // Hello good day
