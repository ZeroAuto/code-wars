/**
 * PROBLEM: Calculate the final balance for each user.
 * * INPUT: An array of transaction objects.
 * OUTPUT: An object where keys are userIds and values are final balances.
 */

const transactions = [
  { id: 1, userId: "A12", amount: 150.50, type: "DEPOSIT" },
  { id: 2, userId: "B44", amount: 20.00, type: "WITHDRAWAL" },
  { id: 3, userId: "A12", amount: 50.25, type: "WITHDRAWAL" },
  { id: 4, userId: "C89", amount: 300.00, type: "DEPOSIT" },
  { id: 5, userId: "B44", amount: 10.50, type: "DEPOSIT" },
  { id: 6, userId: "A12", amount: 10.00, type: "DEPOSIT" }
];

function calculateBalances(data) {
  const balances = {};

  for (line of data) {
    let transactionAmount = line['amount'];
    if (!balances.hasOwnProperty(line['userId'])) {
      balances[line['userId']] = 0
    }
    if (line['type'] === 'WITHDRAWAL') transactionAmount = -transactionAmount;
    balances[line['userId']] = balances[line['userId']] += transactionAmount;
  }

  return balances;
}

// TEST
console.log("Final Balances:", calculateBalances(transactions));
/* Expected Output: 
{
  A12: 110.25,
  B44: -9.50,
  C89: 300.00
}
*/
