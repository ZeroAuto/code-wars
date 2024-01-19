// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
const points = (games) => {
  let result = 0;
  games.forEach(element => {
    const tup = element.split(':');
    if (tup[0] > tup[1]) {
      result += 3
    } else if (tup[0] === tup[1]) {
      result += 1
    }
  });
  return result;
};

const pointsReduce = games => games.reduce((output, current) => {
  return output += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;
}, 0);
