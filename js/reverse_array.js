const reverse_array = arr => {
  let result = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    result.push(arr[index]);
  }
  return result;
};

const reverse_array_unshift = arr => {
  let result = [];
  arr.forEach((x) => {
    result.unshift(x);
  });
  return result;
};

const reverse_array_temp_swap = arr => {
  let left;
  let right;
  let length = arr.length;
  for (left = 0; left < length / 2; left += 1) {
    right = length - 1 - left;
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
  return arr;
};

const reverse_array_xor_swap = arr => {
  let i;
  let r;
  let length = arr.length;
  for (i = 0, r = length - 1; i < r; i += 1, r -= 1) {
    let left = arr[i];
    let right = arr[r];
    left ^= right;
    right ^= left;
    left ^= right;
    arr[i] = left;
    arr[r] = right;
  }
  return arr;
};

console.log(reverse_array_xor_swap([1,2,3]));
console.log(reverse_array_xor_swap([3,2,1]));
