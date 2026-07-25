const mergeVideoClips = intervals => intervals.reduce((acc, cur) => {
  const last = acc[acc.length - 1];
  if (!last || cur[0] > last[1]) acc.push(cur);
  if (!!last && cur[0] <= last[1]) last[1] = Math.max(last[1], cur[1]);
  // if (acc.length == 0) {
  //   acc.push(cur);
  // } else {
  //   if (cur[0] <= last[1]) {
  //     last[1] = cur[1];
  //   } else {
  //     acc.push(cur);
  //   }
  // }

  return acc;
}, []);

// Test 1: Overlapping clips
console.log(mergeVideoClips([[1, 3], [2, 6], [8, 10], [15, 18]]));
// Expected: [[1, 6], [8, 10], [15, 18]]

// Test 2: Touching boundaries and unsorted
console.log(mergeVideoClips([[7, 9], [1, 3], [4, 7], [2, 4]]));
// Expected: [[1, 9]]

// Test 3: Empty and single input
console.log(mergeVideoClips([]));
// Expected: []

console.log(mergeVideoClips([[5, 10]]));
// Expected: [[5, 10]]
