// https://leetcode.com/problems/reverse-integer/

const reverse = x => {
  const str = x.toString();
  let result = x < 0 ? '-' : '';

  for (let i = str.length - 1; i >=0; i--) {
    result += str.charAt(i);
  }

  return parseInt(result);
};
