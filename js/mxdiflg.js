// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

const mxdiflg = (a1, a2) => {
  if (a1.length === 0 || a2.length === 0) return -1
  const lengths1 = a1.map(word => word.length);
  const lengths2 = a2.map(word => word.length);
  return Math.max(
    Math.abs(Math.max(...lengths1) - Math.min(...lengths2)),
    Math.abs(Math.max(...lengths2) - Math.min(...lengths1))
  )
}

const s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

console.log(mxdiflg(s1, s2))
