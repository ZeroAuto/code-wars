const getSum = (a,b) => {
  let sum = 0;

  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
}

console.log(getSum(-1,2));
console.log(getSum(1,3));
