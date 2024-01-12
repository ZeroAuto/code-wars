const isAnagram = (test, original) => {
  const testArr = test.toUpperCase().split('').sort();
  const orgArr = original.toUpperCase().split('').sort();
  return JSON.stringify(testArr) == JSON.stringify(orgArr);
};

console.log(isAnagram('foefet', 'toffee'));

