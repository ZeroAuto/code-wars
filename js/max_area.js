/**
 * @param {number[]} height
 * @return {number}
 */
const  maxArea = height => {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
      const area = Math.min(height[left], height[right]) * (right - left);
      maxArea = Math.max(maxArea, area);

      if (height[left] > height[right]) {
        right--;
      } else {
        left++;
      }
    }

    return maxArea;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1]))
