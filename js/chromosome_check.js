// https://www.codewars.com/kata/56530b444e831334c0000020/solutions/javascript
const chromosomeCheck = sperm => {
  const sex = sperm == 'XY' ? 'son' : 'daughter';
  return `Congratulations! You're going to have a ${sex}`;
}
