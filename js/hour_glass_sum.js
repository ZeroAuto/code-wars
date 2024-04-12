// https://www.hackerrank.com/challenges/2d-array/problem
const hourglassSum = arr => {
  let max = -63;
  let height = arr.length;
  let width = arr[0].length;
  for (let i = 0; i < height - 2; i++) {
    for (let j = 0; j < width - 2; j++) {
      const sum = arr[i][j] +
      arr[i][j + 1] +
      arr[i][j + 2] +
      arr[i + 1][j + 1] +
      arr[i + 2][j] +
      arr[i + 2][j + 1] +
      arr[i + 2][j + 2];
      max = max < sum ? sum: max;
    }
  }
  return max;
}

let matrix = [
  [1, 2, 3, 0, 0],
  [0, 0, 0, 0, 0],
  [2, 1, 4, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 0]
];

const matrix2 = [
  [-9,-9,-9,1,1,1],
  [0,-9,0,4,3,2],
  [-9,-9,-9,1,2,3],
  [0,0,8,6,6,0],
  [0,0,0,-2,0,0],
  [0,0,1,2,4,0],
]

console.log(hourglassSum(matrix));
console.log(hourglassSum(matrix2));
