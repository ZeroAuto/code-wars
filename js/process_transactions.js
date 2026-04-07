const processTransactions = (transactions) => {
  const result = {};
  const seenIds = new Set();
  for (const txn of transactions) {
    // skip transaction if we have seen it already
    if (seenIds.has(txn.id)) continue;

    const { userId, amount, type } = txn;

    // initial balance in the result if it doesn't exist already
    if (!result[userId]) {
      result[userId] = 0;
    }

    // adjust balance
    type === 'credit' ? result[userId] += amount : result[userId] -= amount;

    // add id to seenIds set
    seenIds.add(txn.id);
  }

  return result
};

const txns = [
  { id: 1, userId: "A", amount: 100, type: "credit" },
  { id: 2, userId: "B", amount: 50, type: "credit" },
  { id: 1, userId: "A", amount: 100, type: "credit" }, // Duplicate ID
  { id: 3, userId: "A", amount: 20, type: "debit" }
];

console.log(processTransactions(txns));
// Expected Output: { "A": 80, "B": 50 }
