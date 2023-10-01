const permutations = (string) => {
  if (string.length === 1) return [string];

  let result = [];

  for (let i = 0; i < string.length; i++){
    let char = string[i];

    if (string.indexOf(char) != i) continue;

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);

    for (let permutation of permutations(remainingChars)){
      result.push(char + permutation)
    }
  }

  return result
};

console.log(permutations('a')); // ['a']
console.log(permutations('ab')); // ['ab', 'ba'];
console.log(permutations('abc')); // ['abc','acb','bac','bca','cab','cba']
console.log(permutations('aabb')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
console.log(permutations('abcd'));
