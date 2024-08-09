// https://www.codewars.com/kata/54e6533c92449cc251001667/solutions/javascript

const uniqueInOrder = iterable => [...iterable].filter((a, i) => a !== iterable[i-1]);
