// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  let winner;
  if (p1 === 'scissors') {
    winner = p2 === 'paper' ? 1 : 2;
  }
  if (p1 === 'rock') {
    winner = p2 === 'scissors' ? 1 : 2;
  }
  if (p1 === 'paper') {
    winner = p2 === 'rock' ? 1 : 2;
  }
  return `Player ${winner} won!`;
};

// using an object map makes it more concise
const rpsMap = (p1, p2) => {
  if (p1 === p2) return 'Draw!';
  const map = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock',
  }
  return `Player ${map[p1] === p2 ? 1: 2} won!`;
}
