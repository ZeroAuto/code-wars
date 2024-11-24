// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

const smallEnough = (arr, limit) => {
  arr.sort();

  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] > limit) return false;
  }

  return true;
};

// could have used Math.max
const smallEnoughMath = (arr, limit) => {
  return Math.max(...arr) <= limit;
};
