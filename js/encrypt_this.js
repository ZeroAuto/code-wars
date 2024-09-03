// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

const encryptThis = text => {
  const arr = text.split(' ');

  return arr.map(word => {
    return word.charCodeAt(0) + swapFirstAndLast(word.slice(1));
  }).join(' ');
};

const swapFirstAndLast = str => {
  if (str.length <= 1) {
    return str;
  }

  return str.slice(-1) + str.slice(1, -1) + str[0];
}

console.log(encryptThis('A wise old owl lived in an oak'));

