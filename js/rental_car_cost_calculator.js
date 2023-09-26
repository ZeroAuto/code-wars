const rentalCarCost = d => {
  let cost = d * 40;
  if (d >= 7) {
    cost -= 50
  } else if (d >= 3) {
    cost -= 20
  }
  return cost;
}

// so you can nest a ternary operator
const rentalCarCostOneline = d => d * 40 - (d >= 3 ? 50 : (d >= 20 ? : 0));
