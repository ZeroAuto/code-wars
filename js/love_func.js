const lovefunc = (flower1, flower2) => (flower1 + flower2) % 2 !== 0;

// 0 == false is truthy so you can just use a boolean here
const lovefuncbool = (flower1, flower2) => !!((flower1 + flower2) % 2);

console.log(lovefuncbool(4,4)); // false
console.log(lovefuncbool(3,4)); // true
console.log(lovefuncbool(1,4)); // true
console.log(lovefuncbool(0,1)); // true
console.log(lovefuncbool(0,0)); // false

