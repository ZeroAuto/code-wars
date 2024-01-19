// https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript
const nameShuffler = name => {
  const arr = name.split(' ');
  arr.unshift(arr.pop());
  return arr.join(' ');
}

const nameShufferOnline = str => str.split(' ').reverse().join(' ');
