// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true

const climbingLeaderboard = (ranked, player) => {
  const uniqueRanks = [...new Set(ranked)];
    
  let result = [];
  let i = uniqueRanks.length - 1;
  
  player.forEach(score => {
    while (i >= 0 && score >= uniqueRanks[i]) {
      i--;
    }
    result.push(i + 2); // Rank is one more than the index
  });
  
  return result;
};

console.log(climbingLeaderboard([100,90,90,80], [70, 80 ,105]));
console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]))
