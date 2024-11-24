// https://www.codewars.com/kata/57a4d500e298a7952100035d/javascript

const twoSort = arr => arr.reduce((a,b) => (a < b ? a : b)).split('').join('***');
