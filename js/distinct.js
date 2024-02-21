const distinct = a => [...new Set(a)];

const distinctAlt = a => Array.from(new Set(a));

console.log(distinct([1]));
console.log(distinct([1,1,2]));
