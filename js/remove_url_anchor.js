const removeUrlAnchor = url => url.split('#')[0];

const removeUrlAnchorRegex = url => url.replace(/#.*/gi, '');
const removeUrlAnchorRegexAlt = url => url.replace(/#.+$/, '');

console.log(removeUrlAnchor('www.blah.com#about')); // www.blah.com
console.log(removeUrlAnchorRegex('www.blab.com#blah'));
console.log(removeUrlAnchorRegexAlt('www.blab.com#blah'));

