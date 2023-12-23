// const printerError = s => {
//   const errorCount = s.replace(/[a-m]/gi, '').length
//   return `${errorCount}/${s.length}`
// };

const printerError = s => `${s.replace(/[a-m]/gi, '').length}/${s.length}`

console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));
