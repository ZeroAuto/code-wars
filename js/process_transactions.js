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

const reconcileTxn = (txn1, txn2) => {
  const { timestamp: time1, amount: amount1, type: type1 } = txn1;
  const { timestamp: time2, amount: amount2, type: type2 } = txn2;
  const totalVal1 = type1 === 'credit' ? amount1 : -amount1;
  const totalVal2 = type2 === 'credit' ? amount2 : -amount2;

  return time1 > time2 ? totalVal1 - totalVal2 : totalVal2 - totalVal1;
};

const txns = [
  { id: 1, userId: "A", amount: 100, type: "credit", timestamp: 1712520000000 },
  { id: 2, userId: "B", amount: 50, type: "credit", timestamp: 1712520060000 },
  { id: 1, userId: "A", amount: 120, type: "credit", timestamp: 1712520120000 }, // Newer duplicate ID 1
  { id: 3, userId: "A", amount: 20, type: "debit", timestamp: 1712520180000 },
  { id: 4, userId: "C", amount: 1000, type: "credit", timestamp: 1712520240000 },
  { id: 5, userId: "B", amount: 25, type: "debit", timestamp: 1712520300000 },
  { id: 6, userId: "A", amount: 50, type: "credit", timestamp: 1712520360000 },
  { id: 4, userId: "C", amount: 1000, type: "credit", timestamp: 1712520000000 }, // Older duplicate ID 4
  { id: 7, userId: "C", amount: 150, type: "debit", timestamp: 1712520480000 },
  { id: 8, userId: "D", amount: 300, type: "credit", timestamp: 1712520540000 }
];

const processTransactionsWithTimestamps = transactions => {
  const result = {};
  const seenIds = new Map();

  for (const txn of transactions) {
    const { id, userId, amount, type } = txn;

    // initial balance in the result if it doesn't exist already
    if (!result[userId]) {
      result[userId] = 0;
    }

    // adjust balance
    if (seenIds.has(id)) {
      const diff = reconcileTxn(txn, seenIds.get(id));
      result[userId] += diff;
    } else {
      type === 'credit' ? result[userId] += amount : result[userId] -= amount;
    }

    // add id to seeIds or override existing id
    seenIds.set(id, txn);
  };

  return result;
};

console.log(processTransactionsWithTimestamps(txns));
