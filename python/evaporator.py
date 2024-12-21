def evaporator(c, e, t):
    days = 0
    current = 100

    while current > t:
        current -= current * (e / 100)
        days += 1

    return days
