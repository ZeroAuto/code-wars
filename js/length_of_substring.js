// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = s => {
  let maxLength = 0;
  let start = 0;
  let seenChars = new Map();

  for (let end = 0; end < s.length; end++) {
      let char = s[end];
      if (seenChars.has(char)) {
          start = Math.max(seenChars.get(char) + 1, start);
      }
      seenChars.set(char, end);
      maxLength = Math.max(maxLength, end - start + 1);
      console.log(seenChars);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring('dvdf')); // 3


// for (word of 'string') {
//   console.log(word);
// }
