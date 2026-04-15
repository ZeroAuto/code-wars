require 'set'

def process_transactions(transactions)
  seen_ids = Set.new
  result = Hash.new(0)

  transactions.each do |txn|
    # skip transaction if we have seen it already
    if seen_ids.include? txn[:id]
      next
    end

    txn[:type] == :credit ? result[txn[:user_id]] += txn[:amount] : result[txn[:user_id]] -= txn[:amount]

    seen_ids.add(txn[:id])
  end
  result
end
#
# Hash.new(0) removes the need for if result.has_key becuase it makes the missing key 0 by default
# def process_transactions(transactions)
#   # there is a uniq method already
#   transactions.uniq { |t| t[:id] }.reduce(Hash.new(0)) do |acc, txn|
#     amount = (txn[:type] == :credit ? txn[:amount] : -txn[:amount])
#     acc[txn[:user_id]] += amount
#     acc
#   end
# end

txns = [
  { id: 1, user_id: "A", amount: 100, type: :credit },
  { id: 2, user_id: "B", amount: 50, type: :credit },
  { id: 1, user_id: "A", amount: 100, type: :credit }, # Duplicate ID
  { id: 3, user_id: "A", amount: 20, type: :debit }
]

txns2 = [
  { id: 1, user_id: "A", amount: 100, type: :credit, timestamp: 1712520000000 },
  { id: 2, user_id: "B", amount: 50, type: :credit, timestamp: 1712520060000 },
  { id: 1, user_id: "A", amount: 120, type: :credit, timestamp: 1712520120000 }, # Newer duplicate ID 1
  { id: 3, user_id: "A", amount: 20, type: :debit, timestamp: 1712520180000 },
  { id: 4, user_id: "C", amount: 1000, type: :credit, timestamp: 1712520240000 },
  { id: 5, user_id: "B", amount: 25, type: :debit, timestamp: 1712520300000 },
  { id: 6, user_id: "A", amount: 50, type: :credit, timestamp: 1712520360000 },
  { id: 4, user_id: "C", amount: 1000, type: :credit, timestamp: 1712520000000 }, # Older duplicate ID 4
  { id: 7, user_id: "C", amount: 150, type: :debit, timestamp: 1712520480000 },
  { id: 8, user_id: "D", amount: 300, type: :credit, timestamp: 1712520540000 }
]

def process_transactions_with_timestamps(transactions)
end

p process_transactions(txns)
# Expected Output: { "A" => 80, "B" => 50 }
