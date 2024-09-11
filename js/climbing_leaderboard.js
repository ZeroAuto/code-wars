const getRank = (arr, score) => {
  let rank = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= score) break;
    if (i > 0 && arr[i - 1] > arr[i]) rank++;
  };
  return score < arr[arr.length - 1] ? rank + 1 : rank;
};

const climbingLeaderboard = (ranked, player) => {
  const result = [];
  for (score of player) {
    result.push(getRank(ranked, score));
  }
  return result;
};

console.log(climbingLeaderboard([100,90,90,80], [70, 80 ,105]));
console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]));
