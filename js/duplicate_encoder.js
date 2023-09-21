const duplicateEncode = word => {
  const charObj = {};
  let result = '';
  word.split('').forEach(l => {
    const letter = l.toLowerCase();
    if (charObj.hasOwnProperty(letter)) {
      charObj[letter] += 1;
    } else {
      charObj[letter] = 1;
    }
  });
  word.split('').forEach(l => {
    const letter = l.toLowerCase();
    if (charObj[letter] > 1) {
      result += ')';
    } else {
      result += '(';
    }
  });
  return result;
};

const duplicateEncodeIndexOf = word => {
  return word
    .toLowerCase()
    .split('')
    .map(function(a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
};

const duplicateEncodeRegex = word => {
  word = word.toLowerCase();
  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}

console.log(duplicateEncode('din')); // (((
console.log(duplicateEncode('receded')); // ()()()
console.log(duplicateEncode('Success'));
console.log(duplicateEncode('(( @'));
