const number = busStops => {
  let total = 0
  for (stop of busStops) {
    total += stop[0];
    total -= stop[1];
  }
  return total;
};

const numberOneline = busStops => busStops.reduce((total, [on, off]) => total + on - off, 0);

console.log(numberOneline([[10,0],[3,5],[5,8]])); // 5
console.log(numberOneline([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])); // 17
console.log(numberOneline([[0,0]])); // 0
console.log(numberOneline([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])); //21
