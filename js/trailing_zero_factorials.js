/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = (n) => {
  if (n === 0) return 0;
  let factorial = 1n;
  for (let i = BigInt(n); i > 1n; i--) {
    factorial *= i;
  }
  const match = factorial.toString().match(/0+$/);
  return match ? match[0].length : 0
}

console.log(trailingZeroes(3));
console.log(trailingZeroes(5));
console.log(trailingZeroes(7));
console.log(trailingZeroes(10));
console.log(trailingZeroes(30));
console.log(trailingZeroes(10000));
