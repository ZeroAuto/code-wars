const xor = (a,b) => {
  if (a && b) return false;
  return a || b;
}

const xorOnline = (a,b) => (a || b) && !(a && b);
const xorOnlineAlt = (a,b) => a != b;

console.log(xor(false, false)); // false
console.log(xor(true, false)); // true
console.log(xor(false, true)); // true
console.log(xor(true, true)); // false
