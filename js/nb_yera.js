const nbYear = (p0, percent, aug, p) => {
  let totalPop = p0;
  let years = 0;
  while (totalPop < p) {
    totalPop += Math.floor(totalPop * percent / 100 + aug);
    years += 1;
  }
  return years;
}

console.log(nbYear(1500, 5, 100, 5000)) // 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)) // 10
console.log(nbYear(1500000, 0.25, 1000, 2000000)) // 94
console.log(nbYear(1000, 2.0, 50, 1214)) // 4
