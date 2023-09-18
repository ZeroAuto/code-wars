const summation = n => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const simpleSummation = n => n * (n + 1) / 2;

console.log(simpleSummation(2)); // 3
console.log(simpleSummation(8)); // 36
console.log(simpleSummation(0));
