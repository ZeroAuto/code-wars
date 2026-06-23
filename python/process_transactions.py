from collections import defaultdict

txns2 = [
    {"id": 1, "user_id": "A", "amount": 100,
        "type": "credit", "timestamp": 1712520000000},
    {"id": 2, "user_id": "B", "amount": 50,
        "type": "credit", "timestamp": 1712520060000},
    {"id": 1, "user_id": "A", "amount": 120, "type": "credit",
        "timestamp": 1712520120000},  # Newer duplicate ID 1
    {"id": 3, "user_id": "A", "amount": 20,
        "type": "debit", "timestamp": 1712520180000},
    {"id": 4, "user_id": "C", "amount": 1000,
        "type": "credit", "timestamp": 1712520240000},
    {"id": 5, "user_id": "B", "amount": 25,
        "type": "debit", "timestamp": 1712520300000},
    {"id": 6, "user_id": "A", "amount": 50,
        "type": "credit", "timestamp": 1712520360000},
    {"id": 4, "user_id": "C", "amount": 1000, "type": "credit",
        "timestamp": 1712520000000},  # Older duplicate ID 4
    {"id": 7, "user_id": "C", "amount": 150,
        "type": "debit", "timestamp": 1712520480000},
    {"id": 8, "user_id": "D", "amount": 300,
        "type": "credit", "timestamp": 1712520540000}
]


def reconcile_txn(txn1, txn2):
    time1, amount1, type1 = txn1['timestamp'], txn1['amount'], txn1['type']
    time2, amount2, type2 = txn2['timestamp'], txn2['amount'], txn2['type']

    total_val1 = amount1 if type1 == 'credit' else -amount1
    total_val2 = amount2 if type2 == 'credit' else -amount2

    if time1 > time2:
        return total_val1 - total_val2
    else:
        return total_val2 - total_val1


def process_transactions(txns):
    result = defaultdict(int)
    seen_ids = {}

    for txn in txns:
        id, user_id = txn["id"], txn["user_id"]

        if id in seen_ids:
            diff = reconcile_txn(txn, seen_ids[id])
            result[user_id] += diff
        else:
            amount, txn_type = txn["amount"], txn["type"]

            if txn_type == 'credit':
                result[user_id] += amount
            else:
                result[user_id] -= amount

        seen_ids[id] = txn

    return result


print(process_transactions(txns2))
