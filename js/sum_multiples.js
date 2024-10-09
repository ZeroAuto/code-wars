const sumMul = (n,m) => {
  if (n >= m) return 'INVALID';
  let x = n;

  const arr = [];

  while (n < m) {
    arr.push(n);
    n += x;
  }

  return arr.reduce((acc, sum) => acc + sum, 0);
};

console.log(sumMul(0,0)); // INVALID
console.log(sumMul(2,9)); // 20
console.log(sumMul(4,-7)); // INVALID
console.log(sumMul(3,13)); // 30
