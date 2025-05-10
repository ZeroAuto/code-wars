// https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4/train/javascript

const isPrime = num => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

const gap = (g, m, n) => {
  let lastPrime = null;
  for (let i = m; i <= n; i++) {
    if (i % 2 === 0 || !isPrime(i)) continue;
    if (lastPrime !== null && i - lastPrime === g) return [lastPrime, i];
    lastPrime = i;
  }
  return null
}

console.log(gap(2, 100, 110));
console.log(gap(4, 100, 110));
console.log(gap(6, 100, 110));
