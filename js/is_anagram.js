// const isAnagram = (test, original) => {
//   const testArr = test.toUpperCase().split('').sort();
//   const orgArr = original.toUpperCase().split('').sort();
//   return JSON.stringify(testArr) == JSON.stringify(orgArr);
// };

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const counts = {};

  for (let char of s) {
    if (counts.hasOwnProperty(char)) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
    }
  }

  for (let char of t) {
    if (counts.hasOwnProperty(char)) {
      counts[char] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car"));         // Expected: false
console.log(isAnagram("a", "ab"));              // Expected: false
