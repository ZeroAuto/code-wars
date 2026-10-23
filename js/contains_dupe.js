function containsDuplicate(nums) {
  const numSet = new Set(nums);
  return !(numSet.size === nums.length);
}

console.log(containsDuplicate([1, 2, 3, 1]));    // Expected: true
console.log(containsDuplicate([1, 2, 3, 4]));    // Expected: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Expected: true
