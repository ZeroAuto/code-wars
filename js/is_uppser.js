// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/solutions/javascript
String.prototype.isUpperCase = function() {
  return this.valueOf().toUpperCase() === this.valueOf();
}

console.log("blah".isUpperCase());
console.log('HFHFHFH'.isUpperCase());
