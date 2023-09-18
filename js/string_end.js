const solution = (str, end) => {
  const diff = str.length - end.length;
  for (let i = end.length - 1; i >=0; i--) {
    if (end.charAt(i) !== str.charAt(i + diff)) {
      return false;
    }
  }
  return true
};

const solutionEndsWith = (str, ending) => str.endsWith(ending);

const solutionSubstr = (str, end) => str.substr(-end.length) === end;

console.log(solutionSubstr('abcde', 'cde')); // true
console.log(solutionSubstr('abcde', 'abc')); // false
