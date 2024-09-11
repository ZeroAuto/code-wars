/**
 * @param {string} s
 * @return {string}
 */

const reverseWords = s => s.trim().split(/\s+/).reverse().join(' ');

console.log(reverseWords('  world  hello  '));
console.log(reverseWords('the     cat  sat on      the     mat'));
