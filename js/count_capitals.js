const countCapsReplace = str => str.length - str.replace(/[A-Z]/g, '').length;

console.log(countCapsReplace('STstst'));
