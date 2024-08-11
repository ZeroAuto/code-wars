// https://leetcode.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows === 1) return s;
  const result = Array(numRows).fill('');
  let activeIndex = 0;
  let down = false;

  for (let i = 0; i < s.length; i++) {
    result[activeIndex] += s.charAt(i);

    if (activeIndex === 0) down = true;
    if (activeIndex === numRows - 1) down = false;

    if (down) activeIndex ++;
    if (!down) activeIndex --;
  }
  return result.join('');
};

console.log(convert('paypalishiring', 3));
console.log(convert('paypalishiring' ,4));
console.log(convert('AB', 1));
