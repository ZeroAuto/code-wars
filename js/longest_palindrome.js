// https://leetcode.com/problems/longest-palindromic-substring/submissions/1340270220/

/**
 * @param {string} str
 * @return {string}
 */


const longestPalindrome = str => {
  if (str.length <= 1) return str;
  
  let maxLength = 1;
  let start = 0;

  const findPalindrome = (left, right) => {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }

    if (maxLength < right - left - 1) {
      start = left + 1;
      maxLength = right - left - 1;
    }
  }

  for (i = 0; i < str.length; i++) {
    findPalindrome(i, i);
    findPalindrome(i, i + 1);
  }

  return str.substring(start, start + maxLength);
};

console.log(longestPalindrome('babad')); // bab
console.log(longestPalindrome('cbbd')); // bb

