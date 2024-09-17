/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  const n = k % nums.length;
  nums.unshift(...nums.splice(nums.length - n));
  return nums
};


console.log(rotate([1,2,3,4,5,6,7], 3));
console.log(rotate([-1,-100,3,99], 2));

// this is the solution that worked but I found a slice solution that was more 
// performant
const rotateArrayInPlace = (arr, k) => {
  k = k % arr.length; // handle cases where k > array length

  reverse(arr, 0, arr.length - 1); // Step 1: reverse the whole array
  reverse(arr, 0, k - 1);          // Step 2: reverse the first k elements
  reverse(arr, k, arr.length - 1); // Step 3: reverse the rest of the array
}

const reverse = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]; // swap elements
    start++;
    end--;
  }
}

// why is this so much more efficient than mine?
const rotateEfficient = function(nums, k) {
  let n = nums.length;
  k = k % n; // Zredukuj k (reduce k)

  // Użyj wycinków (slice) i połącz (concat)
  // Uses slice and combine
  nums.unshift(...nums.splice(n - k, k));
};

// this one also uses unshift and is super efficient
const rotateEfficient2 = (nums, k) => {
  k = k%nums.length

  let s = nums.splice(nums.length-k,k)

  return nums.unshift(...s) //
}

// it must just be sampling error
