/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const groups = new Map();
  const result = [];

  for (const word of strs) {
    const mapKey = word.split('').sort().join();

    if (groups.has(mapKey)) {
      const arr = groups.get(mapKey);
      arr.push(word);
    } else {
      groups.set(mapKey, [word]);
    }
  }

  for (const [_, value] of groups) {
    result.push(value);
  }

  // return result;
  return Array.from(groups.values())
};

// Dummy Data
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words));
