function firstUniqChar(s) {
  const seenChars = new Map();

  for (let i = 0; i < s.length; i++) {
    if (seenChars.has(s[i])) {
      seenChars.set(s[i], 'nope');
    } else {
      seenChars.set(s[i], i);
    }
  };

  for (const [_, value] of seenChars) {
    if (value !== 'nope') {
      return value;
    }
  };

  return -1;
}

console.log(firstUniqChar("leetcode"));     // Expected: 0 (l)
console.log(firstUniqChar("loveleetcode")); // Expected: 2 (v)
console.log(firstUniqChar("aabb"));         // Expected: -1
