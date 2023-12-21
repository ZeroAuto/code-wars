const incrementString = str => {
  if (isNaN(parseInt(str[str.length - 1]))) return str + '1';
  return str.replace(/(0*)([0-9]+$)/, (match, p1, p2) => {
    const up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0,-1) + up : p1 + up;
  });
}

const incrementStringOneLine = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1);

const incrementStringOneLineConcise = s => s.replace(/[0-8]?9*$/, m => String(++m));

console.log(incrementStringOneLineConcise('foobar000'));
console.log(incrementStringOneLineConcise('foobar999'));
