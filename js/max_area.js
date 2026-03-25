/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
  let leftIdx = 0;
  let rightIdx = height.length - 1;
  let maxArea;

  while (leftIdx < rightIdx) {
    const width = rightIdx - leftIdx;
    const minHeight = Math.min(height[leftIdx], height[rightIdx]);
    const currentArea = width * minHeight;
    maxArea = Math.max(currentArea, maxArea);

    if (height[leftIdx] < height[rightIdx]) {
      leftIdx++;
    } else {
      rightIdx--;
    }
  };

  return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1]))
