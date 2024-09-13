const words = ["apple", "apricot", "grape", "plum", "peach", "orange", "strawberry"]

const autoComplete = str => words.filter(word => word.slice(0, str.length) === str.toLowerCase());

console.log(autoComplete('ap'));
console.log(autoComplete('pl'));
console.log(autoComplete('za'));
console.log(autoComplete('Gr'));
console.log(autoComplete('app'));
