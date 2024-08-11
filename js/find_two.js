// find two numbers in an array that add up to a target number


const findTwo = (arr, target) => {
  const seen = new Map();

  for (let i = 0; i < arr.length; i++) {
    const compliment = target - arr[i];

    if (seen.has(compliment)) {
      return [compliment, arr[i]];
    }

    seen.set(arr[i], i);
  }
};


let result = findTwo([2, 7, 11, 15], 9);
console.log(result); // [2, 7]

// Test case 2: No pairs add up to target
result = findTwo([1, 2, 3, 4], 8);
console.log(result); // null

// Test case 3: Multiple pairs possible
result = findTwo([3, 2, 4, 3], 6);
console.log(result); // [3, 3] (or another valid pair)

// Test case 4: Negative numbers
result = findTwo([-1, -2, -3, -4], -6);
console.log(result); // [-2, -4]

// Test case 5: Single element array
result = findTwo([1], 1);
console.log(result); // null

// Test case 6: Empty array
result = findTwo([], 1);
console.log(result); // null

// Test case 7: Zeroes in array
result = findTwo([0, 0, 3, 4], 0);
console.log(result); // [0, 0]

// Test case 8: Large numbers
result = findTwo([1000000, 500000, 3000000, 7000000], 8000000);
console.log(result); // [1000000, 7000000]
