const extraLongFactorials = n => {
  let result = 1n;
  for (let i = BigInt(n); i > 1n; i--) {
    result *= i;
  }
  console.log(result.toString());
}

// console.log(extraLongFactorials(30));
// console.log(extraLongFactorials(25));
extraLongFactorials(30);
extraLongFactorials(25);
