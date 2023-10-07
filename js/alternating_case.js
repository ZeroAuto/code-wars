String.prototype.toAlternatingCase = function() {
  let result = '';
  for (let i=0; i<this.length; i++) {
    const char = this.charAt(i);
    // check that char isn't an integer
    if (parseInt(char) != char) {
      // determine if char is lower case
      if (char.toLowerCase() === char) {
        result += char.toUpperCase();
      } else {
        result += char.toLowerCase();
      }
    } else {
      result += char;
    }
  }
  return result;
};

String.prototype.toAlternatingCaseOneline = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

// console.log('blah'.toAlternatingCase());

"blah".toAlternatingCase();
// console.log(parseInt('j') == 'j');
// console.log(parseInt('1') == 1);
console.log("hello world".toAlternatingCase());
console.log('HELLOW WORLD'.toAlternatingCase());
console.log('HeLlO WoRlD'.toAlternatingCase());
console.log('123455'.toAlternatingCase());
