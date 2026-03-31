bookings = [
    {"id": 1, "type": "Flight A", "start": 9, "end": 11},
    {"id": 2, "type": "Hotel Check-in", "start": 10, "end": 14},
    {"id": 3, "type": "Lunch Meeting", "start": 13, "end": 15},
    {"id": 4, "type": "City Tour", "start": 16, "end": 18},
    {"id": 5, "type": "Dinner", "start": 17, "end": 20}
]


def find_conflicts(bookings):
    sorted_list = sorted(bookings, key=lambda x: x["start"])
    result = []

    for i in range(1, len(bookings)):
        prev = sorted_list[i - 1]
        curr = sorted_list[i]

        if curr["start"] > prev["end"]:
            result.append([i-1, i])

    return result


find_conflicts(bookings)
