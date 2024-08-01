/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => x.toString().split('').reverse().join('') == x;


console.log(isPalindrome(131)); // true
console.log(isPalindrome(123)); // false
console.log(isPalindrome(-131)); //false
