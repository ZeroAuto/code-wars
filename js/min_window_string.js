// https://coderbyte.com/editor/Min%20Window%20Substring:JavaScript
const minWindowString = strArr => {
  const containsSubstring = (str, subStr) => {
    for (let i = 0; i < str.length; i++) {
      if (subStr.indexOf(str[i]) !== -1) {
        subStr = subStr.replace(str[i], '');
      };
    };
    return (subStr.length === 0);
  }

  let result = null;
  for (let i = 0; i < strArr[0].length; i++) {
    for (let j = i; j < strArr[0].length; j++) {
      let testString = strArr[0].substr(i, j - i + 1);
      if (containsSubstring(testString, strArr[1])) {
        if (
          result === null ||
          testString.length < result.length
        ) {
          result = testString;
        }
      }
    }
  }
  return result;
}

console.log(minWindowString(['ahffaksfajeeubsne', 'jefaa'])); // aksfaje
console.log(minWindowString(['aaffhkksemckelloe', 'fhea'])); // affhkkse
