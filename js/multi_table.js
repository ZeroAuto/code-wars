// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript

const multiTable = num => Array.from({ length: 10 }, (_, i) => `${i + 1} * ${num} = ${(i + 1) * num}`).join('\n');

const multiTableMap = num => [...Array(10)].map((_, i) => `${i + 1} * ${num} = ${(i + 1) * num}`).join('\n');
