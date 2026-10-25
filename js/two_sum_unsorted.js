function twoSum(nums, target) {
  const values = new Map();

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    const c = target - n;

    if (values.has(c)) {
      return [values.get(c), i];
    }

    values.set(n, i);
  };

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6));        // Expected: [1, 2]
console.log(twoSum([3, 3], 6));           // Expected: [0, 1]
