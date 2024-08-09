const words = ["apple", "apricot", "grape", "plum", "peach", "orange", "strawberry"]

const autoComplete = str => {
    result = [];
    for (word of words) {
        if (word.slice(0, str.length) === str.toLowerCase()) {
          result.push(word);
        }
    }
    return result;
};

console.log(autoComplete('ap'));
console.log(autoComplete('pl'));
console.log(autoComplete('za'));
console.log(autoComplete('Gr'));
console.log(autoComplete('app'));
