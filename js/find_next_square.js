const findNextSquare = sq => {
  const sqRt = Math.sqrt(sq);
  return sqRt%1 === 0 ? (sqRt+1)**2 : -1;
}

console.log(findNextSquare(121)); // 144
console.log(findNextSquare(625)); // 676
console.log(findNextSquare(114)); // -1
