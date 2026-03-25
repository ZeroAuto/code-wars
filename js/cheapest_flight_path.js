const marchPrices = [120, 150, 450, 100, 95, 110, 300, 250, 180, 190, 210, 90, 85, 105];

function findCheapest(arr, k) {
  if (arr.length < k) return { startIndex: -1, total: 0 };
  let startIndex = 0;
  let total = 0
  for (i = 0; i < k; i++) {
    total += arr[i];
  }

  for (let i = 1; i < arr.length - 2; i++) {
    const tempSum = arr[i] + arr[i + 1] + arr[i + 2];
    if (tempSum < total) {
      startIndex = i;
      total = tempSum;
    }
  };

  return { startIndex, total };
};

// Expected Output: { startIndex: 11, total: 280 } 
// (90 + 85 + 105)
//
console.log(findCheapest(marchPrices, 3));
