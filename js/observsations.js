/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
const missingRolls = (rolls, mean, n) => {
  const totalLength = rolls.length + n;
  const sumMissing = (mean * totalLength) - rolls.reduce((acc, sum) => acc + sum);

  if (sumMissing > n * 6 || sumMissing < n) {
    return [];
  }

  const missingRolls = Array(n).fill(Math.floor(sumMissing / n));

  for (let i = 0; i < sumMissing % n; i++) {
      missingRolls[i] += 1;
  }

  return missingRolls;
};

console.log(missingRolls([3,2,4,3], 4, 2)); // [6,6]
console.log(missingRolls([1,5,6], 3, 4)); // [2,3,2,2]
console.log(missingRolls([1,2,3,4], 6, 4)); // []
