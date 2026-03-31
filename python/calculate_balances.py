transactions = [
    {"id": 1, "userId": "A12", "amount": 150.50, "type": "DEPOSIT"},
    {"id": 2, "userId": "B44", "amount": 20.00, "type": "WITHDRAWAL"},
    {"id": 3, "userId": "A12", "amount": 50.25, "type": "WITHDRAWAL"},
    {"id": 4, "userId": "C89", "amount": 300.00, "type": "DEPOSIT"},
    {"id": 5, "userId": "B44", "amount": 10.50, "type": "DEPOSIT"},
    {"id": 6, "userId": "A12", "amount": 10.00, "type": "DEPOSIT"}
]


def calculate_bookings(transations):
    result = {}

    for transaction in transactions:
        id = transaction["userId"]
        amount = transaction["amount"]
        t = transaction["type"]

        if id in result:
            if t == "DEPOSIT":
                result[id] = result[id] + amount
            else:
                result[id] = result[id] - amount
        else:
            if t == "DEPOSIT":
                result[id] = amount
            else:
                result[id] = -amount

    return result


print(calculate_bookings(transactions))
