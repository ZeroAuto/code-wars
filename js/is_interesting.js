const isInteresting = (number, awesomePhrases) => {
  let result = 0;
  const range = [number, number + 1, number + 2];
  if (number > 97) {
    const calculateResult = n => {
      if (result != 2) {
        result = n === range[0] ? 2 : 1;
      }
    };

    if (awesomePhrases.length > 0) {
      awesomePhrases.forEach(phrase => {
        if (range.includes(phrase)) {
          calculateResult(phrase);
        }
      });
    }
    
    if (result === 2) {
      return result;
    }

    const isReveresed = num => {
      const string = String(num);

      if (string.length > 2) {
        return num == string.split('').reverse().join('');
      }

      return false;
    };

    const endsWithZeros = num => {
      const string = String(num);
      if (string.length > 2) {
        return string[string.length - 2] == '0' && string[string.length - 1] == '0';
      }
      return false
    }

    const isDecrementing = num => {
      const arr = String(num).split('').map(str => Number(str));
      if (arr.length > 2) {
        for (let i = 1; i < arr.length; i++) {
          if (arr[i - 1] - 1 !== arr[i]) {
            return false
          }
        }
      } else {
        return false;
      }
      return true;
    }

    const isIncrementing = num => {
      const str = num.toString();

      if (str.length > 2) {
        for (let i = 0; i < str.length - 1; i++) {
          const currentDigit = parseInt(str[i]);
          const nextDigit = parseInt(str[i + 1]);

          if (!(nextDigit === currentDigit + 1 || (currentDigit === 9 && nextDigit === 0))) {
            return false;
          }
        }
      } else {
        return false;
      }

      return true;
    }

    if (result != 2) {
      range.forEach(num => {
        if (isReveresed(num) || endsWithZeros(num) || isDecrementing(num) || isIncrementing(num)) {
          calculateResult(num);
        }
      });
    }
  }

  return result;
};

console.log(isInteresting(30, [])); // 0
console.log(isInteresting(98, [])); // 1
// const awesomePhrases = [1337, 256]
// console.log(isInteresting(11208, awesomePhrases)); // 0
// console.log(isInteresting(11209, awesomePhrases)); // 1
// console.log(isInteresting(11211, awesomePhrases)); // 2
// console.log(isInteresting(3, awesomePhrases)); // 0
// console.log(isInteresting(1335, awesomePhrases)); // 1
// console.log(isInteresting(1336, awesomePhrases)); // 1
// console.log(isInteresting(1337, awesomePhrases)); // 2
// console.log(isInteresting(256, awesomePhrases)); // 2
// console.log(isInteresting(2, [])); // 0
// console.log(isInteresting(1220, [])); // 1
// console.log(isInteresting(1223, [])); // 0
// console.log(isInteresting(1221, [])); // 2
// console.log(isInteresting(1000, [])); // 2
// console.log(isInteresting(998, [])); // 1
// console.log(isInteresting(1111, [])); // 2
// console.log(isInteresting(321, [])); // 2
// console.log(isInteresting(320, [])) // 1
// console.log(isInteresting(123, [])); // 2
// console.log(isInteresting(7890, [])); // 2
