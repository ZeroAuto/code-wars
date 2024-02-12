// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
const isPalindrome = x => x.split('').reverse().join('').toLowerCase() === x.toLowerCase();

console.log(isPalindrome('racecar'));
console.log(isPalindrome('blah'));
