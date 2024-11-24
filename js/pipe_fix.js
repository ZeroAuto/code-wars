// https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript

const pipeFix = arr => {
  const result = [];
  const beginning = arr[0];
  const end = arr[arr.length - 1];
  for (let i = beginning; i <= end; i++) {
    result.push(i);
  }

  return result;
};

console.log(pipeFix([1,3,4,7]));
console.log(pipeFix([4,6,8]));
console.log(pipeFix([-3,4]));
