function flattenArray(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  };

  return result;
};

console.log(flattenArray([1, [2, [3, [4]], 5]])); // Expected: [1, 2, 3, 4, 5]
console.log(flattenArray([1, 2, [3, 4]]));         // Expected: [1, 2, 3, 4]
console.log(flattenArray([]));                    // Expected: []
