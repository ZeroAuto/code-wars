const solution = list => {
  let results = [];
  let range_start;
  let range_end;

  list.forEach((n, i, arr) => {
    if (i === 0 || arr[i - 1] < n - 1) {
      range_start = n;
    }

    if (i === arr.length - 1 || arr[i + 1] > n + 1) {
      range_end = n;
      if (range_end === range_start) {
        results.push(range_start.toString());
      } else if (range_end > range_start + 1) {
        results.push(`${range_start}-${range_end}`);
      } else {
        results.push(range_start.toString());
        results.push(range_end.toString());
      }
    }
  });

  return results.join(',')
}

// use reduce
const solutionWithReduce =  list => list.reduce((total,currentValue,currentIdx) => {
  if (currentIdx==0) return currentValue.toString();
  if (list[currentIdx-1] == currentValue-1 && list[currentIdx+1] == currentValue+1) return total;
  if (list[currentIdx-2] == currentValue-2 && list[currentIdx-1] == currentValue-1) return total+"-"+currentValue;
  return total+","+currentValue;
});

console.log(solutionWithReduce([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
