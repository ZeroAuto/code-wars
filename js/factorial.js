// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
const factorial = n => {
  if (n < 0 || n > 12) throw new RangeError();
  return n === 0 ? 1 : n * factorial(n - 1);
}
