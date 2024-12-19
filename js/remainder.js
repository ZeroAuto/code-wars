// https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript

const remainder = (a,b) => {
  const smaller = Math.min(a,b);
  const larger = Math.max(a,b);

  if (smaller === 0) return NaN;

  return larger % smaller;
}

const remainderOneLine = (a,b) => a > b ? a % b : b % a;
