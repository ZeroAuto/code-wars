// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  let leftIdx = 0;
  let rightIdx = numbers.length - 1;

  while (leftIdx < rightIdx) {
    const sum = numbers[leftIdx] + numbers[rightIdx];
    if (sum === target) {
      return [leftIdx + 1, rightIdx + 1]
    } else if (sum < target) {
      leftIdx++;
    } else {
      rightIdx--;
    }
  }
};
